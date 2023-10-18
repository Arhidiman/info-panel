import MiddleItem from "./MiddleItem"

function SchemeMiddle() {

    const middleItems = [1, 2, 3, 4]

    return (
        <div className="reception-desks-scheme-middle">
            {middleItems.map((item) => <MiddleItem/>)}
        </div>
    )
}

export default SchemeMiddle
