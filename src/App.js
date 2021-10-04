import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendsList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
import user from './all.json/user.json';
import statisticalData from './all.json/statistical-data.json';
import friends from './all.json/friends.json';
import transactions from './all.json/transactions.json';

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
      <FriendsList friends={friends} />;
      <TransactionHistory items={transactions} />;
    </div>
  );
}

export default App;
