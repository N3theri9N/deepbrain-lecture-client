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
    reducers: { // 스위치 케이스로 구성된거나 마찬가지다. 이중 하나를 실행하도록 선언함.
        joinRequest(state: UserState, payload){ // 아직 reducer 로 전환되지 않음.(함수가 아닌 상태)
            // 액션 실행시 넣는 payload 로 api 호출
            state.loading = true;
        },
        joinSuccess(state: UserState, {payload}){ // joinsuccess 이후 다음 state
            state.data = [...state.data, payload]
            state.loading = false;
            
        },
        joinFailure(state: UserState, {payload}){ // joinfailure 이후 다음 state
            state.data = payload;
            state.loading = false;
        },
        loginRequest(state: UserState, payload){
            // 액션 실행시 넣는 payload 로 api 호출
            state.loading = true;
        },
        loginSuccess(state: UserState, {payload}){
            state.data = [...state.data, payload]
            state.loading = false;

        },
        loginFailure(state: UserState, {payload}){
            state.data = payload;
            state.loading = false;
        },
        logoutRequest(state: UserState, payload){
            state.loading = false;
        },
        logoutSuccess(state: UserState){
            state.loading = true;
            localStorage.clear();
            window.location.href = "/";
        },
        delUserRequest(state: UserState, payload){
            state.loading = false;
        },
        delUserSuccess(state: UserState){
            state.loading = true;
            localStorage.clear();
            window.location.href = "/";
        },
    }
})
const { reducer, actions } = userSlice // 아래의 reducer 로 버블링
export const userActions = actions // 이 action 은 redux saga 로 올라감.
//index.ts 에 들어간 내용이 상시 실행된다.
export default reducer // 이 reducer 는 루트로 올라간다.