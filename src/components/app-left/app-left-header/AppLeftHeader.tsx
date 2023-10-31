import { CSSTransition, SwitchTransition } from "react-transition-group"
import useAppContext from "@/hooks/useAppContext"
import HeaderWhenStoppingContent from "./header-when-stopping-content/HeaderWhenStoppingContent"
import HeaderInMoveContent from "./header-in-move-content/HeaderInMoveContent"

function AppLeftHeader() {

    const { currentStop, inMove, routeColor, routeFontColor} = useAppContext()

    const headerStyle = {
        background: routeColor, 
        color: routeFontColor
    }
        
    return (
        <SwitchTransition>
            <CSSTransition key={inMove ? "in-move" : 'stop'} timeout={1500} classNames="fade" mountOnEnter unmountOnExit>
                <header className={`${!inMove ? "app-page-header stop" : "app-page-header"}`} style={!inMove ? headerStyle : {}}>
                    {
                        inMove && currentStop ?  <HeaderInMoveContent/> : <HeaderWhenStoppingContent/>
                    }
                </header>
            </CSSTransition>
        </SwitchTransition>
    )
}

export default AppLeftHeader
