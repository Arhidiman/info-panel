import { AppContext } from "@/App"
import { useContext } from "react"

function HeaderInMoveContent() {

    const { currentStop } = useContext(AppContext)

    return (
        <>
            <div className="app-page__stop-name-ru">{currentStop && currentStop.nameRus}</div>
            <div className="app-page__stop-name-eng">{currentStop && currentStop.nameEng}</div>
        </>
     )
}

export default HeaderInMoveContent
