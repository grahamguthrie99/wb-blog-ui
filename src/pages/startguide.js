import React from "react"
import { Button } from 'theme-ui'
import { Link } from 'gatsby'
import Layout from "../components/layout"
import SEO from "../components/seo"




class StarterGuide extends React.Component {
    render() {
        const siteTitle = "Wealthy Bytes"
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO
                    title="Wealthy Bytes"
                    keywords={[`blog`, `react`, `algorithmic trading`, `python`, 'personal finance',
                        'wealthy bytes', 'quant', 'investing', 'trading', 'quantopian', 'investing']}
                />

                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: "500px" }} src="../../party.svg" alt="Party" />
                </div>
                <h2>
                    You have just taken a step in the right direction.
                </h2>
                <p>
                    There is a distinction between being rich and being wealthy.
                </p>
                <p>
                    A high salary <span role="img" aria-label="salary emoji"> 💰 </span> , an expensive car <span role="img" aria-label="car emoji"> 🏎 </span>, designer clothing <span role="img" aria-label="shopping emoji"> 🛍 </span>, ect. are all images of excess, but they carry little weight on the scale of wealth.
                </p>
                <p>
                    With stagnant wages and a rising cost of living, statistics like:
                </p>
                <ul>
                    <li><b>74%</b> of all American employees live paycheck to paycheck</li>
                    <li><b>25%</b>  of households that earn over <b>$150,000</b>  live paycheck to paycheck</li>
                    <li><b>58%</b>  of Americans have less than <b>$1,000</b>  in savings </li>
                </ul>
                <p>
                    are only going to get worse.
                </p>
                <p>
                    So many struggle with financial fitness.
                </p>
                <p>
                    Budgeting seems like a pain. Investing appears complicated. Starting a business is risky.
                </p>
                <p>
                    Excuses, excuses.
                </p>
                <p>
                    ...In reality,
                </p>
                <h2>
                    Personal finance is simple.
                </h2>
                <p>
                    Building wealth starts by following a series of steps.
                </p>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: "500px" }} src="../steps.svg" alt="Steps" />
                </div>
                <p>
                    The steps may seem daunting. But as a programmer, you are already accustomed to following a set of objectives.
                </p>
                <p>
                    Overtime, the steps will be come second nature, and you will reap the rewards.
                </p>
                <p>
                    No more excuses...
                </p>
                <h2>
                    Time to start.
                </h2>
                <p>
                    The following list is a set of curated objectives, designed to help you start of your journey toward building wealth:
                </p>
                <h4> 1. Calculate your monthly expenses. </h4>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: "500px" }} src="../calculate.svg" alt="Calculate" />
                </div>
                <h4> 2. Create a budget so that you can save more than you spend. </h4>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: "500px" }} src="../money_jar.svg" alt="Budget" />
                </div>
                <h4> 3. Contribute up to your employer's 401k/403b match. </h4>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: "500px" }} src="../employee.svg" alt="Employer" />
                </div>
                <h4> 4. Concentrate on paying off all debt. </h4>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: "500px" }} src="../debt.svg" alt="Debt" />
                </div>
                <h4> 5. Construct an emergecy fund consisting of 3-6 months of expenses. </h4>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: "500px" }} src="../emergency.svg" alt="Emergency" />
                </div>
                <h4> 6. Capture the benefits of a tax-advantaged investment account. </h4>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: "500px" }} src="../contribute.svg" alt="Contribute" />
                </div>
                <h4> 7. Continue to save, invest, and focus on generating positive cash flow. </h4>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <img style={{ width: "500px" }} src="../retirement.svg" alt="Retirement" />
                </div>
                <h2>
                    What's next?
                </h2>
                <p>
                    We create content on a variety of topics. Check out our blog to learn about automating your investment research, building an algorithmic trading strategy or starting a side project.
                </p>
                <Link to="/blog/">
                    <Button sx={{ text: 'body' }} marginTop="15px">View the Rest of Our Content</Button>
                </Link>

            </Layout>
        )
    }
}

export default StarterGuide