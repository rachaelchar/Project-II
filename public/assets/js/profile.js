id = document.location.search.replace(/^.*?\=/, '');
console.log(id)

$(document).on('click', '#make-new-id-button', function (event) {
  window.location = `/sampleBadge?id=${id}`;
});

const displayEmployeeData = function () {
  axios.get(`/api/employees/?id=${id}`)
    .then((response) => {
      console.log("response", response.data);
      $('#employee-name').append(` ${response.data.first_name} ${response.data.last_name}`);
      $('#employee-position').append(` ${response.data.position}`);      
      $('#hire-date').append(` ${response.data.hire_date}`);
      $('#accrued-time').append(` ${response.data.vacation_time} Hours`);
    });
};

displayEmployeeData();
