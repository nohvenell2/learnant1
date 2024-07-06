import React,{useState} from "react"
import {Form} from 'antd';
import InputRealNumber from "../components/InputRealNumber";
import calculateDamage from "./func_Genshin";
const Genshin=()=>{
    const [BA,setBA]=useState(100);
    const [AP,setAP]=useState(100);
    const [FA,setFA]=useState(100);
    const [DB,setDB]=useState(0);
    const [CR,setCR]=useState(0);
    const [CD,setCD]=useState(100);
    const [ER,setER]=useState(0);
    const [RM,setRM]=useState(100);
    const [EM,setEM]=useState(0);
    const resultDamage=calculateDamage([BA,AP,FA,DB,CR,CD,ER,RM,EM]);

    return (
        <div style={{paddingLeft:'80px'}}>
            <h1>Genshin Impact Damage Calculator</h1>
            <Form
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}>
            <Form.Item label="Base Attack :">
                <InputRealNumber value={BA} onChange={setBA}/>
            </Form.Item>
            <Form.Item label="Attack Percentage:">
                <InputRealNumber value={AP} onChange={setAP} suffix={AP? '%':<span/>}/>
            </Form.Item>
            <Form.Item label="Flat Attack:">
                <InputRealNumber value={FA} onChange={setFA} />
            </Form.Item>
            <Form.Item label="Damage Bonus:">
                <InputRealNumber value={DB} onChange={setDB} suffix={DB? '%':<span/>}/>
            </Form.Item>
            <Form.Item label="Crit Rate:">
                <InputRealNumber value={CR} onChange={setCR} suffix={CR? '%':<span/>}/>
            </Form.Item>
            <Form.Item label="Crit Damage:">
                <InputRealNumber value={CD} onChange={setCD} suffix={CD? '%':<span/>}/>
            </Form.Item>
            <Form.Item label="Enemy Resistance:">
                <InputRealNumber value={ER} onChange={setER} suffix={ER? '%':<span/>}/>
            </Form.Item>
            <Form.Item label="Reaction Multiplier:">
                <InputRealNumber value={RM} onChange={setRM} suffix={RM? '%':<span/>}/>
            </Form.Item>
            <Form.Item label="Elemental Mastery:">
                <InputRealNumber value={EM} onChange={setEM} />
            </Form.Item>
            </Form>
            <h2>Calculated Damage: {resultDamage.toFixed(2)}</h2>       
        </div>
    )
}
export default Genshin;