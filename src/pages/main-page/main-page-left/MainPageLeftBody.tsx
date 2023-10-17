import CurrentRouteContent from "src/widgets/route-stops/RouteStops"
import TransfersInfo from "src/widgets/transfers-info/TransfersInfo"

function MainPageLeftBody() {

    return (
    <div className="transfers-wrapper">
        <CurrentRouteContent/>
        {/* <TransfersInfo/> */}
    </div>
  )
}

export default MainPageLeftBody
