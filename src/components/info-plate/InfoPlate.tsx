import { useState, useEffect } from "react"
import { getCurrentDate } from "@/lib/getCurrentDate"
import { getCurrentTime } from "@/lib/getCurrentTime"
import useAppContext from "@/hooks/useAppContext"
import "./InfoPlate.scss"

function InfoPlate() {

    const [currentTime, setCurrentTime] = useState(null)
    const [currentDate, setCurrentDate] = useState(null)
    const [currentTimeInterval, setCurrentTimeInterval] = useState(null)
    const { speed, temperature } = useAppContext()

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
          <div className="info-plate_temperature">{temperature}</div>
          <div className="info-plate_speed">{speed} км/ч</div>
        </div>
    )
}

export default InfoPlate
