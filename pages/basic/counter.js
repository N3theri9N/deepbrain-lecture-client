import React, {useState} from "react";
import tableStyles from '../common/styles/table.module.css'

export default function counter() { // 여기의 매개변수는 props 이다
    const [count, setCount] = useState(0); // state 리턴 : count 는 getter, setCount 는 setter 로 생각하면됨

    return (<table className={tableStyles.table}>
            <thead>
            <tr>
                <th>
                    <h2>카운터</h2>
                </th>
            </tr>
            </thead>
            <tbody>
            <tr >
                <td>
                    <button style={{width:100}} onClick={() => setCount(count+1)}> + </button>
                    <button style={{width:100}} onClick={() => setCount(count-1)}> - </button>
                </td>
            </tr>
            <tr>
                <td>
                    <h3>결과: {count}</h3>
                </td>
            </tr>
            </tbody>
        </table>
    )
} // : 리액트 컴포넌트 단위객체이다. 반드시 render 함수 [* return() 으로 표현됨 ]를 가지고 있어야함.

// React 의 구조