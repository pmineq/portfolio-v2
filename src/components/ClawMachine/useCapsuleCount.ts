import { useState, useEffect, useCallback } from 'react';

const STORAGE_KEY = 'portfolio_capsule_count';

export const useCapsuleCount = () => {
  const [count, setCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [showFirstTimeHint, setShowFirstTimeHint] = useState(false);

  // localStorage에서 로드
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      setCount(parseInt(saved, 10));
    }
  }, []);

  // 캡슐 추가
  const addCapsule = useCallback(() => {
    setCount((prev) => {
      const newCount = prev + 1;
      localStorage.setItem(STORAGE_KEY, newCount.toString());

      // 첫 성공 시 힌트 표시
      if (prev === 0) {
        setShowFirstTimeHint(true);
        setTimeout(() => setShowFirstTimeHint(false), 3000);
      }

      return newCount;
    });

    // 카운트업 애니메이션
    setIsAnimating(true);
    setTimeout(() => setIsAnimating(false), 500);
  }, []);

  return {
    count,
    addCapsule,
    isAnimating,
    showFirstTimeHint,
  };
};
