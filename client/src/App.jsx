import React from 'react'
import {StreamChat} from 'stream-chat';
import {ChannelList, Chat} from 'stream-chat-react';
import Cookies from 'universal-cookie';
import './App.css'
import ChannelContainer from './Components/ChannelContainer'
import ChannelListContainer from './Components/ChannelListContainer';

const apikey = '5fyp6re2gxy3';

const client = StreamChat.getInstance(apikey);



const App = () => {
  return (
    <div className='app__wrapper'>
        <chat client={client} theme="team light">
            <ChannelListContainer
            
            />
            <ChannelContainer
            
            />

        </chat>
    </div>
  );
}

export default App