import { useRef } from "react";
import styled from "styled-components";
import Intro from "./components/Intro";
import bgm from "./assets/나 아이돌 선언.m4a";

const Container = styled.div`
  width: 100%;
  height: 100dvh;
`;

function App() {
  const audioRef = useRef(null);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.log("재생 오류:", err));
    }
  };

  return (
    <Container>
      {/* <audio ref={audioRef} src="/나 아이돌 선언.m4a" loop type="audio/mp4" /> */}
      <audio ref={audioRef} src={bgm} loop type="audio/mp4" />
      <button onClick={playAudio}>🎵 BGM 재생</button>
      <Intro />
    </Container>
  );
}

export default App;
