var getimgs = document.querySelectorAll('.img');
// console.log(getimgs);

var getmodal = document.querySelector('.modal');
var getbtnclose = document.querySelector('.btn-close');
var getviews = document.getElementsByClassName('view');

var getprevbtn = document.querySelector('.prev');
var getnextbtn = document.querySelector('.next');
var getcounter = document.querySelector('.counter');
var getcaption = document.querySelector('.caption');
var getnoactives = document.getElementsByClassName('noactive');

var curidx = 1;

for (var i = 0; i < getimgs.length; i++){
    // getimgs[i].addEventListener('click',showmodal);

    getimgs[i].addEventListener('click', function (e) {
        showmodal();
        const findids = this.alt.split('').filter(rmspace => rmspace.trim() !== '');
        // curidx = parseInt(findids[findids.length - 1]);
        curidx = Number(findids[findids.length - 1]);
        slideshow(curidx);
    });
}

function showmodal() {
    getmodal.style.display = "block";
}

// getbtnclose.addEventListener('click', function () {
//     getmodal.style.display = 'none';
// })


getbtnclose.onclick = function () {
    getmodal.style.display = "none";
}

document.addEventListener('click', function (e) {
    if (e.target === getmodal) {
        getmodal.style.display = "none";
    }
});

function currentview(num) {

    slideshow(num);
}

getnextbtn.addEventListener('click', function () {
    slideshow(curidx += 1);
});

getprevbtn.addEventListener('click', function () {
    slideshow(curidx -= 1);
});



function slideshow(num) {
    // console.log(num);
    var x;
    for (x = 0; x < getviews.length; x++){
        getviews[x].style.display = "none";
    }

    for (x = 0; x < getnoactives.length; x++){
        // getnoactives[x].classList.remove("active");
        getnoactives[x].className = getnoactives[x].className.replace(" active", "");
    }

    if (num > getviews.length) {
        num = 1;
        curidx = 1;
    }

    if (num < 1) {
        num = getviews.length;
        curidx = getviews.length;
    }

    // console.log("This is curidx = ", curidx);
    // console.log("This is num = ", num);

    getcounter.textContent = `${num} / ${getviews.length}`;

    getviews[num - 1].style.display = "block";
    getnoactives[num - 1].className += " active";
    getcaption.innerText = getnoactives[num-1].alt;

}