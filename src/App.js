import React from 'react';
/*
function App() {
  return(
  <React.Fragment>
    <label htmlFor="bar">bar</label>
    <input type="text" onChange={() => {console.log("heeei")}}/>;
  </React.Fragment>)
  
}
*/

const App = () => {
  const profiles = [
    {name: "taro", age: 10}, 
    {name: "hanako", age: 20}, 
    {name: "shun"}
  ]
  return (
    <div> 
      {profiles.map((profile, index) => {
         return <User name={profile.name} age={profile.age} key={index}/>
      })}
    </div>
  )
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old</div>
}

User.defaultProps = {
  age: 1
}


export default App;
