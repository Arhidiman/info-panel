import { AppContext } from "@/App"
import HeaderWhenStoppingContent from "./header-when-stopping-content/HeaderInMoveContent"
import HeaderInMoveContent from "./header-in-move-content/HeaderWhenStoppingContent"
import { useContext } from "react"

function AppLeftHeader() {

    const { currentStop, inMove} = useContext(AppContext)


    console.log(inMove)

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
