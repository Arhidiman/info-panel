import { route } from "src/app/mock-data/route" 
import "./TransfersInfo.scss"
import Transfers from "./transfers/Transfers"

const currentStop = 1
const transfers = route.stops[currentStop].transfers

const [busTransfers, trolleysTransfers, metroTransfers] = transfers

function TransfersInfo() {

    return (
        <>
            {busTransfers && <Transfers icons={route.stops[currentStop].transfers[0].icons}/>}
            {trolleysTransfers && <Transfers icons={route.stops[currentStop].transfers[1].icons}/>}
            {metroTransfers && <Transfers icons={route.stops[currentStop].transfers[2].icons}/>}
        </>
    )
}

export default TransfersInfo
