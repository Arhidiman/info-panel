import '@/App.scss'
import AppLeft from '@/widgets/app-left/AppLeft'
import AppRight from '@/widgets/app-right/AppRight'
import { useState, useEffect } from "react"
import { createContext } from "react"
import useWebSocket from 'react-use-websocket';
import { setRouteStates } from '@/shared/lib/setRoutStates'
import { wsUrl } from '@/shared/constants/urls'
export const AppContext = createContext(null)

function App() {

  const { lastMessage } = useWebSocket(wsUrl); 
  const [ stops, setStops ] = useState([])
  const [ nextStop, setNextStop ] = useState(5)
  const [ transfers, setTransfers] = useState([])
  const [ speed, setSpeed ] = useState(0)
  const [ stopsTimes, setStopTimes ] = useState([])
  const [currentStop, setCurrentStop] = useState(null)
  const [inMove, setInMove] = useState(true)
  const [routeIcon, setRouteIcon] = useState("")
  
  useEffect(() => {
    setRouteStates(lastMessage, setSpeed, setStops, setStopTimes, setNextStop, setInMove, setRouteIcon)
  }, [lastMessage]);

  useEffect(() => {
    if(stops.length > 0) {
      setTransfers(stops[nextStop].transfers) 
      setCurrentStop(stops[nextStop - 1])
    }
  }, [nextStop, stops])

  return (
    <div className="app-page">
      <AppContext.Provider value={{lastMessage, stops, nextStop, transfers, speed, stopsTimes, currentStop, inMove, routeIcon}}>
        <AppLeft/>
        <AppRight/> 
      </AppContext.Provider>
    </div>
  )
}

export default App
