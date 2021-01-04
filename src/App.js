import React,{useState,useEffect} from 'react'
import axios from "axios"
import "./App.css"
import Header from "./Header"
import {Button} from "@material-ui/core"
import Content from "./Content"
import Main from "./Maincontent";
import Login from "./Login "
import  {auth} from "./Firebase";import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {user,login} from "./features/counter/counterSlice"
import {useSelector,useDispatch} from "react-redux"

function App() {
  const[data,setdata]=useState([])
  const dispatch=useDispatch()
  const users =useSelector(user);
  console.log(users,"llll")
  const post=async(e)=>{
    e.preventDefault()
   await axios.get("https://jsonplaceholder.typicode.com/posts ").then(res=>(res.data)).then((data) => {
    console.log(data);
    const values = data.map((dataa) => ({
      id: dataa.id,
      userId:dataa.userId,
      title:dataa.title,
      body:dataa.body
    }));
    setdata(values);
    
  });
    }

    console.log(">>>>>>>>>>>",data)
    const delet=()=>{
      if(data){
        setdata([""])
        
      
      }

    }
    
  useEffect(()=>{
    auth.onAuthStateChanged((changer)=>{
      if(changer){
   console.log("changer>>>>>>>",changer)
   dispatch(login({
     user:changer.email
   }))
      }
    })
  },[dispatch])
  return (
    <Router>
      <Header/> 
  <div className="app">
      {users ? "":<p>please login</p>} 
  <Switch>
  
  <Route path ="/login">
    <Login/>
    </Route>
     <Route path="/data">
     <div className="app_content">
      
      <Button  onClick={post}  style={{backgroundColor:"green"}}>List the Post</Button>
      <Button  onClick={delet} style={{backgroundColor:"red"}}>Clear</Button>
          </div>
    
    <div className="app_value">
      
    {
      data.map((datas)=>(
      
        <Content title={datas.title} key={datas.id} id={datas.id} userId={datas.userId} body={datas.body}></Content>
      
      ))
    }
    </div>
    
     </Route>
     
     <Route path="/main">
       
        <Main title={data.title} key={data.id} id={data.id} userId={data.userId} body={data.body} />
      
       
       
     </Route>
    
   
                
               </Switch>
    </div>
    </Router>
  
  )
}

export default App
