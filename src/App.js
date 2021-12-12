import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css'
import Banner from './Components/Banner/Banner'
import RowPost from './Components/RowPost/RowPost'
import {Originals,Fantasy,Adventure,Action,Drama,Horror} from './Components/urls'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={Originals} title='Netflix Originals'/>
      <RowPost url={Fantasy} title='Fantasy' isSmall />
      <RowPost url={Adventure} title='Adventure' isSmall />
      <RowPost url={Action} title='Action' isSmall />
      <RowPost url={Drama} title='Drama' isSmall />
      <RowPost url={Horror} title='Horror' isSmall />
    </div>
  )
}

export default App

