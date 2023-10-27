import { TFlight } from "@/app/types/types"
import { getFlightStatusClass } from "@/entities/flights-info/lib/getFlightStatusClass"

interface TFlightTableRow {
    flight?: TFlight,
    type?: "names" | "content"
}

function FlightTableRow({ flight, type}: TFlightTableRow) {
    return (
        type === "names" 
        ? 
        <tr className="table-row">
            <td className="air-port-info__table-cell names time">Время</td>
            <td className="air-port-info__table-cell names flight">Рейс</td>
            <td className="air-port-info__table-cell names direction">Направление</td>
            <td className="air-port-info__table-cell names company">Авиакомпания</td>
            <td className="air-port-info__table-cell names airplane">Тип самолёта</td>
            <td className="air-port-info__table-cell names status}">Статус</td>
        </tr>  
        :
        <tr className="table-row">
            <td className={`air-port-info__table-cell time`}>{flight.time}</td>
            <td className={`air-port-info__table-cell flight`}><span className="air-port-info__table-cell-selected">{flight.flightNumber}</span></td>
            <td className={`air-port-info__table-cell direction`}>{flight.direction}</td>
            <td className={`air-port-info__table-cell company`}>{flight.airline}</td>
            <td className={`air-port-info__table-cell airplane`}>{flight.aircraftType}</td>
            <td className={`air-port-info__table-cell status ${getFlightStatusClass(flight.status)}`}>{flight.status}</td>
        </tr>  
    )
}

export default FlightTableRow
