// Write an asynchronous function that accepts a message string and a delay time in milliseconds. 
//The function should log the message to the console after the specified delay time.
let delayMessage = () => {
    console.log('I will come late');
};
setTimeout(delayMessage,3000);


// You have an array of user IDs and a function getUserData(id) that returns a Promise with user 
//data when given a user ID. Write an asynchronous function that fetches and logs the data for 
//each user ID one by one, in sequence.


// You have an asynchronous function performTask() that returns a Promise. The Promise resolves if
 //the task is successful and rejects if there's an error. Write a function that calls performTask()
  //and logs a custom success message if the task is successful, and a custom error message if there's 
  //an error.
  function call(num, callback){
  console.log({callback});
  }

  let task = true;
  function performTask(){
   let promise = new Promise(function(resolve,reject){
    if(task){
        resolve('The task was succesful');
    }
    else{
        reject('The task was not succesful')
    }
   });
   return promise
  }
  

call(10,performTask);
