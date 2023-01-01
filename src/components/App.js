import user from 'source/user.json';
import { Profile } from 'components/Profile/Profile';
import { GlobalStyle } from './GlobalStyle';
import { Statistics } from './Statistics/Statistics';
import data from 'source/data.json';
import { FriendList } from './FriendList/FriendList';
import friends from 'source/friends.json';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import transactions from 'source/transactions.json';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};
