import { useState, useEffect, SyntheticEvent } from "react"
import useAppContext from "@/hooks/useAppContext"

interface IVideoComponent {
    className: string,
    src: string,
    type: "video" | "stream"
}

function VideoComponent({src, className, type}: IVideoComponent) {

  const {setIsVideoEnded, setError, setLabelToSend, videoLabel, videoLength, rightScreenNum} = useAppContext() 
  const [ videoPlaying, setVideoPlaying] = useState(false)
  const [ timeout, setVideoTimeout ] = useState(null)

  const setVideoError = (e: SyntheticEvent<HTMLVideoElement>) => {
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
      type === "stream"  
      ? 
      <iframe className={className} src={src} title="YouTube video player" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      :
      <video className={className} muted autoPlay={true} onPlay={setStartVideo} onError={setVideoError}>
        <source src={src} type="video/mp4"/>
      </video>
  )
}

export default VideoComponent
