import React from "react"
import styled from "styled-components"
import { StaticQuery, graphql } from "gatsby"
import { Container } from 'theme-ui'
import Header from "./header"
import Footer from "./footer";


const Layout = ({ children }) => (

  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
      <Wrapper>

        <Container p={3}>
          <Header siteTitle={data.site.siteMetadata.title} menuLinks={data.site.siteMetadata.menuLinks} />
          <main>{children}</main>
          <Footer menuLinks={data.site.siteMetadata.menuLinks} />
        </Container>

      </Wrapper>
    )}
  />
)

const Wrapper = styled.div`
  min-height: 100vh;
`

export default Layout


