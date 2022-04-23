import { combineReducers } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';
import users from './userReducer.ts';
//import board from './boardReducer';
//import another from './anotherReducer';

// ts 타입에선 any :
// 이곳의 설정이 엉망이면 액션이 꼬임.
const rootReducer = (state:any, action:any) => {
    // 상태영역
    // reducer 는 순수함수형태이다.
    if(action.type === HYDRATE){
        return {
            ...state,
            ...action.payload,
        };
    }
    return combineReducers({
        users,
        //board,
        //another,
    })(state, action);
}
export default rootReducer


/*
import { combineReducers } from 'redux'
/!*import adminReducer from './adminReducer.ts'
import basicReducer from './basicReducer.ts'
import boardReducer from './boardReducer.ts'
import gameReducer from './gameReducer.ts'
import todoReducer from './todoReducer.ts'*!/
import userReducer from './userReducer.ts'

const rootReducer = combineReducers({
 /!*   adminReducer,
    basicReducer,
    boardReducer,
    gameReducer,
    todoReducer,*!/
    userReducer
})
export default rootReducer
export type RootState = ReturnType<typeof rootReducer>

//*/
