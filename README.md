# Portfolio

프론트엔드 개발자 soozynn의 개인 포트폴리오 사이트입니다.

## 프로젝트 목적

- 이력·프로젝트·기술 스택을 한곳에서 소개
- 다국어(한국어, 영어, 일본어, 중국어) 지원으로 접근성 확대
- 반응형 UI로 모바일·데스크톱 모두 대응

## 기술 스택

| 구분 | 기술 |
|------|------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS 4 |
| i18n | next-intl |
| Animation | Framer Motion |

## 실행 방법

```bash
# 의존성 설치
pnpm install

# 개발 서버 실행
pnpm dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000) 접속 (기본 로케일: `/ko`).

```bash
# 프로덕션 빌드
pnpm build

# 프로덕션 서버 실행
pnpm start
```

## 프로젝트 구조

각 폴더의 세부 역할은 해당 폴더 안의 `README.md`를 참고하면 됩니다.

| 폴더 | 역할 |
|------|------|
| [**app/**](app/README.md) | Next.js App Router 루트. 루트 레이아웃, 전역 CSS, 라우팅의 출발점. |
| [**app/[locale]/**](app/[locale]/README.md) | 로케일별 라우트 (`/en`, `/ko`, `/ja`, `/zh`). 메인 페이지·로케일 레이아웃·next-intl Provider. |
| [**app/[locale]/companies/**](app/[locale]/companies/README.md) | 프로젝트 상세 페이지용 동적 라우트 (`[companyId]`). 추후 확장용. |
| [**components/**](components/README.md) | 공통 UI 컴포넌트 (Header, Hero, Projects, Technologies, AboutMe, Footer, LocaleSwitcher 등). |
| [**i18n/**](i18n/README.md) | 다국어 설정. 라우팅 정의, 요청 시 메시지 로드, locale 유지 네비게이션. |
| [**messages/**](messages/README.md) | 로케일별 번역 JSON (en, ko, ja, zh). 화면 문구 전부 여기서 관리. |
| [**lib/**](lib/README.md) | 유틸·설정. 프로젝트/기술/타임라인 키, 소셜 링크, 연락처 등. |
| [**public/**](public/README.md) | 정적 파일. 이력서 PDF, 이미지 등. URL 그대로 제공. |
| [**content/**](content/README.md) | 콘텐츠/관계 정의용. 추후 MDX·상세 데이터 확장 시 사용. |

```
portfolio/
├── app/                    # App Router 루트 (레이아웃, globals.css)
│   ├── [locale]/           # 로케일별 페이지·레이아웃
│   │   ├── companies/      # 프로젝트 상세 [companyId]
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   └── globals.css
├── components/             # 공통 UI 컴포넌트
├── i18n/                   # next-intl 라우팅·요청 설정
├── messages/               # en.json, ko.json, ja.json, zh.json
├── lib/                    # portfolio-data, 유틸
├── public/                 # resume.pdf, 정적 에셋
├── content/                # 콘텐츠 확장용
├── proxy.ts                # next-intl 미들웨어 (Next.js 16)
└── next.config.ts
```

## 배포

- **배포 링크**: [soozynn.github.io](https://soozynn.github.io) (GitHub Pages 등 배포 후 URL로 교체 가능)

Vercel, Netlify, GitHub Pages 등 정적/Node 호스팅에 배포할 수 있습니다.

```bash
pnpm build
# build 출력물(.next 또는 export)을 배포 플랫폼에 연결
```
