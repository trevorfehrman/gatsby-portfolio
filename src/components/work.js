import React, { Fragment, useState } from "react"
import styled from "styled-components"
import Up4 from "./Up4"
import QuizBaker from "./QuizBaker"
import BombNom from "./BombNom"

import up4Gif from "../../assets/events.gif"
import up4Logo from "../../assets/up4Logo.png"
import quizBakerLogo from "../../assets/quizBakerLogo.svg"
import quizBakerGif from "../../assets/quizBaker.gif"
import bombNomLogo from "../../assets/bombNomLogo.svg"
import bombNomGif from "../../assets/bombNomGif.gif"
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
    transform: translateY(-1rem);
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
const Container = styled.div`
  width: 30%;
  height: 30rem;

  .details {
    display: flex;
    &:hover {
      transform: scaleY(1);
      width: 95%;

      .nav {
        opacity: 1;
      }
      .content {
        opacity: 1;
      }
    }

    .nav {
      background-color: white;
      color: #0092a8;
      width: 25%;
      padding: 4rem;
      overflow: hidden;
      border: 6px solid #81d6e3;
      border-right-width: 1px;
      display: flex;
      place-content: center;
      place-items: center;
      opacity: 0;
      transition: all 0.2s ease-in 0.6s;

      .selected {
        height: 100%;
        padding: 3rem;
        background-color: #81d6e3;
        position: absolute;
        top: -1rem;
        z-index: -1;
        width: 60rem;
        margin-left: -70px;
        transform: translateX(-10%);
        transition: all 0.5s ease-in-out;
        clip-path: polygon(0% 0%, 100% 0, 75% 100%, 0% 100%);
      }

      .selected--text {
        color: white;
      }

      h2 {
        margin-bottom: 2rem;
      }
      ul {
        margin-left: 3rem;
      }
      li {
        list-style: none;
        position: relative;
        cursor: pointer;
        z-index: 1;
        transition: all 0.2s ease-in-out;
        &:not(:last-child) {
          margin-bottom: 5rem;
        }
        &:hover {
          color: white;
          span {
            color: white;
          }
        }
        &:hover .highlight {
          transform: translateX(-10%);
        }
        .highlight {
          height: 100%;
          padding: 3rem;
          background-color: #81d6e3;
          position: absolute;
          top: -1rem;
          z-index: -1;
          width: 60rem;
          margin-left: -70px;
          transform: translateX(-130%);
          transition: all 0.5s ease-in-out;
          clip-path: polygon(0% 0%, 100% 0, 75% 100%, 0% 100%);
        }
        span {
          color: #ff101f;
        }
      }
    }

    .content {
      background-color: white;
      border: 6px solid #81d6e3;
      border-left: none;
      width: 75%;
      color: black;
      padding: 8rem;
      opacity: 0;
      transition: all 0.2s ease-in 0.6s;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-content: center;
      align-items: center;
      overflow-y: scroll;

      h2 {
        color: #ff101f;
        font-weight: 300;
        font-size: 4rem;
        margin-bottom: 6rem;
      }
      img {
        margin-top: 3rem;
        margin-bottom: 3rem;
        border-radius: 2rem;
        height: 100%;
      }

      p {
        color: #666;
        width: 60%;
        text-align: center;
        &:not(:last-child) {
          margin-bottom: 5rem;
        }
      }
    }
  }

  .details2 {
    display: flex;
    &:hover {
      transform: scaleY(1);
      width: 95%;

      .nav {
        opacity: 1;
      }
      .content {
        opacity: 1;
      }
    }

    .nav {
      background-color: white;
      color: #d76a84;
      width: 25%;
      padding: 4rem;
      overflow: hidden;
      border: 6px solid #d76a84;
      border-right-width: 1px;
      display: flex;
      place-content: center;
      place-items: center;
      opacity: 0;
      transition: all 0.2s ease-in 0.6s;

      .selected {
        height: 100%;
        padding: 3rem;
        background-color: #d76a84;
        position: absolute;
        top: -1rem;
        z-index: -1;
        width: 60rem;
        margin-left: -70px;
        transform: translateX(-10%);
        transition: all 0.5s ease-in-out;
        clip-path: polygon(0% 0%, 100% 0, 75% 100%, 0% 100%);
      }

      .selected--text {
        color: white;
      }

      h2 {
        margin-bottom: 2rem;
      }
      ul {
        margin-left: 3rem;
      }
      li {
        list-style: none;
        position: relative;
        cursor: pointer;
        z-index: 1;
        transition: all 0.2s ease-in-out;
        &:not(:last-child) {
          margin-bottom: 5rem;
        }
        &:hover {
          color: white;
          span {
            color: white;
          }
        }
        &:hover .highlight {
          transform: translateX(-10%);
        }
        .highlight {
          height: 100%;
          padding: 3rem;
          background-color: #d76a84;
          position: absolute;
          top: -1rem;
          z-index: -1;
          width: 60rem;
          margin-left: -70px;
          transform: translateX(-130%);
          transition: all 0.5s ease-in-out;
          clip-path: polygon(0% 0%, 100% 0, 75% 100%, 0% 100%);
        }
        span {
          color: #00b893;
        }
      }
    }

    .content {
      background-color: white;
      border: 6px solid #d76a84;
      border-left: none;
      width: 75%;
      color: black;
      padding: 8rem;
      opacity: 0;
      transition: all 0.2s ease-in 0.6s;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-content: center;
      align-items: center;
      overflow-y: scroll;

      h2 {
        color: #00b893;
        font-weight: 300;
        font-size: 4rem;
        margin-bottom: 6rem;
      }
      img {
        margin-top: 3rem;
        margin-bottom: 3rem;
        border-radius: 2rem;
        height: 100%;
      }

      p {
        color: #666;
        width: 60%;
        text-align: center;
        &:not(:last-child) {
          margin-bottom: 5rem;
        }
      }
    }
  }

  .details3 {
    display: flex;
    &:hover {
      transform: scaleY(1);
      width: 95%;

      .nav {
        opacity: 1;
      }
      .content {
        opacity: 1;
      }
    }

    .nav {
      background-color: white;
      color: #263238;
      width: 25%;
      padding: 4rem;
      overflow: hidden;
      border: 6px solid #d50000;
      border-right-width: 1px;
      display: flex;
      place-content: center;
      place-items: center;
      opacity: 0;
      transition: all 0.2s ease-in 0.6s;

      .selected {
        height: 100%;
        padding: 3rem;
        background-color: #263238;
        position: absolute;
        top: -1rem;
        z-index: -1;
        width: 60rem;
        margin-left: -70px;
        transform: translateX(-10%);
        transition: all 0.5s ease-in-out;
        clip-path: polygon(0% 0%, 100% 0, 75% 100%, 0% 100%);
      }

      .selected--text {
        color: white;
      }

      h2 {
        margin-bottom: 2rem;
      }
      ul {
        margin-left: 3rem;
      }
      li {
        list-style: none;
        position: relative;
        cursor: pointer;
        z-index: 1;
        transition: all 0.2s ease-in-out;
        &:not(:last-child) {
          margin-bottom: 5rem;
        }
        &:hover {
          color: white;
          span {
            color: white;
          }
        }
        &:hover .highlight {
          transform: translateX(-10%);
        }
        .highlight {
          height: 100%;
          padding: 3rem;
          background-color: #263238;
          position: absolute;
          top: -1rem;
          z-index: -1;
          width: 60rem;
          margin-left: -70px;
          transform: translateX(-130%);
          transition: all 0.5s ease-in-out;
          clip-path: polygon(0% 0%, 100% 0, 75% 100%, 0% 100%);
        }
        span {
          color: #d50000;
        }
      }
    }

    .content {
      background-color: white;
      border: 6px solid #d50000;
      border-left: none;
      width: 75%;
      color: black;
      padding: 8rem;
      opacity: 0;
      transition: all 0.2s ease-in 0.6s;
      display: flex;
      flex-direction: column;
      justify-content: space-evenly;
      align-content: center;
      align-items: center;
      overflow-y: scroll;

      h2 {
        color: #263238;
        font-weight: 300;
        font-size: 4rem;
        margin-bottom: 6rem;
      }
      img {
        margin-top: 3rem;
        margin-bottom: 3rem;
        border-radius: 2rem;
        height: 100%;
      }

      p {
        color: #666;
        width: 60%;
        text-align: center;
        &:not(:last-child) {
          margin-bottom: 5rem;
        }
      }
    }
  }
`

const Card = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  margin-top: 7rem;
  &:hover {
    border-bottom: none;
    border-top-left-radius: 7px;
    border-top-right-radius: 7px;
    border: ${props =>
      props.up4
        ? "6px solid #81d6e3"
        : props.quizBaker
        ? "6px solid #d76a84"
        : "6px solid #d50000"};
  }
  & + .details {
    transform: scaleY(0);
    transition: transform 0.2s ease-in, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
    transform-origin: top;
    height: 60rem;
    width: 30rem;
    background-color: #81d6e3;
    position: absolute;
  }

  &:hover + .details {
    transform: scaleY(1);
    width: 95%;

    .nav {
      opacity: 1;
    }
    .content {
      opacity: 1;
    }
  }

  & + .details2 {
    transform: scaleY(0);
    transition: transform 0.2s ease-in, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
    transform-origin: center;
    height: 60rem;
    width: 30rem;
    background-color: #d76a84;
    position: absolute;
    left: 0rem;
    margin-left: 3rem;
  }

  &:hover + .details2 {
    transform: scaleY(1);
    width: 95%;

    .nav {
      opacity: 1;
    }
    .content {
      opacity: 1;
    }
  }

  & + .details3 {
    transform: scaleY(0);
    transition: transform 0.2s ease-in, width 0.4s cubic-bezier(1, 0, 0, 1) 0.2s;
    transform-origin: top;
    height: 60rem;
    width: 30rem;
    background-color: #d50000;
    position: absolute;
    right: 1.7%;
  }

  &:hover + .details3 {
    transform: scaleY(1);
    width: 95%;
    .nav {
      opacity: 1;
    }
    .content {
      opacity: 1;
    }
  }
`
export const Work = props => {
  const [up4Content, setUp4Content] = useState("Picture")
  const [work, setWork] = useState("")
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        position: "relative",
        width: "85%",
        margin: "0 auto",
      }}
    >
      {console.log(up4Content)}
      <Container>
        <Card up4 onClick={() => setWork("up4")}>
          <StyledImage>
            <img className="logo" src={up4Logo} />
          </StyledImage>
          <StyledImage>
            <img className="image" src={up4Gif} />
          </StyledImage>
        </Card>
        <Up4 up4 setUp4Content={setUp4Content} up4Content={up4Content} />
      </Container>
      <Container>
        <Card quizBaker>
          <StyledImage>
            <img
              style={{ height: "30rem", marginTop: "1rem" }}
              className="logo"
              src={quizBakerLogo}
            />
          </StyledImage>
          <StyledImage>
            <img className="image" src={quizBakerGif} />
          </StyledImage>
        </Card>
        <QuizBaker setUp4Content={setUp4Content} up4Content={up4Content} />
      </Container>
      <Container>
        <Card>
          <StyledImage>
            <img
              style={{ marginTop: "3rem" }}
              className="logo"
              src={bombNomLogo}
            />
          </StyledImage>
          <StyledImage>
            <img className="image" src={bombNomGif} />
          </StyledImage>
        </Card>
        <BombNom />
      </Container>
    </div>
  )
}
