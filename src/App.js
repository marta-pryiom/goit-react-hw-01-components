import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendList/FriendList';
import user from './all.json/user.json';
import statisticalData from './all.json/statistical-data.json';
import friends from './all.json/friends.json';

// import ColorPicker from './components/ColorPicker/ColorPicker'
// import Alert from './components/Alert/Alert';
// import Container from "./components/Container/Container"

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
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData} />;
      <FriendsList friends={friends} />
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

// const colorPickerOptions = [
//   { label:'red', color: '#F44336'},
//   { label:'green', color: '#4CAF50'},
//   { label:'blue', color: '#2196F3'},
//   { label:'grey', color: '#607D8B'},
//   { label:'pink', color: '#E91E63'},
//   { label:'indigo', color: '#3F51B5'}
// ]
