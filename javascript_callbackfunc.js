/*
let response

function setResponse(apiOut){
    response = apiOut
    console.log("response data set ")
}

function apicall(callback){

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response =>{
        if(!response){
            throw new Error(`http error ! status: ${response.status} `)
        }
        return response.json()
    })
    .then(data =>{
        callback(data)
    })
    .catch(error =>{
        console.log('fetch error ', error)
    })
}

apicall(setResponse)


console.log('--------- api output on the varaible-----')

console.log(response)

console.log('--------- api output on the varaible-----')

*/

// Define a global variable
let globalData;

// Callback function to set the global variable
function setGlobalData(responseData) {
  globalData = responseData;
  console.log('Global variable set:', globalData);
}

// Function to make the API call and use the callback
function fetchDataFromAPI(callback) {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Call the callback function with the API response data
      callback(data);
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
}

// Example usage

function dataMapping(){
    fetchDataFromAPI(setGlobalData);
    console.log(globalData)
}

dataMapping()
//console.log(globalData)