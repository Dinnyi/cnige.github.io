/**
 * Created by ige16 on 2017.4.14 0014.
 */
'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute, Redirect, Link, IndexRedirect, hashHistory } from 'react-router'

import App from './modules/App'
import TV from './modules/TV'
import Show from './modules/Show'




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



class Movies extends React.Component {
    render () {
        return (
            <div>
                <h2>电影列表</h2>

                <ul>
                    <li><Link to="movie/好莱坞/阿甘正传" activeStyle={{color: "red"}}>阿甘正传</Link></li>
                    <li><Link to="movie/国内/催眠大师" activeStyle={{color: "red"}}>催眠大师</Link></li>
                </ul>
                {this.props.children}
            </div>
        )
    }
}


class MovieIndex extends React.Component {
    render () {
        return (
            <div>
                <h3>电影的未来 怎么怎么滴... </h3>
            </div>
        )
    }
}


class Welcome extends React.Component {
    render () {
        return (
            <h2>Welcome</h2>
        )
    }
}


function handleEnter() {
    console.log(`Enter...`)
}

function handleLeave() {
    console.log(`Leave...`)
}

render(
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            {/*<IndexRedirect to="/welcome"/>*/}
            <Route path="tv" component={TV}>
                <IndexRoute component={ShowIndex} />
                <Route path="/show/:id" component={Show} onEnter={handleEnter} onLeave={handleLeave}/>
                <Redirect from="show/:id" to="/show/:id"/>
            </Route>
            <Route path="movies" component={Movies}>
                <IndexRoute component={MovieIndex} />
                <Route path="/movie/:userName/:repoName" component={Movie} />
            </Route>
            <Route path="welcome" component={Welcome}/>
        </Route>
    </Router>,
    document.getElementById('app')
);

