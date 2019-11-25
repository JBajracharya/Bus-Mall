'use strict';

function Product(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.clickCtr = 0;
    this.shownCtr = 0;
}

//Global variable available just for Product object
Product.voteCtr = 0;
Product.voteMax = 25;

//function accessible for product object
Product.prototype.increaseClickCtr = function () {
    this.clickCtr++;
}


var imgArray = [];
var threeImages = [];

imgArray.push(new Product('Bag', 'img/bag.jpg'));
imgArray.push(new Product('Banana', 'img/banana.jpg'));
imgArray.push(new Product('Bathroom', 'img/bathroom.jpg'));
imgArray.push(new Product('Boots', 'img/boots.jpg'));
imgArray.push(new Product('Breakfast', 'img/breakfast.jpg'));
imgArray.push(new Product('Bubblegum', 'img/bubblegum.jpg'));
imgArray.push(new Product('Chair', 'img/chair.jpg'));
imgArray.push(new Product('Cthulhu', 'img/cthulhu.jpg'));
imgArray.push(new Product('Dog Duck', 'img/dog-duck.jpg'));
imgArray.push(new Product('Dragon', 'img/dragon.jpg'));
imgArray.push(new Product('Pen', 'img/pen.jpg'));
imgArray.push(new Product('Pet Sweep', 'img/pet-sweep.jpg'));
imgArray.push(new Product('Scissors', 'img/scissors.jpg'));
imgArray.push(new Product('Shark', 'img/shark.jpg'));
imgArray.push(new Product('Sweep', 'img/sweep.png'));
imgArray.push(new Product('Tauntaun', 'img/tauntaun.jpg'));
imgArray.push(new Product('Unicorn', 'img/unicorn.jpg'));
imgArray.push(new Product('USB', 'img/usb.gif'));
imgArray.push(new Product('Water Can', 'img/water-can.jpg'));
imgArray.push(new Product('Wine Glass', 'img/wine-glass.jpg'));


var leftImage = document.getElementById('left_item_img');
var leftName = document.getElementById('left_name');

var middleImage = document.getElementById('middle_item_img');
var middleName = document.getElementById('middle_name');

var rightImage = document.getElementById('right_item_img');
var rightName = document.getElementById('right_name');

var imgElemArr = [];
imgElemArr.push(leftImage, middleImage, rightImage);
var imgNameArr = [];
imgNameArr.push(leftName, middleName, rightName);




//Get the list of names, votes and total times the image is shown.
function getNameAndVoteList() {
    var text;
    for (var i = 0; i < imgArray.length; i++) {
        text = `${imgArray[i].name} : ${imgArray[i].clickCtr} votes Times Shown : ${imgArray[i].shownCtr}`;
        var element = document.createElement('li');
        item_list.appendChild(element);
        element.textContent = text;
    }

}


//add event handler
function clickHandler(event) {
    var id = event.target.id;

    var thing = [];
    if (id === 'left_item_img') {
        threeImages[0].clickCtr++;
        for (var i = 0; i < imgArray.length; i++) {
            thing.push(imgArray[i].clickCtr)

        }
        // console.log(thing)
    }
    else if (id === 'middle_item_img') {
        threeImages[1].clickCtr++;
        for (var i = 0; i < imgArray.length; i++) {
            thing.push(imgArray[i].clickCtr)

        }
        // console.log(thing)
    }
    else if (id === 'right_item_img') {
        threeImages[2].clickCtr++;
        // console.log(threeImages[2].clickCtr);
        for (var i = 0; i < imgArray.length; i++) {
            thing.push(imgArray[i].clickCtr)

        }
        // console.log(thing)

        
    }
    // console.log('bag ctr', imgArray[0].clickCtr);
    Product.voteMax--;
    if (Product.voteMax === 0) {
        leftImage.removeEventListener('click', clickHandler);
        middleImage.removeEventListener('click', clickHandler);
        rightImage.removeEventListener('click', clickHandler);
        getNameAndVoteList();
        getVotesPerImage();
        getShownTimes();
        getVotesChart();

        //adding objects to local storage and retrieving back from JSON to objects
        var allImages;
        var imgArrayJSON = JSON.stringify(imgArray);
        console.log('convert', imgArrayJSON);
        localStorage.setItem('imgArray', imgArrayJSON);
        console.log('localstorage', localStorage);
        allImages = JSON.parse(localStorage.getItem('imgArray'));
        console.log('allimagesss', allImages);
    }
    threeImages = [];
    threeImages = getThreeUnrepeatedImages();
}

var sixDisplayedImages = [];

function getThreeUnrepeatedImages() {
    var maxNum = 20;
    while (threeImages.length < 3) {
        for (var i = 0; i < 3; i++) {
            var newIndex = Math.floor(Math.random() * maxNum);
            var newItem = imgArray[newIndex];

            //Get set of 3 images and also not repeat the same image for two 
            //consecutive display
            if (!threeImages.includes(newItem) && !sixDisplayedImages.includes(newItem)) {
                sixDisplayedImages.push(newItem);
                threeImages.push(newItem);
                imgElemArr[i].src = threeImages[i].imgUrl;
                imgNameArr[i].textContent = threeImages[i].name;
                threeImages[i].shownCtr++;

            } else {
                i = i - 1;
            }
            if (sixDisplayedImages.length === 5) {
                sixDisplayedImages = [];
            }
        }
    }
    return threeImages;
}
getThreeUnrepeatedImages();

leftImage.addEventListener('click', clickHandler);
middleImage.addEventListener('click', clickHandler);
rightImage.addEventListener('click', clickHandler);


////////////////////////////////////////////
//chart section

var imgLabel = [];
var votesPerImg = [];
var shownTimes = [];


function getNamesForLabel () {
    for (var i = 0; i < imgArray.length; i++){
        imgLabel.push(imgArray[i].name);
    }
    return imgLabel;
}
getNamesForLabel();

function getVotesPerImage () {
    for (var i = 0; i < imgArray.length; i++) {
        votesPerImg.push(imgArray[i].clickCtr);
    }
    return votesPerImg;
}

function getShownTimes () {
    for (var i = 0; i < imgArray.length; i++) {
        shownTimes.push(imgArray[i].shownCtr);
    }
}





// console.log('imgLabel',imgLabel);
function getVotesChart() {
    var ctx = document.getElementById('clicks_total').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: imgLabel,
            datasets: [{
                label: '# of Votes',
                data: votesPerImg,
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }, {
                label: '# of times displayed',
                data: shownTimes,
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1
            }],
        },
        options: {
            // width: '300px',
            // responsiveness: false,
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

