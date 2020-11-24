/* eslint-disable no-param-reassign */
const formatDate = (date) => {
  date = new Intl.DateTimeFormat('pt-BR', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).format(new Date(Date.parse(date)))

  return date
}

export default formatDate;