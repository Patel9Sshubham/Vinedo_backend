import { StatusBar } from 'expo-status-bar';
import axios from 'axios';
const apiUrl = process.env.EXPO_PUBLIC_API_URL;

export default function MyPost(url, payload={}) {
  const fullUrl = `${apiUrl}${url}`;
  console.log("Request URL:", fullUrl, "Payload:", payload);

  return new Promise((resolve, reject)=>{
    axios.post(fullUrl, payload)
    .then((response) => {
      console.log("Response:", response.data);
      resolve(response.data); 
    })
    .catch((error) => {
      console.error("Error:", error.response?.data || error.message);
      reject(error.response?.data || error.message); 
     
    });
});
}
export function Myregister(url , payload={}){
  const fullUrl = `${apiUrl}${url}`;
  console.log("Request URL:", fullUrl, "Payload:", payload);

  return new Promise((resolve, reject)=>{
    axios.post(fullUrl,payload)
    .then((response)=>{
      console.log("Response:", response.data);
      resolve(response.data); 
    })
    .catch((error) => {
      console.error("Error:", error.response?.data || error.message);
      reject(error.response?.data || error.message); 
     
    });
  });
}



export function MyGet(url, payload) {
  return new Promise((resolve, reject)=>{
    axios.get('/GeeksforGeeks', {
          params: {
              articleID: articleID
          }
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (error) {
          console.log(error);
      })
      .then(function () {
          // always executed
      });  

  })
}


