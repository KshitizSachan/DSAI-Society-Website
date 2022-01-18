import axios from "axios";

async function getUser() {
  try {
    await axios({
      method: "get",
      url: "https://dsai-serverside-code.herokuapp.com/home/announcements",
      headers: {},
    }).then(function (response) {
      return(response.data);
    });
  } catch (error) {
    console.error(error);
  }
}

async function getNews() {
  try {
    await axios({
      method: "get",
      url: "https://dsai-serverside-code.herokuapp.com/news",
      headers: {},
    }).then(function (response) {
      return(response.data);
    });
  } catch (error) {
    console.error(error);
  }
}

export default {
  getUser: getUser,
  getNews: getNews
}
