import { useAppContext } from "../../Contexts/Context"
import { takeBack } from "../../Reducer/actions/move";

const TakeBack = () =>{
    const {dispatch} = useAppContext();

    return <div>
        <button onClick={() => dispatch(takeBack())}>Take Back</button>
    </div>
}


export default TakeBack