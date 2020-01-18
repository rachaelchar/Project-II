const id = document.location.search.replace(/^.*?\=/, '');

$(document).on('click', '#make-new-id-button', function (event) {
  axios.get(`/api/employees/?id=${id}`)
  .then((response) => {
    window.location = `/sampleBadge?code=${response.data.code}`;
  });
});

const displayEmployeeData = function () {
  axios.get(`/api/employees/?id=${id}`)
    .then((response) => {

      hireDate = moment(new Date(response.data.hire_date)).format('MMMM Do YYYY')

      $('#profile-pic').attr('src',`./assets/images/employees/${response.data.code}.png`)
      $('#name').text(` ${response.data.first_name} ${response.data.last_name}`);
      $('#employee-position').text(` ${response.data.position}`);      
      $('#hire-date').text(` ${hireDate}`);
      $('#accrued-time').text(` ${response.data.vacation_time} Hours`);
    });
};

displayEmployeeData();

<div id="myModal" class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <div id="picDiv"></div>
      <div id="btnDiv">
        <button id="webcam"
          class="camBtns cursor-pointer bg-blue-600 hover:bg-blue-500 shadow-xl text-center px-5 py-2 inline-block text-blue-100 hover:text-white rounded">Start
          Webcam</button>
      </div>
    </div>
  </div>