export const fetchOnlineUsers = async () => {
  const response = await fetch('/online-users')
  return await response.json()
}
export const sendHeartbeat = async (user) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(user),
  }
  return await fetch('/heartbeat', requestOptions)
}

export const createGame = async (players) => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ players: players }),
  }
  console.log('players = ', players)
  return await fetch('/game', requestOptions)
}
