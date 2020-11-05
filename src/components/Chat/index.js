import React, { useEffect, useMemo, Susp } from 'react';
import { connect } from 'react-redux';
import { Launcher } from 'react-chat-window';
import { setCurrentChat, selectCurrentChat } from '../../slices/chatSlice';
import { selectCurrentUser } from '../../slices/usersSlice';
import { selectMentor } from '../../slices/learnerSlice';
import { selectLearners } from '../../slices/mentorSlice';
import { sendMessage, getChats } from '../../services/chatServices';
import Button from '../Button';
import './style.scss';

function Chat({ chat, getChats, sendMessage, mentor, learners, currentUser }) {
  useEffect(() => {
    if (currentUser) getChats();
  }, [mentor, learners]);

  const messages = useMemo(() =>
    chat?.messages.map((msg) => ({
      author: msg?.sender === currentUser?._id ? 'me' : 'them',
      type: 'text',
      data: { text: msg.content },
    })), [chat]
  );

  const handleSendMessage = (message) => {
    sendMessage({ content: message.data.text , toChat: chat._id })
  }

  return (
    (mentor || learners.length)
    ? <div className="chat">
        <Launcher
          agentProfile={{
            teamName: mentor?.name,
            imageUrl:
              'https://a.slack-edge.com/66f9/img/avatars-teams/ava_0001-34.png',
          }}
          onMessageWasSent={handleSendMessage}
          messageList={messages || []}
          showEmoji={false}
        />
      </div>
    : null
  );
}

const mapStateToProps = (state) => ({
  chat: selectCurrentChat(state),
  mentor: selectMentor(state),
  learners: selectLearners(state),
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  getChats: () => dispatch(getChats()),
  sendMessage: (message, chatID) => dispatch(sendMessage(message, chatID)),
  setCurrentChat: (chatID) => dispatch(setCurrentChat(chatID)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
