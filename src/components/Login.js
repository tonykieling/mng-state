import React from 'react'
import createPersistedState from "use-persisted-state";

export default function Login(props) {
  const useLoginState = createPersistedState("");
  const [login, setLogin] = useLoginState("");

  return (
    <div>
      <input type="text" onChange={event => setLogin(event.target.value)} />
      {login ?
        (<h1>Hello, {login}</h1>) : 
        (<h1>Not logged in</h1>)
      }
    </div>
  )
}
