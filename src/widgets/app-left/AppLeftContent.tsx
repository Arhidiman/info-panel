import { useEffect, useState } from "react"
import RouteStops from "@/widgets/route-stops/ui/RouteStops"
import TransfersInfo from "@/widgets/transfers-info/ui/TransfersInfo"
import InfoPlate from "@/entities/info-plate/InfoPlate"
import { AppContext } from "@/App"
import { CSSTransition, SwitchTransition } from "react-transition-group"

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
    <div className="app-page-left-content">
        <AppContext.Consumer>
          {
              ({transfers, inMove}) =>  
                  <SwitchTransition>
                    <CSSTransition key={inMove ? "in-move" : 'stop'} timeout={1500} classNames="fade" mountOnEnter unmountOnExit>
                      {
                        !routeContent && transfers.length > 0 && !inMove
                        ? 
                        <TransfersInfo transfers={transfers} currentContent={!routeContent && !inMove}/>
                        :
                        <RouteStops inMove={inMove}/>
                      }
                    </CSSTransition>
                  </SwitchTransition>
          }
        </AppContext.Consumer>
        <InfoPlate/>        
    </div>
  )
}

export default AppLeftContent
