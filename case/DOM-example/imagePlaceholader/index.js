const allImg = document.getElementsByTagName('img');

for (let i = 0; i < allImg.length; i++) {
  const img = allImg[0];
  const url = img.getAttribute('data-src');
  const tempImage = document.createElement('img');

  tempImage.setAttribute('index', i);
  setTimeout(() => {
    const index = tempImage.getAttribute('index');
    allImg[index].src = url;
  }, 5000);
}
