const ambiente = () => {

  switch (process.env.NODE_ENV) {

    case 'development':
      return 'http://localhost:9000';

    case 'production':
      return '';

    case 'homolog':
      return 'http://159.89.158.50:9000'

    default:
      return '';
  };

};

export default baseURL();