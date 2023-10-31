import { srcBaseUrl } from "@/constants/urls"

interface ITransfers {
    icons: string[]
}

function Transfers({ icons }: ITransfers) {
    return (      
        <div className="transfers">
            <img className="transfers__icon-main" src={icons && srcBaseUrl+icons[0]} alt="bus image"/>
            <div className="transfers-icons">
                {
                    icons && icons.map((icon, i) =>  i !== 0 ? <img className="transfers__icon" src={srcBaseUrl+icon} alt="bus transfer" key={i}/> : null)
                }
            </div>
        </div>
    )
}

export default Transfers
