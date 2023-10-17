interface ITransfers {
    icons: string[]
}

function Transfers({ icons }: ITransfers) {
    return (
        <div className="transfers">
            <img className="transfers__icon-main" src={icons && icons[0]} alt="bus image"/>
            <div className="transfers-icons">
                {
                    icons && icons.map((icon, i) => {
                        console.log(icon)
                        if(i !== 0) return <img className="transfers__icon" src={icon} alt="bus transfer" key={i}/>
                    })
                }
            </div>
        </div>
    )
}

export default Transfers
