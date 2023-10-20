import { useEffect, useState,  } from "react"
import contentTemplate from "src/app//images/content-template.png"
import FlightsInfo from "src/widgets/flights-info/ui/FlightsInfo"

const screens = [
  <img src={contentTemplate} alt="currnet place content"/>,
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
      {/* {screens[screenNum]} */}
       <FlightsInfo/>
       {/* <ReceptionDesksScheme/> */}
    </div>
  )
}

export default AppRight
