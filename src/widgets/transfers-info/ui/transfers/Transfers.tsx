interface ITransfers {
    icons: string[]
}
const baseUrl = "http://192.168.100.194:8080"
function Transfers({ icons }: ITransfers) {

    return (      
        <div className="transfers">
            <img className="transfers__icon-main" src={icons && baseUrl+icons[0]} alt="bus image"/>
            <div className="transfers-icons">
                {
                    icons && icons.map((icon, i) => {
                        if(i !== 0) return <img className="transfers__icon" src={baseUrl+icon} alt="bus transfer" key={i}/>
                    })
                }
            </div>
        </div>
    )
}

export default Transfers
