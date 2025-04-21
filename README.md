 # UX 개선 프로젝트,  <img alt="GSncoupon" src="https://g-sncoupon-u8rd.vercel.app/assets/NavImg/hd_logo.png" />


<p>실제 운영 중인 기존 웹사이트를 대상으로 UX 문제점을 분석하고,<br/> 메인 페이지를 포함한 주요 기능을 리디자인 및 개발한 프로젝트입니다.<br/>
위치 기반 쿠폰 추천, 로그인 상태 관리, 검색 필터 개선 등 실사용자 중심의 기능 구현에 중점을 두었습니다.</p>



<br/>

**[🌐 배포사이트 : GS&쿠폰 바로가기](https://g-sncoupon-u8rd.vercel.app/)**  
**[📝 팀 Notion page 바로가기](https://www.notion.so/Zero-Base-FE-3-UX-1cdf17bd6ac880a39afbd3d801a2f759)**


<br/>

## 📌 프로젝트 소개
<br/>



<p align="center">
  <img width="640" alt="gsncoupon_image" src="https://github.com/user-attachments/assets/4cd220a9-3f35-4868-b62a-86ee222b7323">
</p>


<p align="center">
  <img src="https://img.shields.io/badge/react-v18.2.0-61DAFB?logo=react" alt="react" />
  <img src="https://img.shields.io/badge/typescript-v5.7.2-3178C6?logo=typescript" alt="typescript"/>
  <img src="https://img.shields.io/badge/recoil-v0.7.7-3578E5?logo=recoil" alt="recoil"/>
  <img src="https://img.shields.io/badge/react--router--dom-v6-CA4245?logo=react-router" alt="react-router" />
  <img src="https://img.shields.io/badge/vite-v6.2.0-646CFF?logo=vite" alt="vite"/><br/>
  <img src="https://img.shields.io/badge/axios-v1.8.4-5A29E4?logo=axios" alt="axios"/>
  <img src="https://img.shields.io/badge/eslint-v9.24.0-4B32C3?logo=eslint" alt="eslint"/>
  <img src="https://img.shields.io/badge/prettier-v3.5.3-F7B93E?logo=prettier" alt="prettier"/>
  <img src="https://img.shields.io/badge/yarn-v1.22.19-2C8EBB?logo=yarn" alt="yarn" />
</p>


<br/>

![image](https://github.com/user-attachments/assets/227a2dcc-9828-4c1f-9d72-a46864e29f2a)

<br/>


## ✳ 프로젝트 기능

### 🔮 메인 페이지 리디자인

- 기존 광고 중심 레이아웃을 개선하고, 콘텐츠 중심의 흐름으로 재배치
- 브랜드 컬러 기반 UI 통일 및 반응형 레이아웃 완성
- 인터렉션 강화: goTop 버튼, 우측 퀵메뉴, 텍스트 모션 애니메이션 등

### 📍 위치 기반 쿠폰 추천

- 사용자의 브라우저 위치를 활용해 해당 지역의 쿠폰 슬라이드를 노출
- 위치 미허용 시 기본값(부산)으로 fallback 처리
- 11개 지역 대응: 서울, 부산, 인천, 대구, 광주, 대전, 울산, 세종, 경기, 강원, 제주

### 🔐 로그인 상태 관리

- Recoil을 이용한 로그인 상태 전역 관리
- 로그인 시: 마이페이지, 장바구니, 견적서 노출
- 로그아웃 시: 관련 UI 깔끔하게 숨김 처리

### 🔍 상세 검색 필터 개선

- 검색 조건 입력 추가(할인율, 유효기간)
- 검색 조건별 입력 UI 개선
- 가격/브랜드/유효기간 등 실시간 필터링 구현
- 불필요한 스크롤 생성요소 제거

### ☕ 제품 목록 및 상세페이지 개선

- 가격 정보 영역을 분리하여 시각적 계층 구조 강화
- 상품 이미지와 정보 영역의 비율 조정으로 레이아웃 최적화
- 세부적인 인터렉션 및 UI 개선

### 🛒 제품 카드 및 견적서 리스트 개선

- 브랜드 리스트를 드롭다운 형식으로 전환하여 효율적인 정보 구조 생성
- 브랜드 선택시 스크롤 이동 및 디테일한 애니메이션 추가로 세부적인 인터렉션 및 UI 개선
- 시각적인 피드백이 부족했던 부분에 클릭 기능을 분리하여 명확한 사용자의 흐름 제공 및 강화


<br/>



## 🌟 기술 스택
<p align="center"> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="15%" alt="React"/> 
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="15%" alt="TypeScript"/> 
  <img src="https://github.com/user-attachments/assets/7b08c486-8686-443c-8002-b8b874f5a0f4" width="15%" alt="Recoil"/> 
  <img src="https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg" width="15%" alt="Vite"/> 
  <img src="https://github.com/user-attachments/assets/2fd1494a-7cbf-480f-94fd-e9eb206b3900" width="15%" alt="Axios"/> 
</p>

<br/>

- **React** 로 컴포넌트 기반 구조로 유지보수가 쉽고 확장 가능한 UI를 구축했습니다.
- **Typescript** 로 정적 타입을 사용하여 코드 안정성과 협업 효율을 높였습니다.
- **Recoil** 전역 상태 관리 라이브러리로 사용자 로그인 상태를 간편하게 관리했습니다.
- **Vite** 로 빠른 번들링과 HMR을 제공하여 개발 속도를 극대화했습니다. 
- **Axios** 로 API 요청을 효율적으로 처리하고 응답/에러 처리를 통합했습니다.

<br/>

## 📈 Task Flow
![image](https://github.com/user-attachments/assets/19ffbf3f-c10b-4c5e-a8ec-b5dcdc51880e)



## 🚀 Documents & Demo
- [개발 환경 설정](https://www.notion.so/1d0f17bd6ac8806a9df8f2b5facff19f)
- [쿠폰 API](https://www.notion.so/API-1cff17bd6ac880eab806f68391924565)
- [와이어프레임](https://www.figma.com/design/GVwPl3knVAom7EP2S1ewL3/-Zero-Base--FE-%EC%B4%88%EB%8B%A8%EA%B8%B0-3%EA%B8%B0---UX-%EA%B0%9C%EC%84%A0-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8?node-id=10-3&p=f&t=OPYG47sDuvQJTVmd-0)
- [컴포넌트 정의서](https://www.notion.so/UX-1cef17bd6ac88017bf9dceffa59e80a7)

<br/>

## ✡ Members
<table>
    <tr>
        <td align="center"><img src="https://github.com/JaaninSon.png" width="80"></td>
        <td align="center"><img src="https://github.com/SupaKang.png" width="80">
        </td>
        <td align="center"><img src="https://github.com/Bit-na25.png" width="80"></td>
    </tr>
    <tr>
        <td align="center"><a href="https://github.com/JaaninSon">손진</a></td>
        <td align="center"><a href="https://github.com/SupaKang">강선구</a></td>
        <td align="center"><a href="https://github.com/Bit-na25">이빛나</td>
    </tr>
</table>
