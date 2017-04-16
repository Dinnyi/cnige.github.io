/**
 * Created by ige16 on 2017.4.16 0016.
 */

'use strict';

import React from 'react'

class StuHead extends React.Component {

    render () {
        return (
            <tr>
                <th>{this.props.title._id}</th>
                <th>{this.props.title.stuName}</th>
                <th>{this.props.title.stuSex}</th>
                <th>{this.props.title.age}</th>
                <th>{this.props.title.height}</th>
                <th>{this.props.title.weight}</th>
                <th>操作</th>
            </tr>
        )
    }
}

export default StuHead