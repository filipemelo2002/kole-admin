import axios from 'axios';

class Api {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://192.168.0.102:3333',
    });
  }

  handleToken(token, refresh_token) {
    localStorage.setItem('token', token);
    localStorage.setItem('refresh_token', refresh_token);
    this.api.defaults.headers.Authorization = `Bearer ${token}`;
    this.api.defaults.headers.refresh_token = refresh_token;
  }

  async login(email, password) {
    try {
      const response = await this.api.post('/admin/login', {
        email,
        password,
      });
      this.handleToken(
        response.data.token,
        response.data.refreshToken,
      );
      return response.data;
    } catch (err) {
      return false;
    }
  }

  async getFilters() {
    try {
      const filters = await this.api.get('/filters');
      return filters.data;
    } catch (err) {
      return false;
    }
  }

  async addFilter(title) {
    try {
      const filter = await this.api.post(
        '/filters',
        { title },
      );
      const { token } = filter.headers;
      const { refresh_token } = filter.headers;
      this.handleToken(token, refresh_token);
      return filter.data;
    } catch (err) {
      return false;
    }
  }

  async addProduct(description, price, picture = [], filter_id) {
    try {
      const data = new FormData();
      data.append('description', description);
      data.append('price', price);
      data.append('filter_id', filter_id);
      data.append('picture', picture);
      const response = await this.api.post('/products', data, {
        headers: this.getTokenCredentials(),
      });
      const { token } = response.headers;
      const { refresh_token } = response.headers;
      this.handleToken(token, refresh_token);
      return response.data;
    } catch (err) {
      return false;
    }
  }
}
export default new Api();
