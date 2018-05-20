const getToken = async (req) => {
  return fetch(req).then(function (response) {
    return response.json();
  });
};

const getResults = async () => {
  const tokenRequest = new Request('/token', {method: 'POST' })
  let newsToken;

  return getToken( tokenRequest ).then( ( data ) => {
    if( data && data.token ) {
      return data.token;
    }
    else {
      throw "Token not returned in request";
    }
  } ).catch( (error) => {
    newsToken = process.env.NEWS_API_KEY;
    return newsToken;
  }).then( ( token ) => {
    const url = 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=' + token;

    const req = new Request(url);

    return fetch(req).then(function (response) {
      return response.json();
    });
  });
};

module.exports = getResults;