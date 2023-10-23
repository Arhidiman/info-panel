import { AppContext } from "@/App"
import HeaderInMoveContent from "./HeaderInMoveContent"
import HeaderWhenStoppingContent from "./HeaderWhenStoppingContent"

function AppLeftHeader() {
    return (

    <AppContext.Consumer>
        { ({currentStop, inMove}) => {
            if(currentStop) 
              return <header className={`${!inMove ? "app-page-header stop" : "app-page-header"}`}>
                {
                  inMove ? <HeaderInMoveContent/> : <HeaderWhenStoppingContent/>
                }
              </header>
          }
        }
    </AppContext.Consumer>
   
  )
}

export default AppLeftHeader
