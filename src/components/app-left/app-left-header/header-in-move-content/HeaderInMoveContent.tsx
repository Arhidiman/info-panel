import { srcBaseUrl } from "@/constants/urls"
import useAppContext from "@/hooks/useAppContext"

function HeaderWhenStoppingContent() {

    const { routeIcon, firstStop, lastStop } = useAppContext()
    
    return (
        <>
            <img src={srcBaseUrl+routeIcon} alt="route icon"/>
            <div className="app-page__route-name">{firstStop + " - " + lastStop}</div> 
        </> 
    )
}

export default HeaderWhenStoppingContent
