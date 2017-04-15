/**
 * Created by ige16 on 2017.4.16 0016.
 */

'use strict';


import React from 'react';
import { Link, browserHistory } from 'react-router'


class Movies extends React.Component {

    handleSubmit(event) {
        event.preventDefault();
        const userName = event.target.elements[0].value;
        const repo = event.target.elements[1].value;
        const path = `/movies/${userName}/${repo}`;
        console.log(event.target.elements);
        browserHistory.push(path);
    }

    render () {
        return (
            <div>
                <h2>电影列表...</h2>

                <ul>
                    <li><Link to="/movies/好莱坞/阿甘正传" activeStyle={{color: "red"}}>阿甘正传</Link></li>
                    <li><Link to="/movies/国内/催眠大师" activeStyle={{color: "red"}}>催眠大师</Link></li>
                </ul>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" placeholder="地区"/> / {' '}
                    <input type="text" placeholder="名字"/>{' '}
                    <button type="submit">Go</button>
                </form>

                {this.props.children}
            </div>
        )
    }
}

export { Movies as default }