import React from 'react'
import "./Content.css"
import {increment,decrement,INC,DEC,TITLE,BODY,ID,USERID} from "./features/counter/counterSlice"
import {useSelector,useDispatch} from "react-redux"

import {Link} from "react-router-dom"

function Content({title,id,userId,body}) {
   
    const stateinc=useSelector(INC)
    const statedec=useSelector(DEC)
    const stateid=useSelector(ID)
   const stateuserid=useSelector(USERID)
   const statetitle=useSelector(TITLE)
   const statebody=useSelector(BODY)
    const dispatch=useDispatch()
    console.log(stateid,"+++++++")
      return (
      <Link to ="/main"  key={stateid}  style={{textDecoration:"none"}} onClick={()=>dispatch(increment({
          inc:stateinc,
          dec:statedec,
        id:id,
        userId:userId,
        title:title,
        body:body
       
    }))} >
         <div className="content">
              
              <p className="id" key={stateid} >{id}</p> 
              <p className="title" key={stateid} >{title}</p>
             
          </div>
  
        </Link>
      
     
     
           
      
       
    )
}

export default Content
