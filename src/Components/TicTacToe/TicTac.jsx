import { useState , useRef } from 'react'
import circle_icon from '../Assets/circle.png'
import cross_icon from '../Assets/cross.png'
import  './TicTac.css'

let data = ["", "", "", "", "", "", "", "", ""]
 
const TicTac = () => {

   let [count , setCount] = useState(0);
   let [lock , setLock] = useState(false);
   let titleRef = useRef(null);

    const toggle = (w,num) => {
       if(lock){
        return 0;
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
    checkWin();
  }
   const checkWin = () => {
     if(data[0] === data[1] && data[1] === data[2] && data[2] !== ""){
        won(data[2]);
        setTimeout(() =>[
         alert("Player " + data[2] + " wins")
        ],1000)   
     }
     else if(data[3] === data[4] && data[4] === data[5] && data[5] !== ""){
        won(data[5]);
        setTimeout(() =>{
         alert("Player " + data[3] + " wins")
        },1000)
     }
     else if(data[6] === data[7] && data[7] === data[8] && data[8] !== ""){
        won(data[8]);
        setTimeout(() =>{
         alert("Player " + data[8] + " wins")
        },1000) 
     }
     else if(data[0] === data[3] && data[3] === data[6] && data[6] !== ""){
        won(data[6]);
        setTimeout(() =>{
         alert("Player " + data[6] + " wins")
        },1000)
     }
     else if(data[1] === data[4] && data[4] === data[7] && data[7] !== ""){
        won(data[7]);
        setTimeout(() =>{
         alert("Player " + data[7] + " wins")
        },1000) 
     }
     else if(data[2] === data[5] && data[5] === data[8] && data[8] !== ""){
        won(data[8]);
        setTimeout(() =>{
         alert("Player " + data[2] + " wins")
        },1000)
     }
     else if(data[0] === data[4] && data[4] === data[8] && data[8] !== ""){
        won(data[8]);
        setTimeout(() =>{
         alert("Player " + data[8] + " wins")
        },1000) 
     }
     else if(data[2] === data[4] && data[4] === data[6] && data[6] !== ""){
        won(data[6]);    
        setTimeout(() =>{
         alert("Player " + data[6] + " wins")
        },1000)
     }
   }
   const won = (winner) => {
     setLock(true);
     if(winner === "X"){
      titleRef.current.innerHTML =`Congratulations:<img src=${cross_icon} alt="cross image"/> wins`;
  }
  else if(winner === "O"){
      titleRef.current.innerHTML =`Congratulations:<img src=${circle_icon} alt="circle image"/>wins`;

  }
  else if(winner === ""){
      titleRef.current.innerHTML =`Game Draw`;
      setTimeout(() =>{
         alert("Game Draw")
      },1000)
    }
   }

   const reset = () =>{
       data = ["", "", "", "", "", "", "", "", ""]
       setCount(0);
       setLock(false);
       titleRef.current.innerHTML = "Tic Tac Toe Game In <span>React</span>"
         for(let i=0; i<9; i++){
            document.getElementsByClassName("boxes")[i].innerHTML = ""
         }
   }

  return (
    <>
      <div className="container">
         <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>  React</span></h1>
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
          <button className="reset" onClick={reset}>Reset</button>
      </div>
    </>
  )
}

export default TicTac
