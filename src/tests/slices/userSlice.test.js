import { store } from '../../store';
import user, { setCurrentUser } from '../../slices/usersSlice';
import { login, logout, registerRequest, editUser } from '../../services/usersService';

describe('userSlice', () => {
  const initialState =  store.getState().user;
  const userData = {
    name: 'Teste',
    lastname: 'Teste',
    email: 'teste@email.com',
  }
  // let state = store.getState().user;
  // console.log('ESTADO: ', state);
  // console.log("USER: ", user(undefined, {}));
  it('Should get inital state', () => 
  {expect(user(undefined, {})).toEqual(initialState)})

  it('Should set current user', () => { 
    expect(user(undefined, { type: setCurrentUser.type, payload: userData } ))
    .toEqual({ ...initialState, currentUser: userData })
  })

  it('Should dispatch login pending action', () => { 
    const action = { type: login.pending.type }
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState, loading: true})
  })

  it('Should dispatch login fulfilled action', () => { 
    const action = {type: login.fulfilled.type, payload: { user: userData }}
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState, currentUser: userData})
  })

  it('Should dispatch login rejected action', () => { 
    const action = { type: login.rejected.type }
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState })
  })

  it('Should dispatch logout fulfilled action', () => { 
    const action = { type: logout.fulfilled.type }
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState, currentUser: null, loading: false })
  })

  it('Should dispatch register pending action', () => { 
    const action = { type: registerRequest.pending.type }
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState, loading: true})
  })

  it('Should dispatch register fulfilled action', () => { 
    const action = { type: registerRequest.fulfilled.type, payload: { user: userData } }
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState, currentUser: userData, loading: false })
  })

  it('Should dispatch register rejected action', () => { 
    const action = { type: registerRequest.rejected.type }
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState, currentUser: null, loading: false})
  })

  it('Should dispatch edit pending action', () => { 
    const action = { type: editUser.pending.type }
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState, loading: true })
  })

  it('Should dispatch edit fulfilled action', () => { 
    const action = {type: editUser.fulfilled.type, payload: { ...userData, age: 0 }}
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState, currentUser: { ...userData, age: 0 }})
  })

  it('Should dispatch edit rejected action', () => { 
    const action = { type: editUser.rejected.type }
    const state = user(initialState, action)
    expect(state).toEqual({ ...initialState, loading: false })
  })

});
