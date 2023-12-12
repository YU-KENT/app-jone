import { createSlice} from '@reduxjs/toolkit'

const {actions, reducer} = createSlice({
name:'project',
initialState :{
      version:'',
      projectName:'',
      
},
reducers :{

  setName :{
      prepare:(value)=>({
        payload:{value}
      }),  
      reducer:(state,action)=>{
      return{...state,projectName:action.payload.value, }
    }},

  setVersion :{
      prepare:(value)=>({
        payload:{value}
      }),  
      reducer:(state,action)=>{
      return{...state,version:action.payload.value, }

    }},


  clear:()=>{
      return {
       
      }}

  },

})



export const {setName,setVersion} = actions
export default reducer