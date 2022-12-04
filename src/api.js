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
