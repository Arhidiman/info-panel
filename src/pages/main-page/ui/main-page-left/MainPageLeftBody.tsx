import { useEffect, useState, SetStateAction, Dispatch } from "react"
import RouteStops from "src/widgets/route-stops/ui/RouteStops"
import TransfersInfo from "src/widgets/transfers-info/ui/TransfersInfo"
import InfoPlate from "src/eitities/info-plate/InfoPlate"
import useWebSocket, { ReadyState } from 'react-use-websocket';

interface IMainPageLeftBody {
  setCurrentStop: Dispatch<SetStateAction<string>>,
  setInMove: Dispatch<SetStateAction<boolean>>
}

// console.log(import.meta.env.VITE_APP_WEB_SOCKET_URL)
function MainPageLeftBody({ setCurrentStop, setInMove }: IMainPageLeftBody) {

    const { lastMessage } = useWebSocket("ws://192.168.100.194:23245"); 
    const [ routeContent, setRouteContent ] = useState(false)
    const [ interval, setContentInterval ] = useState(null)
    const [ stops, setStops ] = useState([])
    const [ nextStop, setNextStop ] = useState(0)
    const [ transfers, setTransfers] = useState([])
    const [ speed, setSpeed ] = useState(0)
    const [ stopsTimes, setStopTimes ] = useState([])

    // if (lastMessage ) {
    //   console.log('messae')
    //   if(JSON.parse(lastMessage.data).type === "SPEED") {
    //     setSpeed(JSON.parse(lastMessage.data).speed)      
    //   }
    //   if(JSON.parse(lastMessage.data).type === "ROUTE") {
    //     setStops(lastMessage.data.stops) 
    //   }
    // }

    useEffect(() => {
      if (lastMessage) {
        if(JSON.parse(lastMessage.data).type === "SPEED") {
          setSpeed(JSON.parse(lastMessage.data).speed)      
        }
        if(JSON.parse(lastMessage.data).type === "ROUTE") {
          const stops = (JSON.parse(lastMessage.data).stops)
          setStops(stops) 
        }
        if(JSON.parse(lastMessage.data).type === "STOP_TIMES") {
          const nextStop = JSON.parse(lastMessage.data).stops[0].index
          const stopsTimes = JSON.parse(lastMessage.data).stops
          // setNextStop(nextStop) 
          setStopTimes(stopsTimes)
          console.log("stop times", nextStop)
        }
        if(JSON.parse(lastMessage.data).type === "STOP_BEGIN") {
          const currentStop = JSON.parse(lastMessage.data).index  
          console.log("stop begin", currentStop)
        }
        if(JSON.parse(lastMessage.data).type === "STOP_END") {
          console.log("stop ends", "STOP ENDS", JSON.parse(lastMessage.data).index)
          const nextStop = JSON.parse(lastMessage.data).index
          setNextStop(nextStop)
          console.log(stops)
        }
      }
    }, [lastMessage]);

    useEffect(() => {
      const interval = setTimeout(() => {
        setRouteContent(!routeContent)
      },3000)
      setContentInterval(interval)
      return () => clearInterval(interval)
    }, [routeContent])

    useEffect(() => {
      if(stops.length > 0) {
        setTransfers(stops[nextStop].transfers) 
        setCurrentStop(stops[nextStop - 1])
        console.log(stops[nextStop - 1])
      }
    }, [nextStop, stops])

    return (
    <div className="main-page-left">
        {
          // routeContent ? <RouteStops stops={stops}/> : <TransfersInfo transfers={transfers}/>
        }
        <RouteStops stops={stops} nextStop={nextStop} stopsTimes={stopsTimes}/>
        <InfoPlate speed={speed} />
    </div>
  )
}

export default MainPageLeftBody
