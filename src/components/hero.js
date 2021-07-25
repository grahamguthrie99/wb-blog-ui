import React from "react"
import styled from "styled-components"

const HeroContainer = styled.div`
  display: flex; 
  justify-content: space-evenly; 
  align-items: center; 
  flex-wrap: nowrap;
  margin-top:24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }

`

const HeroImage = styled.img`
    max-width: 100%; 
    height: auto; 
    object-fit: contain; 

    @media (max-width: 768px) {
        max-width: 50%;
    }
`

const Hero = () => {

    return (
        <HeroContainer>
            <HeroImage src="./coding_.svg" alt="Write Code" />
            <h1 style={{ margin: 0 }}> + </h1>
            <HeroImage src="./finance_analysis_.svg" alt="Analyze Financials" />
            <h1 style={{ margin: 0 }}> = </h1>
            <HeroImage src="./revenue_.svg" alt="Reap the Rewards" />
        </HeroContainer>

    )

}




export default Hero;
