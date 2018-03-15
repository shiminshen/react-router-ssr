import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Home extends Component {
  render () {
    return (
      <div>
        <h3>Home</h3>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/page1'>Page1</Link>
          </li>
          <li>
            <Link to='page2'>Page2</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home
