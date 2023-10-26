import { useEffect, useState, useContext, ReactEventHandler, SyntheticEvent } from "react"
import { AppContext } from "@/App"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import RightScreens from "@/widgets/right-screens/ui/RightScreens"

function AppRight() {

    const [iscreenInterval, setScreenInterval] = useState(null)
    const [screenNum, setScreenNum] = useState(0)
    const [screensTotal, setScreesTotal] = useState(3)
 
    useEffect(() => {
      const interval = setTimeout(() => {
        if(screenNum === screensTotal - 1) {
          setScreenNum(0)
        } else setScreenNum(screenNum + 1)
      },10000)
      setScreenInterval(interval)
      return () => clearInterval(interval)
    }, [screenNum])

    return (
      <SwitchTransition>
        <CSSTransition key={screenNum} timeout={700} classNames="fade" mountOnEnter unmountOnExit>
              <div className="app-page-right">
                <RightScreens screenNum={screenNum}/>
              </div>
        </CSSTransition>
      </SwitchTransition>
  )
}

export default AppRight
