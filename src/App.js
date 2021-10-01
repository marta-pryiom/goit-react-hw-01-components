import user from './user.json';
import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
// import ColorPicker from './components/ColorPicker/ColorPicker'
// import Alert from './components/Alert/Alert';
// import Container from "./components/Container/Container"

// const colorPickerOptions = [
//   { label:'red', color: '#F44336'},
//   { label:'green', color: '#4CAF50'},
//   { label:'blue', color: '#2196F3'},
//   { label:'grey', color: '#607D8B'},
//   { label:'pink', color: '#E91E63'},
//   { label:'indigo', color: '#3F51B5'}
// ]

function App() {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      {/* <Container> */}
      {/* /* <ColorPicker options = {colorPickerOptions}/> */}
      {/* <Alert text="В тебе все вийде!!!!" type='error'/>
      <Alert text="В тебе все вийде!!!!" type='success'/>
      <Alert text="В тебе все вийде!!!!" type='warning'/> 
      </Container> */}
    </div>
  );
}

export default App;
