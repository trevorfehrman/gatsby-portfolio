import React from "react"
import styled from "styled-components"

const SliceContainer = styled.div`
  display: flex;
  place-content: center;
  &:not(:last-child) {
    margin-bottom: 7rem;
  }
`

const Slice = styled.div`
  /* filter: drop-shadow(-1px 6px 3px rgba(50, 50, 0, 0.5)); */
  filter: drop-shadow(3px 4px 0px #b87906);
  width: 30rem;
  z-index: 1;

  div {
    background: #fb8c00;
    color: #222;
    font: bold 32px system-ui;
    padding: 2rem 3rem 2rem 2rem;
    clip-path: polygon(85% 0, 100% 50%, 85% 100%, 0 100%, 0 0);
  }
`

const Description = styled.div`
  position: relative;
  left: -5rem;
  top: 4px;
  padding: 1rem 1rem 1rem 7rem;
  width: 40rem;
  background-color: #fba200;
  color: #222;
  display: flex;
  align-items: center;
  border-top-right-radius: 2rem;
  border-bottom-right-radius: 2rem;

  div {
    position: relative;
    bottom: 4px;
    font-size: 2.3rem;
    font-weight: 200;
  }
`
const Chapter = ({ title, description }) => {
  return (
    <SliceContainer>
      <Slice>
        <div>{title}</div>
      </Slice>
      <Description>
        <div>{description}</div>
      </Description>
    </SliceContainer>
  )
}

export default Chapter
