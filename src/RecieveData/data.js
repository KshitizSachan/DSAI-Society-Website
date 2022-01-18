import axios from "axios";


function Wowdata() {

  async function getUser() {
    try {
      await axios({
        method: "get",
        url: "https://dsai-serverside-code.herokuapp.com/home/announcements",
        headers: {
          
      },
      }).then(function (response) {
        console.log(response.data)
      });
    } catch (error) {
      console.error(error);
    }
  }

  return <div><button onClick={getUser}><h2>Huge Ass Button</h2></button></div>;
}

export default Wowdata;
