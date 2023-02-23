import React from 'react'
import './style.css'

const Button = React.lazy(() => import('../../components/button'))
const Message = React.lazy(() => import('../../components/message'))

function Layout() {
  return (
    <div>
        <h1 style={{textAlign: "center", marginBottom: "20px"}}>Redux Toolkit Implementation</h1>
        <Button />
        <Message />
    </div>
  )
}

export default Layout