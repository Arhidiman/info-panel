import arrow from "src/app/images/icons/arrow.png"

function EnterItem() {

    return (
        <div className="reception-desks-scheme-bottom__enter-item">
            <img className="reception-desks-scheme-bottom__enter-arrow" src={arrow} alt="arrow top"></img>
            <div className="reception-desks-scheme-bottom__enter-text">
                <p className="reception-desks-scheme-bottom__enter-text_ru">Вход</p>
                <p className="reception-desks-scheme-bottom__enter-text_eng">Enter</p>
            </div>
        </div>
    )
}

export default EnterItem
