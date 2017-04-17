/**
 * Created by ige16 on 2017.4.16 0016.
 */

'use strict';

import React from 'react'
import PubSub from 'pubsub-js'


class StuItem extends React.Component {

    delItem () {
        PubSub.publish('delItem', this.props.id)
    }

    render () {
        return (
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.stuName}</td>
                <td>{this.props.stuSex}</td>
                <td>{this.props.age}</td>
                <td>{this.props.height}</td>
                <td>{this.props.weight}</td>
                <td><a href="javascript:;" onClick={this.delItem.bind(this)}>删除</a></td>
            </tr>
        )
    }
}

export default StuItem