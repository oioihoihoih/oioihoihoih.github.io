# 포트폴리오 사이트

https://oioihoihoih.github.io 에 게시되는 정적 페이지입니다. 빌드 없이 `index.html` 하나로 동작합니다.

## 고칠 곳

- **이름**: `index.html`에서 `[이름]`을 검색해 세 군데(`<title>`, `og:title`, 본문 hero)를 바꿉니다.
- **사진**: `assets/profile.jpg` 파일을 올리면 자동으로 표시됩니다. 세로 4:5 비율이 가장 잘 맞습니다.
- **검색 노출**: `<meta name="robots" content="noindex, nofollow">` 때문에 검색엔진에 뜨지 않습니다. 공개해도 괜찮아지면 이 줄을 지웁니다.

## 로컬에서 보기

```bash
python -m http.server 8765
```

브라우저에서 `http://127.0.0.1:8765`를 엽니다.
