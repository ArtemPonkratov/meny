import React from 'react'
import Nav from './Nav'
import { BrowserRouter } from 'react-router-dom'

export default function Main() {
  return (
    <div>
        <BrowserRouter>
        <Nav />
        </BrowserRouter>
    </div>
  )
}
