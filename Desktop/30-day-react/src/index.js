import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const jsx1 = <div id='root'><App /></div>;

const rootElement = document.getElementById('root')


ReactDOM.render(jsx1, rootElement)