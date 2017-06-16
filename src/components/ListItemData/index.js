/**
 * Created by mintroini on 6/15/17.
 */

import React from 'react';

import PriceBox from '../PriceBox';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


class ListItemData extends React.Component {

    render() {
        const {title, price, free_shipping} = this.props;

        return (
            <div className="itemListData">

                <Row className="show-grid">
                    <PriceBox
                        price={price}
                        listPage={true}
                        free_shipping={free_shipping}
                    />
                </Row>

                <Row className="show-grid">
                    <Col md={5}>
                        <h1>{title}</h1>
                    </Col>
                </Row>

            </div>
        );
    }
}

export default ListItemData;
/*
 title={item.title}
 price={item.price}
 state_name={item.state_name}
 free_shipping={item.free_shipping}
 */