import React from 'react'

function Form() {
  return (
    <form className='flex flex-col items-center gap-5 p-8 '>
      <input type="text" placeholder='Name' className='dark:bg-slate-700 dark:text-white dark:ring-0 border w-1/2 px-3 py-2 rounded-sm ring-1 ring-indigo-300'/>
      <input type="email" placeholder='Email' className='dark:bg-slate-700 dark:text-white dark:ring-0 border w-1/2 px-3 py-2 rounded-sm ring-1 ring-indigo-300'/>
      <textarea rows="8" className='dark:bg-slate-700 dark:text-white dark:ring-0 border w-1/2 px-3 py-2 rounded-sm ring-1 ring-indigo-300' placeholder='Message...'></textarea>
      <button className='bg-indigo-600 text-white font-medium w-1/4 py-1 cursor-pointer rounded-md lg:py-2' type='submit'>Submit</button>
    </form>
  )
}

export default Form
