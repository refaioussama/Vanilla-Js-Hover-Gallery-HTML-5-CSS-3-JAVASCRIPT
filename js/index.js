/* `https://picsum.photos/600/450/?${src}` */

function prepareThumbs() {
  let bucket = document.getElementById('thumb-bucket'),
      smallThumbNails = bucket.getElementsByTagName('img'),
      largeImg = document.getElementById('large-image');

      largeImg.src = smallThumbNails[0].src;
      setLarge(largeImg.src.split("?")[1]);

      function setLarge(src) {
        largeImg.src = `https://picsum.photos/600/450/?${src}`;
      }

      for(var i = 0; i < smallThumbNails.length; i++){
        this.thumbImg = smallThumbNails[i];
        this.thumbImg.addEventListener("mouseover", function() {
          let imgSrc = this.src.split("?")[1];
          setLarge(imgSrc);
        });
      }
}

prepareThumbs();