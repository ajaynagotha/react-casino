import React, { Component } from 'react'
import './App.css'
import ListResults from './components/ListResults';
export default class App extends Component {
  render() {
    return (
      <div className='py-5'>
        <ListResults />
      </div>
    )
  }
}

