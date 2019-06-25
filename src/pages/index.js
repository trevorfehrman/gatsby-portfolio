import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Contact } from "../components/contact"
import { Work } from "../components/work"
import { Github } from "../../assets/github"
import Timeline from "../components/Timeline"
import Footer from "../components/Footer"
import Skills from "../components/Skills"
import classyFabric from "../../assets/classy-fabric.png"

const Header = styled.div`
  --bg-hue: 180;
  --bg-tint-angle: to bottom left;
  --bg-tint-start: 70%;
  --bg-shade-angle: 80deg;
  font-size: 7rem;
  padding: 1rem 0 2rem 3rem;
  position: relative;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    padding: 0;
  }

  & > div {
    @media (max-width: 9000px) {
      display: flex;
      flex-direction: column;
      place-content: center;
      place-items: center;
    }
  }

  h1 {
    width: 90%;
    @media (max-width: 900px) {
      font-size: 10rem;
    }

    @media (max-width: 500px) {
      font-size: 6rem;
    }
    /* text-shadow: 0.03em -0.04em #ed65e8, -0.03em 0.04em #f9f32f; */
  }

  h4 {
    font-weight: 300;
    margin-left: 4rem;
    width: 70%;
    @media (max-width: 900px) {
      font-size: 8rem;
    }
    @media (max-width: 500px) {
      font-size: 4rem;
    }
  }

  h6 {
    font-size: 4rem;
    font-weight: 300;
    color: ${props => props.theme.white};
    margin-left: 4.2rem;
    width: 70%;
    @media (max-width: 900px) {
      font-size: 6rem;
      margin-bottom: 3rem;
    }
    @media (max-width: 500px) {
      font-size: 2rem;
    }
  }

  .github {
    height: 100%;
    background-color: #40a5a6;
    padding: 3rem;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
    display: flex;
    place-content: center;
    place-items: center;
    transition: all 0.2s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #f44236;
    }

    @media (max-width: 900px) {
      position: static;

      background-color: #40a5a64a;
    }
  }
`

const Body = styled.div`
  /* min-height: 200vh; */
  background-color: ${props => props.theme.black};
  background-image: url(${classyFabric});
  color: ${props => props.theme.white};
  font-size: 2rem;
  /* padding: 1rem 0 2rem 3rem; */
`

const Spacer = styled.div`
  background-color: #29292959;
  height: 60rem;
  width: 70%;
  margin: 7rem auto 0 auto;
  color: transparent;
  text-shadow: 0 0 0 #313131;
  font-size: 10rem;
  text-align: center;
  display: flex;
  place-content: center;
  place-items: center;

  --notchSize: 4rem;

  clip-path: polygon(
    0% var(--notchSize),
    var(--notchSize) 0%,
    calc(100% - var(--notchSize)) 0%,
    100% var(--notchSize),
    100% calc(100% - var(--notchSize)),
    calc(100% - var(--notchSize)) 100%,
    var(--notchSize) 100%,
    0% calc(100% - var(--notchSize))
  );

  span::selection {
    color: ${props => props.theme.white};
    background: ${props => props.theme.red};
  }

  @media (max-width: 900px) {
    display: none;
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header>
      <div>
        <h1>Trevor Fehrman</h1>
        <h4>Full Stack Web Developer</h4>
        <h6>Emphasis on Front End and Design</h6>
      </div>
      <a
        href="https://github.com/trevorfehrman/"
        target="_blank"
        className="github"
      >
        <Github />
      </a>
    </Header>
    <Body>
      <Work />
      <Spacer>
        <span>( •_•)>⌐■-■ (⌐■_■)</span>
      </Spacer>
      <Timeline />
      <Skills />
    </Body>
    <Footer />
    <Contact />
  </Layout>
)

export default IndexPage
