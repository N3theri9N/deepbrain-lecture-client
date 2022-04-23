import React, { useState } from 'react';
import tableStyles from '../common/styles/table.module.css'
import axios from "axios";

export default function Bmi(){
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({});

    // 이번엔 기존의 name, setName 이 없어져있고 최종 입력값만 남겨져있다.
    const handleSubmit = e => {
        e.preventDefault(); // 이걸 잡지 않으면 리액트로 움직이지 않고 html 의 행동이 우선된다.
        axios.post(proxy+'/basic/bmi', inputs).then(res => { // api/basic/bmi 에 데이터 전달.
            const bmi = res.data
            document.getElementById('result-span').innerHTML = `
                <h3>이름 : ${bmi.name}</h3>
                <h3>키 : ${bmi.height} cm</h3>
                <h3>몸무게 : ${bmi.weight}kg</h3>
                <h3>BMI결과 : ${bmi.bmi}</h3>
            `
        }).catch(err => alert(err))
        //then 은 정상완료 콜백, catch 는 오류발생 콜백

    }

    const handleChange = e => {
        e.preventDefault();
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }


    return (
        <form action="" onSubmit={handleSubmit} >
            <table className={tableStyles.table}>
                <thead>
                <tr>
                    <th colSpan={2}><h2>BMI</h2></th>
                </tr>
                </thead>
                <tbody>
                <tr >
                    <td>
                        <label htmlFor="">이름</label>
                    </td>
                    <td>
                        <input type="text" name="name" onChange={handleChange} />
                    </td>
                </tr>
                <tr >
                    <td>
                        <label htmlFor="">키</label>
                    </td>
                    <td>
                        <input type="text" name="height" onChange={handleChange} />
                    </td>
                </tr>
                <tr >
                    <td>
                        <div>
                            <label htmlFor="">몸무게</label>
                        </div>
                    </td>
                    <td>
                        <input type="text" name="weight" onChange={handleChange} /><br />
                    </td>
                </tr>
                <tr><td colSpan={2}><input type="submit" value="BMI 체크" /></td></tr>
                <tr><td colSpan={2}>결과 : <span id="result-span"></span></td></tr>
                </tbody>
            </table>
        </form>
    )
}


/*



import axios from 'axios';
import React, { useState } from 'react';
import tableStyles from '../common/styles/table.module.css'
export default function Bmi() {
    const proxy = 'http://localhost:5000'
    const [inputs, setInputs] = useState({})

    const handleChange = e => {
        e.preventDefault()
        const { value, name } = e.target
        setInputs({ ...inputs, [name]: value })
    }

    return (<form action="" onSubmit={handleSubmit} >
        <table className={tableStyles.table}>
            <thead>
                <tr>
                    <th colSpan={2}><h2>BMI</h2></th>
                </tr>
            </thead>
            <tbody>
        <tr >
            <td>
                <label htmlFor="">이름</label>
            </td>
            <td>
                <input type="text" name="name" onChange={handleChange} />
            </td>
        </tr>
        <tr >
            <td>
                <label htmlFor="">키</label>
            </td>
            <td>
            <input type="text" name="height" onChange={handleChange} />
            </td>
        </tr>
        <tr >
            <td>
                <div>
                    <label htmlFor="">몸무게</label>
                </div>
            </td>
            <td>
                <input type="text" name="weight" onChange={handleChange} /><br />
            </td>
        </tr>
        <tr><td colSpan={2}><input type="submit" value="BMI 체크" /></td></tr>
            <tr><td colSpan={2}>결과 : <span id="result-span"></span></td></tr>
                </tbody>
            </table></form>
    )
}*/
