/**
 * Created by ige16 on 2017.4.17 0017.
 */

'use strict';

import './index.css'
import './base.css'
import React from 'react'
import ReactDOM from 'react-dom'
import ToDoBox from './TodoBox'
import app from './app'


function render(dataArr) {
    ReactDOM.render (
        <ToDoBox dataArr={dataArr} />,
        document.getElementById('App')
    );
}

render(app.dataArr);

app.render = render;