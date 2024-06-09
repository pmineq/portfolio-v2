import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// 페이지 이동 시마다 스크롤 최상단
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;