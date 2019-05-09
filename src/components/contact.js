import React from "react"
import styled, { keyframes } from "styled-components"

import { Twitter } from "../../assets/twitter.js"
import { Send } from "../../assets/send.js"
import { LinkedIn } from "../../assets/linkedin.js"

const ContactBox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
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

  &:hover > .details {
    opacity: 1;
  }

  svg {
    font-size: 3rem;
    margin-left: 0.3rem;

    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  .details {
    margin-left: 7rem;
    user-select: all;
    white-space: nowrap;
    transition: all 0.2s ease-in;
    opacity: 0;
  }

  .contact {
    margin-left: 7rem;
    position: relative;

    font-weight: 300;
  }
`

export const Contact = () => {
  return (
    <ContactBox>
      <div className="contact details">CONTACT</div>
      <Twitter />
      <div className="details">@TrevorFehrman</div>
      <LinkedIn />
      <div className="details">Trevor Fehrman</div>
      <Send />
      <div className="details">trevorfehrman@gmail.com</div>
    </ContactBox>
  )
}
