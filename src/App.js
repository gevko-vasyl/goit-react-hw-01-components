import Profile from "components/Profile/Profile";
import Statistics from "components/Statistics/Statistics";
import FriendList from "components/FriendsList/FriendList";
import TransactionHistory from "components/TransactionHistory/TransactionHistory";

import user from "data/user.json";
import statistics from "data/statistics.json";
import friends from "data/friends.json";
import transactions from "data/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" statistics={statistics} />

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}

export default App;
