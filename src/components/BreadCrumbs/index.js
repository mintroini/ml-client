/**
 * Created by mintroini on 6/15/17.
 */

import React from 'react';


class BreadCrumbs extends React.Component {

    render() {
        const {crumbs} = this.props;


        const crumbsRows = crumbs.map((crumb, idx) => (
            <p key={idx}>
                {crumb} >
            </p>

        ));


        return (
            <div className="breadcrumbs">
                {crumbsRows}
            </div>

        );
    }
}

export default BreadCrumbs;
