import { createSlice } from "@reduxjs/toolkit"

export interface UserType{ // 스키마
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}

export interface UserState{ // 스키마
    loading: boolean;
    data: UserType[];
    error: any;
}


const initialState: UserState = { // 유저 state 첫 상태
    loading: false,
    data: [],
    error: null
}

const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        joinRequest(state: UserState, payload){ // 아직 reducer 로 전환되지 않음.(함수가 아닌 상태)
            alert('진행 2: 리듀서 내부 ') 
            state.loading = true; 
        },
        joinSuccess(state: UserState, {payload}){ // joinsuccess 이후 다음 state
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        joinFailure(state: UserState, {payload}){ // joinfailure 이후 다음 state
            state.data = payload;
            state.loading = false;
        }
    }
})
const { reducer, actions } = userSlice
export const userActions = actions
export default reducer