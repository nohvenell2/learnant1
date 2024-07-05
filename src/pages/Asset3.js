import React, {useState} from "react";
import InputRealNumber from '../components/InputRealNumber'
function Asset1(){
    const [val,setVal]=useState();
    const handleChange=(prev)=>setVal(val);
    console.log(val);
    return <InputRealNumber name='N' size='large' value={val} onChange={handleChange}/>

}
export default Asset1;