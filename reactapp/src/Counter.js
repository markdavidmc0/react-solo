import {useState} from "react";

function Counter() {

    const [count, setCount] = useState(0);
    setInterval(function(){
        setCount(count+1);
        console.log("count=",count);
    }, 1000);
    return (
        <>
        The counter is set to: {count}
        </>
    )
}
export default Counter;