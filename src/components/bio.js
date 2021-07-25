import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <Container>
            <Image
              fixed={data.avatar.childImageSharp.fixed}
              alt={author}
              style={{
                marginRight: 20,
                marginBottom: 0,
                minWidth: 50,
              }}

            />
            <p>
              <strong>{author}</strong>, serving personal finance with code.
              {` `}
              <a style={{ boxShadow: `none`, color: '#3176f4' }} to={`https://twitter.com/${social.twitter}`} href={`https://twitter.com/${social.twitter}`}>
                Follow us on Twitter
              </a>
            </p>
          </Container>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/favicon.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

export default Bio
