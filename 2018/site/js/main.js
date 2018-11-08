//Test to see if js file is being loaded
console.info("main.js file succesfully loaded");

//Navbar Animation Constructor
function Navbar() {
    var _this = this
    this.burger = document.querySelector('.burger');
    this.nav = document.querySelector('#'+this.burger.dataset.target);
    this.burger.addEventListener('click', function(){
        _this.burger.classList.toggle('is-active');
        _this.nav.classList.toggle('is-active');
    });
}

var navbar = new Navbar();

 //Countup Animations (HTML Object, Start Time, Animate Time)
function animateValue(obj, duration) {
    var start = 0;
    var end = obj.innerText;
    var range = end - start;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
        current += increment;
        obj.innerHTML = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function animateStats() {
    Array.prototype.forEach.call(stats,element => animateValue(element,9000));
} 

//Debug Variables
const stats = document.getElementsByClassName("stats_count");
const sections = Array.from(document.getElementsByTagName("section"));