import "./Spinner.scss"

function Spinner() {
    return (
        <div className="spinner">
            <p className="spinner-text">Загрузка данных</p>
            <div className="loading">Loading&#8230;</div>
        </div>
       
      )
}

export default Spinner
