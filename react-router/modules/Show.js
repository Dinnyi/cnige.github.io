/**
 * Created by ige16 on 2017.4.14 0014.
 */
'use strict';
import React from 'react'

class Show extends React.Component {
    constructor (props) {
        super(props);

        console.log(this.props.params);

        console.log(this.props);


    }

    render () {
        return (
            <div>
                <h4>节目 {this.props.params.id}</h4>
            </div>
        )
    }
}

export { Show as default }