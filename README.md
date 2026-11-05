# 포트폴리오 사이트

https://oioihoihoih.github.io 에 게시되는 정적 페이지입니다.

디자인은 [vCard](https://github.com/codewithsadee/vcard-personal-portfolio) 템플릿(MIT, © codewithsadee)을 바탕으로 했습니다. 템플릿 라이선스는 [LICENSE](LICENSE)에 있습니다.

## 고칠 곳

- **이름**: `index.html`에서 `[이름]`을 검색해 모두 바꿉니다.
- **사진**: `assets/images/profile.jpg`를 올리면 자동으로 표시됩니다. 정사각형이 가장 잘 맞습니다.
- **검색 노출**: `<meta name="robots" content="noindex, nofollow">` 때문에 검색엔진에 뜨지 않습니다. 공개해도 괜찮아지면 이 줄을 지웁니다.
- 사이트 전용 스타일은 `assets/css/custom.css`에 있고, 템플릿 원본 `style.css`는 그대로 두었습니다.

## 로컬에서 보기

```bash
python -m http.server 8765
```
