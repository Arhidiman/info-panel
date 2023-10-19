import { useEffect, useState, SetStateAction, Dispatch } from "react"
import RouteStops from "src/widgets/route-stops/ui/RouteStops"
import TransfersInfo from "src/widgets/transfers-info/ui/TransfersInfo"
import InfoPlate from "src/eitities/info-plate/InfoPlate"
import useWebSocket from 'react-use-websocket';


interface IMainPageLeftBody {
  setCurrentStop: Dispatch<SetStateAction<string>>,
  setInMove: Dispatch<SetStateAction<boolean>>
}

// console.log(import.meta.env.VITE_APP_WEB_SOCKET_URL)
function MainPageLeftBody() {

    const [ routeContent, setRouteContent ] = useState(false)
    const [ interval, setContentInterval ] = useState(null)
    const [ speed, setSpeed ] = useState(0)


    useEffect(() => {
      const interval = setTimeout(() => {
        setRouteContent(!routeContent)
      },3000)
      setContentInterval(interval)
      return () => clearInterval(interval)
    }, [routeContent])

  

    return (
    <div className="main-page-left">
        {
          // routeContent ? <RouteStops stops={stops}/> : <TransfersInfo transfers={transfers}/>
        }
        <RouteStops/>
        <InfoPlate speed={speed} />
    </div>
  )
}

export default MainPageLeftBody
