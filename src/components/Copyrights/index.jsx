import moment from "moment";

const Copyrights = () => {
    return (
        <div style={{
            fontSize: '18px',
            backgroundColor: 'darkred',
            color: 'white'
        }}>
            Copyrights {' ' + moment().year()}
        </div>
    )
}

export default Copyrights;