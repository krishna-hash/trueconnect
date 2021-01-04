import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    user :null,
    inc: 0,
    dec:0,
    title :null,
    body:null,
    userId:null,
    id:null
  },
  reducers: {
    increment:(state,action)=>{
      state.inc = action.payload?.inc
      state.title=action.payload?.title
      state.body=action.payload?.body
      state.id=action.payload?.id
      state.userId=action.payload?.userId
    },
    decrement:(state,action)=>{
      state.dec=action.payload?.dec
      state.title=action.payload?.title
      state.body=action.payload?.body
      state.id=action.payload?.id
      state.userId=action.payload?.userId
    },
    login:(state,action)=>{
      state.user=action.payload?.user
    }
    
  },
});

export const { increment, decrement,login } = counterSlice.actions;



export const INC = state => state.counter.inc;

export const DEC = state => state.counter.dec;
export const TITLE = state => state.counter.title;
export const BODY = state => state.counter.body;
export const USERID = state => state.counter.userId;
export const ID = state => state.counter.id;
export const user = state => state.counter.user;

export default counterSlice.reducer;
