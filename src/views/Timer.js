
import { CountDown, NewCountDown } from '../views/CountDown'

function Timer() {
    const onTimeUp = () => {
        // alert('Time Up')
    }
    return (
        <>
            <CountDown onTimeUp={onTimeUp} />
            <span>------------------------------</span>
            <NewCountDown onTimeUp={onTimeUp} />
        </>
    )
}

export default Timer