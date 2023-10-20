export const getCurrentTime = () => {
    const date = new Date()
    const hours = String(date.getHours()).length === 1 ? "0"+ date.getHours() : date.getHours()
    const minutes = String(date.getMinutes()).length === 1 ? "0"+ date.getMinutes() : date.getMinutes()
    const seconds = String(date.getSeconds()).length === 1 ? "0"+ date.getSeconds() : date.getSeconds()
    const currentTime = `${hours}:${minutes}:${seconds}`
    return currentTime
}