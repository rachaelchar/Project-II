

$('#new-employee-form').on('submit', (event) => {
  event.preventDefault();

  let numString = '';
  const numbers = '1234567890';
  const adminVal = $('#admin').val();
  const payVal = $('#pay_type').val();
  
  var admin = adminVal ==='yes' ? 1 : 0;

    for (let i = 0; i < 8; i++) {
      numString += (numbers.charAt(Math.floor(Math.random() * numbers.length)));
    }
  
    switch(payVal) {
      case 'Part Time':
        pay = 1;
        break;
      case 'Full Time':
        pay = 2;
        break;
      case 'Salary':
        pay = 3;
        break;
      default:
        pay = 4;
        break;
    }



    
    
    const employee = {
      first_name: $('#first_name').val(),
      last_name: $('#last_name').val(),
      admin: admin,
      code: `INVE${numString}`,
      working_status_id: 2,
      position: $('#position').val(),
      hire_date: $('#hire_date').val(),
      picture_fp: '#',
      pay_type_id: pay,
    };

    console.log(employee);

    axios.post('/api/employees', employee)
      .then((response) => {
        window.location = '/employees';
      });
  });
