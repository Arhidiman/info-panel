import useAppContext from "@/hooks/useAppContext"

function HeaderInMoveContent() {

    const { currentStop } = useAppContext()

    return (
        currentStop && 
        <>
            <div className="app-page__stop-name-ru">{currentStop.nameRus}</div>
            <div className="app-page__stop-name-eng">{currentStop.nameEng}</div>
        </>
     )
}

export default HeaderInMoveContent
