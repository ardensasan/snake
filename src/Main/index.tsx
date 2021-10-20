import { Stage } from "react-konva"
import S from "./S";

const Main = () => {
    return <Stage width={window.innerWidth} height={window.innerHeight}> 
    <S/>
    </Stage>
}

export default Main;