export default class NewsApi {
  constructor() {
    this.token = process.env.NEWS_API_KEY;
    this.baseUrl = `https://newsapi.org/v2`;
    this.endpoints = ['/sources', '/']
    this.cachedToken = null;
  }

  buildUrl(endpoint, options = {}) {
    const params = `${Object.entries(options).map(option => option[0] + '=' + option[1] + '&')}apiKey=${this.token}`;
    return `${this.baseUrl}/${endpoint}?${params}`;
  }

  async get(endpoint, options = {}) {
    const req = new Request(this.buildUrl(endpoint, options));

    try {
      const res = await fetch(req);
      return res.json();
    }
    catch(error) {
      console.error('GET Request failed')
      console.error(error);
    }
  }
}