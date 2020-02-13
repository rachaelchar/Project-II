# **Employee Management System**
This app is designed to assist businesses in the management of their employee's clock in and clock out times, sick time, creating id badges and registering new employees. It is also designed to allow employees to view their profile, time off,accrued time and to request a new id badge.

Similar programs to this include Kronos, Autotime, Monday, etc.

## Project Link
[Invengeon Employee Management System](https://invengeonemployeemanagement.herokuapp.com/)


## **How to Use This App**
* From the Home Page the user can scan their QR Code to open their profile page or to open the admin page if they are given authorization.
Admins can use the two buttons in the side bar to register new employees and to print last weeks hours.

  ![Home Page](/Example/Pictures/EMS_index.png)

* From the Profile Page the user can view their name, position, hire date and accrued time. 
They can also view the current weeks hours and the current weeks clock in and out times. 
Additionally there are buttons that they can utilize to request time off, see their clock ins and clock outs from all weeks, and request a new id from the administrator.
If the Logo is clicked it will bring them back to the home page.

  ![Profile Page](/Example/Pictures/EMS_profile.png)


*From the Admin Page the admin can enter in the first name, last name and position of the employee they are administering. 
They can also take a picture of the employee and generate a unique QR code that the employee can utilize to clock in or out and to view their profile.

### **Database & Seeder Information**
Database:
DROP DATABASE IF EXISTS `employess_db`;
CREATE DATABASE `employees_db`;

Seeder:
sequelize db:seed --seed 20200115004848-pay_type-seeder
sequelize db:seed --seed 20200115004908-working_status-seeder.js
sequelize db:seed --seed 20200115004838-leave_type-seeder.js
sequelize db:seed --seed 20200109132546-employee-seeder.js
sequelize db:seed --seed 20200110020857-timeoff-seeder.js
sequelize db:seed --seed 20200110011514-clockin-seeder.js


### **Links, Resources & Technologies**
* Tail Wind CSS - https://tailwindcss.com/
* HTML5
* JavaScript
* MySQL
* Axios
