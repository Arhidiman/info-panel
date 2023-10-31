import { SyntheticEvent } from "react"
import FlightsInfo from "@/components/flights-info/FlightsInfo"
import { srcBaseUrl } from "@/constants/urls"
import VideoComponent from "@/components/video-component/VideoComponent"
import Ticker from "@/components/ticker/Ticker"
import useAppContext from "@/hooks/useAppContext"


interface IRightScreens {
    screenNum: number
}

function RightScreens({ screenNum } : IRightScreens) {

    const { playImage, video, streamUrl, playImageLabel, setError, setLabelToSend } = useAppContext()

    const setImageError = (e: SyntheticEvent<HTMLImageElement>) => {
      setError(e)
      setLabelToSend(playImageLabel)
    } 

    const mockStream = "https://www.youtube.com/embed/QxtigSvGnD8?si=ySkC7y5nDqo5vFTb?autoplay=1&mute=1"
    const mockVideo = "http://192.168.100.95:8080/sdcard/content/video/media_plans/69db6abdbb7c206b9eebbb4058d52dd9.mp4"

    const screens = (playImageLink: string, videoUrl: string, streamUrl: string) => [
        <img onError={setImageError}className="app-page-right-image" src={srcBaseUrl+playImageLink} alt="current place content"/>,
        <VideoComponent className="app-page-right-video" type="video" src={videoUrl}/>,
        <FlightsInfo/>,
        <Ticker/>,
        <VideoComponent className="app-page-right-stream" type="stream" src={streamUrl}/>,
    ]
 
    return ( 
        screens(playImage, mockVideo, mockStream)[screenNum]
    )
}

export default RightScreens
