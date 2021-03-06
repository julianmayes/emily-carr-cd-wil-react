import React, { useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { useSpring, animated, to } from "react-spring";
import { useGesture, useDrag } from "react-use-gesture";
import styled from "styled-components";

import "./styles.css";

export const FilterSemiCircle = ({
  positionX = -100,
  positionY = -100,
  floatY,
  rotateShape,
  industry = "Advertising + Marketing",
  industries,
  pool,
  setSelectedIndustries,
  selectedIndustries,
  screen
}) => {
  let leftBounds = -window.innerWidth / 2;
  let rightBounds = window.innerWidth / 2;
  let topBounds = -window.innerHeight / 2;
  let bottomBounds = window.innerHeight / 2;

  useEffect(() => {
    window.addEventListener("resize", () => {
      leftBounds = -window.innerWidth / 2;
      rightBounds = window.innerWidth / 2;
      topBounds = -window.innerHeight / 2;
      bottomBounds = window.innerHeight / 2;
    });
  });
  
  const [posX, setPosX] = useState(positionX);
  const [posY, setPosY] = useState(positionY);

  const [floatingY, setFloatingY] = useState(floatY);
  const [rotate, setRotate] = useState(rotateShape);

  const [mouseDown, setMouseDown] = useState(false);
  const [inside, setInside] = useState(false);
  const circle = useRef(null);

  useEffect(() => {
    let poolRight =
      pool.current.getBoundingClientRect().x +
      pool.current.getBoundingClientRect().width;
    let poolLeft = pool.current.getBoundingClientRect().x;
    let poolTop = pool.current.getBoundingClientRect().y;
    let poolBot =
      pool.current.getBoundingClientRect().y +
      pool.current.getBoundingClientRect().height;

    let circleX =
      circle.current.getBoundingClientRect().x +
      circle.current.getBoundingClientRect().width / 2;
    let circleY =
      circle.current.getBoundingClientRect().y +
      circle.current.getBoundingClientRect().height / 2;

    if (
      circleX > poolLeft &&
      circleX < poolRight &&
      circleY > poolTop &&
      circleY < poolBot
    ) {
   
      circle.current.style.background = "#285F4A"
      circle.current.style.color = "white"
    
      if (selectedIndustries.includes(industries)) {
        return;
      } else {
        setSelectedIndustries([...selectedIndustries, industries]);
      }
    } else {
      circle.current.style.background = "white";
      circle.current.style.color = "black";
    

      if (selectedIndustries.includes(industries)){
      setSelectedIndustries(
        selectedIndustries.filter((industries) => industries !== industries)
      );
      }
    }
  }, [mouseDown]);

  const [{ x, y }, api] = useSpring(() => ({ x: 0, y: 0 }));

  const bind = useDrag(
    ({ down, offset: [ox, oy] }) =>
      api.start({ x: ox , y: oy , immediate: down }),
/*     {
      bounds: {
        left: leftBounds,
        right: rightBounds,
        top: topBounds,
        bottom: bottomBounds,
      },
      rubberband: true,
    } */
  );
  return (
    <animated.div
      className="semi-circle-filter"
      {...bind()}
      style={{ x, y, display: screen == 3 ? 'flex' : 'none', transform: `rotate(${rotate}deg)`, animation: `float ${floatingY}s ease infinite`}}
      ref={circle}
      onMouseDown={() => setMouseDown(true)}
      onMouseUp={() => setMouseDown(false)}
    >
      {industries.title}
    </animated.div>
  );
};
