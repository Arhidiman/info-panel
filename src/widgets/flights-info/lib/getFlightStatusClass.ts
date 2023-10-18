export const getFlightStatusClass = (message: string) => {
    let className = ''
    if(message.includes("Задерживается")) className = 'delayed'
    if(message.includes("Прибыл")) className = 'arrived'
    return className
}