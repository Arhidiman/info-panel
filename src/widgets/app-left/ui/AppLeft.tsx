import AppLeftHeader from "./app-left-header/AppLeftHeader"
import ApppLeftContent from "./app-left-content/AppLeftContent"

function AppLeft() {
    return (
        <div className={`app-page-left`}>
            <AppLeftHeader/>
            <ApppLeftContent/>
        </div>
    )
}

export default AppLeft
