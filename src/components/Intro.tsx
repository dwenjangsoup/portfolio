import React from "react";
import styled from "styled-components";

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
  &:nth-child(1) {
    background: linear-gradient(
      180deg,
      #ffb3b3,
      #ffd699,
      #ffed99,
      #b3e6b3,
      #99ccff,
      #d0b3e6
    ); /* 파스텔 빨강-주황 */
  }

  &:nth-child(2) {
    background: linear-gradient(
      180deg,
      #dc5c5c,
      #eab360,
      #efd356,
      #59d659,
      #629cd6,
      #a764da
    ); /* 파스텔 노랑-초록 */
  }

  &:nth-child(3) {
    background: linear-gradient(
      180deg,
      #ff0000,
      #ff9900,
      #ffd000,
      #00ff00,
      #0080ff,
      #9204ff
    ); /* 파스텔 파랑-보라 */
  }
`;

const Textbox = styled.h1`
  font-size: 18vw;

  text-align: center;

  word-break: keep-all;
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
