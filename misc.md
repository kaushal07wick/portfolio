---
layout: page
title: Miscellaneous
subtitle: Some Stuff I build for Fun!
permalink: /misc/
---


<script>
    fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Cmatic-network%2Ctether%2Ciotex&price_change_percentage=24h&x_cg_demo_api_key=CG-Yv6KebD1ds6AKf2wtv1Hr4qS")
    .then(res => res.json())
    .then(json => {
        const container = document.querySelector('.container');
        
        json.forEach(coin => {
            const price = coin.current_price.toFixed(2);
            const change = coin.price_change_percentage_24h.toFixed(2);

            container.innerHTML += `
                <div class="coin ${change < 0 ? 'falling' : 'rising'}">
                    <div class="coin-logo">
                        <img src="${coin.image}" alt="${coin.name} logo">
                    </div>
                    <div class="coin-name">
                        <h3>${coin.name}</h3>
                        <span>/USD</span>
                    </div>
                    <div class="coin-price">
                        <span class="price">$${price}</span>
                        <span class="change">${change}%</span>
                    </div>
                </div>
            `;
        });
    });
</script>

<div class="container">
<h1>1. My Personal Crypto Price Ticker</h1>
</div>
> These are some of the crypto coins I personally, invest.
>this is made using JS, and uses CoinGecko API.

<style>
.container{
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
}
.coin{
    align:center;
    display: flex;
    width: 460px;
    height: 80px;
    border-radius: 8px;
    margin: 10px 0;
    font-family: 'Mukta', sans-serif;
}

.coin .coin-logo{
    width: 80px;
    height: 100%;
    display: grid;
    place-items: center;
}

.coin .coin-logo img{
    width: 70%;
    height: 70%;
}
.coin-volume {
    font-size: 0.9em;
    color: #ddd5d5;
}

.coin .coin-name{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.coin .coin-name h3{
    color: #fff;
    font-size: 26px;
    text-transform: uppercase;
}

.coin .coin-name span{
    color: #f5f0f0;
    font-size: 14px;
    font-weight: 500;
    margin: 6px 0 0 2px;
}

.coin .coin-price{
    display: grid;
    align-items: center;
    margin-left: auto;
    padding: 8px 22px 0 0;
    text-align: right;
}

.coin .coin-price .price{
    font-size: 26px;
    font-weight: 700;
    margin-top: -6px;
}

.coin .coin-price .change{
    color: #f0ecec;
    font-size: 16px;
    font-weight: 600;
    margin-top: -30px;
}

.coin.rising{
    background: #f8df9b;
}

.coin.rising .coin-price .price{
    color: #30ff20;
}

.coin.falling{
    background:#282729;
}
.coin.falling .coin-price .price{
    color: #ff4040;
}
</style>