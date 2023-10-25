import { Dispatch, SetStateAction } from "react"
import { TStop, TFlight } from "@/app/types/types"

export const setRouteStates = (
    message: any, setSpeed: Dispatch<SetStateAction<number>>, 
    setStops: Dispatch<SetStateAction<TStop[]>>, 
    setStopTimes: Function, 
    setNextStop: Dispatch<SetStateAction<number>>,
    setInMove: Dispatch<SetStateAction<boolean>>,
    setRouteIcon: Dispatch<SetStateAction<string>>,
    setPlayImage: Dispatch<SetStateAction<string>>,
    setVideo: Dispatch<SetStateAction<string>>,
    setVideoLabel: Dispatch<SetStateAction<string>>,
    setAirportContent: Dispatch<SetStateAction<TFlight[]>>,
    setRightScreenNum: Dispatch<SetStateAction<number>>,
    ) => {
   
    if(message) {
        const type = JSON.parse(message.data).type
        switch(type) {
            case "SPEED": {
                setSpeed(JSON.parse(message.data).speed)  
            } break
            case "ROUTE": {
                const stops = (JSON.parse(message.data).stops)
                const routeIcon = (JSON.parse(message.data).icon)
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
                setRightScreenNum(0)
            } break 
            case "PLAY_VIDEO": {
                const video = JSON.parse(message.data).src
                const label = JSON.parse(message.data).label
                setVideo(video)
                setVideoLabel(label)
                setRightScreenNum(1)
            } break 
            case "PULKOVO": {
                const airportContent = JSON.parse(message.data).contents
                setAirportContent(airportContent)
                setRightScreenNum(2)
            } break 
        }
    }
}

// Заглушки
//  http://192.168.100.95:8080/sdcard/content/video/media_plans/69db6abdbb7c206b9eebbb4058d52dd9.mp4 Видео