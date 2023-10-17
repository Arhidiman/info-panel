import "./RouteStops.scss"
import RouteItem from "./route-item/RouteItem"
import { route } from "src/app/mock-data/route"

const stops = route.stops

function RouteStops() {

    return (
        <div className="route-stops">
            {stops.map((stop, i)=> <RouteItem nameRus={stop.nameRus} nameEng={stop.nameEng} timeLeft={i*5}/>)}
        </div>
    )
}

export default RouteStops
