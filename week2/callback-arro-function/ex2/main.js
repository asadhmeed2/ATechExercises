const returnTime = function (time) {
    console.log('The current time is: ' + time)
  }
  
const getTime = (fn)=>{
    const time = new Date()

    fn(time)
}
  getTime(returnTime)