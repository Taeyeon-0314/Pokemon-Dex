# 포켓몬 도감 프로젝트

### 배포 주소 : https://pokemon-dex-ten.vercel.app/

## 기능 설명

- 대시보드 : 포켓몬 리스트에서 추가한 포켓몬들을 볼수있음
- 포켓몬 리스트 : 포켓몬 리스트를 확인 할 수 있음
- 포켓몬 상세 정보 : 선택한 포켓몬의 상세 정보를 볼수 있음
- Context API : React의 Context API를 사용하여 전역 상태를 관리하고, 포켓몬 데이터를 애플리케이션 전반에 제공함.
- 라우팅 : 홈, 포켓몬 상세 정보 , Dex등 다양한 뷰 간의 이동

## Component

- App.jsx : 애플리케이션 라우팅을 설정하는 루트 컴포넌트
- Dashboard.jsx : 포켓몬 리스트에 대한 개요를 보여주는 메인 대시보드
- PokemonList.jsx : 포켓몬 리스트를 보여주는 컴포넌트
- PokemonCard.jsx : 리스트에 각 포켓몬을 보여주는 카드 컴포넌트
- PokemonDetail.jsx : 선택한 포켓몬에 대한 상세 정보를 보여주는 컴포넌트
- PokemonPrvide.jsx : 포켓몬 데이터를 관리하고 애플리케이션 전반에 제공하는 컨포넌트 프로바이더
- GlobalStyle.jsx : 글로벌 CSS 스타일
- Home.jsx : 랜딩 페이지
- Dex.jsx : 포켓몬 데이터를 자세히 보여주는 뷰
- Detail.jsx : 포켓몬 상세 정보를 위한 세부 뷰 컴포넌트

## 폴더 구조

    •	src/
      •	components/: 애플리케이션에서 사용되는 모든 React 컴포넌트를 포함.
      •	css/: 글로벌 스타일 CSS 파일을 포함.
      •	context/: 포켓몬 데이터를 위한 컨텍스트 API 프로바이더를 포함.
      •	pages/: Home, Dex, Detail과 같은 페이지 컴포넌트를 포함.
    •	App.jsx: 라우팅 및 전체 구조를 설정하는 루트 컴포넌트.

## Git Commit Message Type

- feat : 새로운 기능 추가 또는 요구 사항을 충족하기 위해 기존 기능을 수정
- fix : 기능과 관련된 버그 수정
- build : 빌드 과정과 관련된 변경 사항
- chore : 패키지 매니저 또는 기타 잡다한 변경 사항
- docs : 문서나 주석을 수정
- style : 코드 스타일과 포매팅 관련 변경 사항
- refactor : 기능에 영향을 주지 않는 코드 리팩토링(ex 변수명 변경)

## 스크린샷

![](https://github.com/user-attachments/assets/3763d48a-dd8c-4166-b00a-a81428539524)
![](https://github.com/user-attachments/assets/1e87634b-7a5e-4246-b0f4-f62d9db78fe7)
![](https://github.com/user-attachments/assets/9c8fbbb6-dc68-4bf4-88e6-d03f0ddb43a0)
![](https://github.com/user-attachments/assets/4e70981d-b8e3-446a-a03a-2eda695365e2)
![](https://github.com/user-attachments/assets/52a216e2-6ff2-4602-bea0-ad3131c57170)
![](https://github.com/user-attachments/assets/853557f7-634f-4ec6-99c1-e34a75b02096)
