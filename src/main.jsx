// import React from 'react'
// import ReactDOM from 'react-dom'
// import './index.css'
// import App from './App'

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )
import { filter } from 'lodash-es'
const users = [{name: 'Tom', age: 20}, {name: 'Jack', age: 25}]
const filterUser  = filter(users, user => user.age > 20)
console.log('main')

console.log(filterUser)
