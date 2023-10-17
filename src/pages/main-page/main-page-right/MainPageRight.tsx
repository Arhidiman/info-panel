import "./MainPageRight.scss"
import contentTemplate from "src/assets/content-template.png"
import FlightsInfo from "src/widgets/airport-info/FlightsInfo"

function MainPageRight() {
    return (
    // <img src={contentTemplate} alt="currnet place content"/>
    <div className="main-page-right">
       <FlightsInfo/>
    </div>
  )
}

export default MainPageRight
