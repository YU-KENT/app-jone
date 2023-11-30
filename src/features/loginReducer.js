import { createSlice} from '@reduxjs/toolkit'

const{actions, reducer} = createSlice({
name:'login',
initialState :{

      ErrorMsg :'',
      UserEmail:'',
      id:'',
      PassWord:'',
      UserName:'',
      ValideEmail: false,
      VaidePassword: false,
      accessToken:undefined,
      
},
reducers :{

  UserEmail: {
      prepare:(value)=>({
        payload:{value}
      }),  
      reducer:(state,action)=>{
          const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
          const email= action.payload.value
          if(!regexEmail.test(email) ){
            return{...state,ErrorMsg :'',UserEmail:email,ValideEmail :false}
          }
          else return {...state,ErrorMsg :'', UserEmail:email, ValideEmail :true} 
    }
  },

  PassWord: {
      prepare:(value)=>({
        payload:{value}
      }),
      reducer:(state,action) =>{
        const password = action.payload.value
        if(password.trim() === ""){
          return{...state,ErrorMsg :'',PassWord:password,VaidePassword:false}
        }
        else return {...state,ErrorMsg :'', PassWord:password,VaidePassword:true}
          
    }
  },
  
  setUserId :{
      prepare:(value)=>({
        payload:{value}
      }),  
      reducer:(state,action)=>{
      return{...state,id:action.payload.value, }
    }},

  setUserName :{
      prepare:(value)=>({
        payload:{value}
      }),  
      reducer:(state,action)=>{
      console.log("action.payload.value",action.payload.value)
      return{...state,UserName:action.payload.value, }

    }},

  setAccessToken :{
      prepare:(value)=>({
        payload:{value}
      }),  
      reducer:(state,action)=>{
      return{...state,accessToken:action.payload.value, }
    }},

  setErrorMsg:{
      prepare:(value)=>({
        payload:{value}
      }),
      reducer: (state,action)=>{
        return {...state, ErrorMsg:action.payload.value}
      }},

  clear:()=>{
      return {
        Selected : false,
        ErrorMsg :'',
        UserEmail:'',
        id:'',
        PassWord:'',
        accessToken:undefined,
      }}

  },

})



export const {UserEmail,PassWord,setErrorMsg,setUserName,setUserId,setAccessToken,clear} = actions
export default reducer