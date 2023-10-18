import { useEffect, useState,  } from "react"
import RouteStops from "src/widgets/route-stops/ui/RouteStops"
import TransfersInfo from "src/widgets/transfers-info/ui/TransfersInfo"
import InfoPlate from "src/eitities/info-plate/InfoPlate"

function MainPageLeftBody() {

    const [routeContent, setRouteContent] = useState(false)
    const [interval, setContentInterval] = useState(null)

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
          routeContent ? <RouteStops/> : <TransfersInfo/>
        }
        <InfoPlate/>
    </div>
  )
}

export default MainPageLeftBody
