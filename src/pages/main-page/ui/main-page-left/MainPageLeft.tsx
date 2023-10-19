import { useState } from "react"
import MainPageLeftHeader from "./MainPageLeftHeader"
import MainPageLeftBody from "./MainPageLeftBody"
import { TStop } from "src/app/types/types"

function MainPageLeft() {

    const [currentStop, setCurrentStop] = useState(null)
    const [inMove, setInMove] = useState(true)

    console.log(currentStop)

    return (
    <div className="main-page-left">
        <MainPageLeftHeader currentStop={currentStop}/>
        <MainPageLeftBody setCurrentStop={setCurrentStop} setInMove={setInMove}/>
    </div>
  )
}

export default MainPageLeft
