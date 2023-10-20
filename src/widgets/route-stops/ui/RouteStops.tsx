import { useState, useEffect } from "react"
import "./RouteStops.scss"
import RouteItem from "./route-item/RouteItem"
import { TStop } from "src/app/types/types"
import { AppContext } from "src/App"

function RouteStops() {
    
    let count = 0
    const inMove = true
    const [displayedStops, setDisplayedStops] = useState(4)

    useEffect(() => {
        inMove ? setDisplayedStops(4) : setDisplayedStops(3) 
    }, [inMove])

    const stop = (stop: TStop, i: number) => {
        return <AppContext.Consumer>
            {({stops, stopsTimes, nextStop}) => {
                console.log(count, displayedStops, nextStop)
                if (count < displayedStops && i >= nextStop) {
                    count +=1
                    return <RouteItem 
                    key={i}
                    className={count === displayedStops ? 'line-fade' : ""}
                    inMove={inMove}
                    isLast={i === stops.length - 1}
                    nameRus={stop.nameRus} 
                    nameEng={stop.nameEng} 
                    timeLeft={stopsTimes[count-1].time}
                />}
                }
            }
        </AppContext.Consumer> 
    }

    return (
        <>
            <div className="route-stops">
                <AppContext.Consumer>                        
                    {
                        ({stops}) => {
                            console.log(stops)
                            return stops.map(stop)
                        }
                    }
                </AppContext.Consumer>
            </div>
        </>
    )
}

export default RouteStops
