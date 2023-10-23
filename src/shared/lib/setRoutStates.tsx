import { Dispatch, SetStateAction } from "react"
import { TStop } from "@/app/types/types"
export const setRouteStates = (
    message: any, setSpeed: Dispatch<SetStateAction<number>>, 
    setStops: Dispatch<SetStateAction<TStop[]>>, 
    setStopTimes: Function, 
    setNextStop: Dispatch<SetStateAction<number>>,
    setInMove: Dispatch<SetStateAction<boolean>>,
    setRouteIcon: Dispatch<SetStateAction<string>>,
    setPlayImage: Dispatch<SetStateAction<string>>
    ) => {
   
    if(message) {
        const type = JSON.parse(message.data).type
        // console.log(type)
        switch(type) {
            case "SPEED": {
                setSpeed(JSON.parse(message.data).speed)  
            } break
            case "ROUTE": {
                const stops = (JSON.parse(message.data).stops)
                const routeIcon = (JSON.parse(message.data).icon)
                // console.log(JSON.parse(message.data))
                setStops(stops) 
                setRouteIcon(routeIcon)
            } break
            case "STOP_TIMES": {
                const nextStop = JSON.parse(message.data).stops[0].index
                const stopsTimes = JSON.parse(message.data).stops
                setStopTimes(stopsTimes)
            } break
            case "STOP_BEGIN": {
                setInMove(false)
            } break
            case "STOP_END": {
                const nextStop = JSON.parse(message.data).index
                setNextStop(nextStop)
                setInMove(true)
            } break 
            case "PLAY_IMAGE": {
                const playImage = JSON.parse(message.data).src
                setPlayImage(playImage)
            } break 
        }
    }
}