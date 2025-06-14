import { useRef, useEffect, useState } from "react";
import styled from "styled-components";
import Intro from "./components/Intro";
import bgm from "./assets/나 아이돌 선언.m4a";
import Rainy from "./components/Rainy";
import History from "./components/History";
import Book from "./components/Book";
import Cube from "./components/Cube";

const Container = styled.div`
  width: 100%;
  min-height: 100dvh;
`;

function App() {
  const audioRef = useRef(null);
  const bookRef = useRef<HTMLDivElement | null>(null);
  const cubeRef = useRef<HTMLDivElement | null>(null);
  const [bookPinned, setBookPinned] = useState("false");

  const [test, setTest] = useState("open");

  const testhandle = () => {
    if (test === "close") {
      setTest("open");
    } else setTest("close");
  };
  // Book이 보이면 스크롤을 Book의 top으로 이동
  useEffect(() => {
    const handleScroll = () => {
      if (!bookRef.current || !cubeRef.current) return;

      const bookRect = bookRef.current.getBoundingClientRect();
      const cubeRect = cubeRef.current.getBoundingClientRect();

      // Book이 화면에 1px이라도 보이면
      if (bookRect.top < window.innerHeight && bookRect.bottom > 0) {
        // Cube가 아직 화면에 안 보이면 Book을 상단에 고정
        if (cubeRect.top >= window.innerHeight || cubeRect.bottom <= 0) {
          if (!bookPinned) {
            setBookPinned(true);
            window.scrollTo({
              top: window.scrollY + bookRect.top,
              behavior: "smooth",
            });
          }
        }
      }

      // Cube가 화면에 보이면 상태 해제
      if (cubeRect.top < window.innerHeight && cubeRect.bottom > 0) {
        if (bookPinned) setBookPinned(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    // 최초 mount 시에도 체크
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [bookPinned]);
  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((err) => console.log("재생 오류:", err));
    }
  };

  return (
    <>
      <Container>
        <button onClick={() => testhandle()}>{test}</button>
        <audio ref={audioRef} src="/나 아이돌 선언.m4a" loop type="audio/mp4" />
        <audio ref={audioRef} src={bgm} loop type="audio/mp4" />
        <button onClick={playAudio}>🎵 BGM 재생</button>
        <Intro />
        <History />
        <div ref={bookRef}>
          <Book />
        </div>
        <div ref={cubeRef}>
          <Cube />
        </div>
      </Container>
      <Rainy />
    </>
  );
}

export default App;
