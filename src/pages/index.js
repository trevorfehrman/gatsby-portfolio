import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Contact } from "../components/contact"
import { Work } from "../components/work"

import classyFabric from "../../assets/classy-fabric.png"

const Header = styled.div`
  --bg-hue: 180;
  --bg-tint-angle: to bottom left;
  --bg-tint-start: 70%;
  --bg-shade-angle: 80deg;
  font-size: 7rem;
  padding: 1rem 0 2rem 3rem;

  h1{
    /* text-shadow: 0.03em -0.04em #ed65e8, -0.03em 0.04em #f9f32f; */
  }

  h4 {
    font-weight: 300;
    margin-left: 4rem;

  }

  h6 {
    font-size: 4rem;
    font-weight: 300;
    color: ${props => props.theme.white};
    margin-left: 4.2rem;
  }
`

const Body = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.black};
  background-image: url(${classyFabric});
  color: ${props => props.theme.white};
  font-size: 2rem;
  /* padding: 1rem 0 2rem 3rem; */
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Header>
      <h1>Trevor Fehrman</h1>
      <h4>Full Stack Web Developer</h4>
      <h6>Emphasis on Front End and Design</h6>
    </Header>
    <Body>
      <Work />
    </Body>
    <Contact />
  </Layout>
)

export default IndexPage
