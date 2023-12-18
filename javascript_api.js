
async function fetchDataFromAPI(url) {
    try {
      const response = await fetch(url);
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Fetch error:', error);
      throw error;
    }
  }
  /*
  // Example usage:
  (async () => {
    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
      const responseData = await fetchDataFromAPI(apiUrl);
  
      console.log(responseData);
    } catch (error) {
      console.error('Error in example usage:', error);
    }
  })();

*/

  async function exampleUsage() {
    try {
      const apiUrl = 'https://jsonplaceholder.typicode.com/todos/1';
  
      // Call the fetchDataFromAPI function and save the result in a variable
      const responseData = await fetchDataFromAPI(apiUrl);
  
      // Now you can use the responseData variable
      //console.log(responseData);
      
      // If you're not in an async function, you can also use .then() syntax
      // fetchDataFromAPI(apiUrl).then(responseData => console.log(responseData));
    } catch (error) {
      // Handle errors from the fetchDataFromAPI function
      console.error('Error in example usage:', error);
    }
  }
  
  // Call the exampleUsage function
  let response =exampleUsage();

  console.log('------------------------')

  //console.log(response)

  response.then(function(){
    console.log(response.title)
  })

  console.log('------------------------')

  /*
  
  url = 'https://jsonplaceholder.typicode.com/todos/1'

  const sample = async(url) =>{
    try {
        const response = await fetch(url);
    
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
    
        const data = await response.json();
        return data;
      } catch (error) {
        console.error('Fetch error:', error);
        throw error;
      }
  }
  console.log('------------------------')
  console.log(sample)
  console.log('------------------------')

  */