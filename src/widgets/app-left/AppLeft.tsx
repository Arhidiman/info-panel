import AppLeftHeader from "@/entities/app-left-header/AppLeftHeader"
import ApppLeftContent from "./AppLeftContent"
import Spinner from "@/shared/ui/spinner/Spinner"
import { TStop } from "@/app/types/types"

interface IAppLeftIntrface {
    stops: TStop[]
}

function AppLeft({stops}: IAppLeftIntrface) {
    return (
      <div className={`app-page-left`}>
        <AppLeftHeader/>
        <ApppLeftContent/>
      </div>
      )
}

export default AppLeft
