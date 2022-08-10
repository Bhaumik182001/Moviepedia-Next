import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";

function Result({pullingData}, ref) {
    const styles = {
        container: "px-5 my-10 sm:grid md:grid-cols-2 lg:grid-cols-3 3xl:flex flex-wrap justify-center"
    }
    {/* mapping each value by passing props to thumbnail component wrapped inside FLipMove */}
    return(
        <FlipMove className={styles.container}>
            {pullingData.map((value)=>{
                return(
                    <Thumbnail key={value.id} data={value}/>
                )
            })}
        </FlipMove>
    )
}

export default Result;