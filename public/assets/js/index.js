$('#badScanForm').on('submit', (event) => {
    event.preventDefault();
    const code = $('#badgeID').val();
    $('#badgeID').val("")

    axios.get(`/api/employees/${code}`)
      .then((response) => {
        const user = response.data;
        if(user === null){
          alert("Invalid Scan")
        }else{
          const scanEvent = {
            code: $('#first_name').val(),
            clocked_in: $('#last_name').val(),
            time: $('#admin').val(),
            week_num: $('#code').val(),
            year: $('#working_status').val(),
          };
        }
      })
      .catch(err => {
        throw(err);
      })
  });


function printClock() {
    setInterval(() => {
        var time = moment().format('h:mm a');
        var day = moment().format('dddd, MMMM Do');
        $('#currentTime').html("<p class='text-center text-6xl font-bold text-gray-900 mb-1'>" + time + "</p>  <p class='text-center text-1xl font-bold text-gray-900 mb-6'>" + day + "</p>");
    }, 1000);
};

printClock();

const updateEmployees = function () {
  axios.get("/api/employees")
      .then((response) => {
          const $table = $("#employee-table tbody");
          $table.empty();
          response.data.forEach((employee) => {
             if(employee.working_status){
                 status = "In";
             }else{
                 status = "Out";
             }
              $table.append(`<tr><td class="border px-4 py-2">${employee.first_name} ${employee.last_name}</td><td class="border px-4 py-2">${status}</td><td class="border px-4 py-2"><button data-id="${employee.id}" id="viewProfileBtn"class="justify-center bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border">View</button></td></tr>`);
          });

      });
}


updateEmployees();

