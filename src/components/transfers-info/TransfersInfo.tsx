import useAppContext from "@/hooks/useAppContext"
import Transfers from "./transfers/Transfers"
import "./TransfersInfo.scss"

function TransfersInfo() {

    const { transfers } = useAppContext()

    const [busTransfers, trolleysTransfers, metroTransfers] = transfers

    return (
           
        <div className={`transfers-scrollable`}>
            <div className="transfers-wrapper">
                {busTransfers && <Transfers icons={busTransfers.icons}/>}
                {trolleysTransfers && <Transfers icons={trolleysTransfers.icons}/>}
                {metroTransfers && <Transfers icons={metroTransfers.icons}/>}
            </div>
        </div>
                 
    )
}

export default TransfersInfo
