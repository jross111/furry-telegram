import React, { Component } from 'react';

export default class BlockchainData extends Component {
    state = {
        hasErrors: false,
        data: {}
    }

    componentDidMount() {
        fetch("https://api.blockchain.info/stats")
            .then(res => res.json())
            .then(res => this.setState({ data: res }))


    }

    render() {


        return (


            <div className="btc">
                <h2>Bitcoin Data</h2>
                <p>Time Stamp: {this.state.data.timestamp}</p>
                <p>Price: {this.state.data.market_price_usd}</p>
                <p>Hash Rate: {this.state.data.hash_rate}</p>
                <p>Total Mined: {this.state.data.n_btc_mined}</p>
                <p>Block Size: {this.state.data.blocks_size}</p>
                <p>Miner Revenue: {this.state.data.miners_revenue_usd}</p>
                <p>Trade Volume (BTC): {this.state.data.trade_volume_btc}</p>
                <p>Trade Volume (USD): {this.state.data.trade_volume_usd}</p>


            </div>



        )
    }
}