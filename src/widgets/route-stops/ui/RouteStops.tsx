import { useState, useEffect } from "react"
import "./RouteStops.scss"
import RouteItem from "./route-item/RouteItem"
import { route } from "src/app/mock-data/route"
import { TStop } from "src/app/types/types"

function RouteStops() {

    let count = 0
    const stops = route.stops
    const inMove = true
    const getRandomStop = () => Math.round(Math.random()*stops.length)
    const [displayedStops, setDisplayedStops] = useState(4)
    const [currentStop, setCurrentStop] = useState(getRandomStop)
    const [currentStopInterval, setCurrentTimeInterval] = useState(null)

    useEffect(() => {
        inMove ? setDisplayedStops(4) : setDisplayedStops(3) 
    }, [inMove])

    useEffect(() => {
      const interval = setTimeout(() => {
        setCurrentStop(Math.round(Math.random()*25))
      },2000)
      setCurrentTimeInterval(interval)
      return () => clearInterval(interval)
    }, [currentStop])

    const stop = (stop: TStop, i: number) => {
        if(count < displayedStops && i >= currentStop) {
            count +=1
            return <RouteItem 
                key={i}
                className={count === displayedStops ? 'line-fade' : ""}
                inMove={inMove}
                isLast={i === stops.length - 1}
                nameRus={stop.nameRus} 
                nameEng={stop.nameEng} 
                timeLeft={3+i*5}
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
