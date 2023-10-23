import AppLeftHeader from "@/entities/app-left-header/AppLeftHeader"
import ApppLeftContent from "./AppLeftContent"
import Spinner from "@/shared/spinner/Spinner"
import { TStop } from "@/app/types/types"

interface IAppLeftIntrface {
    stops: TStop[]
}

function AppLeft({stops}: IAppLeftIntrface) {
    return (
      <div className={`app-page-left ${stops.length > 0 ? "" : "center-content"}`}>
        {
            stops.length > 0 ?
            <>
                <AppLeftHeader/>
                <ApppLeftContent/>
            </>
            : <Spinner/>
        }
      </div>
      )
}

export default AppLeft
