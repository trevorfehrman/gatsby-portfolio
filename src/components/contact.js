import React from "react"
import styled from "styled-components"

const ContactBox = styled.div`
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  height: 20rem;
  width: 40rem;
  background-color: ${props => props.theme.red};
  color: ${props => props.theme.white};
  font-size: 1.5rem;
  padding: 2rem;
  border-bottom-left-radius: 7rem;
  border-top-right-radius: 7rem;
  transition: all 0.4s ease-in-out;

  div::selection {
    background: white;
    color: ${props => props.theme.white};
  }

  &:hover {
    height: 27rem;
  }

  .expand {
    transition: all .4s 0.2s ease-in-out;
    opacity: 0;
  }
  &:hover > .expand {
    opacity: 1;
  }

  .twitter {
    transform: translateY(-1.8rem);
    transition: all 0.4s ease-in-out;
  }
  &:hover > .twitter {
    transform: translateY(0);
  }

  .email {
    transform: translateY(-3.8rem);
    transition: all 0.4s ease-in-out;
  }
  &:hover > .email {
    transform: translateY(0);
  }
`

export const Contact = () => {
  return (
    <ContactBox>
      <div className="expand">Twitter Handle</div>
      <div className="twitter">@TrevorFehrman</div>
      <div className="expand">Email</div>
      <div className="email">trevorfehrman@gmail.com</div>
    </ContactBox>
  )
}
