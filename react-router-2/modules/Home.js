/**
 * Created by ige16 on 2017.4.16 0016.
 */

import React from 'react';

class Home extends React.Component {

    componentWillMount () {
        console.log('Home 即将 显示')
    }

    componentDidMount () {
        console.log('Home 完成 显示')
    }

    componentWillUpdate () {
        console.log('Home 即将 更新')
    }

    componentDidUpdate () {
        console.log('Home 完成 更新')
    }

    componentWillUnmount () {
        console.log('Home 即将 移除')
    }

    render () {
        return (
            <div>
                <h2>首页内容</h2>
            </div>
        )
    }
}

export { Home as default }