import "./App.css";
import Person from "./Componets/Person";
import {Man} from"./Componets/Man"
function App(){
  return(
    <div className="App">
      <Person></Person>
      <Person></Person>
      <Man></Man>
    </div>
  );
}
export default App;


//Note: here you cant write sntax like below in next breack line:
// return
// (
//   <div className="App">
//     <Person></Person>
//     <Person></Person>
//   </div>
// );