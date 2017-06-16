/**
 * Created by mintroini on 6/15/17.
 */

import React from 'react';

import PriceBox from '../PriceBox';
import Row from 'react-bootstrap/lib/Row';

class ItemMainData extends React.Component {

    render() {
        const {title, condition, sold_quantity, price} = this.props;

        return (
            <Row className="show-grid">

                <div className="itemMainData">

                    <p>{condition} - {sold_quantity} Vendidos</p>


                    <h1>{title}</h1>


                    <PriceBox
                        price={price}
                    />


                </div>
            </Row>

        );
    }
}

export default ItemMainData;
