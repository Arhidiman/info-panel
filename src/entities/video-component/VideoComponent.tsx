import { AppContext } from "@/App"

interface IVideoComponent {
    className: string,
    src: string
}

const video = "http://192.168.100.95:8080/sdcard/content/video/media_plans/69db6abdbb7c206b9eebbb4058d52dd9.mp4"

function VideoComponent({src, className}: IVideoComponent) {
  return (
    <AppContext.Consumer>
        {
            ({setIsVideoEnded}) => 
              <video className={className} autoPlay onEnded={() => setIsVideoEnded(true)}>
                <source src={video} type="video/mp4"/>
              </video>
        }
    </AppContext.Consumer>
  )
}

export default VideoComponent
