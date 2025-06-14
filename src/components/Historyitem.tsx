import React, { useRef, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import { debounce } from "lodash";

const Year = styled.span`
  display: block;
  font-size: 36px;
  font-weight: 600;
  white-space: nowrap;
  font-family: "Cafe24Supermagic-Bold-v1.0";
  margin-bottom: 5px;
  color: #000000;
`;

const Contents = styled.span`
  font-size: 24px;
  white-space: nowrap;
  font-family: "Cafe24Supermagic-Regular-v1.0";
  color: #5b5b5b;
`;

const fadein = keyframes`
  from {
    opacity:0;
  }
  to {
    opacity : 1;
    transform:translateY(0px)
  }

`;
const fadeout = keyframes`
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(50px);
  }
`;

const HistoryItemSpan = styled.span`
  position: absolute;
  top: ${({ top }) => `${top}px`};
  left: ${({ left }) => left && `${left}px`};
  right: ${({ right }) => right && `${right}px`};
  text-align: ${({ right }) => right && `right`};
  opacity: 0;
  transform: translateY(50px);
  animation-fill-mode: forwards;
  animation-duration: 1s;
  ${({ animestart }) =>
    animestart
      ? css`
          animation-name: ${fadein};
        `
      : css`
          animation-name: ${fadeout};
        `};
`;

const Historyitem = (props) => {
  const domitem = useRef();
  const [animestart, setAnimestart] = useState(false);

  const domhandling = (e) => {
    if (domitem.current?.getBoundingClientRect()) {
      if (
        domitem.current.getBoundingClientRect().top >= 50 &&
        domitem.current.getBoundingClientRect().top <= window.innerHeight - 50
      ) {
        setAnimestart(true);
      } else {
        setAnimestart(false);
      }
    }
  };

  window.addEventListener("scroll", domhandling);

  return (
    <HistoryItemSpan
      ref={domitem}
      top={props.position?.top}
      left={props.position?.left}
      right={props.position?.right}
      animestart={animestart ? "true" : undefined}
    >
      <Year>{props.year}</Year>
      <br />
      <Contents>{props.contents}</Contents>
    </HistoryItemSpan>
  );
};

export default Historyitem;
