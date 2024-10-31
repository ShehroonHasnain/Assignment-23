import React from 'react'
import './RightSideBar.css'

export default function RightSideBar() {
  return (
    <div className='rightSideBar-container'>
        <div className='rightSideBar-Items'>
            News
            <hr/>
        </div >
        <div className='rightSideBar-Items'>
            Contacts
            <hr/>
        </div >
        <div className='rightSideBar-Items'>
            Requests
            <hr/>
        </div>
    </div>
  )
}
