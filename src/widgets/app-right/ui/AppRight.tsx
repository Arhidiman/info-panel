import { useEffect, useState,  } from "react"
import contentTemplate from "@/app//images/content-template.png"
import FlightsInfo from "@/widgets/flights-info/ui/FlightsInfo"
import { srcBaseUrl } from "@/shared/constants/urls"
import VideoComponent from "@/entities/video-component/VideoComponent"
import { AppContext } from "@/App"
import { CSSTransition, SwitchTransition } from "react-transition-group"


const screens = (playImageLink: string, videoLink: string) => [
  <img className="app-page-right-image" src={srcBaseUrl+playImageLink} alt="currnet place content"/>,
  <VideoComponent className="app-page-right-video" src={srcBaseUrl+videoLink}/>,
  <FlightsInfo/>,
]

function AppRight() {

    const [iscreenInterval, setScreenInterval] = useState(null)
    const [screenNum, setScreenNum] = useState(0)

    useEffect(() => {
      const screensTotal = screens.length
      const interval = setTimeout(() => {

        if(screenNum === screensTotal - 1) {
          setScreenNum(0)
        } else setScreenNum(screenNum + 1)
      },4000)

      setScreenInterval(interval)
      return () => clearInterval(interval)
    }, [screenNum])

    return (
    
    <>
      <AppContext.Consumer>
          {
            ({playImage, video, rightScreenNum, inMove}) =>  
                <SwitchTransition>
                  <CSSTransition key={inMove ? "in-move" : 'stop'} timeout={1500} classNames="fade" mountOnEnter unmountOnExit>
                    {
                        () => <div className="app-page-right">
                        {screens(playImage, video)[1]}
                    </div>
                    // значение key inMove заменить на другое, которое будет меняться вместе с контентом справа, а не слева
                    }
                  </CSSTransition>
                </SwitchTransition>
          }
      </AppContext.Consumer>
    </>
  )
}

export default AppRight
