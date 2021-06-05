import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";

const ContainerUI = styled.div`
  display: flex;
  flex-direction: column;
`
const TitleContainerUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: normal;
  font-size: 18px;
  margin: 0 0 48px 0;
`

const TitleUI = styled.div`
  width: 100%;
  font-weight: 700;
`

const LineUI = styled.div`
border-bottom: 3px solid black;
width: 100%;
`

const GridUI = styled.div`
  display: grid;
  
  text-align: left;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;
 
  

`

const TileUI = styled.div`

  height: 168px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  background: #00B188;
    border: 4px solid #252525;
    box-sizing: border-box;
    border-radius: 20px;
    padding: 22px
    

`;



export const NavGrid = ({ allPostsData, showPost, setShowPost, data, color='white',  }) => {
  const [showRelated, setShowRelated] = useState(false);
  const [addSkill, setAddSkill] = useState(false);


  const handleSkillClick = (e) => {
    console.log(e.target);
    setShowRelated(!showRelated);
    setAddSkill(!addSkill);
  };

  const handleRelatedClick = (e) => {
    console.log(e.target);
  };

  console.log(allPostsData);

  return (

    <ContainerUI>

    <TitleContainerUI> <LineUI></LineUI><TitleUI>Not sure where to start? </TitleUI><LineUI></LineUI></TitleContainerUI>
    <GridUI>
      <TileUI style={{background: 'white'}} >Find Work</TileUI>
      <TileUI style={{background: '#00B188', gridColumn: '2 / span 2'}}>Identify Your Skills</TileUI>
      <TileUI style={{background: 'white', gridColumn: '4 / span 2'}}>Read How To</TileUI>
      <TileUI style={{background: '#C1D42F', gridColumn: '1 / span 2'}}>Explore Career Pathways</TileUI>
      <TileUI style={{background: '#F02091'}}>Build a Resume</TileUI>
      <TileUI style={{background: 'white', gridColumn: '4 / span 2'}}>Meet with a Career Advisor</TileUI>
    </GridUI>

    </ContainerUI>
  );
};

export default NavGrid