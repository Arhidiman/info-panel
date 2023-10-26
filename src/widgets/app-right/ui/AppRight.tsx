import { useEffect, useState, useContext, ReactEventHandler, SyntheticEvent } from "react"
import contentTemplate from "@/app//images/content-template.png"
import FlightsInfo from "@/widgets/flights-info/ui/FlightsInfo"
import { srcBaseUrl } from "@/shared/constants/urls"
import VideoComponent from "@/entities/video-component/VideoComponent"
import { AppContext } from "@/App"
import { CSSTransition, SwitchTransition } from "react-transition-group"

function AppRight() {

    const [iscreenInterval, setScreenInterval] = useState(null)
    const [screenNum, setScreenNum] = useState(0)
    const { inMove, playImage, video, playImageLabel, setError, setLabelToSend } = useContext(AppContext)

    const setImageError = (e: SyntheticEvent<HTMLImageElement>) => {
      setError(e)
      setLabelToSend(playImageLabel)
    } 

    const screens = (playImageLink: string, videoLink: string) => [
        <img onError={setImageError} onLoad={() =>console.log("loaded")} className="app-page-right-image" src={srcBaseUrl+playImageLink} alt="currnet place content"/>,
        <VideoComponent className="app-page-right-video" src={srcBaseUrl+videoLink}/>,
        <FlightsInfo/>,
    ]
 
    useEffect(() => {
      // console.log(screenNum)
      const screensTotal = screens.length
      const interval = setTimeout(() => {

        if(screenNum === screensTotal) {
          setScreenNum(0)
        } else setScreenNum(screenNum + 1)
      },15000)

      setScreenInterval(interval)
      return () => clearInterval(interval)
    }, [screenNum])

    return (
      <SwitchTransition>
        <CSSTransition key={screenNum} timeout={700} classNames="fade" mountOnEnter unmountOnExit>
          {
              () => <div className="app-page-right">
              {screens(playImage, video)[1]}
              </div>
          // значение key inMove заменить на другое, которое будет меняться вместе с контентом справа, а не слева
          }
        </CSSTransition>
      </SwitchTransition>
  )
}

export default AppRight
