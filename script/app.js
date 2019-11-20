function Product(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
    this.clickCtr = 0;
    this.shownCtr = 0;
}

Product.voteCtr = 0;
Product.voteMax = 5;

Product.prototype.increaseClickCtr = function () {
    this.clickCtr++;
}


var imgArray = [];

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

console.log('imgArray', imgArray);

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

threeImages = [];
//add event handler

Product.flag = 0;

//Generate random number
function clickHandler(event) {
    var id = event.target.id;
    console.log('id', id);
    //increase the counter first clikced item
    //change the images
    // var threeImages = getThreeUnrepeatedImages();
    
    // if (id === 'left_item_img') {
    //     imgArray[0].clickCtr++;
    //     flag++;
    // } else if (id === 'middle_item_img') {
    //     imgArray[1].clickCtr++;
    //     flag++;
    // } else if (id === 'right_item_img') {
    //     imgArray[2].clickCtr++;
    //     flag++;
    // } else {

        var thing = [];
        if (id === 'left_item_img') {
            threeImages[0].clickCtr++;
            console.log(threeImages[0].clickCtr);
            for (i = 0; i < imgArray.length; i++) {
                thing.push(imgArray[i].clickCtr)
    
            }
            console.log(thing)
        }
        else if (id === 'middle_item_img') {
            threeImages[1].clickCtr++;
            console.log(threeImages[1].clickCtr);
            for (i = 0; i < imgArray.length; i++) {
                thing.push(imgArray[i].clickCtr)
    
            }
            console.log(thing)
        }
        else if (id === 'right_item_img') {
            threeImages[2].clickCtr++;
            console.log(threeImages[2].clickCtr);
            for (i = 0; i < imgArray.length; i++) {
                thing.push(imgArray[i].clickCtr)
    
            }
            console.log(thing)
        }
    }

    
    



    // console.log('threeimges', threeImages);

    // if (id === 'left_item_img' || id === 'middle_item_img' || id === 'right_item_img') {
    //     leftImage.setAttribute('src', threeImages[0].imgUrl);
    //     leftName.textContent = threeImages[0].name;

    //     middleImage.setAttribute('src', threeImages[1].imgUrl);
    //     middleName.textContent = threeImages[1].name;

    //     rightImage.setAttribute('src', threeImages[2].imgUrl);
    //     rightName.textContent = threeImages[2].name;

    // }

    // var maxNum = 20
    // for (var i = 0; i < 3; i++) {
    //     var randNumWithinRange1 = Math.floor(Math.random() * maxNum);
    //     var randNumWithinRange2 = Math.floor(Math.random() * maxNum);
    //     var randNumWithinRange3 = Math.floor(Math.random() * maxNum);

    //     if (id === 'left_item_img' || id === 'middle_item_img' || id === 'right_item_img') {
    //         leftImage.setAttribute('src', imgArray[randNumWithinRange1].imgUrl);
    //         middleImage.setAttribute('src', imgArray[randNumWithinRange2].imgUrl);
    //         rightImage.setAttribute('src', imgArray[randNumWithinRange3].imgUrl);

    //     }
    // }
// }

function getThreeUnrepeatedImages() {
    var trio = [];
    var maxNum = 20;
    while (trio.length < 3) {
        // while (trio.includes(newItem))
        
        console.log('this is a new item', newItem)
        for (var i = 0; i < 3; i++){
            var newIndex = Math.floor(Math.random() * maxNum);
            var newItem = imgArray[newIndex];
            // debugger;
            if (!trio.includes(newItem)) {
                trio.push(newItem);
                threeImages.push(newItem);
                imgElemArr[i].src = trio[i].imgUrl;
                imgNameArr[i].src = trio[i].name;
                console.log('trio', trio);
        }
        }
    }
    return trio;
}
getThreeUnrepeatedImages();
// getThreeUnrepeatedImages();
// clickHandler('click');

// console.log(getThreeUnrepeatedImages());
leftImage.addEventListener('click', clickHandler);
middleImage.addEventListener('click', clickHandler);
rightImage.addEventListener('click', clickHandler);
