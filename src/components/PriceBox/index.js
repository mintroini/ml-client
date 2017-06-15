/**
 * Created by mintroini on 6/15/17.
 */
import React from 'react';


class PriceBox extends React.Component {

    render() {

        const {currency, amount, decimals} = this.props.price;

        return (
            <div>
                <h1>pricebox </h1>
                <p>{currency}</p>
                <p>{amount}</p>
                <p>{decimals}</p>
            </div>
        );
    }
}

export default PriceBox;
