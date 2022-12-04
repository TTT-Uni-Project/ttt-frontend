import React, { useEffect, useState } from 'react'
import { localUserExists, getLocalUser } from '../localStore'
import { sendHeartbeat } from '../api'
import { ChangeUsernameButton } from '../components/ChangeUsernameButton'
import Players from '../components/Players'

export const Home = () => {
  const [username, setUsername] = useState('')

  const updateUserHeartbeat = () => {
    if (localUserExists()) {
      const user = getLocalUser()
      sendHeartbeat(user).catch((e) => console.error(e))
    }
  }

  useEffect(() => {
    updateUserHeartbeat()
  }, [])

  return (
    <div className='App'>
      <header>
        <div></div>
        <h1>Tic-Tac-Toe</h1>
        <div className='user'>
          <h3 className='userName'>{username}</h3>
          <ChangeUsernameButton
            onNameChange={(newUsername) => {
              setUsername(newUsername)
            }}
          />
        </div>
      </header>
      <div className='content'>
        <Players />
      </div>
    </div>
  )
}
