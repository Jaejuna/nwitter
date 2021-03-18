import { dbService, storageService } from '../firebase';
import React, { useEffect, useState } from 'react';
import Nweet  from '../components/nweet';
import NweetFactory from 'components/nweetFactory';

const Home = ({userObj}) => {
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  return(
    <div className = "container">
      <NweetFactory userObj ={userObj} />
      <div style = {{ marginTop :30}}>
        {nweets.map((nweet) => (
          <Nweet
          key={nweet.id}
          nweetObj={nweet}
          isOwner={nweet.creatorId === userObj.uid}
        />
        ))}
      </div>
    </div>
  );
};
export default Home;