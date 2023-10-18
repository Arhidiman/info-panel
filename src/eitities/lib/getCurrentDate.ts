export const getCurrentDate = () => {
    const date = new Date() 
    const day = String(date.getDay()).length === 1 ? "0"+ date.getDay() : date.getDay()
    const month = String(date.getMonth()).length === 1 ? "0"+ date.getMonth() : date.getMonth()
    const year = date.getFullYear()
    const currentDate = `${day}.${month}.${year}`
    return currentDate
}