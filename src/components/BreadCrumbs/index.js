
/**
 * Created by mintroini on 6/15/17.
 */

import React from 'react';


class BreadCrumbs extends React.Component {

    render() {
        const {crumbs} = this.props;
        let fixed_crumbs = [];

        for (let i = 0; i < crumbs.length; i++) {
            if (i === crumbs.length -1) {
                fixed_crumbs.push(crumbs[i]);

            } else {
                fixed_crumbs.push(crumbs[i] + "  >  ");
            }
        }

        const crumbsRows = fixed_crumbs.map((crumb, idx) => (
            <p key={idx}>
                {crumb}
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

