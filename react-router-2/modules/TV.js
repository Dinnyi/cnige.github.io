/**
 * Created by ige16 on 2017.4.14 0014.
 */

'use strict';

import React from 'react'
import { Link } from 'react-router'



class TV extends React.Component {
    constructor (props) {
        super(props);

        console.log(this.props)

        console.log(this.props.location.query)
    }

    componentWillMount () {
        console.log('TV 即将 显示')
    }

    componentDidMount () {
        console.log('TV 完成 显示')
    }

    componentWillUpdate () {
        console.log('TV 即将 更新')
    }

    componentDidUpdate () {
        console.log('TV 完成 更新')
    }

    componentWillUnmount () {
        console.log('TV 即将 移除')
    }


    render() {
        return (
            <div>
                <h2>电视节目列表</h2>

                <ul>
                    <li><Link to="/show/人民的名义" activeStyle={{color: "red"}}>人民的名义</Link></li>
                    <li><Link to="/show/琅琊榜" activeStyle={{color: "red"}}>琅琊榜</Link></li>
                </ul>

                {this.props.children}
            </div>
        )
    }
}

export { TV as default }