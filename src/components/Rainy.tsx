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
  left: ${() => Math.random() * 100}vw; /* 0~100vw 랜덤 위치 */
  animation: ${Anime} ${() => Math.random() * 5 + 10}s linear infinite;
`;

const Rainy = () => {
  console.log("이거 나옴?");
  return (
    <Container>
      <Items src={네_잎클로버} />
      <Items src={별별별} />
      <Items src={슈가슈가룬} />
      <Items src={에가오쨩} />
    </Container>
  );
};

export default Rainy;
