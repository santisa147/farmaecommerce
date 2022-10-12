import React from 'react'

export default function Test() {
    function handleClick(){
        alert('Hicieron Click')
    }
  return (
    <div onClick={handleClick}>Test</div>
  )
}
