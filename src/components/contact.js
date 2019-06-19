import React from "react"
import styled, { keyframes } from "styled-components"

import { Twitter } from "../../assets/twitter.js"
import { Send } from "../../assets/send.js"
import { LinkedIn } from "../../assets/linkedin.js"

const ContactBox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 20rem;
  width: 7rem;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  font-size: 1.8rem;
  padding: 2rem;
  padding: 3.5rem 2rem;
  border-bottom-left-radius: 7rem;
  border-top-right-radius: 7rem;
  transition: width 0.4s ease-out, box-shadow 0.2s ease-out 0.4s,
    transform 0.2s ease-out 0.4s;
  padding-top: -1rem;
  overflow: hidden;
  display: flex;

  div::selection {
    background: yellow;
    color: ${props => props.theme.white};
  }
  .icons {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    svg {
      font-size: 3rem;
      margin-left: 0.3rem;
      display: block;
      /* &:not(:first-child) {
        margin-top: 1rem;
      } */
    }
  }

  &:hover {
    transform: translateX(-3px);
    width: 33rem;
    transform-origin: bottom;
    box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
  }
  .details {
    margin-left: 1.5rem;
    user-select: all;
    white-space: nowrap;
    transition: all 0.2s ease-in;

    .details--expanded {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-grow: 1;
      max-height: 153px;
      margin-top: 2.7rem;
    }
  }
  .handle {
    font-size: 16px;
    cursor: pointer;
    text-decoration: none;
    color: ${props => props.theme.white};
  }
  /* &:hover > .details {
    display: flex;
  } */

  svg {
    font-size: 3rem;
    margin-left: 0.3rem;
    display: block;
    &:not(:first-child) {
      margin-top: 1rem;
    }
  }

  .contact {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const Contact = () => {
  return (
    <ContactBox>
      <div className='icons'>
        <Twitter />
        <LinkedIn />
        <Send />
      </div>
      <div className='contact details'>
       
          <a
            className='details handle'
            href='https://twitter.com/TrevorFehrman'
            target='_blank'
            rel='noopener noreferrer'
          >
            @TrevorFehrman
          </a>

          <a
            className='details handle'
            href='https://www.linkedin.com/in/trevor-fehrman-0042656/'
            target='_blank'
            rel='noopener noreferrer'
          >
            Trevor Fehrman
          </a>

          <a className='details handle' href='mailto:trevorfehrman@gmail.com'>
            trevorfehrman@gmail.com
          </a>
        </div>
    
    </ContactBox>
  )
}
