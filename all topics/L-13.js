const EventEmitter=require("events");
const eventsEmitter= new EventEmitter();
// create listner
// function f1(){
//     console.log("This is my first listner");
// }
// function f2(){
//     console.log("This is my second listner");
// }
// assign listner to event
eventsEmitter.on("myevent",(noline,msg)=>{
    console.log(`this is line no ${noline} and this ${msg}`);

});
eventsEmitter.on("myevent",()=>{
    console.log("this is my 2nd callback listner")

});

// event fire
eventsEmitter.emit("myevent",12,"ok");
