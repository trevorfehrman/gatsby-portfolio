import React from "react"
import styled from "styled-components"

import up4Gif from "../../assets/events.gif"
import up4Logo from "../../assets/up4Logo.png"

const Card = styled.div`
  position: relative;
  height: 30rem;
  width: 50rem;
  &:hover {
    border: 2px solid gold;
  }
`

const StyledImage = styled.div`
  img {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
  }

  .logo {
    opacity: 1;
    transition: all 0.2s ease-in;

    &:hover {
      opacity: 0;
    }
  }

  .image {
    opacity: 0;
    transition: all 0.2s ease-in;
    object-fit: cover;

    &:hover {
      opacity: 1;
    }
  }
`

export const Work = () => {
  return (
    <Card>
      <StyledImage>
        <img className="logo" src={up4Logo} />
      </StyledImage>
      <StyledImage>
        <img className="image" src={up4Gif} />
      </StyledImage>
    </Card>
  )
}
