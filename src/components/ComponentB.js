// 1. Import area
import { Component } from "react";
//1.1 import somedefaultimport from some location/library

//1.2 import { somenamedimport } from some location/library




//2 Component defination area

// 2.1 Functional Component defination

//2.2 class Component Defination
export class ComponentB extends Component{ //extends keyword use to inherit the properties and methods of the parent class.
    //1. properties
    title = "Give it a Try"
    //2.constructor 
   // constructor method is used to intialize the properties
   constructor(){
        super();
        this.state = { 
            userInput:"",
            interest:"",
            result:"",
            timeDuration:"",
            errGot:false,
            calculated:false
        } 
    }
   //3. Methods

   onUserPrincipalInpur = (event) =>{
        this.setState({userInput: event.target.value, errGot: false, calculated:false})
   }

   onInterestInput = (event) =>{
        this.setState({interest: event.target.value, errGot: false, calculated:false})
   }

   onTimeDuration = (event) =>{
        this.setState({timeDuration:event.target.value, errGot: false, calculated:false})

   }

   onCalculate = ()=>{
        const {userInput, interest, timeDuration } = this.state
        if (userInput === "" || interest === "" || timeDuration === "" ){
            //console.log("Please Provide all inputs to calculate you Total amount")
            this.setState({result:"", errGot: true, calculated:false })
        }
        else{
            const calculation = Math.ceil(((parseInt(userInput) * parseInt(interest) * parseInt(timeDuration)) / (100 * 12)) + parseInt(userInput))
            console.log(calculation)
            this.setState({userInput:"", interest:"",timeDuration:"",result:calculation, calculated:true})
        }
   }

    //every class Component must havr render method
    render(){
        const {timeDuration, userInput,interest, result, errGot,calculated} = this.state
        // console.log(play)
        // console.log(userInput)
        // console.log(typeof(interest))
        // console.log(result)

        // render method should return something
        return(
            <>
                <div className="comp-b">
                    <h1 className="try-head">{this.title}</h1>
                    <div className="input-cont">
                        <label className="input-lable" htmlFor="principal">Principal Amount</label>
                        <input value={userInput} className="input-box-style" id="principal" onChange={this.onUserPrincipalInpur} type="number" />
                    </div>
                    <div className="input-cont">
                        <label className="input-lable" htmlFor="interest">Interes Rate</label>
                        <input value={interest} className="input-box-style" id="interest" onChange={this.onInterestInput} type="number" />
                    </div>
                    <div className="input-cont">
                        <label className="input-lable" htmlFor="time">Time Duration</label>
                        <input value={timeDuration} className="input-box-style" id="time" onChange={this.onTimeDuration} type="number" placeholder="Duration In month" />
                    </div>
                    {errGot && <p className="error-para">Please Provide all inputs to calculate you Total amount</p>}
                    <button className="calculate-btn" onClick={this.onCalculate} type="button">Calculate</button>
                    {calculated && <h1 className="try-head">Your total return amount is:- {result}</h1>}
                </div>
            </>
        )
    }
}





//3. Export area

//3.1 Default export 

//3.2 Named export 