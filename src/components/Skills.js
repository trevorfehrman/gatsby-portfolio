import React from "react"
import SkillBar from "react-skillbars"
import { skillsData } from "../utils/skillsData"

import styled from "styled-components"

const SkillContainer = styled.div`
  width: 60%;
  margin: 10rem auto 0 auto;
  padding-bottom: 3rem;
`

const colors = {
  bar: "red",
  title: {
    text: "white",
    background: {
      hue: 100,
      saturation: 99,
      level: {
          minimum: 20,
          maximum: 100,
      }
    },
  },
}

const Skills = () => {
  return (
    <SkillContainer>
      <SkillBar
        colors={colors}
        animationDelay={1}
        height={50}
        skills={skillsData}
      />
    </SkillContainer>
  )
}

export default Skills
