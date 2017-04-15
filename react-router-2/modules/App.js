/**
 * Created by ige16 on 2017.4.14 0014.
 */

'use strict';

import React from 'react';
import { Link, IndexLink } from 'react-router'

let query='date';

class App extends React.Component {

    // App 完成 加载

    componentWillMount () {
        console.log('App 即将 显示')
    }

    componentDidMount () {
        console.log('App 完成 显示')
    }

    componentWillReceiveProps () {
        console.log('App 即将 接受 props')
    }

    componentWillUpdate () {
        console.log('App 即将 更新')
    }

    componentDidUpdate () {
        console.log('App 完成 更新')
    }

    render() {
        return (
            <div>
                {/*<Link to="/"></Link>*/}
                {/*<Link to="/" activeClassName="active" onlyActiveOnIndex={true}>Home</Link>*/}
                <IndexLink to="/" activeStyle={{color: 'red'}}>首页</IndexLink>
                <strong> - | - </strong>
                <Link to={`/tv?orderBy=${query}`} activeStyle={{color: 'red'}}>TV</Link>
                <strong> - | - </strong>
                <Link to="/movies" activeStyle={{color: 'red'}}>Movies</Link>
                <strong> - | - </strong>
                <Link to="/welcome" activeStyle={{color: 'red'}}>Welcome</Link>
                <hr/>

                {/*this.props.children 指向 IndexRoute */}
                {this.props.children}
            </div>
        )
    }
}

export { App as default }