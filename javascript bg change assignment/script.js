function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  function changeBackgroundColor() {
    var color = getRandomColor();
    document.body.style.backgroundColor = color;
    document.getElementById("colorCode").innerText = "Background Color: " + color;
    var container = document.getElementById('container');
    container.style.backgroundColor = color;
  }

  // Initial background color
  changeBackgroundColor();