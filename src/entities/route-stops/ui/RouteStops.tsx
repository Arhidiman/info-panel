import { useState, useEffect } from "react"
import "./RouteStops.scss"
import RouteItem from "./route-item/RouteItem"
import { TStop } from "@/app/types/types"
import useAppContext from "@/app/hooks/useAppContext"

interface IRouteStops {
    inMove: boolean
}

function RouteStops({ inMove }: IRouteStops) {

    let count = 0
    const [displayedStops, setDisplayedStops] = useState(4)

    useEffect(() => {
        inMove ? setDisplayedStops(4) : setDisplayedStops(3) 
    }, [inMove])

    const { stops, stopsTimes, nextStop } = useAppContext()

    const stop = (stop: TStop, i: number) => {
        try {
            if (count < displayedStops && i >= nextStop && stopsTimes[count]) {
                count +=1
                return <RouteItem 
                    key={stop.nameRus}
                    topDisplayed={count === 1}
                    className={count === displayedStops ? 'line-fade' : ""}
                    inMove={inMove}
                    isLast={i === stops.length - 1}
                    nameRus={stop.nameRus} 
                    nameEng={stop.nameEng} 
                    timeLeft={stopsTimes[count-1].time}
                />
            }
        } catch(error) {
            console.log(error, count, nextStop, stop, displayedStops)
        }
    }
    return (
        <div className="route-stops">
                {
                    stops.length > 0 ?  stops.map(stop) : <div className="route-item end-stop" >Конечная</div>
                }
        </div>
    )
}

export default RouteStops
