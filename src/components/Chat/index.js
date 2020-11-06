import React, { useEffect, useMemo, Susp } from 'react';
import { connect } from 'react-redux';
import { Launcher } from 'react-chat-window';
import { setCurrentChat, selectCurrentChat } from '../../slices/chatSlice';
import { selectCurrentUser } from '../../slices/usersSlice';
import { selectMentor } from '../../slices/learnerSlice';
import { selectLearners } from '../../slices/mentorSlice';
import { sendMessage, getChats } from '../../services/chatServices';
import { selectChatIsOpen, toggleChatOpen } from '../../slices/modalSlice'
import avatar from '../../assets/images/avatar.svg';
import './style.scss';

function Chat({ chat, getChats, isOpen, toggleChatOpen, sendMessage, mentor, learners, currentUser }) {
  useEffect(() => {
    if (currentUser) getChats();
  }, [mentor, learners]);

  const messages = useMemo(
    () =>
      chat?.messages.map((msg) => ({
        author: msg?.sender === currentUser?._id ? 'me' : 'them',
        type: 'text',
        data: { text: msg.content },
      })),
    [chat]
  );

  const handleSendMessage = (message) => {
    sendMessage({ content: message.data.text, toChat: chat._id });
  };

  return chat ? (
    <div className="chat">
      <Launcher
        isOpen={isOpen}
        handleClick={toggleChatOpen}
        agentProfile={{
          teamName:
            chat?.agentName ||
            (learners.length
              ? `${learners[learners.length - 1]?.name} ${learners[learners.length - 1]?.lastname}`
              : null) ||
            `${mentor?.name} ${mentor?.lastname}`,
          imageUrl: avatar,
        }}
        onMessageWasSent={handleSendMessage}
        messageList={messages || []}
        showEmoji={false}
        mute={true}
      />
    </div>
  ) : null;
}

const mapStateToProps = (state) => ({
  chat: selectCurrentChat(state),
  mentor: selectMentor(state),
  learners: selectLearners(state),
  currentUser: selectCurrentUser(state),
  isOpen: selectChatIsOpen(state)
});

const mapDispatchToProps = (dispatch) => ({
  getChats: () => dispatch(getChats()),
  sendMessage: (message, chatID) => dispatch(sendMessage(message, chatID)),
  setCurrentChat: (chatID) => dispatch(setCurrentChat(chatID)),
  toggleChatOpen: () => dispatch(toggleChatOpen())
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
