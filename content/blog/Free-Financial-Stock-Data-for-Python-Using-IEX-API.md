---
path: using-iex-api
date: 2019-08-01T23:05:22.097Z
author: Graham Guthrie
title: Free Financial Stock Data for Python Using IEX API
description: "In this story, I will show you how to pull a company’s information, earnings
  history, and price history with the help of the free version…"
---

In this story, I will show you how to pull a company’s information, earnings history, and price history with the help of the free version of the IEX API.

#### Why IEX?

Getting key financial data has become increasingly harder since the restrictions placed on the Yahoo and Google Finance APIs. Currently, there are a multitude of services that offer financial data, but finding a viable free candidate is still challenging.

IEX is a phenomenal company that was founded in 2012 with the goal of reshaping the fintech landscape. The company mission is based off the premise that the market should be fair to all investors. As someone relatively new to the investing and trading space, I find this message particularly appealing.

[On their website, IEX has a whole section dedicated to developers](https://iextrading.com/developer/). The free version of their API is very generous and integrates very well with Python. The API calls are limited due to a message system and each call holds a certain weight, but none of the calls are off limits. At the free tier, you get 500,000 messages which is enough to pull data from multiple companies. Personally, I look at the restriction as a benefit, encouraging more efficient code and reason to develop a more focused strategy.

#### Getting Started

In order to use IEX, you need an account. The signup is relatively quick, but it is necessary in order to get an API key so you can make calls. The next step in the process is to download the PyPI IEX Finance module.

In order to install, run: 
```python
pip install iexfinance
```

We are going to be working with the list of companies on the S&P 500.

#### Setup

In order to run the rest of the code properly, you will also need to install pandas, datetime, and matplotlib by running: ```python
pip install pandas datetime matplotlib
```

At the start of your program, copy and paste:
```python
import pandas as pd  
from iexfinance.stocks import Stock  
from datetime import datetime  
import matplotlib.pyplot as plt  
from iexfinance.stocks import get_historical_data
```
After pandas is installed we can begin to code, by following the steps below:

*   Pull the list of from the previously created .csv file.
```python
sp = pd.read_csv('S&P500-Symbols.csv', index_col=[0])
```
\*\*Note: two important documentation links

1.  [IEX CLOUD](https://iexcloud.io/docs/api/)
2.  [PYTHON IEX FINANCE](https://addisonlynch.github.io/iexfinance/stable/index.html)

#### Getting Company Info

In order to get information like “company name”, “CEO”, “Sector” and “Industry” we will be hitting the IEX `/company` endpoint.

*   To access the method, we first need to create a Stock object. IEX allows you to instantiate 100 stocks at a time and hit a ton of different endpoints. We will complete all of the previously mentioned steps in the function below.
```python
# getCompanyInfo returns a dictionary with the company symbol as a key and the info as the value* 
# call to iex finance api to return company info for a list of symbols*
def getCompanyInfo(symbols):  
    stock_batch = Stock(symbols,  
                        token=<API_TOKEN>)  
    company_info = stock_batch.get_company()  
    return company_info
```
*   For this particular example, we will get the company information of the first 5 stocks in the S&P 500.
```python
sp_company_info = getCompanyInfo(sp["Symbol"][:5].tolist())
```
*   Since the data from the API call is returned in the form of a dictionary, we need to convert the value of each key (Symbol) into a list.
```python
company_info_to_df = []  
for company in sp_company_info:  
    company_info_to_df.append(sp_company_info[company])
```
*   Next, we convert all of the company info into a nice, structured Pandas DataFrame. Note: Converting to a Data Frame isn’t necessary, but it could be helpful if you wanted insight into what companies belong to a certain sector or industry.
```python
columns = ['symbol', 'companyName', 'exchange',  
            'industry', 'website', 'CEO', 'sector']  
df = pd.DataFrame(company_info_to_df, columns=columns )  
df.head()
```
![Results](/../assets/1*6z6oEVOhpsg1a_tglFziYA.png "Results")

#### Getting Company Earnings

Getting the earnings follows a very similar process as getting the company info. In this example we will only be getting the earning of the last four quarters of a single company, 3M. We will be eating the IEX `/earnings` endpoint.

*   To get the earnings of a single company use the function below. The function returns a report object for each quarter contained within a list.
```python
def getEarnings(symbol):  
    stock_batch = Stock(symbol,  
                        token=<API_TOKEN>)  
    earnings = stock_batch.get_earnings(last=4)  
    return earnings  
    
single_stock_earnings = getEarnings(sp["Symbol"][0])
```
*   Since we only received earnings for a single company, converting to a DataFrame is a bit easier.
```python
df_earnings = pd.DataFrame(single_stock_earnings)
```
\*\*Note: follow the conversion to DataFrame process outlined in company info for batches of stocks

#### Getting and Graphing Historical Prices

Obtaining historical stock price information is obviously a necessary task for any trading application. IEX provides a couple different methods to get historical price info. In this example, we will use `get_historical_data()` since the documentation states that it optimizes message usage.

Calling the endpoint to get historical data is a little different than the other calls. Getting historical data requires the import of top-level functions, so no Stock object instantiation is needed.

*   For this example we will be pulling all the price data for 3M stock from Jan 1, 2016 until July 30,2019. Since we used the `output_format='pandas’` our data will automatically be returned in a DataFrame object. To get the historical data for a specified range use the function below:
```python
def getHistoricalPrices(stock):  
    return get_historical_data(stock, start, end,   
                                output_format='pandas',   
                                token=<API_TOKEN>)  
    
start = datetime(2016, 1, 1)  
end = datetime(2019, 7, 30)
single_stock_history = getHistoricalPrices(sp[“Symbol”][0])
```
![Results](/../assets/1*Wsr_Yxzwaf75YYa6yOt8ig.png "Results")

*   Because this a relatively basic tutorial, we will set our goal as only graphing the closing price of each stock. Since our goal is to graphically view, the data we will be using matplotlib. Run the command below to graph the data:
```python
    single_stock_history['close'].plot(label="3M Close")
```
![Results](/../assets/1*nXacJXigHiMJhPTjNWmrdg.png "Results")

If you aren’t satisfied with just graphing the closing price (I wouldn’t be either), I plan on covering different flavors such as rolling averages, candlestick charts, and multiple charts in the very near future. But for now, consider this just a starting point.

#### Full Code
```python
import pandas as pd  
from iexfinance.stocks import Stock  
from datetime import datetime  
import matplotlib.pyplot as plt  
from iexfinance.stocks import get_historical_data
def getCompanyInfo(symbols):  
    stock_batch = Stock(symbols,  
                        token=<API_TOKEN>)  
    company_info = stock_batch.get_company()  
    return company_info
def getEarnings(symbol):  
    stock_batch = Stock(symbol,  
                        token=<API_TOKEN>)  
    earnings = stock_batch.get_earnings(last=4)  
    return earnings
def getHistoricalPrices(stock):  
    return get_historical_data(stock, start, end,   
                                output_format='pandas',   
                                token=<API_TOKEN>)
sp = pd.read_csv('S&P500-Symbols.csv', index_col=[0])
sp_company_info = getCompanyInfo(sp["Symbol"][:5].tolist())
company_info_to_df = []  
for company in sp_company_info:  
    company_info_to_df.append(sp_company_info[company])
columns = ['symbol', 'companyName', 'exchange',  
            'industry', 'website', 'CEO', 'sector']  
df = pd.DataFrame(company_info_to_df, columns=columns )  
df.head()
single_stock_earnings = getEarnings(sp["Symbol"][0])  
df_earnings = pd.DataFrame(single_stock_earnings)  
df_earnings.head()
start = datetime(2016, 1, 1)  
end = datetime(2019, 7, 30)  
single_stock_history = getHistoricalPrices(sp["Symbol"][0])
single_stock_history['close'].plot(label="3M Close")
```
#### Wrap Up

That should be enough to get started with the IEX API. Do not forget about message counts. There are parts of the API that are a little confusing, specifically when dealing with time series data. Thank you for reading!
