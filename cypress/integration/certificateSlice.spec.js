import { store } from '../../src/store';
import certificate, { loading, selectCertificates } from '../../src/slices/certificateSlice';
import { generateCertificate, getAllCertificates } from '../../src/services/certificatesServices';
import formatDate from '../../src/util/formatDate';

describe('chatSlice', () => {
  const reducerInitialState =  store.getState().certificate;

  const date = '2020-11-09T21:40:23.028Z';

  const certificateData = {
    _id: 123,
    user: 999,
    courseType: 'Learner',
    workload: 6,
    createdAt: date
  };

  const formatedDate = formatDate(date);

  const initialState = {
    loading: false,
    certificates: null,
  }

  it('Should get inital state', () =>
  {expect(certificate(undefined, {})).to.eql(reducerInitialState)});


  it('Should dispatch generateCertificate pending action', () => {
    const action = { type: generateCertificate.pending.type }
    const state = certificate(initialState, action)
    expect(state).to.eql({ ...initialState, loading: true})
  });

  it('Should dispatch generateCertificate fulfilled action', () => {
    const action = {type: generateCertificate.fulfilled.type, payload: Object.assign({}, certificateData) }
    const state = certificate(initialState, action)
    expect(state).to.eql({
      ...initialState,
      certificates: {...certificateData, createdAt: formatedDate },
      })
  });

  it('Should dispatch generateCertificate rejected action', () => {
    const action = { type: generateCertificate.rejected.type }
    const state = certificate(initialState, action)
    expect(state).to.eql({ ...initialState, loading: false })
  });


  it('Should dispatch getAllCertificates pending action', () => {
    const action = { type: getAllCertificates.pending.type }
    const state = certificate(initialState, action)
    expect(state).to.eql({ ...initialState, loading: true})
  });

  it('Should dispatch getAllCertificates fulfilled action', () => {
    const action = {type: getAllCertificates.fulfilled.type, payload: [Object.assign({}, certificateData), Object.assign({}, certificateData)] }
    const state = certificate(initialState, action)
    expect(state).to.eql({
      ...initialState,
      certificates: [{...certificateData, createdAt: formatedDate}, {...certificateData, createdAt: formatedDate}],
      })
  });

  it('Should dispatch getAllCertificates rejected action', () => {
    const action = { type: getAllCertificates.rejected.type }
    const state = certificate(initialState, action)
    expect(state).to.eql({ ...initialState, certificates: null ,loading: false })
  });

  it('should return loading state as boolean', () => {
    const selected = loading({ certificate: { loading: false } })
    expect(typeof(selected)).to.eql('boolean');
  });

  it('should return certificates state', () => {
    const selected = selectCertificates({ certificate: { certificates: certificateData } })
    expect(selected).to.eql(certificateData);
  });
});
