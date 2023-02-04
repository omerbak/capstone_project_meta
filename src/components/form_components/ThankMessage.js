import React from 'react'
import { Link } from 'react-router-dom'

const ThankMessage = () => {
  return (
    <div className='thank-message'>
        <h2>Thank You!</h2>
        <p>See you soon</p>
        <Link className='back-home btn' to="/">Back to homepage</Link>
    </div>
  )
}

export default ThankMessage