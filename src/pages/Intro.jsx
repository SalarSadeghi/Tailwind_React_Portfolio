import React from 'react'
import Navbar from '../components/Navbar'
import Introduction from '../components/Introduction'
function Intro({toggleDark}) {
  return (
    <div id='home' className='h-[calc(100vh/2)] lg:h-screen bg-gradient-to-t from-indigo-200 dark:from-slate-700 dark:to-slate-900 relative overflow-hidden'>
      <Navbar toggleDark={toggleDark}/>
      <Introduction />
    </div>
  )
}

export default Intro

