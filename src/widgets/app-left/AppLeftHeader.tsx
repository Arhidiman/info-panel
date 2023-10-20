import { AppContext } from "@/App"

function MainPageLeftHeader() {
    return (

    <AppContext.Consumer>
        { ({currentStop}) => {
            if(currentStop) 
              return <header className="app-page-header">
                  <div className="app-page__stop-name-ru">{currentStop && currentStop.nameRus}</div>
                  <div className="app-page__stop-name-eng">{currentStop && currentStop.nameEng}</div>
              </header>
          }
        }
    </AppContext.Consumer>
   
  )
}

export default MainPageLeftHeader
