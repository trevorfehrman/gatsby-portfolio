import React from "react";
import styled, {keyframes} from "styled-components";

import {Twitter} from "../../assets/twitter.js";
import {Send} from "../../assets/send.js";
import {LinkedIn} from "../../assets/linkedin.js";

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
  display: flex;

  div::selection {
    background: yellow;
    color: ${props => props.theme.white};
  }
  .icons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
  }

  &:hover {
    transform: translateX(-3px);
    width: 40rem;
    transform-origin: bottom;
    box-shadow: 1px 1px #53a7ea, 2px 2px #53a7ea, 3px 3px #53a7ea;
  }
  .details {
    margin-left: 2rem;
    user-select: all;
    white-space: nowrap;
    transition: all 0.2s ease-in;
    
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
    margin-left: 7rem;
    position: relative;

    font-weight: 300;
  }
`;

export const Contact = () => {
  return (
    <ContactBox>
      <div className="icons">
        <Twitter />
        <LinkedIn />
        <Send />
      </div>
      <div className="details" style={{display: 'flex', flexDirection: 'column'}}>
        <div className='contact details'>CONTACT</div>
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', flexGrow: 1, maxHeight: '153px'}}>
        <div className='details'>@TrevorFehrman</div>

        <div className='details'>Trevor Fehrman</div>

        <div className='details'>trevorfehrman@gmail.com</div>
        </div>
      </div>
    </ContactBox>
  );
};
