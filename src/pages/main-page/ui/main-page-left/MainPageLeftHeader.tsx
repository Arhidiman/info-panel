import { TStop } from "src/app/types/types"
import { AppContext } from "../MainPage"


function MainPageLeftHeader() {
    return (

    <AppContext.Consumer>
        { ({currentStop}) => {
            if(currentStop) console.log(currentStop.nameRus)
            return <header className="main-page-header">
                <h1 className="main-page__stop-name-ru">{currentStop && currentStop.nameRus}</h1>
                <h2 className="main-page__stop-name-eng">{currentStop && currentStop.nameEng}</h2>
            </header>
          }
        }
    </AppContext.Consumer>
   
  )
}

export default MainPageLeftHeader
