import { srcBaseUrl } from "@/constants/urls"
import useAppContext from "@/hooks/useAppContext"

function HeaderWhenStoppingContent() {

    const { routeIcon } = useAppContext()

    return (
        <>
            <img src={srcBaseUrl+routeIcon} alt="route icon"/>
            <div className="app-page__route-name">Новособорная - ул. Новая Дорога</div> 
        </> 
    )
}

export default HeaderWhenStoppingContent
