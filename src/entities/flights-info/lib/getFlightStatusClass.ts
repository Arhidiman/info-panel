export const getFlightStatusClass = (message: string) => {
    let className = ''
    if(message && message.includes("Задерживается")) className = 'delayed'
    if(message && message.includes("Прибыл")) className = 'arrived'
    return className
}