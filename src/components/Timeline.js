import React, { Fragment } from "react"
import styled from "styled-components"
import Chapter from "../components/Chapter"
import { timelineData } from "../utils/timelineData"

const Line = styled.div`
  height: 100%;
  width: 6px;
  background-color: red;
`

const Timeline = () => {
  return (
    <div style={{ marginTop: "8rem", position: "relative" }}>
      <Line />
      {timelineData.map(chapter => (
        <Chapter title={chapter.title} description={chapter.description} />
      ))}
    </div>
  )
}

export default Timeline
