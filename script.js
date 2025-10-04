let mypromise = new Promise ((resolve ,reject)=>{
    let meeting = !true
    if(meeting){
        resolve("metting succesful")
    }
    else{
        reject("meeting cancel")
    }
})
// mypromise.then((resolve)=>{
//     console.log(resolve)
// }).catch((reject)=>{
//     console.log(reject)
// }).finally(() =>{
//     console.log("always run")
// })
// async function pro(){
//     let myP = await(mypromise)
//     console.log(myP)
// }
// pro();
async function pro(){
    try{
        let myP = await(mypromise)
        console.log(myP)
    }
    catch (error){
        console.log("error")
    }
}
pro();