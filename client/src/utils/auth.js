class Auth {
  constructor() {
    this.authenticated = false;
  }
//store the key that is handed from backend -> in the backend when you log in send back the token -> any future requests from front end to backend will try to get that token -> store in local storage -> any request check if there's anything stored in local storage
  login(cb) {
    this.authenticated = true;
    cb();
  }

  logout(cb) {
    this.authenticated = false;
    cb();
  }

  isAuthenticated() {
    return this.authenticated;
  }
}

export default new Auth();
