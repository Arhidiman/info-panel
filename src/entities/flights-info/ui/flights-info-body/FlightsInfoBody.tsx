import { airportData } from "@/app/mock-data/airport" //заглушка
import { flightDirection, TFlight } from "@/app/types/types"
import { SwitchTransition, CSSTransition } from "react-transition-group"
import { useState, useEffect } from "react"
import { getPaginationArray } from "@/shared/lib/getPaginationArray"
import FlightTableRow from "../flights-table-row/FlightsTableRow"

interface TFlightsInfo {
    type?: flightDirection
}

function FlightsInfoBody({ type=flightDirection.departures }: TFlightsInfo) {
    
    const [ currentPage, setCurrentPage ] = useState(0)
    const [ pageInterval, setPageInterval ] = useState(null)
    const arrivals = airportData.arrivals
    const totalFlightsOnPage = 7
    const totalPagesArray = getPaginationArray(arrivals, totalFlightsOnPage)

    useEffect(() => {
        const pagesTotal = 2
        const interval = setTimeout(() => {
    
            if(currentPage === pagesTotal) {
            setCurrentPage(0)
            } else setCurrentPage(currentPage + 1)
        },4000)
    
        setPageInterval(interval)
        return () => clearInterval(interval)
    }, [currentPage])

    const flightItem = (flight: TFlight, i: number) => <FlightTableRow key={i} flight={flight}/> 

    return (
        <SwitchTransition>
            <CSSTransition key={currentPage} timeout={700} classNames="slide" mountOnEnter unmountOnExit>
                {
                    <table className="air-port-info__table">
                        <tbody>
                            <FlightTableRow type="names"/>
                            {   
                                airportData && totalPagesArray[currentPage].map(flightItem) //временная заглушка из за долгого прихода данных
                            }
                            {/* {({airportData}) => airportData.map(flightItem)} // рендер данных, приходящих с сервера*/} 
                        </tbody>
                    </table>
                }
            </CSSTransition>
        </SwitchTransition>
    )
}

export default FlightsInfoBody
