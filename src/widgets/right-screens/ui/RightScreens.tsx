import { useEffect, useState, useContext, ReactEventHandler, SyntheticEvent } from "react"
import FlightsInfo from "@/entities/flights-info/ui/FlightsInfo"
import { srcBaseUrl } from "@/shared/constants/urls"
import VideoComponent from "@/entities/video-component/VideoComponent"
import { AppContext } from "@/App"
import Ticker from "@/entities/ticker/ui/Ticker"

interface IRightScreens {
    screenNum: number
}

function RightScreens({ screenNum } : IRightScreens) {

    const { playImage, video, playImageLabel, streamUrl, setError, setLabelToSend } = useContext(AppContext)

    const setImageError = (e: SyntheticEvent<HTMLImageElement>) => {
      setError(e)
      setLabelToSend(playImageLabel)
    } 

    const screens = (playImageLink: string, videoLink: string) => [
        <img onError={setImageError}className="app-page-right-image" src={srcBaseUrl+playImageLink} alt="currnet place content"/>,
        <VideoComponent className="app-page-right-video" src={srcBaseUrl+videoLink}/>,
        <FlightsInfo/>,
        <Ticker/>,
        <VideoComponent className="app-page-right-video" src={srcBaseUrl+streamUrl}/>,

    ]
 
    return ( 
        screens(playImage, video)[screenNum]
    )
}

export default RightScreens
