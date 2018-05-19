
const url = 'https://newsapi.org/v2/top-headlines?' +
  'country=us&' +
  'apiKey=240609a494364954ab2722848057119b';

const req = new Request(url);

const getResults = async (req) => {
  return fetch(req).then(function (response) {
    return response.json();
  });
};

new Vue({
  el: '#app',
  data: {
    articles: articles
  }
})
