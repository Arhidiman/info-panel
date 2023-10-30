import { AppContext } from "@/App"
import { srcBaseUrl } from "@/shared/constants/urls"
import { useContext } from "react"

function HeaderWhenStoppingContent() {

    const { routeIcon } = useContext(AppContext)

    return (
        <>
            <img src={srcBaseUrl+routeIcon} alt="route icon"/>
            <div className="app-page__route-name">Новособорная - ул. Новая Дорога</div> 
        </> 
    )
}

export default HeaderWhenStoppingContent
