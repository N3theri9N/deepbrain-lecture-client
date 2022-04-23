// saga 는 api 의 전송을 담당한다. 모니터링하면서 요청이 생기면 서버에 전송
// slice 라고 불리는 객체를 통해 action, reducer 를 받고 action 에 따라서 서버에 페이로드를 넘긴다.
import { all } from 'redux-saga/effects';
import { watchJoin, watchLogin, watchLogout } from "./userSaga.ts";

export default function* rootSaga() { // *는 generate
    yield all([watchJoin(), watchLogin(), watchLogout()]);
    // 모니터링을 중단하고 함수를 생성한다고 해석하면 된다.
    // 여기선 watchJoin() 함수가 대상이다.
}

//reducer 가 실행시마다 생성되는것과 달리
//watcher 는 계속 모니터링 그러므로 항상 함수형으로 리턴할것.
