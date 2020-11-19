// Sometimes we might want to add a string to our resolve or result,
// to do that, we use another .then, or what is called a resolve Promise, see below:

const myPromise = new Promise((resolve, reject)=> {
    if(true){
        setTimeout(()=>{
            resolve('I have succeded');
        }, 1000);
    
    }else {
        reject ('I have failed');
    }
    });
    
    // To call the Promise, we use .then method
    myPromise.then(value => value + '!!!')
             .then(newValue => console.log(newValue))
    // To get the reject which will be when it fails, or an error, we use the javascript catch method
    .catch(rejectValue => console.log(rejectValue));
    