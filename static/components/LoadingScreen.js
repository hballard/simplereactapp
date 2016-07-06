import React from 'react'
import { ProgressBar } from 'react-bootstrap'

const LoadingScreen = () => {
  return (
    <div id='main-container' className='container row'>
      <h2>Loading...</h2>
      <ProgressBar active now={ 100 } />
    </div>
  )
}

export default LoadingScreen
