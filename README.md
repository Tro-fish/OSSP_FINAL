# OSSP_final

오픈소스 기말프로젝트 16조!

## ● 목차

- [설치방법 ](#-설치방법-로컬-local-installation)
- [기여방법 ](#-기여방법-contributing)
- [행동강령 ](#-행동강령-code-of-conduct)
- [리소스링크 ](#-리소스-링크-resource-link)
- [릴리즈 ](#-릴리즈-release)
- [라이센스 ](#-라이센스-license)

## ● 설치방법 (로컬) Local Installation

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

## v1.0.0

2021년 5월 24일
안정적인 버전입니다. 기본적인 내용은 [사용방법](#)을 참고할 수 있습니다.

## ● 사용 방법 안내 동영상

<iframe width="640" height="360" src="https://youtu.be/SVaHfW-a8i0" frameborder="0" gesture="media" allowfullscreen=""></iframe>

## ● 라이센스 License

**MIT**<br/>
자세한 내용은 [여기](https://github.com/16OS-final-project/OSSP_final/blob/main/LICENSE)를 참고할 수 있습니다.
