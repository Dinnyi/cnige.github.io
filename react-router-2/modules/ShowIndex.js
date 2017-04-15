/**
 * Created by ige16 on 2017.4.16 0016.
 */

'use strict';

import React from 'react'

class ShowIndex extends React.Component {

    componentWillMount () {
        console.log('ShowIndex 即将 显示')
    }

    componentDidMount () {
        console.log('ShowIndex 完成 显示')
    }

    componentWillUpdate () {
        console.log('ShowIndex 即将 更新')
    }

    componentDidUpdate () {
        console.log('ShowIndex 完成 更新')
    }

    componentWillUnmount () {
        console.log('ShowIndex 即将 移除')
    }


    render () {
        return (
            <div>
                <h3>这是一个竞争的时代...</h3>
            </div>
        )
    }
}

export { ShowIndex as default }