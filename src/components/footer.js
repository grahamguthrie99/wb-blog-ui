import React from "react"
import styled from "styled-components"
import { NavLink, Flex, Divider } from 'theme-ui'
import Bio from "./bio";

const FooterBar = styled.footer`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  padding: 15px;

`

const FooterContent = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const Footer = ({ menuLinks }) => {

    return (
        <FooterBar>
            <Bio />
            <Divider />
            <FooterContent>
                <div style={{ maxWidth: '150px' }}> © {new Date().getFullYear()}, Created By: <a href='https://grahamguthrie-99.web.app/'> Graham Guthrie </a>
                    {` `}
                </div>
                <Flex as='nav' sx={{ flexDirection: 'column', justifyContent: 'flex-start' }}>
                    {menuLinks.map(link => (
                        <NavLink sx={{ padding: 0, textAlign: 'left' }} key={link.name} href={link.link} p={2}>
                            {link.name}
                        </NavLink>
                    ))}
                </Flex>
            </FooterContent>
        </FooterBar>
    )

}




export default Footer;
