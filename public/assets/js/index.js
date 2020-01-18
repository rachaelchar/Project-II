
$('#badScanForm').on('submit', (event) => {
  event.preventDefault();
  const code = $('#badgeID').val();
  $('#badgeID').val('');

  axios.get(`/api/employees/?code=${code}`)
    .then((response) => {
      const user = response.data;
      if (user === null) {
        return 'Invalid Scan';
      }
      const clockinInfo = {
        id: user.id,
        working_status_id: user.working_status_id,
        status: user.working_status.status,
        time: moment().format('HH:MM:SS'),
        week_num: moment(moment().format('L'), 'MM/DD/YYYY').week(),
        year: moment().format('YYYY-MM-DD'),
      };
      return clockinInfo;
    })
    .then((response) => {
      
      if (response === false) {
        return response;
      }
      
      const cell = $(`#${response.id}`);
      let newStatus = 2;
      if (response.working_status_id === 2 || response.working_status_id === 3) {
        newStatus = 1;
        cell[0].innerText = 'Clocked-Out'
        cell.removeClass('clockedout').addClass('clockedin');
        cell.text("Clocked-In");
      }
      else{
        cell.removeClass('clockedin').addClass('clockedout');
        cell.text("Clocked-Out");
      }
      
      axios.put('/api/employees/clockin', {
        id: response.id,
        working_status_id: newStatus,
      });
    })
    .catch((err) => {
      throw (err);
    });
});

function displayClock() {
  const time = moment().format('h:mm a');
  const day = moment().format('dddd, MMMM Do');
  $('#currentTime').html(`<p class='text-center text-6xl font-bold text-gray-900 mb-1'>${time}</p>  <p class='text-center text-1xl font-bold text-gray-900 mb-6'>${day}</p>`);
}

function printClock() {
  setInterval(() => {
    displayClock();
  }, 1000);
}

displayClock();
printClock();

const updateEmployees = function () {
  axios.get('/api/employees')
    .then((response) => {
      const $table = $('#employee-table tbody');
      $table.empty();
      response.data.forEach((employee) => {
        if (employee.working_status.id === 1) {
          status = employee.working_status.status;
          clocked = 'clockedin';
        } else {
          status = employee.working_status.status;
          clocked = 'clockedout';
        }
        status = $table.append(`<tr><td class="border px-4 py-2">${employee.first_name} ${employee.last_name}</td><td class="border px-4 py-2 ${clocked}" id="${employee.id}">${status}</td><td class="border px-4 py-2"><button data-id="${employee.id}" id="viewProfileBtn"class="justify-center bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border">View</button></td></tr>`);
      });
    });
};


updateEmployees();

$(document).on('click', '#viewProfileBtn', function (event) {
  const id = $(this).data('id');
  console.log("ID = ", id);
  window.location = '/profile';
});
