import { useEffect, useState } from "react"
import RouteStops from "@/widgets/route-stops/ui/RouteStops"
import TransfersInfo from "../transfers-info/ui/TransfersInfo"
import InfoPlate from "@/entities/info-plate/InfoPlate"
import { AppContext } from "@/App"

function AppLeftContent() {

    const [ routeContent, setRouteContent ] = useState(false)
    const [ interval, setContentInterval ] = useState(null)
    
    useEffect(() => {
      const interval = setTimeout(() => {
        setRouteContent(!routeContent)
      },3000)
      setContentInterval(interval)
      return () => clearInterval(interval)
    }, [routeContent])

    return (
    <div className="app-page-left">
        <AppContext.Consumer>
          {
              ({transfers, inMove}) => routeContent ? <RouteStops inMove={inMove}/> : <TransfersInfo transfers={transfers}/>
          }
          
        </AppContext.Consumer>
        <InfoPlate/>        
    </div>
  )
}

export default AppLeftContent
