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

Node.js 22를 기준으로 설치·빌드합니다.

```bash
# 의존성 설치
npm ci

# 개발 서버 실행
npm start

# 빌드
npm run build
```

## Verification

```bash
npm run lint
npm test -- --watchAll=false
npx playwright install
npm run test:e2e
```

GitHub Actions에서 macOS와 Windows의 설치, 단위 테스트, 빌드, Chromium 회귀 테스트를 검사합니다.
로컬 브라우저 회귀 테스트는 Chromium, Firefox, WebKit을 대상으로 실행합니다.
React와 Three.js 타입은 런타임의 주요 버전에 맞추며, CRA의 오래된 TypeScript peer 범위는
`overrides`로 프로젝트의 TypeScript 버전에 맞춥니다.

## License

MIT
