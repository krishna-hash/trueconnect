import React from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import "./Maincontent.css"
import { Button } from '@material-ui/core';
import {increment,decrement,INC,DEC,TITLE,BODY,ID,USERID} from "./features/counter/counterSlice"
import {useSelector,useDispatch} from "react-redux"

function Maincontent({id,title,body,userId}) {
   const stateinc=useSelector(INC)
   const statedec=useSelector(DEC)
   const stateid=useSelector(ID)
   const stateuserid=useSelector(USERID)
   const statetitle=useSelector(TITLE)
   const statebody=useSelector(BODY)
   const dispatch=useDispatch()
   console.log(id,".mjjj")
    return (
        <div className="main">
            <div className="main_content">
    <p><h4>userID</h4> : {stateuserid}</p>
    <p><h4>ID</h4>  : {stateid}</p>
    <p><h4>title</h4>  : {statetitle}</p>
    <p><h4>body</h4>  : {statebody}</p>



            </div>
            
          
           <Button key={stateid} onClick={()=>dispatch(increment({
                 
                   
                  inc : stateinc+1,

                  id:stateid,
                  userId:stateuserid,
                  title:statetitle,
                  body:statebody
                 
              }))} >
              <FavoriteIcon key={stateid}  fontSize="large"   color="secondary"   /></Button>
              Likes : {stateinc}
          
            
                <Button  onClick={()=>dispatch(decrement({
                    dec:statedec + 1,
                    id:stateid,
                    userId:stateuserid,
                    title:statetitle,
                    body:statebody
                    
                }))} > <FavoriteBorderIcon key={stateid}    fontSize="large" color="primary" /></Button>
               
                Dislikes : {statedec}
        
        </div>
    )
}

export default Maincontent
