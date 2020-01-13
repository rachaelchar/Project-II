$('#new-employee-form').on('submit', (event) => {
  event.preventDefault();
  const employee = {
    first_name: $('#first_name').val(),
    last_name: $('#last_name').val(),
    admin: $('#admin').val(),
    code: $('#code').val(),
    working_status: $('#working_status').val(),
    position: $('#position').val(),
    hire_date: $('#hire_date').val(),
    picture_fp: $('#picture_fp').val(),
    pay_type: $('#pay_type').val(),
  };

  axios.post('/api/employees', employee)
    .then((response) => {
      window.location = '/employees';
    });
});

printClock();


// run clock function
function printClock() {
    setInterval(() => {
        var time = moment().format('h:mm a');
        var day = moment().format('dddd, MMMM Do');
        $('#currentTime').html("<p class='text-center text-6xl font-bold text-gray-900 mb-1'>" + time + "</p>  <p class='text-center text-1xl font-bold text-gray-900 mb-6'>" + day + "</p>");
    }, 1000);
};
