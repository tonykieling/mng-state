import React from 'react'

export default function Login(props) {
  return (
    <div>
      {props.login ?
        (<h1>Hello, {props.login}</h1>) : 
        (<h1>Not logged in</h1>)
      }
    </div>
  )
}
