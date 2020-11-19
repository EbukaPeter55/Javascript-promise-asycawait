// Promises are used for writing asynchronous process, e.g 
// communicating with a server or API, or converting to json
// they help to prevent call back hell(i.e using multiple callback functions).
// Async and await is Es6 way and syntax to write an asynchronous process



fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(users=> {
    const firstUser = users[0];
    console.log(firstUser); 
    return fetch(
        'https://jsonplaceholder.typicode.com/posts?userId=' + firstUser.id
    );
})
.then(response => response.json())
.then(posts => console.log(posts))
.catch(error => console.log(error));


// Using Es6 Async and await
const myAsyncFunction = async () =>{
    try {
        const usersResponse = await fetch 
        ('https://jsonplaceholder.typicode.com/users')//any code that follows will wait for the result from the fetch
        // Another asychronous method to convert user response to json
        const users = await usersResponse.json();
        const secondUser = users[0];
        console.log(secondUser);
    
        const postsResponse = await fetch(
            'https://jsonplaceholder.typicode.com/posts?userId=' + secondUser.id
        );
        // another asychronous code to convert our result to json
        const posts = await postsResponse.json();
        console.log(posts);
    } catch (err){
        console.log('There was an error');
    }

}