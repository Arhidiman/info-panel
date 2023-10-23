import { useEffect, useState,  } from "react"
import contentTemplate from "@/app//images/content-template.png"
import FlightsInfo from "@/widgets/flights-info/ui/FlightsInfo"
import { srcBaseUrl } from "@/shared/constants/urls"

const screens = [
  <img className="app-page-right-image" src={srcBaseUrl+"/sdcard/intro/intro_default.png"} alt="currnet place content"/>,
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
    
    <div className="app-page-right">
      {screens[0]}
       {/* <FlightsInfo/> */}
       {/* <ReceptionDesksScheme/> */}
    </div>
  )
}

export default AppRight
