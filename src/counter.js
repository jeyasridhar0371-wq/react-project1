import {useState} from 'react';

const Counter = () => {

        const [count,setCount] = useState(0);

        function increase(){
            if (count<10){
                setCount(count+1);
            }
        }
        function decrease(){
            if (count>0){
                setCount(count-1);
            }
        }
        function reset(){
            setCount(0);
        }

    return(
        <div style={{textAlign:"center",marginTop:"15%"}}>
            <h1>{count}</h1>
            <button onClick={increase} style={{margin:"5px",padding:"5px",borderRadius:"10px",border:"none",backgroundColor:"lightgray"}}>Increase</button>
            <button onClick={decrease} style={{margin:"5px",padding:"5px",borderRadius:"10px",border:"none",backgroundColor:"lightgray"}}>Decrease</button>
            <button onClick={reset} style={{margin:"5px",padding:"5px",borderRadius:"10px",border:"none",backgroundColor:"lightgray"}}>Reset</button>
            {count===0 || count===10?<p>Limit reached, you can perform only between 0 to 10</p>:null}
        </div>
    )
}

export default Counter;