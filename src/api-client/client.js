import Axios from 'axios';

class Client {
  constructor (transport = Axios) {
    this.transport = transport.create({
      baseURL: 'http://localhost:3000/api/',
      headers: {
        'Accept': 'application/json; charset=utf-8;',
        'Content-Type': 'application/json',
      },
    });
  };
}

export default new Client();
