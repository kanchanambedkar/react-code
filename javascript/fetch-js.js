// const makeRequest = () => {
//     console.log('button clicked');
//     fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((res) => {
//         if(!res.ok){
//             throw Error(res.ok);
//         }
//         return res.json();
//     })
//     .then((jsonData) => {
//         console.log('jsonData ', jsonData)

//         jsonData.map((data) => {
//                 console.log('id-- ', data.id);
//                 console.log('Title--', data.title);
//                 console.log('Body-- ', data.body);
//         })

// })
//     .catch((error) => {console.log(error);})
// }

// const makeRequest = async() => {
//    try{
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         if(!res.ok){
//             throw Error(res.statusText);
//         }
//         const data = await res.json();
       
//         console.log('data-- ', data);
        

//    }catch(error){
//        console.log(error);
//    }
// }


// const makeRequest = (e) => {
//     e.preventDefault();
//    const nameVal =  document.getElementById('name').value;
//    const jobVal =  document.getElementById('job').value;
//    console.log(nameVal)

//    const initObj = {
//        method: 'POST',
//        headers: {
//            'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({name: nameVal, job: jobVal})
//    }

//    fetch('https://reqres.in/api/users', initObj).then(
//        (res) => {
//            if(!res.ok){
//                throw Error(res.statusText);
//            }
//            return res.json();
//        }
//    ).then((data) => {console.log(data)}).catch((error) => {console.log(error)})
// }

const makeRequest = (e) => {
    e.preventDefault();
    config = {
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/posts'
    }
    const promiseObj = axios(config);
    promiseObj.then((res) => {console.log(res);})
}


// const makeRequest = async() => {
//     e.preventDefault();

// }













document.getElementById('btn').addEventListener('click', makeRequest);

