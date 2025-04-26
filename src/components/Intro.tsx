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
  background-color: aliceblue;
`;

const Textbox = styled.h1`
  font-size: 18vw;

  text-align: center;

  word-break: keep-all;

  font-family: "YoonChildfundkoreaManseh";
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
