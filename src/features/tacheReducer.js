import { createSlice} from '@reduxjs/toolkit'

const {actions, reducer} = createSlice({
name:'tache',
initialState :{
      tacheName:'',
      date:'',
      newNote:'',
      
},
reducers :{

  setName :{
      prepare:(value)=>({
        payload:{value}
      }),  
      reducer:(state,action)=>{
      return{...state,tacheName:action.payload.value, }
    }},

  setDate :{
      prepare:(value)=>({
        payload:{value}
      }),  
      reducer:(state,action)=>{
        console.log("设置日期",state)
      return{...state,date:action.payload.value, }

    }},

 setNewNote :{
        prepare:(value)=>({
          payload:{value}
        }),  
        reducer:(state,action)=>{
          console.log("设置note",state)
        return{...state,newNote:action.payload.value, }
  
      }},
  clear:()=>{
      return {
       
      }}

  },

})



export const {setDate,setName,setNewNote} = actions
export default reducer