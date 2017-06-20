/**
 * Created by mintroini on 6/15/17.
 */

import React from 'react';

import PriceBox from '../PriceBox';


class ListItemData extends React.Component {

    render() {
        const {title, price, free_shipping} = this.props;

        return (
            <div className="itemListData">


                <PriceBox
                    price={price}
                    listPage={true}
                    free_shipping={free_shipping}
                />
                <h1>{title}</h1>


            </div>
        );
    }
}

export default ListItemData;
