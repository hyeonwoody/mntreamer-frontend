# mntreamer (엠엔트리머)

## 🧑‍💻: Intro
❓ Problem : 스트리머가 방송을 시작했는지 실시간으로 확인하기 어려움 😮
- 스트리머의 방송 시작 여부를 실시간으로 확인하기 어려워 녹화 시점을 놓침
- 실제 컨텐츠와 무관한 부분이 녹화되어 저장 공간 낭비 발생

❗ Idea : `hls.js`로 구간 삭제 + DISCONTINUITY 태그를 통한 재생 목록 조정 🤔

💯 Solution : 스마트 편집 😁
- 사용자가 웹 인터페이스에서 불필요 구간 선택 삭제
- 관련 TS 파일 제거 및 m3u8 갱신

</br>

## 🧱: Structure
### Atomic Design Pattern
├── App.css
├── App.tsx
├── assets
│   └── react.svg
├── components
│   ├── api
│   │   ├── confirmApi.tsx
│   │   ├── deleteApi.tsx
│   │   ├── entryApi.tsx
│   │   └── videoPlayerApi.tsx
│   ├── atoms
│   │   └── button.tsx
│   ├── molecules
│   │   ├── button
│   │   │   ├── backButton.tsx
│   │   │   ├── confirmButton.tsx
│   │   │   └── deleteButton.tsx
│   │   ├── fileExplorer
│   │   │   ├── backButton.tsx
│   │   │   ├── currentPath.tsx
│   │   │   ├── entry.tsx
│   │   │   ├── folderEntry.tsx
│   │   │   └── mediaEntry.tsx
│   │   ├── videoPlayerHLS.tsx
│   │   ├── videoPlayerInOut.tsx
│   │   ├── videoPlayerMarker.tsx
│   │   └── videoPlayer.tsx
│   ├── organisms
│   │   ├── buttons
│   │   │   └── buttons.tsx
│   │   ├── fileExplorer
│   │   │   ├── FileExplorerContext.tsx
│   │   │   └── FileExplorer.tsx
│   │   ├── keyboardListener.tsx
│   │   └── videoPlayer
│   │       ├── VideoPlayerContext.tsx
│   │       └── VideoPlayer.tsx
│   └── templates
│       ├── Home.tsx
│       └── Video.tsx
├── configuration
│   ├── special
│   │   └── config.tsx
│   └── web
│       └── config.tsx
├── index.css
├── main.tsx
├── pages
│   ├── app
│   │   ├── App.css
│   │   └── App.tsx
│   ├── Home.tsx
│   ├── Unknown.tsx
│   └── Video.tsx
├── react-file-manager.d.ts
└── vite-env.d.ts

## ✅: Implementation
### 웹 기반 동영상 플레이어
- [소스코드](https://github.com/hyeonwoody/mntreamer-frontend/blob/master/src/components/organisms/videoPlayer/VideoPlayer.tsx)
```javascript
const VideoPlayer = (props : VideoPlayerProps) => {

  const renderVideoPlayer = () => {
    // if (props.fullPath.endsWith('.m3u8')) {
      return <VideoPlayerHLS fullPath={props.fullPath}/>;
    // }
    // return <VideoPlayerSimple fullPath={props.fullPath}/>;
  } 

  return (
    <VideoPlayerProvider>
      <KeyboardListener fullPath={props.fullPath}/>
        <div className='relative'>
                {renderVideoPlayer()}
                <div className="absolute bottom-0 mb-9 ml-4  w-full">
                    <VideoPlayerMarker />
                </div>
                <div className="absolute bottom-0 mb-9 ml-4 w-full">
                    <VideoPlayerInOut />
                </div>
        </div>
    </VideoPlayerProvider>
    
  );
};
```
- **타임라인 기반** 인 / 아웃 설정으로 구간 설정 후 삭제
- **타임라인 기반** 책갈피 / 마커 기능으로 클릭 시 해당 구간으로 즉시 이동

</br>

## 🎥: Demonstration
### 파일 탐색 및 재생
<img src="https://github.com/hyeonwoody/mntreamer-frontend/blob/master/doc/demontration/FileExplorer.gif" width="894" height="503" />
### 인 / 아웃 설정
<img src="https://github.com/hyeonwoody/mntreamer-frontend/blob/master/doc/demontration/InOut.gif" width="894" height="503" />

</br>

## 📞: Contact
- 이메일: hyeonwoody@gmail.com
- 블로그: https://velog.io/@hyeonwoody
- 깃헙: https://github.com/hyeonwoody

</br>

## 🛠️: Technologies Used
> React + Typescript

</br>

## 📚: Libraries Used
> Vite 

> hls.js