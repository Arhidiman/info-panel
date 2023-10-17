import "./MainPageRight.scss"
import contentTemplate from "src/assets/content-template.png"
import FlightsInfo from "src/widgets/airport-info/FlightsInfo"
import ReceptionDesksScheme from "src/widgets/reception-desks-scheme/ReceptionDesksScheme"

function MainPageRight() {
    return (
    
    <div className="main-page-right">
      {/* <img src={contentTemplate} alt="currnet place content"/> */}
       {/* <FlightsInfo/> */}
       <ReceptionDesksScheme/>
    </div>
  )
}

export default MainPageRight
