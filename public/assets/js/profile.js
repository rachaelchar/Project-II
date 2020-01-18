id = document.location.search.replace(/^.*?\=/, '');
console.log(id)

$(document).on('click', '#make-new-id-button', function (event) {
  window.location = `/sampleBadge?id=${id}`;
});

const displayEmployeeData = function () {
  axios.get(`/api/employees/?id=${id}`)
    .then((response) => {
      console.log("response", response.data);
      // $('#employee-name') = `$('#employee-name').text()${response} 
      

      // $table.append(`<tr><td class="border px-4 py-2">${employee.first_name} ${employee.last_name}</td><td class="border px-4 py-2 ${clocked}" id="${employee.id}">${status}</td><td class="border px-4 py-2"><button data-id="${employee.id}" id="viewProfileBtn"class="justify-center bg-blue-500 hover:bg-gray-600 text-white font-bold py-2 px-4 border">View</button></td></tr>`);
    });
};

displayEmployeeData();