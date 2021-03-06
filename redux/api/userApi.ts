import axios, {AxiosResponse} from 'axios'

const SERVER = 'http://127.0.0.1:5000'
const headers = { // 페이로드 형식 정함
    "Content-Type": "application/json",
    Authorization: "JWT fefege...", // 보안관련 이슈 ( 다음 시간에... 일단 아무거나씀 )
}
export interface UserType{ // 여긴 db에서 받은 것임을 가정한다.
    userid: string;
    password: string;  
    email: string;
    name: string;  
    phone: string;
    birth: string;
    address: string;
}
export const postUser = async (payload:  // payload 얻어야할 데이터 async 는 비동기호출
    {
        userid:string,
        password:string,
        email:string,
        name:string,
        phone:string,
        birth:string,
        address:string
    }) => {
         try{

            const response : AxiosResponse<unknown, UserType[]> =
                await axios.post(`${SERVER}/api/user/signup`,payload, {headers}) // await 답이오면 할당.
            alert('진행 5 : 응답성공 '+JSON.stringify(response.data))
            return response.data
         }catch(err){
            return err;
         }
    }

