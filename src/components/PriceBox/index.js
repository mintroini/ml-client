/**
 * Created by mintroini on 6/15/17.
 */
import React from 'react';

import Button from 'react-bootstrap/lib/Button';


class PriceBox extends React.Component {

    render() {

        const {currency, amount} = this.props.price;

        return (
            <div className="priceBox">
                <p>{currency}{amount}</p>
                <Button bsStyle="primary">Comprar</Button>

            </div>
        );
    }
}

export default PriceBox;


//<p>{decimals}</p>