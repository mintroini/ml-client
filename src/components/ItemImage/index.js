/**
 * Created by mintroini on 6/15/17.
 */

import React from 'react';
import Image from 'react-bootstrap/lib/Image';

class ItemImage extends React.Component {

    render() {
        const {image} = this.props;

        return (
            <div>
                <Image src={image} responsive />
            </div>

        );
    }
}

export default ItemImage;
