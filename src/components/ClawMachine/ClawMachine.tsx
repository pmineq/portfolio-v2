import { useState, useRef, useCallback, useEffect } from 'react';
import { useClawGame } from './useClawGame';
import { useCapsuleCount } from './useCapsuleCount';
import capsuleImg from '../../assets/images/capsule.png';
import './ClawMachine.scss';

interface ClawMachineProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ClawMachine = ({ isOpen, onClose }: ClawMachineProps) => {
  const {
    clawX,
    clawY,
    phase,
    result,
    failMessage,
    isOpen: isClawOpen,
    capsules,
    caughtCapsule,
    startMove,
    stopMove,
    startCatch,
    resetGame,
    isPlaying,
  } = useClawGame();

  const { count, addCapsule, isAnimating, showFirstTimeHint } = useCapsuleCount();

  // PC 드래그 관련
  const modalRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });

  // 닫기 확인
  const handleClose = useCallback(() => {
    if (isPlaying) {
      if (window.confirm('진행 중인 판은 종료됩니다. 닫으시겠습니까?')) {
        resetGame();
        onClose();
      }
    } else {
      onClose();
    }
  }, [isPlaying, resetGame, onClose]);

  // 결과 처리
  useEffect(() => {
    if (result === 'success') {
      addCapsule();
    }
  }, [result, addCapsule]);

  // 드래그 시작
  const handleDragStart = useCallback((e: React.MouseEvent) => {
    if (window.innerWidth <= 768) return;

    setIsDragging(true);
    const rect = modalRef.current?.getBoundingClientRect();
    if (rect) {
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  }, []);

  // 드래그 중
  useEffect(() => {
    if (!isDragging) return;

    const handleMouseMove = (e: MouseEvent) => {
      setModalPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y,
      });
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  // 모바일 사이즈 변경 시 드래그 위치 초기화
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setModalPosition({ x: 0, y: 0 });
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // 다시 도전
  const handleRetry = useCallback(() => {
    resetGame();
  }, [resetGame]);

  if (!isOpen) return null;

  const modalStyle = modalPosition.x !== 0 || modalPosition.y !== 0
    ? { left: modalPosition.x, top: modalPosition.y, transform: 'none' }
    : {};

  return (
    <div className="claw-machine-overlay">
      <div
        ref={modalRef}
        className="claw-machine-modal"
        style={modalStyle}
      >
        {/* 헤더 */}
        <div
          className="claw-machine-header"
          onMouseDown={handleDragStart}
        >
          <h2>인형뽑기</h2>
          <button className="close-btn" onClick={handleClose} aria-label="닫기">
            ✕
          </button>
        </div>

        {/* 게임 영역 */}
        <div className="claw-machine-game">
          {/* 드롭존 표시 */}
          <div className="drop-zone">
            <span>DROP</span>
          </div>

          {/* 클로 */}
          <div
            className={`claw ${isClawOpen ? 'open' : 'closed'}`}
            style={{
              left: `${clawX}%`,
              top: `${clawY}%`,
            }}
          >
            <div className="claw-arm" />
            <div className="claw-hook">
              <span className="hook-left" />
              <span className="hook-right" />
            </div>
            {/* 잡힌 캡슐 */}
            {caughtCapsule && (
              <div className={`caught-capsule ${caughtCapsule.isPink ? 'pink' : 'gray'}`}>
                <img src={capsuleImg} alt="캡슐" />
              </div>
            )}
          </div>

          {/* 캡슐 영역 */}
          <div className="capsule-area">
            {capsules.map((capsule) => (
              <div
                key={capsule.id}
                className={`capsule ${capsule.isPink ? 'pink' : 'gray'} ${caughtCapsule?.id === capsule.id ? 'caught' : ''}`}
                style={{ left: `${capsule.x}%` }}
              >
                <img src={capsuleImg} alt={capsule.isPink ? '핑크 캡슐' : '회색 캡슐'} />
              </div>
            ))}
          </div>

          {/* 결과 오버레이 */}
          {phase === 'result' && (
            <div className={`result-overlay ${result}`}>
              <div className="result-content">
                <h3>{result === 'success' ? 'SUCCESS!' : 'OOPS...'}</h3>
                <p>
                  {result === 'success' ? (
                    <>
                      <img src={capsuleImg} alt="" className="result-capsule" />
                      <span> x 1 획득!</span>
                    </>
                  ) : (
                    failMessage
                  )}
                </p>
                <button className="retry-btn" onClick={handleRetry}>
                  다시 도전
                </button>
              </div>
            </div>
          )}
        </div>

        {/* 컨트롤 */}
        <div className="claw-machine-controls">
          <button
            className="control-btn left"
            onMouseDown={() => startMove('left')}
            onMouseUp={stopMove}
            onMouseLeave={stopMove}
            onTouchStart={() => startMove('left')}
            onTouchEnd={stopMove}
            disabled={phase !== 'idle'}
          >
            ◀
          </button>
          <button
            className="control-btn catch"
            onClick={startCatch}
            disabled={phase !== 'idle'}
          >
            CATCH
          </button>
          <button
            className="control-btn right"
            onMouseDown={() => startMove('right')}
            onMouseUp={stopMove}
            onMouseLeave={stopMove}
            onTouchStart={() => startMove('right')}
            onTouchEnd={stopMove}
            disabled={phase !== 'idle'}
          >
            ▶
          </button>
        </div>

        {/* HUD - 캡슐 카운트 */}
        <div className={`capsule-hud ${isAnimating ? 'animate' : ''}`}>
          <img src={capsuleImg} alt="캡슐" />
          <span>{count.toString().padStart(2, '0')}</span>
        </div>

        {/* 첫 성공 시 힌트 */}
        {showFirstTimeHint && (
          <div className="first-time-hint">
            Capsule은 브라우저에 저장됩니다.
          </div>
        )}
      </div>
    </div>
  );
};
