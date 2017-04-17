/**
 * Created by ige16 on 2017.4.16 0016.
 */


'use strict';

import React from 'react'
import { render } from 'react-dom'
import StuBox from './StuBox'

render(
	<StuBox url="data/stuMeg.json"/>,
	document.getElementById('App')
);