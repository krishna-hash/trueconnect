import { Button } from '@material-ui/core'
import React from 'react'
import "./Header.css"
import {Link} from "react-router-dom"
import {increment,decrement,INC,DEC,TITLE,BODY,ID,USERID,user, login} from "./features/counter/counterSlice"
import {useSelector,useDispatch} from "react-redux"
import {auth} from "./Firebase"



function Header() {
    const dispatch=useDispatch()
    const stateinc=useSelector(INC)
    const statedec=useSelector(DEC)
    const stateid=useSelector(ID)
    const users =useSelector(user)
    return (
        <div className="header">
            
            API Posts
            
            <div className="butt">
                {users ? (  <Link to="/data"    onClick={()=>{
                dispatch(increment({
                    inc: 0
                }))
                dispatch(decrement({
                    dec:0
                }))
            }} style={{textDecoration:"none"}}> <Button  style={{width:"100px",backgroundColor:"lightblue"}} > <span style={{marginTop:"6px"}}>GO</span></Button></Link>):""}
        
            {
                users ? ( <Link to="/" style={{textDecoration:"none"}}> <Button  style={{width:"100px",backgroundColor:"lightpink"}} > <span style={{marginTop:"6px"}}>HOME</span></Button></Link>) :""
            }
          
           <Link to="/login" style={{textDecoration:"none"}}> <Button  onClick={auth.signOut()} style={{width:"100px",backgroundColor:"red"}} > <span style={{marginTop:"6px"}}>  {users? "logout" :"login"}</span></Button></Link>
          
            </div>
          
        </div>
    )
}

export default Header