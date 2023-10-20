import { AppContext } from "@/App"

function HeaderInMoveContent() {
    return (
        <AppContext.Consumer>
            { ({currentStop}) => 
                <>
                    <div className="app-page__stop-name-ru">{currentStop && currentStop.nameRus}</div>
                    <div className="app-page__stop-name-eng">{currentStop && currentStop.nameEng}</div>
                </>
            } 
        </AppContext.Consumer>
     )
}

export default HeaderInMoveContent
