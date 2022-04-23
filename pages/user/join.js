import React, { useState } from 'react';
import tableStyles from '../common/styles/table.module.css'
import { useDispatch } from 'react-redux'; // redux 리소스
import { userActions } from '../../redux/reducers/userReducer.ts';
// 유저 대상으로 선언된 userReducer 에 있는 액션을 사용한다.

export default function Join(){

    const [user, setUser] = useState({ // 페이로드로 넘겨줄 내용
        userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
    })

    const dispatch = useDispatch();
    const handleChange = e =>{
        e.preventDefault()
        const{name, value} = e.target;
        setUser({...user,[name]: value})
    }
    // 이 핸들러를 "페이로드" 라고 한다! 실제로 서버에 넘겨주는 데이터
    // 참조 : https://ko.wikipedia.org/wiki/%ED%8E%98%EC%9D%B4%EB%A1%9C%EB%93%9C_(%EC%BB%B4%ED%93%A8%ED%8C%85)

    return <form onSubmit={ // 특이한 기능이 1개만 있는건 여기에다 선언해도 무방하다.

        e => {
            e.preventDefault()
            alert(' 진행 1: 회원가입 클릭 ');
            // 리듀서로 선언된 유저 액션중 joinRequest 액션 실행
            dispatch(userActions.joinRequest(user)); // react-redux 를 연결하는 디스패치인 joinRequest 설정
            setUser({
                userid:'', password:'', email:'', name:'', phone:'', birth:'', address:''
            })
        }
    }
    >
        <table className={tableStyles.table}>
            <thead>
            <tr>
                <th colSpan={2}><h1>회원가입</h1></th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td><b>사용자ID</b></td>
                <td><input type="text" name='userid' onChange={handleChange} /></td>
            </tr>
            <tr>
                <td><b>비밀번호</b></td>
                <td><input type="text" name='password' onChange={handleChange}/></td>
            </tr>
            <tr>
                <td htmlFor=""><b>이메일</b></td>
                <td><input type="text" name='email' onChange={handleChange}/></td>
            </tr>

            <tr>
                <td htmlFor=""><b>이름</b></td>
                <td><input type="text" name='name' onChange={handleChange}/></td>
            </tr>

            <tr>
                <td><b>전화번호</b></td>
                <td><input type="text" name='phone' onChange={handleChange}/></td>
            </tr>

            <tr>
                <td><b>생년월일</b></td>
                <td><input type="text" name='birth' onChange={handleChange}/></td>
            </tr>
            <tr>
                <td><b>주소</b></td>
                <td><input type="text" name='address' onChange={handleChange}/></td>
            </tr>
            <tr>
                <td colSpan={2}><button type="submit">회원가입</button><br /></td>
            </tr>
            </tbody>
        </table>
    </form>
}
