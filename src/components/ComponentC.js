// 1. Import area
import { Component } from "react";

//1.1 import somedefaultimport from some location/library

//1.2 import { somenamedimport } from some location/library




//2 Component defination area

// 2.1 Functional Component defination

//2.2 class Component Defination
class ComponentC extends Component{  // extends keyword is used to inherit the properties and method of parent class
    //1. properties
    randomNo = Math.ceil(Math.random() * 100)
        state = {
                    guessedNo:"",
                    result:"",
                    checked:false,
                    errMsg:"",
                    errStatus:false
                }
        
    //2. constructor
    // constructor method is used to initialize properties

    //3. methods
        
    userInput = event =>{
        this.setState({guessedNo:parseInt(event.target.value)})
    }

    onCheck = ()=>{
        const {guessedNo} = this.state
        //console.log(typeof(guessedNo))
        console.log(this.randomNo)
        if (guessedNo === ''){
            const errorMessage = "Please Enter A valid input"
            this.setState({errMsg:errorMessage, errStatus:true})
        }
        else{
            if (guessedNo > this.randomNo){
                const resultText = "Too High, Try again!"
                this.setState({result:resultText})
            }
            else if (guessedNo < this.randomNo){
                const resultText = "Too Low, Try again!"
                this.setState({result:resultText})
            }
            else{
                const resultText = "Congratulation, You did it !!!"
                this.setState({result:resultText, checked:true})
            }
            this.setState({errStatus:false})
        }
    }

    onPlayAgain = ()=>{
        this.setState(
            {
                guessedNo:"",
                result:"",
                checked:false,
                errMsg:"",
                errStatus:false
            }
        )
    }

    // Every class component must have render method
    render(){
        // every method should return something
        const {result, guessedNo, checked, errMsg, errStatus} = this.state
        const stringGuess = guessedNo.toString()
        return(
                <div>
                    <h1 className="try-head">Simple Guessing Game</h1>
                    <div className="comp-c">
                        <h2 className="guess-text">Guess a number</h2>
                        <p className="guess-para">A number between 1 to 100</p>
                        <div className="in-cont">
                            <input value={stringGuess}  onChange={this.userInput} className="inpu-box" type="number" />
                        </div>
                        { checked ? 
                            <button onClick={this.onPlayAgain} className="guess-btn2" type="button">Play Again</button>
                            :
                            <button onClick={this.onCheck} className="guess-btn" type="button">Check</button>
                        }
                        {errStatus? <p className="error-para">{errMsg}</p>: ""}               
                        <h1>{result}</h1>
                    </div>
                </div>
            )
    }
}





//3. Export area

//3.1 Default export 
export default ComponentC;
//3.2 Named export 