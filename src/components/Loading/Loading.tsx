

export const Loading1 = () => {
  return (
    <div className='loading-wrap'>
      <div className="loading-area">
        <svg id="loading_svg" viewBox="0 0 841.9 595.3">
          <g>
            <path
              className="st0"
              d="M345.6,128.5L345.6,128.5c30.9,17.9,41.6,57.4,23.7,88.4L244.8,432.5c-17.9,30.9-57.4,41.6-88.4,23.7l0,0c-30.9-17.9-41.6-57.4-23.7-88.4l124.5-215.6C275.1,121.2,314.7,110.6,345.6,128.5z"
            />
            <path
              className="st1"
              d="M565.3,139.1L565.3,139.1c30.9,17.9,41.6,57.4,23.7,88.4L464.5,443.1c-17.9,30.9-57.4,41.6-88.4,23.7l0,0c-30.9-17.9-41.6-57.4-23.7-88.4l124.5-215.6C494.8,131.8,534.3,121.2,565.3,139.1z"
            />
            <path
              className="st2"
              d="M686.6,349.9L686.6,349.9c29.8,17.2,40.1,55.4,22.8,85.2l0,0c-17.2,29.8-55.4,40.1-85.2,22.8l0,0c-29.8-17.2-40.1-55.4-22.8-85.2l0,0C618.7,342.9,656.8,332.6,686.6,349.9z"
            />
          </g>
        </svg>
        <p>LOADING</p>
      </div>
    </div>
  );
};

export const Loading2 = () => {
  return (
    <div className='loading-wrap02'>
      <div className='spacecraft'>
        <span>🚀</span>
        <em>Loading...</em>
      </div>
      <div className='loading-dim'></div>
    </div>
  );
};
