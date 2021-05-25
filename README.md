# Final Project_Team 16

## ● Application Name 
   SKKU Movie Selector
<details>
<summary>애플리케이션 간단 요약</summary>
<div markdown="1">
    <p> <br>사용자를 위한 최고의 영화를 추천해 주는 웹 애플리케이션 입니다.
        <br>사용자는 원하는 영화관을 선택할 수 있습니다. 
        <br>다양한 사이트로부터 평균 예매율과 평균 평점 데이터를 받아서 이를 기준으로 선택한 영화관에서 현재 상영중인 영화들을 순위 별로 보여줍니다.</p>
</div>
</details>

## ● Application Link
[Heroku](https://dashboard.heroku.com)를 이용해 애플리케이션을 배포했습니다.
- https://skku-movie-selector.herokuapp.com/
   - Heroku와 GitHub를 통합하여 이 저장소의 main 브랜치를 배포한 링크입니다.
- https://stormy-dawn-75717.herokuapp.com/
   - 로컬에서 직접 Heroku에 배포한 링크입니다. 위 링크와 동일한 버전입니다.

현재 무료 호스팅 서비스를 이용하고 있어 사용시간에 제약이 있습니다. 위 링크가 열리지 않는다면 아래의 [로컬 설치방법](#-로컬-설치방법-local-installation)으로 애플리케이션을 이용할 수 있습니다.

## ● 화면예시 Screen Example


### 1. 첫 화면 First Page
   ![mainPage](https://user-images.githubusercontent.com/80453200/119433176-aea4c780-bd50-11eb-8126-6541dcf78c2f.png)

### 2. TOP3 영화 표시 Show TOP 3 movies
   
   ![rankingPage_1](https://user-images.githubusercontent.com/80453200/119433017-54a40200-bd50-11eb-8d17-9a4131c33ea7.png)

### 3. TOP4-7 영화 표시 Show Top 4-7 movies
   ![rankingPage_2](https://user-images.githubusercontent.com/80453200/119433039-61285a80-bd50-11eb-9c81-7ea295a0ab4e.png)


## ● 사용 방법 How to use


### 1. 메인 화면 Main Page
![how_to_use_1](https://user-images.githubusercontent.com/80453200/119370629-753c6f80-bcf0-11eb-8b92-e240674f9693.png)

### 2. 순위 화면-(1) Ranking Page-(1)
![how_to_use_2](https://user-images.githubusercontent.com/80453200/119372682-8be3c600-bcf2-11eb-9409-fe6a843da994.png)

### 3. 순위 화면-(2) Ranking Page-(2)
![how_to_use_3](https://user-images.githubusercontent.com/80453200/119376060-84262080-bcf6-11eb-969f-c60d5c3284af.png)

아래의 [사용 방법 안내 동영상](#-사용-방법-안내-동영상-how-to-use-video)에서 더 자세한 설명을 확인할 수 있습니다. 


## ● 사용 방법 안내 동영상 How to use video

<a href="https://youtu.be/SVaHfW-a8i0
" target="_blank"><img src="https://github.com/16OS-final-project/OSSP_final/blob/main/public/movie-selector.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

## ● 로컬 설치방법 Local Installation

### 1. 저장소 복제 Clone the repository

```cmd
git clone https://github.com/16OS-final-project/OSSP_final.git
cd OSSP_final
```

### 2. 외부모듈 설치 Install dependencies

```cmd
npm install express --save
npm install node-html-parser --save
```

### 3. 실행 Run

```
npm start
```

또는

```
node app.js
```

http://localhost:8000 가 출력되면 성공입니다! 링크에서 영화관을 선택하면 해당 영화관에서 상영하는 영화에 점수를 매겨 높은 순서대로 출력합니다. 점수는 cgv, 네이버, metacritic(해외영화) 평점을 더해 평균을 구해서 산정합니다.<details>

<summary>출력 예시 (이미지)</summary>
<div markdown="1">

![local example](https://user-images.githubusercontent.com/41911523/119309178-eb1ce880-bca8-11eb-831e-62921c308ed2.PNG)

</div>
</details>

## ● 기여방법 Contributing

- Pull Request
- Open Issue

## ● 행동강령 Code of Conduct

이 프로젝트는 [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/)를 준수하고 있습니다. 자세한 내용은 [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/)를 참고할 수 있습니다.

## ● 리소스 링크 Resource link

이 앱은 다음 모듈을 사용했습니다.

- [Express](http://expressjs.com/)
  - node.js를 위한 웹 프레임워크
- [node-html-parser](https://www.npmjs.com/package/node-html-parser)
  - DOM Tree를 활용하기 위한 빠른 HTML parser

이 앱은 다음 사이트의 정보를 이용합니다.

- [CGV 모바일](http://m.cgv.co.kr/WebAPP/MovieV4/movieList.aspx?mtype=now&iPage=2&MNowFlag=1)
- [네이버 영화](https://movie.naver.com/movie/running/current.nhn)
- [메타크리틱](https://www.metacritic.com/movie)
  <details> <summary>CGV 상영시간표</summary>
  <div markdown="1">

  - [CGV북수원](http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0049)
  - [CGV수원](http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0012)
  - [CGV동수원](http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0041)
  - [CGV산본](http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0242)
  - [CGV광교](http://www.cgv.co.kr/theaters/?areacode=02&theaterCode=0257)

</div>
</details>

## ● 릴리즈 Release

### v1.0.0
안정적인 버전입니다. 기본적인 내용은 [사용방법](#-사용-방법-how-to-use)을 참고할 수 있습니다.

## ● 라이센스 License

**MIT**<br/>
자세한 내용은 [여기](https://github.com/16OS-final-project/OSSP_final/blob/main/LICENSE)를 참고할 수 있습니다.
