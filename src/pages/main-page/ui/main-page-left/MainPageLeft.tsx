import { useState } from "react"
import MainPageLeftHeader from "./MainPageLeftHeader"
import MainPageLeftBody from "./MainPageLeftBody"
import { TStop } from "src/app/types/types"

function MainPageLeft() {

    // const [currentStop, setCurrentStop] = useState(null)

    // console.log(currentStop)

    return (
      <div className="main-page-left">
          <MainPageLeftHeader/>
          <MainPageLeftBody/>
      </div>
      )
}

export default MainPageLeft
