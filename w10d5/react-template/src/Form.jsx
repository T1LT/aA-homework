import { useState } from 'react'

const Form = () => {
  const [userData, setUserData] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    let key = event.target.name;
    setUserData({ ...userData, key: event.target.value})
    // if (event.target.name === "username") {
    //   // option 1:
    //   setUserData(prevState => ({ ...prevState, username: event.target.value }));
    //   // option 2:
    //   // setUserData({ ...userData, username: event.target.value });
    // } else {
    //   // option 1:
    //   setUserData(prevState => ({ ...prevState, password: event.target.value }));
    //   // option 2:
    //   // setUserData({ ...userData, password: event.target.value });
    // }
  }

  return (
    <form>
      <input type="text" 
        name="username" 
        placeholder="Username" 
        value={userData.username} 
        onChange={handleChange} 
      />
      <input 
        type="password" 
        name="password" 
        placeholder="Password" 
        value={userData.password}
        onChange={handleChange}
      />
    </form>
  )
}

export default Form;