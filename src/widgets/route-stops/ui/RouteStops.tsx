import { useState, useEffect } from "react"
import "./RouteStops.scss"
import RouteItem from "./route-item/RouteItem"
import { route } from "src/app/mock-data/route"
import { TStop } from "src/app/types/types"
import { TStopTime } from "src/app/types/types"

interface IStops {
    stops: TStop[],
    nextStop: number,
    stopsTimes: TStopTime[],
    
}

function RouteStops({ stops, nextStop, stopsTimes }: IStops) {

    // console.log(stopsTimes)
    // console.log(nextStop)

    let count = 0
    const inMove = true
    const [displayedStops, setDisplayedStops] = useState(4)

    useEffect(() => {
        inMove ? setDisplayedStops(4) : setDisplayedStops(3) 
    }, [inMove])

   

    const stop = (stop: TStop, i: number) => {
        if(count < displayedStops && i >= nextStop) {

            // console.log(stopsTimes[count].time)
            count +=1
            return <RouteItem 
                key={i}
                className={count === displayedStops ? 'line-fade' : ""}
                inMove={inMove}
                isLast={i === stops.length - 1}
                nameRus={stop.nameRus} 
                nameEng={stop.nameEng} 
                timeLeft={stopsTimes[count-1].time}
            />
        }
    }

    return (
        <>
            <div className="route-stops">
                {
                    stops.map(stop)
                }
            </div>
        </>
    )
}

export default RouteStops
