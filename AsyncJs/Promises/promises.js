


//getting the instance of the promise

const promiseOne = new Promise(function(res,rej){
  
    setTimeout(function(){
        console.log("Promise 1 resolved");
        res();
    },2000)

}) 

promiseOne.then(()=>{
    console.info("Promise consumed")
})

new Promise(function(res,rej){
    setTimeout(function(){
        console.log("Promise 2 resolved");
        res();
    },2000)
}).then(()=>{
    console.info("Promise consumed")
})


const promiseThree = new Promise(function(res,rej){
    setTimeout(function(){
        console.log("Promise 3 resolved");
        res({
            name:"Promise 3",
            email:"example@user.com"

        });
    },1000)
})
promiseThree.then((user)=>{
    console.log(user); 
})


const promiseFour = new Promise(function(res,rej){
    setTimeout(function(){
        let error = true;
        if(!error){
            res({
                name:"sharoon",
                email:"user@email.com"
            });
        }
        else{
            rej('Error: Promise 4 rejected');
        }
      
    },1000)
})

promiseFour
.then((data)=>{
    console.log(data);;
    return data
})
.then((username)=>{
    console.log(username.name);
})
.catch((error)=>{
    console.error(error);
}).finally(()=>{
    console.log("Promise 4 resolved");
}) 
