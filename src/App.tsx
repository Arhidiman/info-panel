import '@/App.scss'
import AppLeft from '@/widgets/app-left/AppLeft'
import AppRight from '@/widgets/app-right/ui/AppRight'
import { useState, useEffect } from "react"
import { createContext } from "react"
import useWebSocket from 'react-use-websocket';
import { setRouteStates } from '@/shared/lib/setRoutStates'
import { wsUrl } from '@/shared/constants/urls'
export const AppContext = createContext(null)

function App() {

  const { lastMessage, sendMessage } = useWebSocket(wsUrl); 
  const [ stops, setStops ] = useState([])
  const [ nextStop, setNextStop ] = useState(5)
  const [ transfers, setTransfers] = useState([])
  const [ speed, setSpeed ] = useState(0)
  const [ stopsTimes, setStopTimes ] = useState([])
  const [currentStop, setCurrentStop] = useState(null)
  const [inMove, setInMove] = useState(true)
  const [routeIcon, setRouteIcon] = useState("")
  const [playImage, setPlayImage] = useState("")
  const [video, setVideo] = useState("")
  const [videoLabel, setVideoLabel] = useState("")
  const [airportContent, setAirportContent] = useState([])
  const [rightScreenNum, setRightScreenNum] = useState(0) //0 - картинка(лого метро); 1 - видео; 2 - прилёты/вылеты
  const [isVideoEnded, setIsVideoEnded] = useState(false)

  useEffect(() => {
    setRouteStates(
      lastMessage, 
      setSpeed, 
      setStops, 
      setStopTimes, 
      setNextStop, 
      setInMove, 
      setRouteIcon, 
      setPlayImage, 
      setVideoLabel,
      setVideo, 
      setAirportContent, 
      setRightScreenNum,
    )
  }, [lastMessage]);

  useEffect(() => {
    if(stops.length > 0 && stops[nextStop]) {
      // setTransfers(stops[nextStop].transfers) 
      setTransfers(stops[nextStop].transfers) 
      setCurrentStop(stops[nextStop - 1])
    }
  }, [nextStop, stops])

  useEffect(() => {
    if(isVideoEnded) {
      // sendMessage(JSON.stringify({type: "COMPLETE", label: videoLabel})) //отправка сообщения после окончания проигрывания видео
      // setIsVideoEnded(false)
    } 
  }, [isVideoEnded])

  return (
    <div className="app-page">
      <AppContext.Provider value={
          {
            lastMessage, 
            stops, 
            nextStop, 
            transfers, 
            speed, 
            stopsTimes, 
            currentStop, 
            inMove, 
            routeIcon, 
            playImage, 
            video, 
            airportContent, 
            rightScreenNum,
          }
      }>
        <AppLeft stops={stops}/>
        <AppRight/> 
      </AppContext.Provider>
    </div>
  )
}

export default App
