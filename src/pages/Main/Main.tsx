import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../../components/Layout';
import { GoalEffect, ClawMachine, Guide } from '../../components';
import MainJS from '../mainThree';

import '../../assets/scss/intro.scss';

const Main = () => {
  const [isClawMachineOpen, setIsClawMachineOpen] = useState(false);
  const [isGuideVisible, setIsGuideVisible] = useState(true);

  const handleGuideClose = useCallback(() => {
    setIsGuideVisible(false);
    // 전역 상태로 가이드 닫힘 알림 (mainThree.ts에서 참조)
    window.dispatchEvent(new CustomEvent('guideClose'));
  }, []);

  useEffect(() => {
    MainJS();
  }, []);

  return (
    <Layout header>
      <canvas id="three-canvas"></canvas>
      <GoalEffect />

      {isGuideVisible && <Guide onClose={handleGuideClose} />}

      <div className='btn-view'>
        <Link to='/project' aria-label='프로젝트 페이지로 이동'>우주선 타고 이동</Link>
      </div>

      <div className='btn-machine'>
        <button
          type='button'
          aria-label='인형뽑기 미니게임 열기'
          onClick={() => setIsClawMachineOpen(true)}
        >
          인형뽑기 미니게임
        </button>
      </div>

      <ClawMachine
        isOpen={isClawMachineOpen}
        onClose={() => setIsClawMachineOpen(false)}
      />

      <div className='floating-wrap'>
        <button
          type='button'
          className='btn-reset'
          aria-label='장면 초기화 및 시작 위치로 돌아가기'
        >
          새로고침
        </button>
      </div>
    </Layout>
  );
};

export default Main;
