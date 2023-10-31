import useAppContext from "@/hooks/useAppContext"

function HeaderInMoveContent() {

    const { currentStop } = useAppContext()

    return (
        <>
            <div className="app-page__stop-name-ru">{currentStop && currentStop.nameRus}</div>
            <div className="app-page__stop-name-eng">{currentStop && currentStop.nameEng}</div>
        </>
     )
}

export default HeaderInMoveContent
