import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Load from './load/Loading'
import StaffData from './common/Staff/StaffTab'
import Students from './common/Student/Std'

function App() {
  const flag=false
  return (
    <>
    <Load />
    {flag?<StaffData />:<Students />}
    {/* <StaffData />
    <Students /> */}
    </>
  )
}

export default App
