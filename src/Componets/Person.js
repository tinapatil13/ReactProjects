import React, {Component} from "react"
import Man from "./Man";
class Person extends  Component{
    // constructor(props){
    //   super(props)
    // }
    render(){
        return(
        <div>
            <div>Tina :WsCube Tech</div>
            <div>Age 11 years</div>
            <Man/>
        </div>
        );
    }
}
export default Person;