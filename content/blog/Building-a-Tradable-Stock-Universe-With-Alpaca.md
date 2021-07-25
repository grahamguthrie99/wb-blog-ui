---
path: alpaca-tradable-universe
date: 2020-06-12T00:46:37.023Z
author: Graham Guthrie
title: Building a Tradable Stock Universe With Alpaca
description: Building a tradable stock universe is extremely simple task, but
  nevertheless it is essential in developing a strong algorithmic trading
  strategy…
---

Today’s article highlights an extremely simple task, but nevertheless it is essential in developing a strong algorithmic trading strategy. A tradable universe is essentially a narrowed list of securities that your strategy can utilize at any given time. There are 1000s of listed assets, so narrowing and filtering down helps refine the assets that you might be interested in. I will also be introducing the Alpaca API, as a way to source free financial data. In order to properly run the following code, you will need an Alpaca account. From your Alpaca account you will need to find your API Client ID and Key.

![Denis Tuksar on Unsplash](/../assets/0*HjU1FU1FQAeA-iLb.jpg "Denis Tuksar on Unsplash")

### Setting Up the API

[Alpaca](https://alpaca.markets/) is a commission free brokerage, that is developer first. Instead of building out a trading UI, the company directed their attention toward algorithmic traders. The API allows you to place live trades in either a paper account or live account. The API is free to use, and with a live trading account, funded with as little as $5, developers get access to Polygon data. The Polygon data alone makes signing up worthwhile.

The first step is to pull your Client ID and Key from your alpaca account. I made a separate config file to store the two items, which is considered good practice. Your config file should look something like this:
```python
client_id = ""  
secret_key = ""
```
Next, set up a notebook and import the two items.
```python
from alpaca_config import client_id, secret_key
```
Finally, run:
```python
pip install alpaca-trade-api
```
And import.
```python
import alpaca_trade_api as tradeapi
```
### Getting to Work

In order to initialize the API, Alpaca comes in clutch once again. It is as easy as:
```python
api = tradeapi.REST(key_id, secret_key, api_version=’v2')
```
And you are ready to roll. Comb through their documentation for your application needs, but for this task, all we need is the list\_assets() function, which lists all of the available assets according to Alpaca.

At the most basic level, our trading strategy will only be interested in assets that are tradable. The following function pulls the list of all assets and combs through the list finding all that are tradable through Alpaca. If the asset is tradable, it is added as an entry and the full dictionary is returned.
```python
def getTradableAssets():  
    assets = api.list_assets()  
    tradable = {}  
    for asset in assets:  
        if(asset.tradable):  
            entry = {}  
            entry['exchange'] = asset.exchange  
            tradable[asset.symbol] = entry  
    return tradable
```
### And You’re Done

Finally, all you have to do to build the tradable asset universe is call the function.
```python
universe = getTradableAssets()
```
### Bonus

If you decide to sign up and set up a live trading account, below is a glimpse into the kind of data available with the Polygon integration. Below, we build on the list of tradable assets, by pulling company info for each asset in the list. Then, we create and return a pandas data frame for easier filtering.
```python
def fillUniverseWithInfo(universe):  
    for asset in universe:  
        company_info = api.polygon.company(str(asset))  
        if company_info is not None:  
            universe[asset]['name'] = company_info.name  
            universe[asset]['description'] = company_info.description  
            universe[asset]['url'] = company_info.url  
            universe[asset]['industry'] = company_info.industry  
            universe[asset]['sector'] = company_info.sector  
            try:  
                universe[asset]['type'] = company_info.type  
            except Exception:  
                pass  
    return pd.DataFrame.from_dict(universe, orient='index')
universe_df = fillUniverseWithInfo(universe)
```
### Conclusion

It is important to note that, this is just a start. You may want to pull fundamental info from another source and then filter down your universe based on a specific fundamental. By using this method, you are graced with having free, reliable access to tradable symbols in a millisecond. Whatever you do next is entirely up to you!
