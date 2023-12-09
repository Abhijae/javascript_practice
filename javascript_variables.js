let a = 'Sample variables'
let b = 10
let c = BigInt('343333')
let d = BigInt('5433')


function sumNumb(b){
    return b
}


async function fetchDatafromUrl(){
    //const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data = await res.json()
        a=data
        return data
    } catch (error) {
        console.error('Fetch error', error)
        throw error
    }
}

let apiResponse=fetchDatafromUrl()

value= c + d

data= sumNumb(44)
console.log(a)
console.log(data)

console.log(apiResponse)

fetchDatafromUrl()
console.log('------------async call-----------------')
console.log(a)
console.log('-----------------------------')
