import useAppContext from "@/hooks/useAppContext"
import Transfers from "./transfers/Transfers"
import { TTransfer } from "@/types/types"
import "./TransfersInfo.scss"

function TransfersInfo() {

    const { transfers } = useAppContext()

    const transferType = (transferType: TTransfer) => <Transfers icons={transferType.icons}/>

    return (
           
        <div className={`transfers-scrollable`}>
            <div className="transfers-wrapper">
                {transfers.map(transferType)}
            </div>
        </div>
                 
    )
}

export default TransfersInfo
