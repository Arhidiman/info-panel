import "./InfoPlate.scss"
import { useState, useEffect } from "react"
import { getCurrentDate } from "@/entities/info-plate/lib/getCurrentDate"
import { getCurrentTime } from "@/entities/info-plate/lib/getCurrentTime"
import useAppContext from "@/app/hooks/useAppContext"

function InfoPlate() {

    const [currentTime, setCurrentTime] = useState(null)
    const [currentDate, setCurrentDate] = useState(null)
    const [currentTimeInterval, setCurrentTimeInterval] = useState(null)
    const { speed } = useAppContext()

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
