interface IRouteItem {
    className?: string,
    topDisplayed: boolean,
    inMove: boolean,
    isLast: boolean,
    nameRus: string,
    nameEng: string,
    timeLeft: number,
    circleColor: string
}

function RouteItem({className, topDisplayed, inMove, isLast, nameRus, nameEng, timeLeft, circleColor}: IRouteItem) {

    return (
    <div className={`route-item ${inMove ? 'in-move' : ""}`}>
        <span className="route-item__time-left">{timeLeft}</span>
        <div className="route-item__route-line">
            <span className="route-item__route-line_top"></span>
            <div className="route-item__route-line_circle" style={{background: circleColor}}></div>
            <span className={`route-item__route-line_bottom ${className && className} ${isLast ? "last-stop" : ""}`}></span>
        </div>
        <div className={`route-item__stop-name ${inMove && topDisplayed ? 'selected' : ""  }`}>
            <p className="route-item__stop_ru">{nameRus}</p>
            <p className="route-item__stop_eng">{nameEng}</p>
       </div>
    </div>
  )
}

export default RouteItem
