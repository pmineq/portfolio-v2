# Portfolio v2

UX Frontend Engineer 박민혜의 포트폴리오 웹사이트입니다.

## Demo

[https://pmineq.github.io/portfolio-v2/](https://pmineq.github.io/portfolio-v2/)

## Tech Stack

- **Frontend**: React, TypeScript
- **Styling**: SCSS
- **Animation**: GSAP, Framer Motion, Three.js

## Features

- Three.js를 활용한 인터랙티브 3D 메인 페이지
- 반응형 디자인

## Project Structure

```
src/
├── assets/          # 이미지, 스타일
├── components/      # 공통 컴포넌트
├── pages/           # 페이지 컴포넌트
│   ├── Intro/       # 인트로 페이지
│   ├── Main/        # 메인 페이지 (Three.js)
│   ├── Contact/     # 연락처 페이지
│   └── project/     # 프로젝트 상세 페이지
└── models/          # 3D 모델 파일
```

## Getting Started

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm start

# 빌드
npm run build
```

## License

MIT
