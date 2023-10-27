import "./TransfersInfo.scss"
import Transfers from "./transfers/Transfers"
import { TTransfer } from "@/app/types/types"

interface ITransfersInfo {
    transfers: TTransfer[],
}

function TransfersInfo({ transfers }: ITransfersInfo) {

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
