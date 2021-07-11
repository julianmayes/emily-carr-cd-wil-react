import { useEffect, useState } from "react";
import { SkillIdentifier } from "./components/SkillIdentifier/SkillIdentifier";
import sanityClient from "./client";
import styled from "styled-components";
import skillIdentifierImage from "../src/images/skill-identifier.svg";
import InspireGrid from "./components/Home/InspireGrid";
import gridOne from './images/grid-1.png';
import gridTwo from './images/grid-2.png';
import gridThree from './images/grid-3.png';
import gridFour from './images/grid-4.png';
import gridFive from './images/grid-5.png'
import Dropdown from './components/Dropdown.js'


const SectionUI = styled.div`

  display: flex;
  width: 75vw;
  justify-content: center;
  align-items: center;
  position: relative;
  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  @media (max-width: 1400px) {
    width: 90vw;
  }
  
`;

const InfoContainerUI = styled.div`

display: flex;
justify-content: flex-start;
align-items: flex-start;

min-width: 100%;
text-align: left;
font-family: Noto Sans;
font-style: normal;
font-weight: normal;
font-size: 16px;
margin: 64px 0 160px 0;

@media (max-width: 1000px) {
  flex-direction: column;
  
}


`

const LeftColumn = styled.div`
width: 420px;
margin: 0 64px 0 0;
@media (max-width: 1000px) {

  margin: 0 0 64px 0;

  width: 100%;
}

`;

const RightColumn = styled.div`
  width: 318px;

  @media (max-width: 1000px) {
 
  
    width: 100%;
  }
`;

const HeroOneUI = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
`;

const HeroTwoUI = styled.div`
  background: red;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TitleUI = styled.div`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  font-weight: 900;
  font-size: 120px;
  background: linear-gradient(111.11deg, #03A27D 25.33%, #005695 75.02%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  text-overflow: ellipsis;
  white-space: nowrap;
  display: block;
  text-align: left;
  width: 100%;
  font-family: "Noto Sans JP", sans-serif;
  animation: gradient 5s ease infinite;

  @media (max-width: 1000px) {
    font-size: 10vw;
  }




  
`;

const HeaderUI = styled.div`
display: flex;
justify-content: flex-start;
text-align: left;
font-weight: 900;
font-size: 55px;
background: linear-gradient(111.11deg, #03a27d 25.33%, #005695 75.02%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
text-overflow: ellipsis;
white-space: nowrap;
display: block;
text-align: left;
padding: 0 0 50px 0;
width: 100%;
font-family: "Noto Sans JP", sans-serif;
animation: gradient 5s ease infinite;

@media (max-width: 1000px) {
  font-size: 8vw;
}
`;


const SubTitleUI = styled.p`
  display: flex;
  justify-content: flex-start;
  text-align: left;
  width: 480px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 19px;
  line-height: 32px;
  position: relative;
  top: -55px;
`;

const TileUI = styled.div`
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  text-align: left;
  height: 168px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  overflow: hidden;
  border: 4px solid #252525;
  box-sizing: border-box;
  border-radius: 20px;
  position: relative;
  padding: 22px;
  cursor: pointer;

&:hover{
  background: #B9D9EB;
}
@media (max-width: 1000px) {
  font-size: 22px;
  line-height: 20px;

  
}

`;

const FlexUI = styled.div`
  display: flex;
`;


const GridUI = styled.div`
  display: grid;
  
  text-align: left;
  grid-template-columns: repeat(9, 1fr);
  grid-gap: 9px;
  font-family: Noto Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 32px;
  line-height: 35px;
  width: 100%;
  width: 75vw;

  @media (max-width: 1000px) {
    font-size: 22px;
    line-height: 20px;
    grid-template-rows: repeat(1, 1fr);
    
  }




`

const TileImageUI = styled.div`

  height: 30vh;

  background: white;
    border: 4px solid #252525;
    box-sizing: border-box;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden
  

`;


const ImageUI = styled.img`

flex-shrink: 0;

min-height: 100%

`;

export default function Resources() {
  const [allPostsData, setAllPosts] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  

  useEffect(() => {

    const resources = JSON.parse(localStorage.getItem("resources"));

    if(resources){
      setAllPosts(resources)
    } else {
    sanityClient
      .fetch(
        `*[_type == "resources"]{
          title,
          category,
          link,
      }`
      )
      .then((data) => {
        setAllPosts(data);
        localStorage.setItem("resources", JSON.stringify(data));
      })
      .catch(console.error);

    }
  }, []);

/*   useEffect(() => {

    const videos = JSON.parse(localStorage.getItem("videos"));

    if(videos){
      setAllVideos(videos)
    } else {
    sanityClient
      .fetch(
        `*[_type == "videos"]{
            title,
            link,
        }`
      )
      .then((data) => {
        setAllVideos(data);
        localStorage.setItem("videos", JSON.stringify(data));
      })
      .catch(console.error);

    }
  }, []);
 */


  return (
  <div className="container">

    <SectionUI style={{margin: '200px 0 0 0'}}>

      <TitleUI>Resources</TitleUI>

      <InfoContainerUI>
        <LeftColumn>The resources listed here are a complied list from a mix of sources. Half of the links contain downloadable PDF resources provided by the Career Development + WIL Office. The other half will link to other parts of the University including the Writing Centre, the Alumni</LeftColumn>
        <RightColumn>Association, the Aboriginal Gathering Place, the Shumka Centre, and the Library. While a few others will redirect you to local organizations with great relevant resources.</RightColumn>
      </InfoContainerUI>

      <Dropdown allPostsData={allPostsData}></Dropdown>

    </SectionUI>


    <SectionUI style={{margin: '150px 0 0 0'}}>

      <HeaderUI>Alumni Stories <br></br>
and Career Pathways</HeaderUI>

<InspireGrid></InspireGrid>
      
    </SectionUI>


    <SectionUI  style={{width: '90vw', margin: '200px 0 0 0'}}>

    <GridUI style={{width: '90vw' }}>
     
      <TileUI style={{gridColumn: '1 / span 3', height: '20vh'}}>Aboriginal <br></br> Gathering Place</TileUI>
      <TileUI style={{gridColumn: '4 / span 3', height: '20vh'}}>Emily Carr <br></br> University Library</TileUI>
      <TileUI style={{gridColumn: '7 / span 3', height: '20vh'}}>Alumni <br></br> Association</TileUI>
      <TileUI style={{gridColumn: '1 / span 4', height: '20vh'}}>Emily Carr <br></br> Writing Centre</TileUI>
      <TileUI style={{gridColumn: '5 / span 5', height: '20vh'}}>Shumka Centre for <br></br> Creative Entrepreneurship</TileUI>
    </GridUI>

    </SectionUI>

  




  </div>
  )
}
