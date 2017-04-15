

'use strict';


import React from 'react'
import { Route, IndexRoute, Redirect, IndexRedirect, } from 'react-router'
import App from './App'
import Home from './Home'
import TV from './TV'
import ShowIndex from './ShowIndex'
import Show from './Show'
import Movies from './Movies'
import MovieIndex from './MovieIndex'
import Movie from './Movie'
import Welcome from './Welcome'


function handleEnter() {
    console.log(`Enter...`)
}

function handleLeave() {
    console.log(`Leave...`)
}



let routes = (
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
            <Route path="/movies/:userName/:repoName" component={Movie} />
        </Route>
        <Route path="welcome" component={Welcome}/>
    </Route>
);

export { routes as default}

