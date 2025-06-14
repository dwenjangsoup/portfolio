import React from "react";
import styled, { keyframes } from "styled-components";

const Container = styled.div`
  width: 100%;
  position: relative;
  /* box-shadow: 0 0 0 10px inset blue; */
`;

const Textwrapper = styled.div`
  width: 100%;
  height: 100dvh;
  justify-content: center;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  padding: 0 30px;
  top: 0;
  position: sticky;
  box-shadow: 0 -10px 20px rgba(0, 0, 0, 0.2);
  background-color: aliceblue;
`;

const zoomInDown = keyframes`
  from {
    opacity: 0;
    -webkit-transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    -webkit-transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    -webkit-animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }

  to {
        opacity: 1;

  }
`;

const Textbox = styled.h1`
  font-size: 18vw;

  text-align: center;

  word-break: keep-all;

  font-family: "YoonChildfundkoreaManseh";
  opacity: 0;
  animation-fill-mode: both;
  animation-duration: 1s;
  animation-delay: 0.5s;
  animation-name: ${zoomInDown};
`;

const Intro = () => {
  return (
    <Container>
      <Textwrapper>
        <Textbox>누구세요</Textbox>
      </Textwrapper>
      <Textwrapper>
        <Textbox>저를 소개합니다</Textbox>
      </Textwrapper>
      <Textwrapper>
        <Textbox>홍미소</Textbox>
      </Textwrapper>
    </Container>
  );
};

export default Intro;
