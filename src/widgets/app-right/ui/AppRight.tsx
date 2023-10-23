import { useEffect, useState,  } from "react"
import contentTemplate from "@/app//images/content-template.png"
import FlightsInfo from "@/widgets/flights-info/ui/FlightsInfo"
import { srcBaseUrl } from "@/shared/constants/urls"
import { AppContext } from "@/App"

const screens = (playImageLink: string) => [
  <img className="app-page-right-image" src={srcBaseUrl+playImageLink} alt="currnet place content"/>,
  <FlightsInfo/>
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
    <AppContext.Consumer>
      {
        ({playImage}) => {
            return <div className="app-page-right">
                {screens(playImage)[0]}
            </div>
        
        }
      }
    </AppContext.Consumer>
  
  )
}

export default AppRight
