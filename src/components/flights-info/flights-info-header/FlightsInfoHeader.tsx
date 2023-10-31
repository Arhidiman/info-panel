import arrivalImg from "@/app/images/icons/arrival.png"
import departureImg from "@/app/images/icons/departure.png"
import { flightDirection } from "@/types/types"

interface TFlightsInfo {
    type?: flightDirection
}

function FlightsInfoHeader({ type=flightDirection.departures }: TFlightsInfo) {
    return (
        <div className="air-port-info-header">
            <img className="air-port-info__icon" src={type === flightDirection.arrivals ? arrivalImg : departureImg} alt="airport icon"/>
            <p className="air-port-info__flight-direction">{type === flightDirection.arrivals ? "Прилёты" : "Вылеты"}</p>
        </div> 
    )
}

export default FlightsInfoHeader
