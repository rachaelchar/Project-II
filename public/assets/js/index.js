$("#new-employee-form").on("submit", function(event){
    event.preventDefault();
    const employee = {
        first_name: $("#first_name").val(),
        last_name: $("#last_name").val(),
        admin: $("#admin").val(),
        code: $("#code").val(),
        working_status: $("#working_status").val(),
        position: $("#position").val(),
        hire_date: $("#hire_date").val(),
        picture_fp: $("#picture_fp").val(),
        pay_type: $("#pay_type").val(),
    };

    axios.post("/api/employees", employee)
        .then((response) => {
            window.location = "/employees";
        });
})