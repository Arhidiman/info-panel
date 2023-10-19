import "./MainPage.scss"
import MainPageLeft from "./main-page-left/MainPageLeft"
import MainPageRight from "./main-page-right/MainPageRight"

function MainPage() {
    return (
    <div className="main-page">
        <MainPageLeft/>
        <MainPageRight/>
    </div>
  )
}

export default MainPage
