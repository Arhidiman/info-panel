import { route } from "src/app/mock-data/route" 
import "./TransfersInfo.scss"
import Transfers from "./transfers/Transfers"

const currentStop = 1 //текущая остановка будет приходить с бэка
const transfers = route.stops[currentStop].transfers

const [busTransfers, trolleysTransfers, metroTransfers] = transfers

function TransfersInfo() {

    return (
        <div className="transfers-scrollable">
            <div className="transfers-wrapper">
                {busTransfers && <Transfers icons={route.stops[currentStop].transfers[0].icons}/>}
                {trolleysTransfers && <Transfers icons={route.stops[currentStop].transfers[1].icons}/>}
                {metroTransfers && <Transfers icons={route.stops[currentStop].transfers[2].icons}/>}
            </div>
        </div>
    )
}

export default TransfersInfo
