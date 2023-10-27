import "./Ticker.scss"
import { useContext } from "react"
import { AppContext } from "@/App"
import { useState, useEffect, useRef } from "react"

function Ticker() {

    const [ tickerWidth, setTickerWidth] = useState(0)
    const [ tickerSpeed, setTickerSpeed] = useState(0.3)
    const ticker = useRef<HTMLParagraphElement>() 
    const { tickerText } = useContext(AppContext) //Пока стоит заглушка

    useEffect(() => {
        setTickerWidth(ticker.current.scrollWidth)
    }, [ticker])

    useEffect(() => {
        ticker.current.animate([
            { transform: `translateX(-${tickerWidth+2000}px)` }
          ], {
            duration: tickerWidth/tickerSpeed,
            iterations: Infinity
          })
    }, [tickerWidth])

    return (
        <div className="ticker">
            <p ref={ticker} className="ticker-text" >
                {/* {tickerText} */}
                Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока Бегущая cтрока 
            </p>
        </div>
    )
}

export default Ticker
