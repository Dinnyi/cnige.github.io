/**
 * Created by ige16 on 2017.4.14 0014.
 */
'use strict';

import React from 'react'
import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'

import routes from './modules/routes'


render(
    <Router routes={routes} history={hashHistory} />,
    document.getElementById('app')
);

