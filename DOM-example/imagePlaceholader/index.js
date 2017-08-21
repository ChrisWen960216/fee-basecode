let allImg = document.getElementsByTagName('img');

for (let i = 0; i < allImg.length; i++) {
    let img = allImg[0];
    let url = img.getAttribute('data-src');
    let tempImage = document.createElement('img');

    tempImage.setAttribute('index', i)
    setTimeout(() => {
        let index = tempImage.getAttribute('index');
        allImg[index].src = url;
    }, 5000)
}




