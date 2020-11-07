import { store } from '../../store';
import chat, { setCurrentChat, setNewMessage, setNewChat } from '../../slices/chatSlice';
import { login, logout, registerRequest, editchat } from '../../services/usersService';

describe('chatSlice', () => {
  const reducerInitialState =  store.getState().chat;
  const chatData = {
    _id: '123',
    users: ['000', '111'],
    messages: []
  }

  const initialState = {
    loading: false,
    sendingMessage: false,
    currentChat: null,
    chats: [chatData],
  }
  
  it('Should get inital state', () => 
  {expect(chat(undefined, {})).toEqual(reducerInitialState)})

  it('Should set current chat', () => { 
    expect(chat({...initialState, chats: [chatData] }, { type: setCurrentChat.type, payload: { _id: '000' } } ))
    .toEqual({
      ...initialState,
      chats:[{...chatData, agentName: 'undefined undefined' }], 
      currentChat: {...initialState.chats[0], agentName: 'undefined undefined' }})
  })

  it('Should set new message on currentChat', () => { 
    expect(chat({...initialState, currentChat: chatData}, { type: setNewMessage.type, payload: { chat: '123', content: 'test message' } } ))
    .toEqual({
      ...initialState,
      chats: [{...chatData, messages: [{ chat: '123', content: 'test message' }]}],
      currentChat: {...chatData, messages: [{ chat: '123', content: 'test message' }]} })
  })

});
