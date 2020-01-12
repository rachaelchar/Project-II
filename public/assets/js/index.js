setInterval(()=>{ 
    var time = moment().format('MMMM Do YYYY, h:mm:ss ');

    // console.log(time);
    
    $('#currentTime').html("<p>"+time+"</p>"); }, 1000);