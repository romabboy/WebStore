import React from 'react'
import { useOutletContext } from 'react-router-dom'

export default function Characteristics() {
    const details = useOutletContext()
    console.log(details)
  return (
    <div className="cardItem__characteristics">

    </div>
  )
}
  