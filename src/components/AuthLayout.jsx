import React, {useEffect, useState} from 'react' //1
import {useSelector} from 'react-redux' //2
import {useNavigate} from 'react-router-dom' //3

// Ab yaha pe prop me hume ek children and authentication milega
// Ab authentication ki value humne true mani hai lekin ho sakta hai ki koi bhi jo iss component ko jo call kr raha hai wo value false de de to hum yaha pe sirf uske base pe value check karenge ki hmara authStatus kya hai ki nahi hai authentication uss base pe hmare pass value aa jayegi aur isko hum update kr denge
export default function Protected({children, authentication = true}) {
//4
const navigate = useNavigate()
const [loader, setLoader] = useState(true)
// 5 ab store ke authStatus se pucho ki loggedin hai ya nahi with useSelector
const authStatus = useSelector(state => state.auth.status)

// 6 ye hume btayega ki apko hume login pe bhejna hai ya home pe aur kis kis cheez me change hone pe isko dobara run check or load hona hai 
useEffect(() => {
    // Todo: make it easy to understand. you can use thid too
    // if (authStatus ===true){
    //     navigate("/")
    // } else if (authStatus === false) {
    //     navigate("/login")
    // }

    // you can do this too
    // let authValue = authStatus === true ? true : false

    if (authentication && authStatus !== authentication) {
        navigate("/login")
    } else if(!authentication && authStatus !== authentication) {
        navigate("/")
    }
    setLoader(false)
}, [authStatus, navigate, authentication])

// isko hum setLoader ke basis pe display kr rahe hai ki if loader true hai to loading bolo else children dedo
  return loader ? <h1>Loading...</h1> : <>{children}</>
}

// iska usage hum router set krte time dekhenge

