import { useDispatch } from "react-redux"
import { decrement, increment } from "../features/counter-slice"

function Button() {

    const dispatch = useDispatch()

    const incrementHandler = () => {
        dispatch(increment())
    }

    const decrementHandler = () => {
        dispatch(decrement())
    }
    return (
        <>
        <button onClick={incrementHandler} style={{marginLeft: "auto", marginRight: "auto", display: "block", marginBottom: "15px"}}>Increment</button>
        <button onClick={decrementHandler} style={{marginLeft: "auto", marginRight: "auto", display: "block", marginBottom: "15px"}}>Decrement</button>
        </>
    )
}

export default Button