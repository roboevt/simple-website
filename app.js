'use strict';
const switcher = document.querySelector('.btn');
const bounceBtn = document.querySelector('#bounce');
const container = document.querySelector('#container');
const animate = document.querySelector('#animate');
let bouncing = false;

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    } else {
        this.textContent = "Light";
    }
    console.log('current class name: ' + className);
});

bounceBtn.addEventListener('click', function() {
    if(!bouncing) {
        bouncing = true;
        bounce();
    } else {
        bouncing = false;
    }
});

function myMove() {
    let id = null;
    const elem = document.getElementById("animate");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
      if (pos == 350) {
        clearInterval(id);
      } else {
        pos++;
        elem.style.top = pos + 'px';
        elem.style.left = pos + 'px';
      }
    }
  }

  function bounce() {
      let id = null;
      const elem = document.getElementById('animate');
      let width = container.clientWidth-animate.clientWidth;
      let height = container.clientHeight-animate.clientHeight;
      let x = width*Math.random();
      let y = height*Math.random();
      let xV = 2*Math.random();
      let yV = .5*Math.random();
      id = setInterval(frame, 1);
      function frame() {
        if (!bouncing) {
            elem.style.top = 0;
            elem.style.left = 0;
            clearInterval(id);
        } else {
            if(y>height || y<0) {
                yV*=-1;
            } else {
                yV +=0.05;
            }

            if(x>width || x<0) {
                xV*=-1;
            }

            x+=xV;
            y+=yV;

            elem.style.top = y + 'px';
            elem.style.left = x + 'px';
        }
      }
  }