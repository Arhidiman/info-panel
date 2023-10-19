import "./MainPage.scss"
import { useState, useEffect } from "react"
import { createContext } from "react"
import MainPageLeft from "./main-page-left/MainPageLeft"
import MainPageRight from "./main-page-right/MainPageRight"
import useWebSocket from 'react-use-websocket';

export const AppContext = createContext(null)

function MainPage() {


  const { lastMessage } = useWebSocket("ws://192.168.100.194:23245"); 
  const [ stops, setStops ] = useState([])
  const [ nextStop, setNextStop ] = useState(0)
  const [ transfers, setTransfers] = useState([])
  const [ speed, setSpeed ] = useState(0)
  const [ stopsTimes, setStopTimes ] = useState([])
  const [currentStop, setCurrentStop] = useState(null)
  const [inMove, setInMove] = useState(true)


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
        // console.log("stop times", nextStop)
      }
      if(JSON.parse(lastMessage.data).type === "STOP_BEGIN") {
        const currentStop = JSON.parse(lastMessage.data).index  
        // console.log("stop begin", currentStop)
      }
      if(JSON.parse(lastMessage.data).type === "STOP_END") {
        // console.log("stop ends", "STOP ENDS", JSON.parse(lastMessage.data).index)
        const nextStop = JSON.parse(lastMessage.data).index
        setNextStop(nextStop)
        // console.log(stops)
      }
    }
  }, [lastMessage]);

    useEffect(() => {
      if(stops.length > 0) {
        setTransfers(stops[nextStop].transfers) 
        setCurrentStop(stops[nextStop - 1])
        console.log(stops[nextStop - 1])
      }
    }, [nextStop, stops])

    useEffect(() => {
      if(stops.length > 0) {
        setTransfers(stops[nextStop].transfers) 
        setCurrentStop(stops[nextStop - 1])
        console.log(stops[nextStop - 1])
      }
    }, [nextStop, stops])

    return (
    <div className="main-page">

        <AppContext.Provider value={{lastMessage, stops, nextStop, transfers, speed, stopsTimes, currentStop, inMove}}>
          <MainPageLeft/>
          <MainPageRight/>
        </AppContext.Provider>

       
    </div>
  )
}

export default MainPage
