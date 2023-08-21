import axios from "axios";

const API_URL = "http://localhost:4000/user/:userId";

class AuthService {
  login(username, password) {
    
      return axios
        .post(API_URL + "signin", {
          username,
          password
        })
        .then(response => {
          if (response.data.accessToken) {
            console.log("Token successfully stored:", response.data.accessToken);
            localStorage.setItem("user", JSON.stringify(response.data));
          }
  
          return response.data;
        });
    }

  logout() {
    localStorage.removeItem("user");
  }

  register(username, email, password) {
    return axios.post(API_URL + "signup", {
      username,
      email,
      password
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
  getCurrentUser() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log("Current user:", user);
    return user;
  }
}

export default new AuthService();
