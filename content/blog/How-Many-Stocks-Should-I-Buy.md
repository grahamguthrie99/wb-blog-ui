---
path: how-many-stocks
date: 2020-06-15T23:42:37.428Z
author: Graham Guthrie
title: How Many Stocks Should I Buy?
description: "A tough question. An age old question. In this clip, Warren Buffet, a famed
  investor, scoffs at the idea of diversification. He states…"
---

A tough question. An age old question. In this [clip](https://www.youtube.com/watch?v=bHPzQIW_pww), Warren Buffet, a famed investor, scoffs at the idea of diversification. He states that “3 businesses that you know, are more than enough to do very well”. Charlie Munger, long time parter of Buffet only owns 4 stocks \[1\]. On the opposite end of the spectrum, Peter Lynch, notorious manager of the Magellan Fund, in his book [One Up on Wall Street](#), confessed to owning shares of 1,400 different companies at one point in time. Lynch takes wildly different stance from his counterparts. Is diversification a myth? Are Buffet and Munger right?

![Photo By Roberto Júnior](/../assets/0*tcIeccaVIFZVwapD.jpg "Photo By Roberto Júnior")


### Risky Business

In order to properly digest the concept of diversification, it helps to begin with understanding risk. When dealing with equities, there are two important types of risk. Specifically, idiosyncratic and systematic risk. A popular CEO stepping down, a factory mishap, or a poorly executed business strategy are types of idiosyncratic risk. In layman’s terms, idiosyncratic risk is specific to an individual company \[2\]. Systematic risk, on the other hand, influences the market as a whole. A timely example, is the country wide COVID-19 shutdown. All companies are exposed to systematic risk.

The goal of any investor is to maximize returns, while limiting risk. The problem stems from the fact that usually when you expect larger returns, you pay for those returns by taking on a larger risk. YOLOing your entire bankroll into a single penny stock that your buddy knows is going to be the next ten bagger is exponentially more risky than buying an index fund that you expect will give you an annualized 10% return.

This article is specifically geared toward those who have an interest in managing their investment portfolios algorithmically. Technically, you could buy an index fund or three of your favorite vetted stocks, follow Buffet’s rules religiously, and be done. But where is the fun in that?

### A Step Further

In the previously mentioned video, Buffet argues that diversification is a myth. His partner and he mock people who rely on the concept of diversification for two main reasons. First, a person who diversifies simply does not know how to evaluate securities properly. Second, an average retail investor cannot properly monitor the activity of a large amount of securities.

As a blog dedicated to algorithmic trading, it would be ignorant to succumb to the advice of Buffet. Although it may be challenging for an individual to monitor the action of an entire universe of securities, the power of programing drastically reduces the amount of effort needed for such a task.

With the advent of exponential amounts of free data and resources, the statements made by Buffet may not stand the test of time. I am not knocking his credibility, instead I’d rather take the side that argues the fact that retail investors and traders with programming capability have an unrealized advantage.

<iframe src="https://giphy.com/embed/3orieUs03VUeeBa7Wo/twitter/iframe" width="435" height="326" frameborder="0" scrolling="no"></iframe>

### Position Concentration Risk

The previous GIF highlights every investor’s worst nightmare. As previously mentioned, when you purchase an asset, you are exposed to different forms of risk. Systematic risk, the risk associated with the market as a whole, cannot be avoided. Idiosyncratic risk, the risk associated with a singular security, on the other hand, can be greatly reduced through diversification.

If the market trends down, there is an overall likelihood that your basket of securities will trend down. When the market declined rapidly during the economic shutdown associated with the COVID-19 virus, a vast amount of publicly traded stocks took a beating. There are ways to manage systematic risk (hedging, ect.) but for now the focus is on limiting idiosyncratic risk, which can expose an investor to large downturns, just like systematic risk.

When Facebook was caught in a privacy scandal, the shares of Clorox did not take face the same drawdown. The two assets are primarily uncorrelated. If an investor only owned shares of Facebook, taking the recommendations of Buffet to an extreme, he would have awoken to a chunk missing from his portfolio. As a personal portfolio manager, an investor needs to be keen to the exponential idiosyncratic risk associated with owning a small amount of securities.

![Lecture 25 in the Quantopian Series](/../assets/1*639y3zvzDtcDa4P4726Lmg.png "Lecture 25 in the Quantopian Series")

The previous picture is pulled from Lecture 25 in the Quantopian Series \[3\]. The picture shows the reduction in volatility that comes from holding an increased number of uncorrelated assets. As an investor buys more uncorrelated securities, the idiosyncratic risk associated with each reduces to a number closer and closer to 0.

The key concept is that the assets need to be uncorrelated. By taking positions in uncorrelated assets, an investor is taking multiple bets, opposed to making a single bet. With the addition of more bets, the probability of winning bet becomes larger and the investor gains an advantage, at the expense of idiosyncratic risk.

### Conclusion

By limiting exposure to idiosyncratic risk, market risk becomes easier to manage. Although adding additional assets may result in a lower overall return, the risk associated with the portfolio will not have you losing any sleep or constantly checking for negative news. In future algorithms, I will dive into how to measure risk and optimize risk management for a portfolio. But for now, I will leave you with three main takeaways: diversification is positive, programming knowledge allows for assets to be analyzed at a rapid speed, and it is possible for a retail trader to manage a personal portfolio like the pros.

### Sources

\[1\] [https://www.gurufocus.com/news/899007/charlie-mungers-only-4-stocks](https://www.gurufocus.com/news/899007/charlie-mungers-only-4-stocks)

\[2\] [https://www.quantopian.com/lectures/the-capital-asset-pricing-model-and-arbitrage-pricing-theory](https://www.quantopian.com/lectures/the-capital-asset-pricing-model-and-arbitrage-pricing-theory)

\[3\] [https://www.quantopian.com/lectures/position-concentration-risk](https://www.quantopian.com/lectures/position-concentration-risk)
