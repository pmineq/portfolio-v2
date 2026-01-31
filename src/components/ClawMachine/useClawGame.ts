import { useState, useCallback, useRef, useEffect } from 'react';

export type GamePhase = 'idle' | 'descending' | 'grabbing' | 'ascending' | 'moving-to-drop' | 'dropping' | 'result';
export type GameResult = 'success' | 'fail' | null;

export interface Capsule {
  id: number;
  x: number; // % 위치
  isPink: boolean;
}

const CLAW_MIN_X = 10;
const CLAW_MAX_X = 90;
const MOVE_SPEED = 2;
const CAPSULE_WIDTH = 12; // 캡슐 너비 (%)
const DROP_ZONE_X = 85; // 드롭존 X 위치 (%)

const FAIL_MESSAGES = [
  '아쉽네요! 핑크 캡슐을 노려보세요!',
  '거의 성공! 한 번 더 해볼까요?',
  '아깝다! 다음엔 꼭 성공할 거예요!',
  '회색 캡슐이었어요! 핑크를 찾아보세요!',
];

// 캡슐 배치 생성 (회색 4-5개 + 핑크 1개)
const generateCapsules = (): Capsule[] => {
  const capsules: Capsule[] = [];
  const positions = [15, 30, 45, 60, 75]; // 가능한 위치들

  // 핑크 캡슐 위치 랜덤 선택
  const pinkIndex = Math.floor(Math.random() * positions.length);

  positions.forEach((x, index) => {
    capsules.push({
      id: index,
      x: x + (Math.random() * 6 - 3), // ±3% 랜덤 오프셋
      isPink: index === pinkIndex,
    });
  });

  return capsules;
};

export const useClawGame = () => {
  const [clawX, setClawX] = useState(50); // 클로 X 위치 (%)
  const [clawY, setClawY] = useState(0); // 클로 Y 위치 (%)
  const [phase, setPhase] = useState<GamePhase>('idle');
  const [result, setResult] = useState<GameResult>(null);
  const [failMessage, setFailMessage] = useState('');
  const [isOpen, setIsOpen] = useState(true); // 집게 벌림 상태 (기본: 벌림)
  const [capsules, setCapsules] = useState<Capsule[]>(generateCapsules);
  const [caughtCapsule, setCaughtCapsule] = useState<Capsule | null>(null);

  const moveIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const animationRef = useRef<number | null>(null);

  // 이동 시작 (누르고 있는 동안)
  const startMove = useCallback((direction: 'left' | 'right') => {
    if (phase !== 'idle') return;

    const move = () => {
      setClawX((prev) => {
        const delta = direction === 'left' ? -MOVE_SPEED : MOVE_SPEED;
        return Math.max(CLAW_MIN_X, Math.min(CLAW_MAX_X, prev + delta));
      });
    };

    move(); // 즉시 한 번 이동
    moveIntervalRef.current = setInterval(move, 50);
  }, [phase]);

  // 이동 중지
  const stopMove = useCallback(() => {
    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current);
      moveIntervalRef.current = null;
    }
  }, []);

  // 잡기 시도
  const startCatch = useCallback(() => {
    if (phase !== 'idle') return;

    setPhase('descending');
    const startX = clawX;

    // 내려가기 애니메이션
    let y = 0;
    const descend = () => {
      y += 3;
      setClawY(y);

      if (y >= 65) {
        // 바닥 도달 - 집게 오므리기
        setPhase('grabbing');
        setIsOpen(false);

        // 캡슐 잡기 판정
        const caught = capsules.find(capsule => {
          const capsuleLeft = capsule.x - CAPSULE_WIDTH / 2;
          const capsuleRight = capsule.x + CAPSULE_WIDTH / 2;
          return startX >= capsuleLeft && startX <= capsuleRight;
        });

        if (caught) {
          setCaughtCapsule(caught);
        }

        // 잠시 후 올라가기
        setTimeout(() => {
          setPhase('ascending');

          const ascend = () => {
            y -= 3;
            setClawY(y);

            if (y <= 0) {
              setClawY(0);

              // 캡슐을 잡았으면 드롭존으로 이동
              if (caught) {
                setPhase('moving-to-drop');

                // 드롭존으로 이동 애니메이션
                let currentX = startX;
                const moveToDropZone = () => {
                  const diff = DROP_ZONE_X - currentX;
                  if (Math.abs(diff) > 2) {
                    currentX += diff > 0 ? 3 : -3;
                    setClawX(currentX);
                    animationRef.current = requestAnimationFrame(moveToDropZone);
                  } else {
                    setClawX(DROP_ZONE_X);
                    setPhase('dropping');

                    // 집게 벌려서 드롭
                    setTimeout(() => {
                      setIsOpen(true);
                      setCaughtCapsule(null);

                      // 결과 표시
                      setTimeout(() => {
                        if (caught.isPink) {
                          setResult('success');
                        } else {
                          setResult('fail');
                          setFailMessage(FAIL_MESSAGES[Math.floor(Math.random() * FAIL_MESSAGES.length)]);
                        }
                        setPhase('result');
                      }, 500);
                    }, 300);
                  }
                };

                animationRef.current = requestAnimationFrame(moveToDropZone);
              } else {
                // 못 잡았으면 바로 실패
                setIsOpen(true);
                setResult('fail');
                setFailMessage('빈 곳이었어요! 캡슐을 노려보세요!');
                setPhase('result');
              }
            } else {
              animationRef.current = requestAnimationFrame(ascend);
            }
          };

          animationRef.current = requestAnimationFrame(ascend);
        }, 400);
      } else {
        animationRef.current = requestAnimationFrame(descend);
      }
    };

    animationRef.current = requestAnimationFrame(descend);
  }, [phase, clawX, capsules]);

  // 게임 리셋
  const resetGame = useCallback(() => {
    setClawX(50);
    setClawY(0);
    setPhase('idle');
    setResult(null);
    setFailMessage('');
    setIsOpen(true);
    setCaughtCapsule(null);
    setCapsules(generateCapsules()); // 새로운 캡슐 배치

    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    if (moveIntervalRef.current) {
      clearInterval(moveIntervalRef.current);
    }
  }, []);

  // 클린업
  useEffect(() => {
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      if (moveIntervalRef.current) {
        clearInterval(moveIntervalRef.current);
      }
    };
  }, []);

  return {
    clawX,
    clawY,
    phase,
    result,
    failMessage,
    isOpen,
    capsules,
    caughtCapsule,
    startMove,
    stopMove,
    startCatch,
    resetGame,
    isPlaying: phase !== 'idle' && phase !== 'result',
  };
};