import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'theme-ui'
import Hero from "../components/hero";


class IndexPage extends React.Component {
  render() {
    const siteTitle = "Wealthy Bytes"
    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Wealthy Bytes"
          keywords={[`blog`, `react`, `algorithmic trading`, `python`, 'personal finance',
            'wealthy bytes', 'quant', 'investing', 'trading', 'quantopian', 'investing']}
        />
        <Hero />
        <h2>
          Spice up your finances. <span role="img" aria-label="pepper emoji">🌶</span>
        </h2>
        <p>
          Did you know that the value of money decreases over time? A dollar today is worth less than a dollar tomorrow. <span role="img" aria-label="down chart emoji">📉 </span>
        </p>
        <p>
          ... a tragedy that leaves you with two options:
        </p>
        <ol>
          <li>Invest your time.</li>
          <li>Invest your money.</li>
        </ol>
        <p>
          By investing, you combat depreciation, and you can make your dollars work for you.
        </p>
        <h2>
          <span role="img" aria-label="stop emoji">
            🛑
          </span> Stop!
        </h2>
        <p>
          If you are are unfamiliar to, new to, or don't know anything about personal finance, fear not!
        </p>
        <p>
          We have prepared an incredible starter guide for you.
        </p>
        <Link to="/startguide/">
          <Button sx={{ text: 'body', marginTop: '15px', marginBottom: '15px' }}>
            Kick Off Your Journey!
          </Button>
        </Link>
        <p>
          When you are ready for more, the next step is where we can help...
        </p>
        <h2>
          Learn how to invest your time and money.
        </h2>
        <p>
          If you have stumbled upon this site, you are most likely familiar with programming, or maybe you are just learning.
        </p>
        <p>
          The hard part is over. You already know how to code.
        </p>
        <p>
          Now... use that knowledge and...
        </p>
        <h2>
          Code to meet your financial goals.</h2>
        <p>Looking for your next personal project?</p>
        <p>These are some of the things you might stumble upon here:</p>
        <ol>
          <li>
            Obtain the list of S&P 500 symbols with just 5 lines of code. (Python)
          </li>
          <li>
            Aquire free financial stock data for your next project. (Python)
          </li>
          <li>
            Build your own version of Robinhood. (React, Firebase, Alpaca)
          </li>
        </ol>
        <h2>
          Start a side hustle, create a stock trading algorithm, or automate your investment research.
        </h2>
        <p>
          Oh wait, the best part is... our content is all <b>FREE</b>!
        </p>
        <Link to="/blog/">
          <Button sx={{ text: 'body' }} marginTop="15px">Go Learn Something!</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
