import React from "react";
import styled, { keyframes } from "styled-components";
import 네_잎클로버 from "../assets/image/네_잎클로버.png";
import 별별별 from "../assets/image/별별별.png";
import 슈가슈가룬 from "../assets/image/슈가슈가룬.png";
import 에가오쨩 from "../assets/image/에가오쨩.png";

const Container = styled.div`
  height: 100vh;
  /* border: 1px solid black; */
  /* box-shadow: 0 0 0 1px inset red; */
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none; /* 마우스 이벤트 무시 (스크롤 가능해짐) */
  z-index: 1000; /* 다른 요소 위에 표시 */
`;
const Anime = keyframes`
  from {
    transform: translateY(0vh)
  }
  to {
    transform:translateY(100vh)
  }
`;
const Items = styled.img`
  height: 70px;
  position: absolute;
  top: -100px;
  left: ${({ left }) => left}vw; /* 0~100vw 랜덤 위치 */
  animation: ${Anime} ${({ duration }) => duration}s linear infinite;
  animation-delay: ${({ delay }) => delay}s;
`;

const generateRandomProps = () => {
  const randomData = {
    left: Math.random() * 100,
    duration: 5, // Math.random() * 15 + 3, // 10 ~ 15초
    delay: Math.random() * 30, // 0 ~ 5초 지연
  };

  return randomData;
};

const Rainy = () => {
  console.log("이거 나옴?");
  const items = [
    네_잎클로버,
    별별별,
    슈가슈가룬,
    에가오쨩,
    네_잎클로버,
    별별별,
    슈가슈가룬,
    에가오쨩,
    // 네_잎클로버,
    // 별별별,
    // 슈가슈가룬,
    // 에가오쨩,
  ];
  return (
    <Container>
      {items.map((src, index) => {
        const randomProps = generateRandomProps();
        return <Items key={index} src={src} {...randomProps} />;
      })}
    </Container>
  );
};

export default Rainy;
