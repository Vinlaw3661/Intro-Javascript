//if-else

let hour = 10;

if (hour >6 && hour < 12) // no need for curly braces if only one line of code in if block
    console.log("Serve breakfast");
else if(hour>12 && hour < 18)
    console.log("Serve lunch");
else
    console.log("Serve dinner");

//switch-case (only used for equality comparisons)

let job = "Software Engineer";

if (job === "Software Engineer")
    console.log("Software Engineer");
else if (job === "Teacher")
    console.log("Teacher");
else if (job === "Doctor")
    console.log("Doctor");
else
    console.log("Other");

switch(job){
    case "Software Engineer":
        console.log("Software Engineer");
        break;
    case "Teahcer":
        console.log("Teacher");
        break;
    case "Doctor":
        console.log("Doctor");
        break;
    default: // similar to else
        console.log("Other");
}
