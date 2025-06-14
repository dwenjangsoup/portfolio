import React from "react";
import styled from "styled-components";
import somi from "../assets/image/somi.png";
import { keyframes } from "styled-components";
import Historyitem from "./Historyitem";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 300px 0;
`;

const Anime = keyframes`
  0% {
  transform:scale(1)
}  
  50% {
  transform:scale(1.05)
  }  
  100% {
  transform:scale(1)
  } 
`;

const Pic = styled.img`
  border-radius: 50%;
  animation: ${Anime} infinite 0.5s;
  z-index: 1;
`;

const Line = styled.div`
  width: 1px;
  height: 100%;
  height: 1500px;
  position: relative;
  font-size: 4px;

  background-color: black;
`;

const Illuminati = styled.div`
  width: 0;
  height: 0;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  border-top: 20px solid black;
  position: absolute;
  bottom: -5px;
  right: -10px;
`;

const History = () => {
  return (
    <Container>
      <Pic src={somi} />

      <Line>
        <Historyitem
          year="2011"
          contents="탄신일"
          position={{ top: 10, left: 150 }}
        />
        <Historyitem
          year="2014"
          contents="~외국살이"
          position={{ top: 200, right: 150 }}
        />
        <Historyitem
          year="2017"
          contents="유치원 졸업"
          position={{ top: 400, left: 150 }}
        />
        <Historyitem
          year="2018"
          contents="초등학교 입학"
          position={{ top: 600, right: 150 }}
        />
        <Historyitem
          year="2018"
          contents="전학"
          position={{ top: 800, left: 150 }}
        />
        <Historyitem
          year="2020"
          contents="서브컬쳐 입문"
          position={{ top: 1000, right: 150 }}
        />
        <Historyitem
          year="2022"
          contents="소미 탄생"
          position={{ top: 1200, left: 150 }}
        />
        <Historyitem
          year="2025"
          contents="PCEP 자격증"
          position={{ top: 1400, right: 150 }}
        />

        <Illuminati></Illuminati>
      </Line>
    </Container>
  );
};

export default History;
