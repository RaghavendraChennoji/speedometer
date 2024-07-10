// Write your code here
import {Component} from 'react'

import './index.css'

class Speedometer extends Component{
 state={
     speed:0
 }   

 accelerate=()=>{
     const{speed}=this.state

     if(speed < 200mph){
         this.setState(prevState=>({speed:prevState.speed + 10}))
     }
 }

 brake=()=>{
     const{speed}=this.state

     if(speed > 0){
         this.setState(prevState=>({speed:prevState.speed - 10}))
     }
 }

 render() {
     const{speed}=this.state 

     return(
         <div className="app-con">
             <div className="speed-con">
                 <h1 className="heading">SPEEDOMETER</h1>
                 <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png" alt="speedometer" className="image"/>
                 <h1 className="speed-text">Speed is {speed}mph</h1>
                 <p className="speed-limits">Min Limit is 0mph,Max Limit is 200mph</p>
                 <div className="btn-con">
                     <button type="button" className="btn accelerate-btn" onClick={this.accelerate}>Accelerate</button>
                <button type="button" className="btn brake-btn" onClick={this.brake}>Apply Brake</button>

                 </div>
             </div>
         </div>
     )
 }
}

export default Speedometer