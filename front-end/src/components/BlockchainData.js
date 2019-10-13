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
        // return <h4>{JSON.stringify(this.state.data)}</h4>

        return (
            <div className="btc">
                <h2>Bitcoin Data</h2>

                <p>Time Stamp: {this.state.data.timestamp}</p>
                <p>Price: {this.state.data.market_price_usd}</p>
                <p>Hash Rate: {this.state.data.hash_rate}</p>
                <p>Fees: {this.state.data.total_fees_btc}</p>


            </div>



        )
    }
}