import React from 'react'
import { Link } from 'react-router-dom'

import '../style/no-match'

export default function () {
    return (
        <div className='noMatch-wrapper'>
            <h1 className='NoMatch-text'>Oops! There was an error in handling your request</h1>
            <Link to="/" className='link'>Click here to return to the homepage</Link>
        </div>
    )
}