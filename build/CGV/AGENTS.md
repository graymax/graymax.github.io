# CGV 펫 트레인 이벤트 페이지 - AI 에이전트 가이드

## 프로젝트 개요
단일 HTML 파일 기반 CGV 영화 이벤트 페이지 프로젝트. Swiper.js 슬라이더, 바닐라 JavaScript 애니메이션, 반응형 CSS가 포함되어 있습니다.

## 기술 스택
- **HTML/CSS**: 인라인 스타일 (단일 `<style>` 태그)
- **JavaScript**: 바닐라 JS (라이브러리: Swiper@11)
- **폰트**: Google Fonts (Anton SC, Black Han Sans), Pretendard
- **타겟 브라우저**: Chrome, Edge, Safari (최신 버전), 반응형 모바일 지원

## 프로젝트 구조
```
index.html          # 메인 HTML 파일 (구조, 스타일, 스크립트 모두 포함)
img_*.png           # 이벤트 페이지 이미지 자산
bg_section*.png     # 섹션 배경 이미지
swiper_*.svg        # 슬라이더 버튼 아이콘
```

## CSS 클래스 명명 규칙

### 구조적 클래스
- **섹션**: `section1`, `section2`, `section3`, `section4`
- **컨테이너**: `wrap-inner`, `event-wrap`, `contain-header`, `contain-pagination`
- **박스/그룹**: `box-title`, `box-script`, `box-image`, `info-wrap`, `info-image`, `info-link`, `info-icon`, `info-title`
- **리스트**: `items`, `item-title`, `item-data`
- **요소**: `swiper-slide`, `pagination-text`, `pagination-button`, `hashtag`, `text-sysnopsis`

### 상태 클래스
- `hide-header` - 헤더 숨김 상태
- `hide` - 요소 숨김 (opacity, pointer-events)
- `play` - 애니메이션/자동재생 진행 상태
- `stop` - 자동재생 정지 상태
- `active` - 활성 상태 (필요시 추가)

### 애니메이션
- `.animation-element` - 스크롤 애니메이션이 적용될 요소
  - 초기: `opacity: 0`, `transform: translateY(50px)`
  - 재생: 클래스 `.play` 추가 시 페이드-인 + 슬라이드-업 (0.8s ease-out)

## 주요 기능 및 코드 위치

### 1. 헤더 스크롤 감지 (스크립트 1번)
```javascript
// .wrap-inner 스크롤 방향 감지
// 아래 스크롤 시: .contain-header에 .hide-header 추가 (transform: translateY(-100%))
// 위 스크롤 시: .hide-header 제거
// 변수: lastScrollTop (이전 스크롤 위치)
```

### 2. Swiper 슬라이더 (스크립트 2번)
- **선택자**: `.movie-still`
- **슬라이드 수**: 5개 (img_temp1~5.png)
- **설정**: 루프 활성화, 자동재생 (3초 간격), 네비게이션 버튼 있음
- **페이지네이션**: 현재 슬라이드 표시 ("1/5" 형식)
- **버튼 제어**: 슬라이드 이동 중 네비게이션 버튼 숨김

### 3. 페이지네이션 토글 (스크립트 2번)
- **버튼**: `.pagination-button`
- **기능**: 클릭 시 자동재생 시작/중지
- **텍스트 변경**: "멈춤" ↔ "시작"
- **클래스 토글**: `.play` ↔ `.stop`

### 4. 스크롤 애니메이션 (스크립트 3번)
- **API**: Intersection Observer
- **대상**: `.animation-element` (모든 요소)
- **트리거**: 화면에 50% 이상 보일 때
- **동작**: 클래스 `.play` 추가 (한 번만 실행)

## 반응형 디자인
- **기본**: 모바일 우선 설계 (최대폭: 600px)
- **타블렛**: max-width 1120px에서 배경 이미지 제거
- **데스크톱**: max-width 1120px 초과 시 배경 이미지 표시

## 색상 및 주요 스타일
- **주색상**: #e50914 (CGV 빨강), #2b35ba (진한 파랑)
- **텍스트**: #3f3f3f (기본), #fff (흰색 텍스트)
- **배경**: #fff (본문), #2b35ba (section2, section4)
- **테두리**: border-radius 16px~20px (모서리 둥금)

## 주의사항 및 제약사항

### 수정 시 주의
1. **이미지 경로**: 모든 이미지는 상대 경로 사용 (예: `bg_section2.png`)
2. **Swiper 설정**: loopAdditionalSlides와 loopedSlides는 슬라이드 개수에 따라 조정 필요
3. **애니메이션 타이밍**: 0.8s, 3000ms 등 하드코딩된 값들은 일관성 있게 변경
4. **z-index**: `.contain-header`는 z-index 100으로 최상단 고정

### 접근성
- SVG에 `aria-hidden="true"` 사용 (장식용)
- 이미지 alt 텍스트 포함
- 개선 필요: 버튼 `aria-label`, 슬라이더 ARIA 역할 추가 권고

### 성능
- Swiper 루프 설정이 복잡함 (loopedSlides: 3, loopAdditionalSlides: 3)
- Intersection Observer는 효율적 구현
- 자동재생 delay 3000ms (변경 가능)

## AI 에이전트 지시사항

**기능 추가/수정 시:**
1. 클래스 명명 규칙 준수 (현재 규칙 유지)
2. 상태 클래스는 접두사 없이 `.play`, `.hide` 등 사용
3. 애니메이션은 `.animation-element`에 의존
4. JavaScript는 바닐라 JS 유지 (라이브러리 추가 금지)

**버그 수정 시:**
- 스크롤 이벤트: `.wrap-inner` 대상 (일반 window scroll 아님)
- Swiper 인스턴스: `.movie-still` 선택자로 접근
- 페이지네이션 계산: `(realIndex % 5) + 1` (슬라이드 5개 기준)

**스타일 수정 시:**
- CSS는 `<style>` 태그 내부에만 작성 (별도 파일 생성 금지)
- 미디어 쿼리 유지: 1120px, 600px 기준점
- 색상 일관성: #e50914 (빨강), #2b35ba (파랑), #3f3f3f (텍스트)
