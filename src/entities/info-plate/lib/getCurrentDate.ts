export const getCurrentDate = () => {
    const date = new Date() 
    const day = String(date.getDate()).length === 1 ? "0"+ date.getDate() : date.getDate()
    const month = String(date.getMonth()+1).length === 1 ? "0"+ date.getMonth() : date.getMonth()+1
    const year = date.getFullYear()
    const currentDate = `${day}.${month}.${year}`
    return currentDate
}