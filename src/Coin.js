import React from 'react'

const Coin = ({name, image, symbol, price, finalPrice}) => {
    return (
        <div className="coin-body">
            <div className="coin-row">
                <div className="coin">
                    <img src={image} alt="crypto"></img>
                    <h1>{name}</h1>
                </div>
                <div className="coin-data">
                    <p>1{symbol} = {price}PLN</p>
                </div>
                <div className="you-can-buy">
                    <p>Możesz kupić:</p>
                    <input className="you-can-buy-input" readOnly type="number" value={finalPrice}/>{symbol}
                </div>
            </div>
        </div>
    )
}

export default Coin
