import { useEffect, useState } from "react"
import RouteStops from "src/widgets/route-stops/ui/RouteStops"
import InfoPlate from "src/eitities/info-plate/InfoPlate"
import { AppContext } from "src/App"

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
        {
          // routeContent ? <RouteStops stops={stops}/> : <TransfersInfo transfers={transfers}/>
        }
        <AppContext.Consumer>
          {
            ({speed}) => 
            <> 
              <RouteStops/>
              <InfoPlate speed={speed} />
            </>
          }
        </AppContext.Consumer>
       
    </div>
  )
}

export default AppLeftContent
