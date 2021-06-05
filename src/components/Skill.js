import { useEffect, useState } from "react";
import React from "react";
import styled from "styled-components";
import { Bubble } from "./Bubble";
import { BubbleRelated } from './BubbleRelated'

const ContainerUI = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SkillContainerUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const RowUI = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.5s ease;
  margin: 5vh 0;
`;


export const Skill = ({ showPost, setShowPost, data, setSkillList, skillList }) => {
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

  const [updateData, setUpdateData] = useState('')
  const [updateSkillList, setUpdateSkillList] = useState('')

  useEffect(() => {
    setUpdateData(data)
    setUpdateSkillList(skillList)
  })

  useEffect(() => {
    if(skillList.includes(updateData.title)){
      setShowRelated(true)
      setAddSkill(true)
    } else {
      setShowRelated(false)
      setAddSkill(false)
    }
  },[skillList])



  return (
    <>
      <SkillContainerUI >
        <RowUI>
          <Bubble
            skillList={updateSkillList}
            setSkillList={setSkillList}
            showRelated={showRelated}
            setShowRelated={setShowRelated}
            data={updateData.title}
          />
          
        </RowUI>
        <RowUI style={{ opacity: showRelated ? "100%" : "0%" }}>
          <BubbleRelated
            skillList={skillList}
            setSkillList={setSkillList}
            showRelated={showRelated}
            setShowRelated={setShowRelated}
            title={ '' }
            lineRotate={'rotate(130deg)'}
            lineWidth={'155px'}
            linePosition={'45px'}
            title={'one'}
          />
          <BubbleRelated
            skillList={skillList}
            setSkillList={setSkillList}
            showRelated={showRelated}
            setShowRelated={setShowRelated}
            title={ '' }
            lineRotate={'rotate(90deg)'}
            lineWidth={'108px'}
            linePosition={'-4px'}
            title={'two'}
          />
          <BubbleRelated
            skillList={skillList}
            setSkillList={setSkillList}
            showRelated={showRelated}
            setShowRelated={setShowRelated}
            title={ '' }
            lineRotate={'rotate(50deg)'}
            lineWidth={'155px'}
            linePosition={'-100px'}
            title={'three'}
          />
        </RowUI>
      </SkillContainerUI>
    </>
  );
};


export default Skill