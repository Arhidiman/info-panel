import useAppContext from "@/hooks/useAppContext"
import HeaderWhenStoppingContent from "./header-when-stopping-content/HeaderWhenStoppingContent"
import HeaderInMoveContent from "./header-in-move-content/HeaderInMoveContent"

function AppLeftHeader() {

    const { currentStop, inMove} = useAppContext()
    
    return (
        currentStop && 
        <header className={`${!inMove ? "app-page-header stop" : "app-page-header"}`}>
            {
              inMove ? <HeaderInMoveContent/> : <HeaderWhenStoppingContent/>
            }
        </header>
    )
}

export default AppLeftHeader
