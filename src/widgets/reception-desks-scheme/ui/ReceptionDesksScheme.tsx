import "./ReceptionDesksScheme.scss"
import SchemeTop from "./scheme-top/SchemeTop"
import SchemeMiddle from "./scheme-middle/SchemeMiddle"
import SchemeBottom from "./scheme-bottom/SchemeBottom"

function ReceptionDesksScheme() {
    return (
        <div className="reception-desks-scheme">
            <SchemeTop/>
            <SchemeMiddle/>
            <SchemeBottom/>
        </div>
    )
}

export default ReceptionDesksScheme
