import React, { useEffect } from 'react'
import img from '../img/icons.PNG'
import img1 from '../img/taskbarright.PNG'
import vid from '../img/video.webm'
import img2 from '../img/startmenu.PNG'
function Tastkbar() {
    useEffect(()=>{
        let tb=document.getElementsByClassName("taskbar")[0];
        let sm=document.getElementsByClassName("startmenu")[0];
        tb.addEventListener("click",()=>{
            if(sm.style.bottom=="45px"){
                sm.style.bottom="-655px"
                console.log("hare krishna")
            }
            else{
                sm.style.bottom="45px";
                console.log(sm.style.bottom)
            }
        })
    },[])
  return (
    <>
        {/* <div className="icons">
            <img src={ch} width="74px" alt="" />
            <div>Google Chrome</div>
        </div> */}
        <div className="taskbar">
            <img src={img} alt="" />
            <img className='right' src={img1} alt="" />
        </div>
        <div className="startmenu">
            <img src={img2} alt="" />
        </div>
            <video autoPlay muted><source src={vid} type='video/webm'/></video>
    </>
  )
}

export default Tastkbar
