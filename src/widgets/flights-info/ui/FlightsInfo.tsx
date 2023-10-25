import "./FlightsInfo.scss"
import { airportData } from "@/app/mock-data/airport"
import arrivalImg from "@/app/images/icons/arrival.png"
import departureImg from "@/app/images/icons/departure.png"
import { flightDirection, TFlight } from "@/app/types/types"
import { getFlightStatusClass } from "@/widgets/flights-info/lib/getFlightStatusClass"
import { AppContext } from "@/App"

interface TFlightsInfo {
    type?: flightDirection
}

const flightItem = (flight: TFlight, i: number) => {
    return <tr className="table-row" key={i}>
        <td className="air-port-info__table-cell time">{flight.time}</td>
        <td className="air-port-info__table-cell flight"><span className="air-port-info__table-cell-selected">{flight.flightNumber}</span></td>
        <td className="air-port-info__table-cell direction">{flight.direction}</td>
        <td className="air-port-info__table-cell company">{flight.airline}</td>
        <td className="air-port-info__table-cell airplane">{flight.aircraftType}</td>
        <td className={`air-port-info__table-cell status ${getFlightStatusClass(flight.status)}`}>{flight.status}</td>
    </tr>  
}

function FlightsInfo({ type=flightDirection.departures }: TFlightsInfo) {

    return (
            <div className="air-port-info">
            <div className="air-port-info-header">
                <img className="air-port-info__icon" src={type === flightDirection.arrivals ? arrivalImg : departureImg} alt="airport icon"/>
                <p className="air-port-info__flight-direction">{type === flightDirection.arrivals ? "Прилёты" : "Вылеты"}</p>
            </div>
            
            <table className="air-port-info__table">
                <tbody>
                    <tr className="air-port-info__table-top table-row">
                        <td className="air-port-info__table-top-cell names">Время</td>
                        <td className="air-port-info__table-top-cell names">Рейс</td>
                        <td className="air-port-info__table-top-cell direction names">Направление</td>
                        <td className="air-port-info__table-top-cell company names">Авиакомпания</td>
                        <td className="air-port-info__table-top-cell aiplane names">Тип самолёта</td>
                        <td className="air-port-info__table-top-cell status names">Статус</td>
                    </tr>
                {
                    airportData.arrivals.map(flightItem) //временная заглушка из за долгого прихода данных
                }
                {/* <AppContext.Consumer> // рендер данных, приходящих с сервера
                    {
                        ({airportData}) => airportData.map(flightItem) 
                    }
                </AppContext.Consumer> */}
                </tbody>
            </table>
        </div>
    )
}

export default FlightsInfo
