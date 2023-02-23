import React from 'react'
import { useSelector } from 'react-redux'

function Message() {
const count = useSelector((state) => state.counter.value)

  return (
    <h1 style={{textAlign: "center", marginBottom: "4%"}}>Counter: {count}</h1>
  )
}

export default Message