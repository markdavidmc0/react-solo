import {useState, useEffect} from "react";

function Counter({init, end}) {
    init = parseInt(init || 0);
    end = parseInt(end || 0);
    const [count, setCount] = useState(init);

    useEffect(function(){
        if (end && count >= end) return;
        var timer = setInterval(function(){
            setCount((count)=>count+1);
            console.log("count=",count);
        }, 1000);
        return function(){
            clearInterval(timer);
        }
    })
    return (
        <>
        Initial value of counter is: {init}
        <br/>
        End of the counter at: {end}
        <br/>
        The counter is: {count}
        <br/>
        {
            (end && count >= end) ?
                <b>Counter stopped</b>: <i>Counter in progress</i>
        }
        </>
    )
}
export default Counter;