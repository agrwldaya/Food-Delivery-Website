import { createSlice } from "@reduxjs/toolkit";

const isLogin = createSlice({
    name:"islogin",
    initialState:{
        islogin:true,
        issignup:true,
        loginDatail:{},
        signupDeatil:{},
        islogout:true
    },
    
    reducers:{

        toggleLogin: (state) => {
            state.islogin = !state.islogin;
        },
        toggleSignup: (state) => {
            state.issignup = !state.issignup;
        },
        getLoginInput:(state,action)=>{
          
          state.loginDatail = action.payload
          console.log(state.loginDatail)
        },
        getSignupInput:(state,action)=>{
            state.signupDeatil = action.payload
            //console.log(state.signupDeatil)
        },
        toggleLogout:(state)=>{
            state.islogout = !state.islogout
        }
    }
})
export default isLogin;
export const loginAction = isLogin.actions;
