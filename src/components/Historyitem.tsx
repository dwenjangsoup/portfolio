import React from "react";
import styled from "styled-components";

const Year = styled.span``;

const Contents = styled.span``;

const HistoryItem = styled.span``;

const Historyitem = (props) => {
  console.log("props::::", props);
  return (
    <div>
      <Year>{props.year}</Year>
      <br />
      <Contents>{props.contents}</Contents>
    </div>
  );
};

export default Historyitem;
