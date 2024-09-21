function digitalWatch(){
    let current=new Date();
   let hours=current.getHours()
   let min=current.getMinutes()
   let sec=current.getSeconds()
   let amPm=hours>=12 ? "PM" :"AM"
   hours=hours%12
   hours = hours ? hours : 12;
   hours=hours<10 ? "0"+hours:hours
   min=min<10 ?  "0"+min:min
   sec=sec<10 ? "0"+sec:sec;

   
  
  document.getElementById("time").innerHTML=hours + ":" +min +":" + sec + "  " + amPm

  }
  digitalWatch()
  setInterval(digitalWatch,1000)

  function currDate(){
    let currentDate=new Date()
    let date=currentDate.getDate()
    let dayNames=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    let day=dayNames[currentDate.getDay()]
    
    let monthNames=["January","February","March","April","May","June","July","August","September","November","December"]
    let month=monthNames[currentDate.getMonth()]
    let year=currentDate.getFullYear();
   
    document.getElementById("date").innerHTML=day +"  " + date + " - " + month +" - " +year
  }
  currDate()