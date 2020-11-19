const myPromise = new Promise((resolve, reject)=> {
if(false){
    setTimeout(()=>{
        resolve('I have succeded');
    }, 1000);

}else {
    reject ('I have failed');
}
});

// To call the Promise, we use .then method
myPromise.then(value => console.log(value))
// To get the reject which will be when it fails, or an error, we use the javascript catch method
.catch(rejectValue => console.log(rejectValue));
