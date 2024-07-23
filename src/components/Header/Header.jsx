import React from 'react'
import { CSurfer } from '../CSurfer/CSurfer'

export const Header = () => {
  return (
    <>
    <div className='flex justify-space-between'>
         <CSurfer path="/Home" content="Home"/>
         <CSurfer path="/Services" content="Services"/>
         <CSurfer path="/Appointments" content="Appointments"/>
    </div>
    </>
  )
}
