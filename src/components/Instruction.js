import { useEffect, useState } from "react";


import styled from "styled-components";



import ReactPlayer from "react-player";



import { X } from "react-feather";

const ButtonUI = styled.div`
  width: 300px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid white;
  border-radius: 15px;
  font-style: normal;
  font-weight: bold;
  font-size: 19px;
    margin: 75px 0 0 0;
  cursor: pointer;
  color: white;

  &:hover {
    background: white;
    color: #252525;
    border: 3px solid #252525;
  }


  @media (max-width: 700px){
      width: 100%
  }
`;

const PlayerUI = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
position: fixed;
top: 0;
left: 0;
z-index: 10000;
background: rgba(0, 0, 0, 1);
`;

export default function Instruction({video}) {
  const [active, setActive] = useState(false);


  return (

    <>


    <ButtonUI onClick={() => setActive(true)}>
      Instructions
    </ButtonUI>


    <PlayerUI
      className="container"
      style={{
        overflow: "hidden",
        display: active ? 'flex' : 'none',

      }}
    >

<X style={{color: 'white', position: "absolute", top: '5%', right: '2.5%', zIndex: 10000, cursor: 'pointer'}} onClick={() => setActive(false)}/>
        <ReactPlayer
          width="100%"
          height="100%"
          style={{
            borderRadius: "10px",
            boxSizing: "border-box",
            position: "relative",
          }}
          light={false}
          controls={true}
          url={video}
          playing={!active ? false : true  }
        />

       
    </PlayerUI>

    </>
  );
}
