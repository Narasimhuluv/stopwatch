import React from 'react';

// class Counter extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             seconds : 0,
//             minutes : 0,
//             hours : 0,
//             count : 0
//         }
//     }

//     handleInc = (category) => {
//         this.setState({
//             clicked : !this.state.clicked
//         })
//         if(category === "hours"){
//             this.setState({
//                 hours : this.state.hours + 1
//             })
//         }
        
//         else if(category === "minutes"){
//             if(this.state.minutes < 59){
//                 this.setState({
//                     minutes : this.state.minutes + 1,
//                 })
//             }else if(this.state.minutes === 59){
//                 this.setState({
//                     minutes : 0,
//                     hours : this.state.hours + 1
//                 })
//             }
//         }
//         // seconds 
//         else if(category === "seconds"){
//             if(this.state.seconds < 59){
//                 this.setState({
//                     seconds : this.state.seconds + 1,
//                 })
//             }
//             if(this.state.seconds === 59){
//                 this.setState({
//                     // hours : 0,
//                     seconds : 0,
//                     minutes : this.state.minutes + 1
//                 })
//             }
           
//         }
//     }

//     handleDec = (category) => {
//         if(category === "hours"){
//             this.setState({
//                 hours : this.state.hours - 1
//             })
//         }else if(category === "minutes"){
//             this.setState({
//                 minutes : this.state.minutes - 1,
//             })
//         }else if(category === "seconds"){
//             this.setState({
//                 seconds : this.state.seconds - 1,
//             })
//         }
//     }

//     handleReset = () => {
//         this.setState({
//             hours : 0,
//             minutes : 0,
//             seconds : 0
//         })
//     }

//     handleStart = () => {
//         var interval = setInterval(() => {
//             if(this.state.seconds == 0){       
//                 this.setState({
//                     seconds : 60,
//                     minutes : this.state.minutes  - 1,
//                     // hours : this.state.hours - 1
//                 })
//             }else if(this.state.minutes == 0){
//                 if(this.state.seconds === 60){
//                     this.setState({
//                         minutes : 59,
//                         hours : this.state.minutes - 1
//                     })

//                 }
//             }else if(this.state.hours == 0){
//                 if(this.state.minutes === 60){
//                     this.setState({
//                         hours : 60,
//                         // minutes : 60
                        
//                     })
//                 }
//             }
//             this.setState({
//                 seconds : this.state.seconds - 1,

//             })

//         },1000)

//         if(this.state.seconds == 0 && this.state.minutes == 0 && this.state.hours == 0){
            
//         }
//     }
    
//     render(){
//         if(this.state.seconds == 0 && this.state.minutes == 0 && this.state.hours == 0){
//             alert("Countdown is Completed")
//             clearInterval(this.interval)
//         }
//         return(
//             <div className="">
//                 <div className="w-2/12 m-auto mt-20 flex justify-between border p-3">
//                     <div className="border w-3/12 text-center">
//                         <button className="border w-full" onClick={()=>this.handleInc("hours")}><i className="fas fa-arrow-up"></i></button>
//                         <h2 className="my-4 text-3xl">{this.state.hours}</h2>
//                         <button className="border w-full" onClick={()=>this.handleDec("hours")}><i className="fas fa-arrow-up"></i></button>
//                     </div>
//                     <div className=" w-1/12  flex justify-center items-center">  : </div>
//                     <div className="border w-3/12 text-center">
//                         <button className="border w-full" onClick={()=>this.handleInc("minutes")}><i className="fas fa-arrow-up"></i></button>
//                         <h2 className="my-4 text-3xl">{this.state.minutes}</h2>
//                         <button className="border w-full" onClick={()=>this.handleDec("minutes")}><i className="fas fa-arrow-up"></i></button>
//                     </div>
//                     <div className=" w-1/12 text-center flex justify-center items-center"> : </div>
//                     <div className="border w-3/12 text-center">
//                         <button className="border w-full" onClick={()=>this.handleInc("seconds")}><i className="fas fa-arrow-up"></i></button>
//                         <h2 className="my-4 text-3xl">{this.state.seconds}</h2>
//                         <button className="border w-full" onClick={()=>this.handleDec("seconds")}><i className="fas fa-arrow-up"></i></button>
//                     </div>
//                 </div>


//                 <div className="w-2/12 m-auto flex justify-between border p-3">
//                     {/* {this.state.clicked ? <button className="border px-4 py-1 m-auto bg-gray-600 text-white rounded-lg">resume</button> : ""} */}
//                     <button className="border px-4 py-1 m-auto bg-gray-600 text-white rounded-lg" onClick={this.handleStart}>Start</button>
//                     {/* <button className="border px-4 py-1 m-auto bg-gray-600 text-white rounded-lg" onClick={this.handleReset}>Reset</button> */}
//                 </div>
//             </div>
//         )
//     }
// }

// import React, { Component } from "react";

class Counter extends React.Component {
  state = {
    timerOn: false,
    timerStart: 0,
    timerTime: 0
  };

  startTimer = () => {
    this.setState({
      timerOn: true,
      timerTime: this.state.timerTime,
      timerStart: this.state.timerTime
    });
    this.timer = setInterval(() => {
      const newTime = this.state.timerTime - 10;
      console.log(`Time left is 🚀 ${newTime}`);
      if (newTime >= 0) {
        this.setState({
          timerTime: newTime
        });
      } else {
        clearInterval(this.timer);
        this.setState({ timerOn: false });
        alert("Countdown ended");
      }
    }, 10);
  };

  stopTimer = () => {
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  };
  resetTimer = () => {
    clearInterval(this.timer);
    if (this.state.timerOn === false) {
      this.setState({
        timerTime: 0
      });
    }
  };

  adjustTimer = (input) => {
    const { timerTime, timerOn } = this.state;
    if (!timerOn) {
      if (input === "incHours" && timerTime + 3600000 < 216000000) {
        this.setState({ timerTime: timerTime + 3600000 });
      } else if (input === "decHours" && timerTime - 3600000 >= 0) {
        this.setState({ timerTime: timerTime - 3600000 });
      } else if (input === "incMinutes" && timerTime + 60000 < 216000000) {
        this.setState({ timerTime: timerTime + 60000 });
      } else if (input === "decMinutes" && timerTime - 60000 >= 0) {
        this.setState({ timerTime: timerTime - 60000 });
      } else if (input === "incSeconds" && timerTime + 1000 < 216000000) {
        this.setState({ timerTime: timerTime + 1000 });
      } else if (input === "decSeconds" && timerTime - 1000 >= 0) {
        this.setState({ timerTime: timerTime - 1000 });
      }
    }
  };

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    const { timerTime, timerStart, timerOn } = this.state;
    let seconds = ("0" + (Math.floor((timerTime / 1000) % 60) % 60)).slice(-2);
    let minutes = ("0" + Math.floor((timerTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor((timerTime / 3600000) % 60)).slice(-2);

    return (
        <div className="w-4/12 border-2 px-10 relative p-5 bg-white rounded  ml-10">
            {/* <button onClick={() => this.props.close("countdown")} className="text-xl text-red-500 font-bold absolute right-2 top-2">
            X
            </button> */}
            <h2 className="text-3xl text-center font-bold text-green-800 my-4">Countdown</h2>
            {/* <div className="flex justify-between text-xl font-bold"><span>Hours</span> <span>Minutes</span> <span>Seconds</span></div> */}
            <div className="flex flex-col items-center">      
                <div className="flex justify-between w-full mt-3 mb-5">
                    <div className=" text-center">
                        <h2 className="text-xl font-bold my-4">Hours</h2>
                        <button onClick={() => this.adjustTimer("incHours")} className="text-2xl">⬆</button>
                        <h2 className="bg-white text-blue-600 text-3xl font-bold my-6  text-center">
                        {hours}
                        </h2>
                        <button onClick={() => this.adjustTimer("decHours")} className="text-2xl">⬇</button>
                    </div>
                
                    <div className=" text-center">
                        <h2 className="text-xl font-bold my-4">Minutes</h2>
                        <button onClick={() => this.adjustTimer("incMinutes")} className="text-2xl">⬆</button>
                        <h2 className="bg-white text-blue-600 text-3xl font-bold my-6  text-center">
                            {minutes}
                        </h2>
                        <button onClick={() => this.adjustTimer("decMinutes")} className="text-2xl">⬇</button>
                    </div>
                
                    <div className=" text-center">
                        <h2 className="text-xl font-bold my-4">Seconds</h2>
                        <button onClick={() => this.adjustTimer("incSeconds")} className="text-2xl">⬆</button>
                        <h2 className="bg-white text-blue-600 text-3xl font-bold my-6 text-center">
                            {seconds}
                        </h2>
                        <button onClick={() => this.adjustTimer("decSeconds")} className="text-2xl">⬇</button>
                    </div>
                </div>

                <div className="flex justify-between mt-8">
                    {timerOn === false && (timerStart === 0 || timerTime === timerStart) && (
                    <button className="bg-green-600 text-white px-3 py-2 rounded mr-5 hover:bg-green-600" onClick={this.startTimer}>
                        Start
                    </button>
                    )}
                    {timerOn === true && timerTime >= 1000 && (
                    <button className="bg-green-600 text-white px-3 py-2 rounded mr-5 hover:bg-green-600" onClick={this.stopTimer}>
                        Stop
                    </button>
                    )}
                    {timerOn === false &&
                    timerStart !== 0 &&
                    timerStart !== timerTime &&
                    timerTime !== 0 && (
                        <button className="bg-green-600 text-white px-3 py-2 rounded mr-5 hover:bg-green-600" onClick={this.startTimer}>
                        Resume
                        </button>
                    )}

                    {(timerOn === false || timerTime < 1000) &&
                    timerStart !== timerTime &&
                    timerStart > 0 && (
                        <button className="bg-green-600 text-white px-3 py-2 rounded mr-5 hover:bg-green-600" onClick={this.resetTimer}>
                        Reset
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
  }
}

// export default Countdown;


export default Counter;