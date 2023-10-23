import { AppContext } from "@/App"
import { srcBaseUrl } from "@/shared/constants/urls"

function HeaderWhenStoppingContent() {
    return (
        <AppContext.Consumer>
            { 
                ({routeIcon}) =>  {
                    return <>
                        <img src={srcBaseUrl+routeIcon} alt="route icon"/>
                        <div className="app-page__route-name">Новособорная - ул. Новая Дорога</div> 
                    </>
                }
            }
        </AppContext.Consumer>
    )
}

export default HeaderWhenStoppingContent
