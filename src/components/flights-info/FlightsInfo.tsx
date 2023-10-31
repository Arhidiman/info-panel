import FlightsInfoHeader from "./flights-info-header/FlightsInfoHeader"
import FlightsInfoBody from "./flights-info-body/FlightsInfoBody"
import "./FlightsInfo.scss"

function FlightsInfo() {
    return (
       <div className="air-port-info fade">
            <FlightsInfoHeader/>
            <FlightsInfoBody/>
        </div>
    )
}

export default FlightsInfo
