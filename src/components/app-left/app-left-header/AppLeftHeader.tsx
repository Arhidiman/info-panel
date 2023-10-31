import useAppContext from "@/hooks/useAppContext"
import HeaderWhenStoppingContent from "./header-when-stopping-content/HeaderWhenStoppingContent"
import HeaderInMoveContent from "./header-in-move-content/HeaderInMoveContent"

function AppLeftHeader() {

    const { currentStop, inMove, routeColor, routeFontColor} = useAppContext()

    console.log(routeColor, routeFontColor)

    const headerStyle = {
        background: routeColor, 
        color: routeFontColor
    }
    
    console.log(currentStop)
    
    return (
        <header className={`${!inMove ? "app-page-header stop" : "app-page-header"}`} style={!inMove ? headerStyle : {}}>
            {
              inMove && currentStop ?  <HeaderInMoveContent/> : <HeaderWhenStoppingContent/>
            }
        </header>
    )
}

export default AppLeftHeader
