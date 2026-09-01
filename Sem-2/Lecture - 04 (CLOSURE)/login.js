function createUserSession(userName) {
  let isLoggedInStatus = false;

  function login() {
    isLoggedInStatus = true;
    console.log(userName);
  }

  function logout() {
    isLoggedInStatus = false;
    console.log(userName);
  }

  function getIsLoggedIn() {
    return isLoggedInStatus;
  }

  return {
    login,
    logout,
    isLoggedIn: getIsLoggedIn
  };

}
const user1 = createUserSession("Tejas");
const user2 = createUserSession("Paaji");

user1.login();        
console.log(user1.isLoggedIn());  
user1.logout();       
console.log(user1.isLoggedIn()); 

console.log(user2.isLoggedIn());  

