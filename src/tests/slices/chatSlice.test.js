import { store } from '../../store';
import chat, { setCurrentChat, setNewMessage, setNewChat, selectCurrentChat, isLoading } from '../../slices/chatSlice';
import { sendMessage, getChats } from '../../services/chatServices';

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

  const message = {
    chat: '123',
    content: 'test message'
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

  it('Should set new chat', () => {
    expect(chat(initialState, { type: setNewChat.type, payload: chatData } ))
    .toEqual({
      ...initialState,
      chats: [...initialState.chats, chatData],
    })
  })

  it('Should set new message on currentChat', () => {
    expect(chat({...initialState, currentChat: chatData}, { type: setNewMessage.type, payload: { chat: '123', content: 'test message' } } ))
    .toEqual({
      ...initialState,
      chats: [{...chatData, messages: [{ chat: '123', content: 'test message' }]}],
      currentChat: {...chatData, messages: [{ chat: '123', content: 'test message' }]} })
  })

  it('Should dispatch sendMessage pending action', () => {
    const action = { type: sendMessage.pending.type }
    const state = chat(initialState, action)
    expect(state).toEqual({ ...initialState, sendingMessage: true})
  })

  it('Should dispatch sendMessage fulfilled action', () => {
    const action = {type: sendMessage.fulfilled.type, payload: message }
    const state = chat({ ...initialState, currentChat: chatData }, action)
    expect(state).toEqual({
      ...initialState,
      chats: [{...chatData, messages: [message]}] ,
      currentChat: {...chatData, messages: [message]} })
  })

  it('Should dispatch sendMessage rejected action', () => {
    const action = { type: sendMessage.rejected.type }
    const state = chat(initialState, action)
    expect(state).toEqual({ ...initialState, sendingMessage: false })
  })

  it('Should dispatch getChats pending action', () => {
    const action = { type: getChats.pending.type }
    const state = chat(initialState, action)
    expect(state).toEqual({ ...initialState, loading: true })
  })

  it('Should dispatch getChats fulfilled action', () => {
    const action = {
      type: getChats.fulfilled.type,
      payload: [chatData, { _id: '456', users: ['222'], messages: [] }]
    }
    const state = chat(initialState, action)
    expect(state).toEqual({
      ...initialState,
      chats: [chatData, { _id: '456', users: ['222'], messages: [] }],
      currentChat: { _id: '456', users: ['222'], messages: [] } })
  })

  it('Should dispatch getChats rejected action', () => {
    const action = { type: getChats.rejected.type }
    const state = chat(initialState, action)
    expect(state).toEqual({ ...initialState, loading: false })
  })

  it('should return loading state as boolean', () => {
    const selected = isLoading({ chat: { loading: false } })
    expect(typeof(selected)).toEqual('boolean');
  });

  it('should return current chat state', () => {
    const selected = selectCurrentChat({ chat: { currentChat: chatData } })
    expect(selected).toEqual(chatData);
  });

});
