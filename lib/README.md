# lib

프로젝트 전역에서 쓰는 **유틸·설정·데이터**를 두는 디렉터리입니다.

## 역할

- 라우팅/UI에 필요한 **정적 설정**(프로젝트 키, 기술 목록, 소셜 링크 등)을 한곳에서 관리합니다.
- 번역 키와 매칭되는 ID·퍼센트·레벨 등을 정의해, 컴포넌트와 `messages/*.json`이 함께 동작하도록 합니다.

## 파일 목록

| 파일                | 설명                                                                                                                       |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| `portfolio-data.ts` | 기술 스택 설정(`technologyConfig`), 프로젝트 키 목록(`projectKeys`), 타임라인 키(`timelineKeys`), 소셜 링크·연락처 이메일. |
| `content.ts`        | (선택) 콘텐츠/MDX 등 읽어오는 로직이 있다면 여기에서 export.                                                               |

## portfolio-data.ts 요약

- **technologyConfig**: 기술 ID, 퍼센트, 레벨 키 → `Technologies`에서 바 표시 + `messages.technologies.items`와 매칭.
- **projectKeys**: 프로젝트 ID 배열 → `Projects`에서 카드 목록 + `messages.projects.items`와 매칭.
- **timelineKeys**: 타임라인 항목 ID → `AboutMe`에서 `messages.about.timeline`와 매칭.
- **socialLinks**, **contact**: 헤더/푸터 링크·이메일.
