import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Button } from 'theme-ui'


class Disclaimer extends React.Component {
    render() {
        const siteTitle = "Wealthy Bytes"
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="Wealthy Bytes" />
                <h2>Disclaimer</h2>

                <p>Before using this site, please make sure that you note the following important information:</p>

                <h3>Do your Own Research</h3>
                <p>
                    Our content is intended to be used and must be used for informational purposes only.
                    It is very important to do your own analysis before making any investment based on
                    your own personal circumstances. You should take independent financial advice
                    from a professional in connection with, or independently research and verify,
                    any information that you find on our Website and wish to rely upon, whether
                    for the purpose of making an investment decision or otherwise.
                    </p>

                <h3>No Investment Advice</h3>
                <p>
                    Our Website is a financial data and news portal, discussion forum and content aggregator.
                    Wealthy Bytes is not a broker/dealer, we are not an investment advisor, we have no access
                    to non-public information about publicly traded companies, and this is not a place for the
                    giving or receiving of financial advice, advice concerning investment decisions or tax or
                    legal advice. We are not regulated by the Financial Services Authority.
                    </p>

                <p>
                    We are an educational forum for analysing, learning & discussing general and generic
                    information related to stocks, investments and strategies. No content on the site
                    constitutes - or should be understood as constituting - a recommendation to enter
                    in any securities transactions or to engage in any of the investment strategies
                    presented in our site content. We do not provide personalised recommendations or
                     views as to whether a stock or investment approach is suited to the financial
                     needs of a specific individual.
                     </p>

                <h3>Individual Empowerment, not Hand-Holding</h3>
                <p>
                    This is the beginning of a journey, not the end. Where we present investment screens,
                    the results should only be treated as candidates for further research, not as a buy
                    list or set of recommendations. Screening may help to narrow a search based on pre-defined
                    criteria but it is not a substitute for independent research reflecting your individual
                    criteria for investing/trading.
                    </p>

                <p>Where we offer valuation tools, these are solely for informational & educational purposes
                    so that users can easily run their own valuations. The pre-defined values are simply a
                    starting point based on global assumptions that we have applied across the entire market –
                    users should amend them as they see fit and not regard them as a substitute for their own
                    judgment. Any resulting valuation outputs are necessarily generic and are not endorsed
                    for a given stock by Wealthy Bytes.
                    </p>


                <h3>No reliance</h3>
                <p>
                    Accordingly, we will not be liable, whether in contract, tort (including negligence) or otherwise,
                    in respect of any damage, expense or other loss you may suffer arising out of such information or
                    any reliance you may place upon such information. Any arrangements between you and any third
                    party contacted via the Website are at your sole risk.
                </p>

                <h3>Investment Warnings</h3>
                <p>We would like to draw your attention to the following important investment warnings.</p>

                <p>The value of shares and investments and the income derived from them can go down as well as up;
                Investors may not get back the amount they invested - losing one's shirt is a real risk;
                Past performance is not a guide to future performance.
                </p>
                <Link to="/">
                    <Button sx={{ text: 'body' }} marginTop="15px">Home</Button>
                </Link>
            </Layout>
        )
    }
}

export default Disclaimer


