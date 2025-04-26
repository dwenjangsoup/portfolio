import React from "react";
import styled from "styled-components";
import somi from "../assets/image/somi.png";
import Historyitem from "./Historyitem";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 300px 0;
  border: 1px solid red;
`;

const Pic = styled.img`
  border-radius: 50%;
`;

const Line = styled.div`
  height: 1000px;
  font-size: 4px;
  background-color: black;
`;

const History = () => {
  return (
    <Container>
      <Pic src={somi} />
      <Line>　</Line>
      <Historyitem year="2011" contents="탄신일" />
      <Historyitem year="2014" contents="~외국살이" />
      <Historyitem year="2017" contents="유치원 졸업" />
      <Historyitem year="2018" contents="초등학교 입학" />
      <Historyitem year="2018" contents="전학" />
      <Historyitem year="2020" contents="서브컬쳐 입문" />
      <Historyitem year="2022" contents="소미 탄생" />
      <Historyitem year="2025" contents="PCEP 자격증" />
    </Container>
  );
};

export default History;
