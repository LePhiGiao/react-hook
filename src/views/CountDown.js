
import React, { useEffect, useState } from 'react'

class CountDown extends React.Component {
    state = {
        count: 5
    }

    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                count: this.state.count - 1
            })
        }, 1000)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevState.count !== this.state.count && this.state.count === 0) {
            if (this.timer) {
                clearInterval(this.timer)
                // this.props.onTimeUp()
            }
        }
    }

    render() {
        return (
            <div>
                <div>Class CountDown</div>
                <h1>{this.state.count}</h1>
            </div>
        )
    }
}

const NewCountDown = (props) => {
    const [count, setCount] = useState(5)

    useEffect(() => {
        if (count === 0) {
            props.onTimeUp()
            return;
        }
        let timerId = setInterval(() => {
            setCount(prevCount => prevCount - 1)
        }, 1000)
        return () => {
            clearInterval(timerId)
        }
    }, [count, props])

    return (
        <>
            <div>Hook CountDown</div>
            <h1>{count}</h1>
        </>
    )
}

export { CountDown, NewCountDown };