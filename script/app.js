function Product(name, imgUrl) {
    this.name = name;
    this.imgUrl = imgUrl;
}

var imgArray = [];

imgArray.push(new Product('Bag', 'img/bag.jpg'));
imgArray.push(new Product('Banana', 'img/banana.jpg'));
imgArray.push(new Product('Bathroom', 'img/bathroom.jpg'));
imgArray.push(new Product('Boots', 'img/boots.jpg'));
imgArray.push(new Product('Breakfast', 'img/breakfast.jpg'));
imgArray.push(new Product('Bubblegum','img/bubblegum.jpg'));
imgArray.push(new Product('Chair', 'img/chair.jpg'));
imgArray.push(new Product('Cthulhu','img/cthulhu.jpg'));
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

console.log('Product', Product);
console.log('imgArray', imgArray);

var leftImage = document.getElementById('left_item_img');
var middleImage = document.getElementById('middle_item_img');
var rightImage = document.getElementById('right_item_img');

//add event handler
leftImage.addEventListener('click', getRandomImage);
middleImage.addEventListener('click', getRandomImage);
rightImage.addEventListener('click', getRandomImage);

//Generate random number
function getRandomImage(event) {
    console.log('getrandomimg');
    var id = event.target.id;
    console.log('id', id);
    var maxNum = 20;
    for (var i = 0; i < 3; i++){
        var randNumWithinRange1 = Math.floor(Math.random() * maxNum);
        var randNumWithinRange2 = Math.floor(Math.random() * maxNum);
        var randNumWithinRange3 = Math.floor(Math.random() * maxNum);

        if(id === 'left_item_img'|| id === 'middle_item_img' || id === 'right_item_img'){
            leftImage.setAttribute('src', imgArray[randNumWithinRange1].imgUrl);
            middleImage.setAttribute('src',imgArray[randNumWithinRange2].imgUrl);
            rightImage.setAttribute('src', imgArray[randNumWithinRange3].imgUrl);

    }
}
}



