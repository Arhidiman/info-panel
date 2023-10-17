interface IRouteItem {
    nameRus: string,
    nameEng: string,
    timeLeft: number
}

function RouteItem({nameRus, nameEng, timeLeft}: IRouteItem) {

    return (
    <div className="route-item">
        <span className="route-item__time-left">{timeLeft}</span>
        <div className="route-item__route-line">
            <span className="route-item__route-line_top"></span>
            <div className="route-item__route-line_circle"></div>
            <span className="route-item__route-line_bottom"></span>
        </div>
        
        <div className="route-item__stop-name">
            <p className="route-item__stop_ru">{nameRus}</p>
            <p className="route-item__stop_eng">{nameEng}</p>
       </div>
    </div>
  )
}

export default RouteItem
