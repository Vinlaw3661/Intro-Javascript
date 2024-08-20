//Throwing and exception 
function add(a,b){
    let args = [a,b]
    if (args.some(value => typeof value === 'string')){
        throw new Error("Arguments cannot be strings")
    }

}




//Try and catch

try{
    add(1,"s")
}catch(e){
    console.log(`Caught an error with message: ${e.message}`)
}
