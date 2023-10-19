import "./MainPageRight.scss"
import { useEffect, useState,  } from "react"
import contentTemplate from "src/app//images/content-template.png"
import FlightsInfo from "src/widgets/flights-info/ui/FlightsInfo"
import ReceptionDesksScheme from "src/widgets/reception-desks-scheme/ui/ReceptionDesksScheme"

const screens = [
  <img src={contentTemplate} alt="currnet place content"/>,
  <FlightsInfo/>,
  <ReceptionDesksScheme/>
]

function MainPageRight() {

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
    
    <div className="main-page-right">
      {/* {screens[screenNum]} */}
       <FlightsInfo/>
       {/* <ReceptionDesksScheme/> */}
    </div>
  )
}

export default MainPageRight
