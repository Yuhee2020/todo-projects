export function loadState() {
  const data = sessionStorage.getItem('myAppData')

  return data ? JSON.parse(data) : undefined
}
