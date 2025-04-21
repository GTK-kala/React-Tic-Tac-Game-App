import { useState } from 'react'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import  './TicTac.css'

let data = ["", "", "", "", "", "", "", "", ""]
 
const TicTac = () => {

   let [count , setCount] = useState(0);
   let [lock , setLock] = useState(false);

    const toggle = (w,num) => {
       if(lock){
        return 0
       }
       if(count%2 === 0){
         data[num] = "X";
         setCount(count+1);
         document.getElementsByClassName("boxes")[num].innerHTML = `<img src=${cross_icon} alt="cross imge"/>`
    }
    else{
        data[num] = "O";
        setCount(count+1);
        document.getElementsByClassName("boxes")[num].innerHTML = `<img src=${circle_icon} alt="circle image"/>`
    }
  }
   const checkWin = () => {
     if(data[0] === data[1] && data[1] === data[2] && data[0] !== ""){
        won(data);
        alert(`${data[0]} is the winner`)
     }
     else if(data[3] === data[4] && data[4] === data[5] && data[3] !== ""){
        won(data);
        alert(`${data[3]} is the winner`)
     }
     else if(data[6] === data[7] && data[7] === data[8] && data[6] !== ""){
        won(data);
        alert(`${data[6]} is the winner`)
     }
     else if(data[0] === data[3] && data[3] === data[6] && data[0] !== ""){
        won(data);
        alert(`${data[0]} is the winner`)
     }
     else if(data[1] === data[4] && data[4] === data[7] && data[1] !== ""){
        won(data);
        alert(`${data[1]} is the winner`)
     }
     else if(data[2] === data[5] && data[5] === data[8] && data[2] !== ""){
        won(data);
        alert(`${data[2]} is the winner`)
     }
     else if(data[0] === data[4] && data[4] === data[8] && data[0] !== ""){
        won(data);
        alert(`${data[0]} is the winner`)
     }
     else if(data[2] === data[4] && data[4] === data[6] && data[2] !== ""){
        won(data);
        alert(`${data[2]} is the winner`)
     }
   }
   const won = (winner) => {
     setLock(true);
   }
  return (
    <>
      <div className="container">
         <h1 className='title'>Tic Tac Toe Game In <span>  React</span></h1>
          <div className="board">
             <div className="row1">
               <div className="boxes" onClick={(e) => toggle(e,0)}></div>
               <div className="boxes" onClick={(e) => toggle(e,1)}></div>
               <div className="boxes" onClick={(e) => toggle(e,2)}></div>
             </div>
             <div className="row2">
               <div className="boxes" onClick={(e) => toggle(e,3)}></div>
               <div className="boxes" onClick={(e) => toggle(e,4)}></div>
               <div className="boxes" onClick={(e) => toggle(e,5)}></div>
             </div>
             <div className="row3">
               <div className="boxes" onClick={(e) => toggle(e,6)}></div>
               <div className="boxes" onClick={(e) => toggle(e,7)}></div>
               <div className="boxes" onClick={(e) => toggle(e,8)}></div>
             </div>
          </div>
          <button className="reset">Reset</button>
      </div>
    </>
  )
}

export default TicTac
