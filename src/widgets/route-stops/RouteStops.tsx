import { useState, useEffect } from "react"
import "./RouteStops.scss"
import RouteItem from "./route-item/RouteItem"
import { route } from "src/app/mock-data/route"

function RouteStops() {

    const stops = route.stops
    const currentStop = 2
    const inMove = true
    let count = 0

    const [displayedStops, setDisplayedStops] = useState(4)

    useEffect(() => {
        inMove ? setDisplayedStops(4) : setDisplayedStops(3) 
    }, [inMove])


    return (
        <div className="route-stops">
            {
                stops.map((stop, i)=> {
                    if(count < displayedStops && i >= currentStop) {
                        count +=1
                        return <RouteItem 
                            className={count === displayedStops ? 'line-fade' : ""}
                            inMove={inMove}
                            isLast={i === stops.length - 1}
                            nameRus={stop.nameRus} 
                            nameEng={stop.nameEng} 
                            timeLeft={3+i*5}
                        />
                    }
                })
            }
        </div>
    )
}

export default RouteStops
