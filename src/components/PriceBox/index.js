/**
 * Created by mintroini on 6/15/17.
 */
import React from 'react';

import Button from 'react-bootstrap/lib/Button';

import logoShip from './ic_shipping.png';
import logoShip2x from './ic_shipping@2x.png';

class PriceBox extends React.Component {

    render() {

        let {amount, decimals} = this.props.price;
        const {listPage} = this.props;
        if (decimals === 0) {
            decimals = "";
        }
        amount = amount.toLocaleString('de-DE');
        if (listPage) {
            let free_ship = "";
            const {free_shipping} = this.props;
            if (free_shipping) {
                free_ship = <img src={logoShip} srcSet={`${logoShip2x} 2x`}
                                 alt="Has Free Shipping"/>;
            }

            return (
                <div className="priceBox">
                    <p>$ {amount} <sup>{decimals}</sup> {free_ship}</p>
                </div>
            );
        } else {

            return (
                <div className="priceBox">
                    <div>
                        <p>$ {amount} <sup>{decimals}</sup></p>
                    </div>
                    <div className="buttonBuy">
                        <Button bsStyle="primary">Comprar</Button>
                    </div>
                </div>
            );
        }
    }
}

export default PriceBox;


//<p>{decimals}</p>