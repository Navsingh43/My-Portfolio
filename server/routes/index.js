/* File Name: index.js
   Name: Navjot Singh
   Student ID: 301157391
   Date:3-June-2022
*/
var express = require('express');
var router = express.Router();

/* Responding GET requests with home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home',  
  p1:"Thanks for visiting this website. Here you can look my portfolio. You can find the services that I provide at a decent price and also some interesting projects that I have done or wish to work on. Moreover, you can contact me just clicking the contact button on the navigation bar and submitting the form."
  
});
});
/* Responding GET requests with about page. */
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About',
  na:"Navjot Singh",
  pp:"Basically, I am from Punjab, India and I have been moved to Canada last year. I have done my high school education from India and pursued my further diploma in software engineering technician program in Centennial College. Currently, I am in my third semester and regarding COMM229-005, I have learned client side scripting languages like html, css, javascript in the past two semesters and in this semester I am learning how to do scripting on server side with node js. I hope after this semester I will become a full stack developer. You can find my resume by just clicking the given link."
    });
});
/* Responding GET requests with projects page. */
router.get('/projects', function(req, res, next) {
  res.render('projects', { title: 'Projects',
  p1:"In the last semester I completed this small project that can be used as a small component to make a professional car company website. In this website I made an image gallery of the cars that the user can explore with the next and previous buttons. Without the user clicking to the next and previous buttons the images will be automatically changed and with the update button we can update the images. I have used html, css, javascript languages to create the website and a json file to import the images.",
  p2:"In the last semester, in software requirements engineering I got a project where we had to create a srs document for the new software that we want to make in the future then I came up with the idea of making the software that could helps to do online voting. Actually, during the voting days old age people, people with disabilities face the problem because they have to go physically at the booth for the voting but this problem can be solved with the government approved voting system. So, I hope after the completion of the diploma I will get enough knowledge of software development that I can complete my project.",
  p3:"Last semester, we got an assignment in which we had to make a bug smasher gaming website. In this project when the user click on the bug the score increased by 5 and the speed of bug relocation is increased with each click. In this small game, we used html, css, javascript and jquery. ",
  one:"1.",
  two:"2.",
  three:"3."
});
});
/* Responding GET requests with services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { title: 'Services',
  p1:"I have knowledge of website development and designing so I provide the service of web designing and development at the affordable price. With the development, I will also manage the website for you. So, feel free to contact me.",
  p2:"I can provide the service of android mobile application development at the appropriate price according to your budget. I have good catch over c#, python, c++ programming languages. So, just send me the details of the application you want to make for you through the contact form.",
  p3:"I can also provide the service of database management. I have knowledge of php, mysql.",
  one:"1.",
  two:"2.",
  three:"3."
});
});
/* Responding GET requests with contact page. */
router.get('/contact', function(req, res, next) {
  res.render('contact',{
    title:'Contact'
  });
});
/* Responding GET requests with home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { title: 'Home',
  p1:"Thanks for visiting this website. Here you can look my portfolio. You can find the services that I provide at a decent price and also some interesting projects that I have done or wish to work on. Moreover, you can contact me just clicking the contact button on the navigation bar and submitting the form."
});
});

module.exports = router;
