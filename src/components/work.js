import React, { Fragment, useState } from "react"
import styled from "styled-components"

import up4Gif from "../../assets/events.gif"
import up4Logo from "../../assets/up4Logo.png"

const Card = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 7rem;
  &:hover {
    border: 6px solid #81d6e3;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
  }
  & + .details {
    transform: scaleY(0);
    transition: transform 0.2s ease-in, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
    transform-origin: top;
    height: 30rem;
    width: 30rem;
    background-color: #81d6e3;
    position: absolute;
  }

  &:hover + .details {
    transform: scaleY(1);
    width: 166vh;
  }

  & + .details2 {
    transform: scaleY(0);
    transition: transform 0.2s ease-in, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
    transform-origin: center;
    height: 30rem;
    width: 30rem;
    background-color: #81d6e3;
    position: absolute;
    left: 0rem;
    margin-left: 3rem;
  }

  &:hover + .details2 {
    transform: scaleY(1);
    width: 166vh;
  }
  & + .details3 {
    transform: scaleY(0);
    transition: transform 0.2s ease-in, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
    transform-origin: top;
    height: 30rem;
    width: 30rem;
    background-color: #81d6e3;
    position: absolute;
    right: 0rem;
  }

  &:hover + .details3 {
    transform: scaleY(1);
    width: 166vh;
    margin-right: 3rem;
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
    height: auto;

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
const Test = styled.div`
  /* position: relative; */
  width: 30%;
  height: 30rem;
`

export const Work = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "relative",
      }}
    >
      <Test>
        <Card>
          <StyledImage>
            <img className="logo" src={up4Logo} />
          </StyledImage>
          <StyledImage>
            <img className="image" src={up4Gif} />
          </StyledImage>
        </Card>
        <div className="details">Hi Hi Hi hHI</div>
      </Test>
      <Test>
        <Card>
          <StyledImage>
            <img className="logo" src={up4Logo} />
          </StyledImage>
          <StyledImage>
            <img className="image" src={up4Gif} />
          </StyledImage>
        </Card>
        <div className="details2">Hi Hi Hi hHI</div>
      </Test>
      <Test>
        <Card>
          <StyledImage>
            <img className="logo" src={up4Logo} />
          </StyledImage>
          <StyledImage>
            <img className="image" src={up4Gif} />
          </StyledImage>
        </Card>
        <div className="details3">Hi Hi Hi hHI</div>
      </Test>
    </div>
  )
}
