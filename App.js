import './App.css';
import Header from "./header";
// import{useState,useEffect} from 'react';
function App() {
  // let [name,setName]=useState("Kethan");
  // let [age,setage]=useState("21");
  // //useEffect
  // useEffect(()=>{
  // fetch("https://jsonplaceholder.typicode.com/users")
  // .then((response)=>response.json())
  // .then((data)=>{
  //   console.log(data);
  // })
  // .catch((err)=>{
  //   console.log(err)
  // })
  // },[])
// function changeName(){
//   setName("Ironman");
// }
// function changeage(){
//   setage("22");
// }
  return (
    <div className="App">
    {/* <h1>{name}</h1>
    <h1>{age}</h1>
    <button onClick={changeName}>click</button>
    <button onClick={changeage}>click</button>*/}
    <Header/> 
    </div>
  );
}
export default App;
