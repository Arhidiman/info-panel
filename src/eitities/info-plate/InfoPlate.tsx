import "./InfoPlate.scss"
import { useState, useEffect } from "react"
import { getCurrentDate } from "../lib/getCurrentDate"
import { getCurrentTime } from "../lib/getCurrentTime"

interface IInfoPlate {
  speed: number | string
}

function InfoPlate({ speed }: IInfoPlate) {

    const [currentTime, setCurrentTime] = useState(null)
    const [currentDate, setCurrentDate] = useState(null)
    const [currentTimeInterval, setCurrentTimeInterval] = useState(null)

    useEffect(() => {
        setCurrentDate(getCurrentDate())
    },[])

    useEffect(() => {
      const interval = setTimeout(() => {
        setCurrentTime(getCurrentTime())
      },1000)
      setCurrentTimeInterval(interval)
      return () => clearInterval(interval)
    }, [currentTime])
    
    return (
        <div className="info-plate">
            <div className="info-plate_time">{currentTime}</div>
            <div className="info-plate_date">{currentDate}</div>
            <div className="info-plate_temperature">+25 °C</div>
            <div className="info-plate_speed">{speed} км/ч</div>
        </div>
    )
}

export default InfoPlate
