/**
 * Created by mintroini on 6/15/17.
 */

import React from 'react';

import PriceBox from '../PriceBox';
import Row from 'react-bootstrap/lib/Row';

class ItemMainData extends React.Component {

    render() {
        const {title, sold_quantity, price} = this.props;
        let {condition} = this.props;
        let sold = "Vendidos";
        if (sold_quantity === 1) {
            sold = "Vendido";
        }
        if (condition === "new") {
            condition = "Nuevo";
        } else {
            condition = "Usado";

        }

        return (


            <div className="itemMainData">

                <p>{condition} - {sold_quantity} {sold} </p>


                <h1>{title}</h1>


                <PriceBox
                    price={price}
                    listPage={false}
                />
            </div>


        );
    }
}

export default ItemMainData;
