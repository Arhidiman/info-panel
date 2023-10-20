import { Dispatch, SetStateAction } from "react"
import { TStop } from "@/app/types/types"
export const setRouteStates = (
    message: any, setSpeed: Dispatch<SetStateAction<number>>, 
    setStops: Dispatch<SetStateAction<TStop[]>>, 
    setStopTimes: Function, 
    setNextStop: Dispatch<SetStateAction<number>>,
    setInMove: Dispatch<SetStateAction<boolean>>,
    setRouteIcon: Dispatch<SetStateAction<string>>
    ) => {
   
    if(message) {
        const type = JSON.parse(message.data).type
        // console.log(type)
        switch(type) {
            case "SPEED": {
                setSpeed(JSON.parse(message.data).speed)  
                console.log(JSON.parse(message.data).speed)    
            } break
            case "ROUTE": {
                const stops = (JSON.parse(message.data).stops)
                const routeIcon = (JSON.parse(message.data).icon)
                setStops(stops) 
                setRouteIcon(routeIcon)
                console.log(JSON.parse(message.data))
            } break
            case "STOP_TIMES": {
                const nextStop = JSON.parse(message.data).stops[0].index
                const stopsTimes = JSON.parse(message.data).stops
                setStopTimes(stopsTimes)
            } break
            case "STOP_BEGIN": {
                console.log("stop begins")
                setInMove(false)
            } break
            case "STOP_END": {
                const nextStop = JSON.parse(message.data).index
                setNextStop(nextStop)
                setInMove(true)
                console.log("stop ends")
            } break 
        }
    }
}