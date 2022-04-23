import axios from 'axios';
import React, { useEffect, useState } from 'react';
import tableStyles from '../common/styles/table.module.css'
import Link from 'next/link'

export default function GetUsers() {

    const columns = ["사용자ID", "이름", "이메일", "전화번호", "생년월일", "주소"];
    const [data, setData] = useState([])
    
    return (
        <>
            <table className={tableStyles.table}>
                <thead>
                    <tr>
                        <th><b>사용자ID</b></th>
                        <th><b>이메일</b></th>
                        <th><b>이름</b></th>
                        <th><b>전화번호</b></th>
                        <th><b>생년월일</b></th>
                        <th><b>주소</b></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{profile.userid}</td>
                        <td>{profile.email}</td>
                        <td>{profile.name}</td>
                        <td>{profile.phone}</td>
                        <td>{profile.birth}</td>
                        <td>{profile.address}</td>
                    </tr>
                </tbody>
            </table>
        </>


    )
}