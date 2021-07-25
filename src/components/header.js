import React, { useState } from "react"
import styled from "styled-components"
import { NavLink } from 'theme-ui'


const NavBar = styled.div`
    display: flex; 
    justify-content: space-between;
    align-items: center; 
`

const Title = styled.div`
    display:flex; 
    flex-direction: column;
    justify-content: flex-start; 
`

const Hamburger = styled.button`
    all: unset; 
    @media (min-width: 768px) {
        display: none;
    }

`
const DesktopMenu = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
    display: flex;
    flex-direction: row; 
    justify-content: center;
    align-items: center; 
`

const MobileMenu = styled.div`
    @media (min-width: 768px) {
        display: none;
    }
    display: flex;
    flex-direction: column; 
    justify-content: center;
    align-items: center; 
    border-bottom: 2px solid #25c19b;
    border-top: 2px solid #25c19b;
`

const Header = ({ siteTitle, menuLinks }) => {
    const [visible, setVisible] = useState(false)
    return (
        <header>
            <NavBar>
                <Title>
                    <h1 style={{ marginBottom: 0 }}>{siteTitle}</h1>
                    <small style={{ marginTop: -10, textAlign: 'center' }}>Personal finance served with code.</small>
                </Title>
                <Hamburger onClick={() => setVisible(!visible)} >{visible ? <h1>×</h1> : <h1>≡</h1>}</Hamburger>
                <DesktopMenu>
                    {menuLinks.map(link => (

                        <NavLink key={link.name} href={link.link} p={2}>
                            {link.name}
                        </NavLink>

                    ))}
                </DesktopMenu>

            </NavBar>
            {visible &&
                <MobileMenu>
                    {menuLinks.map(link => (

                        <NavLink key={link.name} href={link.link} p={2}>
                            {link.name}
                        </NavLink>

                    ))}
                </MobileMenu>
            }

        </header>

    )

}

export default Header;
