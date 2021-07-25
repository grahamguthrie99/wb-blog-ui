---
path: five-lines-sandp
date: 2019-07-31T17:54:51.941Z
author: Graham Guthrie
title: 5 Lines of Python to Automate Getting the S&P 500
description: Get a consistent list of the stocks listed on the S&P 500 in 5
  lines of code. Includes export to CSV to use for other projects.
---
In this quick story, I am going to tell you how to get a consistent list of the stocks listed on the S&P 500. For any developer interested in trading stocks, I would suggest checking out the Alpaca API. I have been actively trading for the past couple years, and as a developer, I have been interested in the intersection between programming knowledge and the world of finance.

#### Why You Need This

Most of the tutorials relating to grabbing stock data involve the Yahoo or Google Finance APIs. Both APIs no longer allow access, which makes getting the initial data difficult.

Pulling the list of companies listed in the S&P 500 is important for analysis because it can be used as a benchmark for comparing other trading strategies. Since the S&P 500 offers an annualized return of around 10%, the value of a trading strategy (alpha) can be measured in comparison.

#### What We Are Doing

Today, we will be pulling a regularly updated list of all companies currently listed in the S&P 500. The S&P 500 is an index consisting of the largest companies by market cap listed on the NYSE, NASDAQ, and the Cboe BZX Exchanges. Although there are several other indices, the S&P 500 is usually referenced to describe the current state of the United States Stock Market.

#### How We Will Do It

The only dependency for running this script is Pandas. The Pandas library is an essential data analysis tool. As I continue to publish stories, Pandas will most likely be a reoccurring dependency due to its incredible data manipulation and analysis features.

In terms of the code, we begin by importing pandas. Next, we use the pandas `read_html()` function to scrape the wikipedia page relating to the S&P 500. The `read_html()` functions returns a list of DataFrame objects. Since we are only interested in the current list of stocks in the S&P 500, we only need the DataFrame object at index 0. Finally, we use the pandas function `to_csv()` to export the full table and a list of just the symbols our project directory.

#### It’s that easy! View the code below:

```python
import pandas as pd
table=pd.read_html('https://en.wikipedia.org/wiki/List_of_S%26P_500_companies')
df = table[0]
df.to_csv('S&P500-Info.csv')
df.to_csv("S&P500-Symbols.csv", columns=['Symbol'])
```

In future stories, we will import the list of assets on the S&P 500 to gain valuable insight into the market.

![Python Logo](/../assets/1*BnBQ9uzEGOp6fS81V2g8jA.png "Python Logo")