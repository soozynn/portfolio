# i18n

**다국어(i18n)** 라우팅과 요청 설정을 정의하는 디렉터리입니다. `next-intl` 기준으로 동작합니다.

## 역할

- 지원 로케일·기본 로케일·경로 접두어를 한곳에서 관리합니다.
- 서버/미들웨어에서 사용할 로케일·메시지 설정을 제공합니다.
- Next.js 라우터를 감싼 `Link`, `useRouter` 등으로 locale을 유지한 이동을 가능하게 합니다.

## 파일 목록

| 파일 | 설명 |
|------|------|
| `routing.ts` | `defineRouting()`으로 locales(`en`, `ko`, `ja`, `zh`), `defaultLocale`, `localePrefix` 등 정의. |
| `request.ts` | `getRequestConfig()`에서 요청 로케일을 검증하고, 해당 로케일의 `messages/*.json`을 로드해 반환. |
| `navigation.ts` | `createNavigation(routing)`으로 `Link`, `redirect`, `usePathname`, `useRouter`, `getPathname` 내보냄. locale이 유지된 네비게이션용. |

## 연동

- **proxy.ts** (또는 middleware): `createMiddleware(routing)`으로 `/` → `/ko` 리다이렉트, locale 감지.
- **next.config.ts**: `createNextIntlPlugin('./i18n/request.ts')`로 플러그인 연결.
- **app/[locale]/layout.tsx**: `request.ts`에서 넘어온 메시지를 `NextIntlClientProvider`에 전달.
