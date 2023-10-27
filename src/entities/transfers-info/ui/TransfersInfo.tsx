import "./TransfersInfo.scss"
import Transfers from "./transfers/Transfers"
import { TTransfer } from "@/app/types/types"
import { CSSTransition, SwitchTransition } from "react-transition-group"
import { AppContext } from "@/App"
import { useState, useEffect } from "react"

interface ITransfersInfo {
    transfers: TTransfer[],
    currentContent: boolean
}

function TransfersInfo({ transfers, currentContent }: ITransfersInfo) {

    const [busTransfers, trolleysTransfers, metroTransfers] = transfers
    const [state, setState] = useState(true)

    return (
            <SwitchTransition mode="out-in">
                <CSSTransition
                    key={String(state)}
                    timeout={1000}
                    classNames='fade'
                    mountOnEnter
                    unmountOnExit
                >
                {
                    state => 
                        <div className={`transfers-scrollable ${state}`}>
                            <div className="transfers-wrapper">
                                {busTransfers && <Transfers icons={busTransfers.icons}/>}
                                {trolleysTransfers && <Transfers icons={trolleysTransfers.icons}/>}
                                {metroTransfers && <Transfers icons={metroTransfers.icons}/>}
                            </div>
                        </div>
                }
                </CSSTransition>
            </SwitchTransition>   
    )
}

export default TransfersInfo
