import HeaderWhenStoppingContent from "./header-when-stopping-content/HeaderInMoveContent"
import HeaderInMoveContent from "./header-in-move-content/HeaderWhenStoppingContent"
import useAppContext from "@/app/hooks/useAppContext"

function AppLeftHeader() {

    const { currentStop, inMove} = useAppContext()
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
