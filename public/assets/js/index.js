
printClock();


// run clock function
function printClock() {
    setInterval(() => {
        var time = moment().format('h:mm a');
        var day = moment().format('dddd, MMMM Do');
        $('#currentTime').html("<p class='text-center text-6xl font-bold text-gray-900 mb-1'>" + time + "</p>  <p class='text-center text-1xl font-bold text-gray-900 mb-6'>" + day + "</p>");
    }, 1000);
};