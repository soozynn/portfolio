# app/[locale]

**로케일별** 라우트 세그먼트입니다. `next-intl`과 함께 사용하며, URL의 `/en`, `/ko`, `/ja`, `/zh`에 대응합니다.

## 역할

- 선택된 언어(로케일)에 맞는 레이아웃과 메시지를 제공합니다.
- `NextIntlClientProvider`로 하위 컴포넌트에 번역을 전달합니다.
- `generateStaticParams`로 각 로케일을 정적 생성합니다.

## 구조

| 파일/폴더 | 설명 |
|-----------|------|
| `layout.tsx` | 로케일 레이아웃. `NextIntlClientProvider`, `SetDocumentLocale`, 메시지 주입. |
| `page.tsx` | 메인 페이지. Hero, Projects, Technologies, AboutMe, Footer를 조합. |
| `companies/` | 프로젝트 상세 페이지용. `[companyId]` 동적 라우트 (추후 확장). |

## 동작

1. 사용자가 `/ko` 등으로 접속하면 `[locale]`에 `ko`가 들어갑니다.
2. `layout.tsx`에서 해당 로케일의 메시지를 로드하고 Provider로 감쌉니다.
3. `page.tsx`와 하위 컴포넌트에서 `useTranslations()`로 번역된 문구를 사용합니다.
