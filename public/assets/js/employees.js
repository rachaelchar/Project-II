const updateEmployees = function () {
    axios.get("/api/employees")
        .then((response) => {
            console.log(response)
            const $table = $("#employee-table tbody");
            $table.empty();
            response.data.forEach((employee) => {
                date = employee.hire_date;
                // console.log(date.moment().format('MM DD YYYY'))
                var t = date.split(/[- :]/);
                var d = new Date(Date.UTC(t[0], t[1] - 1, t[2], t[3], t[4], t[5]));
                console.log(d);

                console.log(date)
                $table.append(`<tr><td>${employee.first_name}</td><td>${employee.last_name}</td><td>${employee.position}</td><td>${employee.hire_date}</td></tr>`);
            });

        });
}

updateEmployees();