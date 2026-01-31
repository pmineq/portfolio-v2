import { useNavigate } from 'react-router-dom';

export const BackButton = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    // 프로젝트 목록으로 돌아가는 것임을 표시
    sessionStorage.setItem('isReturningToProject', 'true');
    navigate('/project');
  };

  return (
    <button className="back-button" onClick={handleBack} aria-label="목록으로 돌아가기">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span>목록으로</span>
    </button>
  );
};
