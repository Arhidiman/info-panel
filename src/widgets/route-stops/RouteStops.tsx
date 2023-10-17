import { useState, useEffect } from "react"
import "./RouteStops.scss"
import RouteItem from "./route-item/RouteItem"
import { route } from "src/app/mock-data/route"



function RouteStops() {

    const stops = route.stops
    const inMove = false
    let count = 0

    const [displayedStops, setDisplayedStops] = useState(4)

    useEffect(() => {
        inMove ? setDisplayedStops(4) : setDisplayedStops(3) 
    }, [inMove])


    return (
        <div className="route-stops">
            {
                stops.map((stop, i)=> {
                console.log(i, count)
                    if(count < displayedStops) {
                        count +=1
                        return <RouteItem 
                            className={i === displayedStops - 1 ? 'line-fade' : ""}
                            inMove={inMove}
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
