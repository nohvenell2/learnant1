import React,{useState} from "react"
import {Form} from 'antd';
import InputRealNumber from "../components/InputRealNumber";
import calculateDamage from "./func_Genshin";
const inputVal = {
    BA:0,   //Base Attack
    AP:0,   //Attack Percentage %
    FA:0,   //Flat Attack
    DB:0,   //Damage Bonus %
    CR:0,   //Crit Rate %
    CD:0,   //Crit Damage %
    ER:0,   //Enemy Resistance %
    RM:0,   //Reaction Multiplier
    EM:0,   //Elemental Mastery
}
const GenshinDamageCalculator=()=>{
    const [temp,setTemp]=useState(0);
    const [BA,setBA]=useState(0);
    const [AP,setAP]=useState(0);
    const [FA,setFA]=useState(0);
    const [DB,setDB]=useState(0);
    const [CR,setCR]=useState(0);
    const [CD,setCD]=useState(0);
    const [ER,setER]=useState(0);
    const [RM,setRM]=useState(0);
    const [EM,setEM]=useState(0);
    const resultDamage=calculateDamage([BA,AP,FA,DB,CR,CD,ER,RM,EM]);

    return (
        <div>
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
            <h2>Calculated Damage: {resultDamage}</h2>       
        </div>
    )
}
export default GenshinDamageCalculator;