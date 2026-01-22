import './GoalEffect.scss';

export const GoalEffect = () => {
  return (
    <div id="goal-effect" role="alert" aria-live="assertive" aria-label="골인 성공!">
      <div className="goal-text" aria-hidden="true">⚽ GOAL! ⚽</div>
      <div className="goal-particles" aria-hidden="true">
        <span>🎉</span>
        <span>✨</span>
        <span>🎊</span>
        <span>⭐</span>
        <span>🎉</span>
        <span>✨</span>
        <span>🎊</span>
        <span>⭐</span>
      </div>
    </div>
  );
};
