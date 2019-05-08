import React from "react"
import styled, { keyframes } from "styled-components"

import { Twitter } from "../../assets/twitter.js"
import { Send } from "../../assets/send.js"
import { LinkedIn } from "../../assets/linkedin.js"

const moveThenFade = keyframes`
    0%{
        opacity: 0;
        transform: translateX(10rem);
    }

    80%{
        opacity: .8;
        transform: translateX(2rem);
    }

    90% {
        opacity: .9;
    }

    100%{
        opacity: 1;
        transform: translateX(0);
       
    }
`

const ContactBox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  /* height: 5rem; */
  height: 25rem;
  width: 7rem;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  font-size: 1.8rem;
  padding: 2rem;
  border-bottom-left-radius: 7rem;
  border-top-right-radius: 7rem;
  transition: all 0.4s ease-out;
  padding-top: -1rem;
  overflow: hidden;

  div::selection {
    background: yellow;
    color: ${props => props.theme.white};
  }

  &:hover {
    transform: translateX(-3px);
    width: 40rem;
    transform-origin: bottom;
    box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
  }

  svg {
    font-size: 3rem;
    margin-left: .3rem;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }
 

  .details {
    /* opacity: 0; */
    margin-left: 7rem;
    /* transition: all 0.2s 0.3s ease-in; */
    user-select: all;
    white-space: nowrap;
  }
  &:hover > .details {
    /* opacity: 1; */
  }

  .contact {
    margin-left: 7rem;
    position: relative;
   
  }
`

export const Contact = () => {
  return (
    <ContactBox>
      <div className="contact">CONTACT</div>
      <Twitter />
      <div className="details twitter">@TrevorFehrman</div>
      <LinkedIn />
      <div className="details linkedIn">Trevor Fehrman</div>
      <Send />
      <div className="details email">trevorfehrman@gmail.com</div>
    </ContactBox>
  )
}
