import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import 미저씨 from "../assets/image/미저씨.png";

// styled-components v5 이상에서 as any로 shouldForwardProp 사용
const CubeBox = styled.div.withConfig({
  shouldForwardProp: (prop) => prop !== "rotY" && prop !== "rotX",
})<{ rotY: number; rotX: number }>`
  cursor: all-scroll;
  position: relative;
  width: 400px;
  height: 400px;
  transform-style: preserve-3d;
  transform: ${({ rotY, rotX }) => `rotateY(${rotY}deg) rotateX(${rotX}deg)`};
`;

const Scene = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  perspective: 1200px;
  padding: 200px 0;
  position: relative;
  background: #ffffff;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(241, 245, 213, 1) 47%,
    rgba(237, 221, 83, 1) 100%
  );
`;

const Face = styled.span<{ $type: "base" | "side"; $i: number }>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100%;
  background-image: url(${미저씨});
  ${({ $type, $i }) =>
    $type === "base"
      ? `transform: rotateX(${90 * $i}deg) translateZ(200px);`
      : `transform: rotateY(${90 * $i}deg) translateZ(200px);`}
`;

const Cube: React.FC = () => {
  const [rotY, setRotY] = useState(-45);
  const [rotX, setRotX] = useState(0);
  const cubeRef = useRef<HTMLDivElement | null>(null);

  const rotate = (x: number, y: number) => {
    setRotY((prev) => prev + x / 2);
    setRotX((prev) => prev - y / 2);
  };

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      rotate(event.movementX, event.movementY);
    };

    const handleMouseDown = () => {
      document.addEventListener("mousemove", handleMouseMove);
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };

    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    const autoRotate = setInterval(() => {
      requestAnimationFrame(() => {
        rotate(0.5, 0.5);
      });
    }, 1);

    return () => {
      clearInterval(autoRotate);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <Scene>
      <CubeBox ref={cubeRef} rotY={rotY} rotX={rotX}>
        <Face $type="base" $i={1} />
        <Face $type="base" $i={-1} />
        <Face $type="side" $i={0} />
        <Face $type="side" $i={1} />
        <Face $type="side" $i={2} />
        <Face $type="side" $i={3} />
      </CubeBox>
    </Scene>
  );
};

export default Cube;
