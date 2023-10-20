import { Dispatch, SetStateAction } from "react"
import { TStop } from "src/app/types/types"
export const setRouteStates = (
    message: any, setSpeed: Dispatch<SetStateAction<number>>, 
    setStops: Dispatch<SetStateAction<TStop[]>>, 
    setStopTimes: Function, 
    setNextStop: Function 
    ) => {
   
    if(message) {
        const type = JSON.parse(message.data).type
        console.log(type)
        switch(type) {
            case "SPEED": {
                setSpeed(JSON.parse(message.data).speed)      
            } break
            case "ROUTE": {
                const stops = (JSON.parse(message.data).stops)
                setStops(stops) 
            } break
            case "STOP_TIMES": {
                const nextStop = JSON.parse(message.data).stops[0].index
                const stopsTimes = JSON.parse(message.data).stops
                setStopTimes(stopsTimes)
            } break
            case "STOP_END": {
                const nextStop = JSON.parse(message.data).index
                setNextStop(nextStop)
            } break 
        }
    }
}