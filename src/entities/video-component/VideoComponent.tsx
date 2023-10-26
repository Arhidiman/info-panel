import { useState, useEffect, useContext, SyntheticEvent } from "react"
import { AppContext } from "@/App"

interface IVideoComponent {
    className: string,
    src: string
}

const video = "http://192.168.100.95:8080/sdcard/content/video/media_plans/69db6abdbb7c206b9eebbb4058d52dd9.mp4"

function VideoComponent({src, className}: IVideoComponent) {

  const {setIsVideoEnded, setError, setLabelToSend, videoLabel} = useContext(AppContext)  
  const [ videoLength, setVideoLength ] = useState(5000)  //заглушка, данные берутся из веб-сокета
  const [ videoPlaying, setVideoPlaying] = useState(false)
  const [ timeout, setVideoTimeout ] = useState(null)

  const setVideoError = (e: SyntheticEvent<HTMLVideoElement>) => {
    console.log(e)
    setError(e)
    setLabelToSend(videoLabel)
  } 
      
  useEffect(() => {
      const timeout = setTimeout(() => {
            videoPlaying ? setIsVideoEnded(true) : null
            setVideoPlaying(false)
      }, videoLength)
      setVideoTimeout(timeout)
      return () => clearTimeout(timeout)
  }, [videoLength, videoPlaying])

  const setStartVideo = () => setVideoPlaying(true)

  return (
      <video className={className} muted autoPlay={true} onPlay={setStartVideo} onError={setVideoError}>
        <source src={video} type="video/mp4"/>
      </video>
  )
}

export default VideoComponent
