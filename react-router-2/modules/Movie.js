/**
 * Created by ige16 on 2017.4.16 0016.
 */

'use strict';

import React from 'react';

class Movie extends React.Component {
    constructor (props) {
        super(props);

        console.log(this.props);
    }
    render () {
        return (
            <div>
                <h6>{this.props.params.userName}</h6>
                <h6>{this.props.params.repoName}</h6>
            </div>
        )
    }
}

export { Movie as default }