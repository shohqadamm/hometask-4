import React from 'react'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='header container'>
        <div className="header-brand">
            <h1>Shohqadam Ergashev</h1>
        </div>
        <div className="header-nav">
            <div className="nav-btn">
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    </div>
  )
}