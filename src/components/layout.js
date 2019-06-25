/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React, { Fragment } from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import { createGlobalStyle } from "styled-components"
import { ThemeProvider } from "styled-components"

const theme = {
  black: "#232323",
  white: "#fafafa",
  red: "#f44336",
}

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=FiraSans');


@font-face {
  font-family: 'Fira Sans';
  src: url('webfont.eot'); /* IE9 Compat Modes */
  src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
  *,
  *::after,
  *::before{
    margin: 0;
    padding: 0;
    box-sizing:inherit;

    
  /* Setting a valid hue (any unitless number) will auto-set all the other values */
  --bg-hue: initial;
  
  /* Adjust the base saturation and lightness as desired */
  --bg-saturation: 50%;
  --bg-lightness: 40%;
  
  /* set angles for the tint and shade gradients */
  --bg-tint-angle: -20deg;
  --bg-shade-angle: -110deg;

  /* set amounts for default tint & shade */
  --bg-tint-amount: 20%;
  --bg-shade-amount: 20%;
  
  /* set indiviidual hues for the tint and shade */
  /* defaults are set by higher-level arguments…
     which alows for both simpler & more customized uses*/
  --bg-tint-hue: var(--bg-hue);
  --bg-shade-hue: var(--bg-hue);
  
  /* set the gradient positions all at once */
  --bg-gradient-stops: 30%;
  
  /* override tint/shade gradients directly */
  --bg-tint-start: var(--bg-gradient-stops);
  --bg-tint-end: var(--bg-tint-start);
  --bg-shade-start: var(--bg-gradient-stops);
  --bg-shade-end: var(--bg-shade-start);

  /* override tint/shade saturation & lightness directly */
  --bg-tint-saturation: var(--bg-saturation);
  --bg-tint-lightness: calc(var(--bg-lightness) + var(--bg-tint-amount));
  --bg-shade-saturation: var(--bg-saturation);
  --bg-shade-lightness: calc(var(--bg-lightness) - var(--bg-shade-amount));

  /* or override any individual color directly */
  --bg-color: hsl(var(--bg-hue), var(--bg-saturation), var(--bg-lightness));
  --bg-tint: hsla(var(--bg-tint-hue), var(--bg-tint-saturation), var(--bg-tint-lightness), 0.25);
  --bg-shade: hsla(var(--bg-shade-hue), var(--bg-shade-saturation), var(--bg-shade-lightness), 0.25);

  
  /* this is the internal logic that creates your angled tint/shade background */
  --bg-image: 
    linear-gradient(
      var(--bg-tint-angle),
      var(--bg-tint) var(--bg-tint-start),
      transparent var(--bg-tint-end)
    ),
    linear-gradient(
      var(--bg-shade-angle),
      var(--bg-shade) var(--bg-shade-start),
      transparent var(--bg-shade-end)
    )
  ;
  
  /* Creating a final "output" variable acts like a function return */
  --bg: var(--bg-image) var(--bg-color);
  
  /* Applying that value to a property creates a mixin */
  /* Since the initial return is invalid, nothing happens unless we set a --bg-hue */
  background: var(--bg);

  }

  html {
    font-size: 62.5%;
  }

  body {
  font-size: 1.3rem;
  box-sizing: border-box;
  font-family: 'Fira Sans', sans-serif;
  color: ${props => props.theme.black};

  h1::selection, h2::selection, h3::selection, h4::selection, h5::selection, h6::selection, p::selection, div::selection, span::selection {
    color: ${props => props.theme.white};
    background: ${props => props.theme.red};

  }
   




  }
`

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <Fragment>
        <ThemeProvider theme={theme}>
          <Fragment>
            <GlobalStyle />

            <main style={{ position: "relative" }}>{children}</main>
          </Fragment>
        </ThemeProvider>
      </Fragment>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
