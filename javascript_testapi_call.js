// Declare a global variable
let globalVariable;

// Function to call the API and set the value to the global variable
async function fetchData() {
  try {
    // Make a GET request to the API
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    
    // Parse the JSON data from the response
    const data = await response.json();
    
    // Set the value to the global variable
    globalVariable = data;

    // Log the API response to the console
    console.log('API Response:', response);

    // You can also log the parsed data if needed
    console.log('Parsed Data:', globalVariable);

    // You can do additional processing or manipulation here if needed

    console.log('Data fetched and global variable set:', globalVariable);
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

// Call the function to fetch data and set the global variable
fetchData();
console.log('------------------------------')
console.log(globalVariable)
