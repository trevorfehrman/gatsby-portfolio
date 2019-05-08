import React from "react"
import styled, { keyframes } from "styled-components"

import { Twitter } from "../../assets/twitter.js"
import { Send } from "../../assets/send.js"
import { LinkedIn } from "../../assets/linkedin.js"

const moveThenFade = keyframes`
    0%{
        opacity: 0;
        transform: scaleY(0.8)  translateX(10rem);
    }

    80%{
        opacity: .8;
        transform: scaleY(0.8) translateX(2rem);
    }

    90% {
        opacity: .9;
        transform: scaleY(0.8);
    }

    100%{
        opacity: 1;
        transform: scaleY(0.8) translateX(0);
       
    }
`

const ContactBox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 20rem;
  width: 40rem;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  font-size: 1.8rem;
  padding: 2rem;
  border-bottom-left-radius: 7rem;
  border-top-right-radius: 7rem;
  transition: all 0.4s ease-out;
  padding-top: -1rem;

  div::selection {
    background: yellow;
    color: ${props => props.theme.white};
  }

  &:hover {
    transform: scaleY(1.2) translateX(-3px);
    transform-origin: bottom;
    box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
  }

  svg {
    /* transition: all 0.4s 0.4s ease-out; */
    opacity: 0;
    font-size: 3rem;
    margin-left: 2rem;
    transition: all 0.4s ease-out;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
  &:hover > svg {
    animation: ${moveThenFade} 0.2s ease-out;
    opacity: 1;
    transform: scaleY(0.8);
  }

  .details {
    margin-left: 7rem;
    transition: all 0.4s ease-out;
    user-select: all;
  }
  &:hover > .details {
    transform: scaleY(0.8) translateY(0);
    margin-top: -1rem;
  }

  .twitter {
    margin-left: 5rem;
    transform: translateY(1rem);
  }
  /* &:hover > .twitter {
    transform: translateY(-1.8rem) scaleY(0.8);
  } */

  .linkedIn {
    transform: translateY(-1.5rem);
  }

  .email {
    transform: translateY(-4rem);
  }
`

export const Contact = () => {
  return (
    <ContactBox>
      <Twitter />
      <div className="details twitter">@TrevorFehrman</div>
      <LinkedIn />
      <div className="details linkedIn">Trevor Fehrman</div>
      <Send />
      <div className="details email">trevorfehrman@gmail.com</div>
    </ContactBox>
  )
}
