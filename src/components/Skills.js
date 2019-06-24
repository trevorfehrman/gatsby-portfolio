import React from "react"
import SkillBar from "react-skillbars"
import { frontendData, backendData, otherData } from "../utils/skillsData"

import styled from "styled-components"

const SkillContainer = styled.div`
  width: 85%;
  margin: 10rem auto 0 auto;
  padding-bottom: 11rem;
  display: flex;
  justify-content: space-around;

  & > div {
    width: 30%;
  }

  .skillbar {
    background-color: #272727b5;
  }

  .skillbar-percent {
    color: white;
  }

  .skillbar-bar {
    transition: width 1000ms ease-out !important;
  }
`
const frontendColors = {
  bar: {
    hue: 0,
    saturation: 0,
    level: {
      minimum: 60,
      maximum: 90,
    },
  },
  title: {
    text: "white",
    background: {
      hue: 4,
      saturation: 90,
      level: 58,
    },
  },
}

const backendColors = {
  bar: {
    hue: 0,
    saturation: 0,
    level: {
      minimum: 60,
      maximum: 90,
    },
  },
  title: {
    text: "white",
    background: {
      hue: 181,
      saturation: 71,
      level: 45,
    },
  },
}

const otherColors = {
  bar: {
    hue: 0,
    saturation: 0,
    level: {
      minimum: 60,
      maximum: 90,
    },
  },
  title: {
    text: "white",
    background: {
      hue: 33,
      saturation: 100,
      level: 49,
    },
  },
}

const Skills = () => {
  return (
    <SkillContainer>
      <SkillBar
        style={{ width: "30%" }}
        colors={frontendColors}
        animationDelay={1}
        animationDuration={1000}
        height={50}
        skills={frontendData}
      />
      <SkillBar
        style={{ width: "30%" }}
        colors={backendColors}
        animationDelay={1}
        animationDuration={1000}
        height={50}
        skills={backendData}
      />
      <SkillBar
        style={{ width: "30%" }}
        colors={otherColors}
        animationDelay={1}
        animationDuration={1000}
        height={50}
        skills={otherData}
      />
    </SkillContainer>
  )
}

export default Skills
