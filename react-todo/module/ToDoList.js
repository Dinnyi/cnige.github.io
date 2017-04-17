/**
 * Created by ige16 on 2017.4.17 0017.
 */

'use strict';

import React from 'react'
import { classNames } from './util'

class ToDoList extends React.Component {

    render () {
        return (

            <div>
                <li className={classNames({completed:this.props.compile})}>
                    <div className="view">
                        <input className="toggle" type="checkbox" checked={this.props.compile} onChange={this.props.toggle}/>
                        <label>{this.props.content}</label>
                        <button className="destroy" onClick={this.props.delete}/>
                    </div>
                    <input className="edit" defaultValue={this.props.content} />
                </li>
            </div>

        )
    }

}

export default ToDoList