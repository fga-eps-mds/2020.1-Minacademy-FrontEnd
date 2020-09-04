// const SERVER = (process.env.NODE_ENV === 'development') ? 'http://client-server-network': '';
const SERVER = `${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`;
export default SERVER;