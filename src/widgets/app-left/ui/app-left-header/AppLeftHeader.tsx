import { AppContext } from "@/App"
import HeaderInMoveContent from "./header-in-move-content/HeaderInMoveContent"
import HeaderWhenStoppingContent from "./header-when-stopping-content/HeaderWhenStoppingContent"
import { useContext } from "react"

function AppLeftHeader() {

    const { currentStop, inMove} = useContext(AppContext)

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
