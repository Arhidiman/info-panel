import { TStop } from "src/app/types/types"

interface IMainPageLeftHeader {
  currentStop: TStop | null
}


function MainPageLeftHeader({ currentStop }: IMainPageLeftHeader) {


    console.log(currentStop)

    return (
    <header className="main-page-header">
        <h1 className="main-page__stop-name-ru">{currentStop.nameRus}</h1>
        <h2 className="main-page__stop-name-eng">{currentStop.nameEng}</h2>
    </header>
  )
}

export default MainPageLeftHeader
