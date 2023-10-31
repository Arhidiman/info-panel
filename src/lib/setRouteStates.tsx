import { Dispatch, SetStateAction } from "react"
import { TStop, TFlight } from "@/types/types"

export const setRouteStates = (
    message: any, setSpeed: Dispatch<SetStateAction<number>>, 
    setStops: Dispatch<SetStateAction<TStop[]>>, 
    setRouteIcon: Dispatch<SetStateAction<string>>,
    setRouteColor: Dispatch<SetStateAction<string>>,
    setRouteFontColor: Dispatch<SetStateAction<string>>,

    setStopTimes: Function, 
    setNextStop: Dispatch<SetStateAction<number>>,
    setInMove: Dispatch<SetStateAction<boolean>>,
    setPlayImage: Dispatch<SetStateAction<string>>,
    setPlayImageLabel: Dispatch<SetStateAction<string>>,
    setVideo: Dispatch<SetStateAction<string>>,
    setVideoLabel: Dispatch<SetStateAction<string>>,
    setAirportContent: Dispatch<SetStateAction<TFlight[]>>,
    setRightScreenNum: Dispatch<SetStateAction<number>>,
    setVideoLength: Dispatch<SetStateAction<number>>,
    setTickerText: Dispatch<SetStateAction<string>>,
    setStreamUrl: Dispatch<SetStateAction<string>>,
    ) => {
   
    if(message) {
        const type = JSON.parse(message.data).type
        switch(type) {
            case "SPEED": {
                setSpeed(JSON.parse(message.data).speed)  
            } break
            case "ROUTE": {
                const stops = JSON.parse(message.data).stops
                const routeIcon = JSON.parse(message.data).icon
                const routeColor = JSON.parse(message.data).color
                const routeFontColor = JSON.parse(message.data).fontColor
                setStops(stops) 
                setRouteIcon(routeIcon)
                setRouteColor(routeColor)
                setRouteFontColor(routeFontColor)
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

            case "PLAY_STREAM": {
                const streamUrl = JSON.parse(message.data).url
                setStreamUrl(streamUrl)
                setRightScreenNum(3)
            } break 
            case "PLAY_TICKER": {
                const tickerText = JSON.parse(message.data).text
                setTickerText(tickerText)
                setRightScreenNum(4)
            } break 

        }
    }
}

