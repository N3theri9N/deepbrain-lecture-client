// userSaga 에서는 index 를 계속 바라본다.
import { PayloadAction } from '@reduxjs/toolkit'
import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { userActions } from '../reducers/userReducer.ts';
import {joinApi, loginApi, logoutApi} from '../api/userApi.ts'

interface UserJoinType{ // 액션객체, 스키마
    type: string; // 액션객체는 type 이란 필드를 필수로 갖는다.
    payload: {
        userid:string,
        password:string,
        email:string,
        name:string,
        phone:string,
        birth:string,
        address:string
        token:string
    }
}

interface UserLoginType{
    type: string;
    payload: {
        userid:string,
        password:string
    }
}

interface UserJoinSuccessType{ // 액션객체, 객체
    type: string;
    payload: {
        userid: string
    }
}
interface UserLoginSuccessType{
    type: string;
    payload: {
        userid:string, email:string,
        name:string, phone:string, birth:string, address:string
    }
}

function* join(user: UserJoinType){ // * generator 함수 : 함수를 생산하는 함수.
    try{
        const response : UserJoinSuccessType = yield joinApi(user.payload)
        yield put(userActions.joinSuccess(response))
        //yield 가 없다면 함수 호출, 말그대로 양보한다.
        // userActions.joinSuccess 액션이 일어날 때 모니터링을 중단한다.
        // 반대로 다른 때는 즉 모니터링할땐 yield 하지 않는다.
    }catch(error){
         yield put(userActions.joinFailure(error))
    }
}

export function* watchJoin(){ // join 이란 이벤트만 watch 하는 함수.
    yield takeLatest(userActions.joinRequest, join) // joinRequest 가 들어왔을때 join 함수를 전달.
}

function* login(login: UserLoginType){
    try{
        const response : UserLoginSuccessType = yield loginApi(login.payload)
        yield put(userActions.loginSuccess(response))
        location.href = "/";
    }catch(error){
        yield put(userActions.loginFailure(error))
    }
}

export function* watchLogin(){
    yield takeLatest(userActions.loginRequest, login)
}

function* logout(){
    try{
        const response : UserLoginSuccessType = yield logoutApi()
        yield put(userActions.logoutSuccess(response))
    }catch(error){
        yield put(userActions.loginFailure(error));
    }
}

export function* watchLogout(){
    yield takeLatest(userActions.logoutRequest, logout)
}

// generate 함수는 실체가 없는 함수이다.
// watchJoin 은 userActions.joinRequest 란 함수를 생성하고 완료후 없엔다.

// -> generate 랑 yield 는 거의 함께한다.
// join 이 발생할때까지 기다린다. join 발생시 모니터링 멈추고 실행