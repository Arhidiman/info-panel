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
    setPlayImageLabel: Dispatch<SetStateAction<string>>,
    setVideo: Dispatch<SetStateAction<string>>,
    setVideoLabel: Dispatch<SetStateAction<string>>,
    setAirportContent: Dispatch<SetStateAction<TFlight[]>>,
    setRightScreenNum: Dispatch<SetStateAction<number>>,
    setVideoLength: Dispatch<SetStateAction<number>>,
    ) => {
   
    if(message) {
        const type = JSON.parse(message.data).type
        // console.log(JSON.parse(message.data))
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
                const label = JSON.parse(message.data).label
                console.log(JSON.parse(message.data))
                setPlayImage(playImage)
                setPlayImageLabel(label)
                setRightScreenNum(0)
                
            } break 
            case "PLAY_VIDEO": {
                const {src, label, length} = JSON.parse(message.data)
                setVideo(src)
                setVideoLabel(label)
                setVideoLength(length)
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