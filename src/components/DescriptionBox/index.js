/**
 * Created by mintroini on 6/15/17.
 */
import React from 'react';



class DescriptionBox extends React.Component {

    render() {
        const {itemDescription} = this.props;
        return(<div dangerouslySetInnerHTML={{ __html: itemDescription }} />);
    }
}

export default DescriptionBox;
