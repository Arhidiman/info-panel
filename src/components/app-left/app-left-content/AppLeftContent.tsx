import { useEffect, useState } from "react"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import useAppContext from "@/hooks/useAppContext"
import RouteStops from "@/components/route-stops/RouteStops"
import TransfersInfo from "@/components/transfers-info/TransfersInfo"
import InfoPlate from "@/components/info-plate/InfoPlate"

function AppLeftContent() {

    const [ routeContent, setRouteContent ] = useState(false)
    const [ interval, setContentInterval ] = useState(null)
    const { transfers, inMove} = useAppContext()
    
    useEffect(() => {
      const interval = setTimeout(() => {
        setRouteContent(!routeContent)
      }, 3000)
      setContentInterval(interval)
      return () => clearInterval(interval)
    }, [routeContent])

    return (
    <div className="app-page-left-content">
        <SwitchTransition>
            <CSSTransition key={inMove ? "in-move" : 'stop'} timeout={1500} classNames="fade" mountOnEnter unmountOnExit>
                {
                  !routeContent && transfers.length > 0 && !inMove
                  ? 
                  <TransfersInfo transfers={transfers}/>
                  :
                  <RouteStops inMove={inMove}/>
                }
            </CSSTransition>
        </SwitchTransition>
        <InfoPlate/>        
    </div>
  )
}

export default AppLeftContent
