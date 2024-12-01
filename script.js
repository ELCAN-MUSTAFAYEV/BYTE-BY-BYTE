window.onload = function() {
    const canvas = document.getElementById('canvas');
    const context = canvas.getContext('2d');
    let x, y, angle;

    function radian(degree) {
        return degree * Math.PI / 180;
    }

    function moveForward(distance, context) {
        let a = radian(angle);
        x = x + distance * Math.cos(a);
        y = y + distance * Math.sin(a);
        context.lineTo(x, y);
    }

    function turnRight(degree) {
        angle = angle - degree;
        if (angle < 0) angle = angle + 360;
    }

    document.getElementById('btn').addEventListener('click', function() {
        context.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
        const depth = document.getElementById('depth').value;
        x = canvas.width / 2;
        y = canvas.height / 2;
        angle = 0.0;
        context.moveTo(x, y);
        context.beginPath();
        function sleep(){ //just empty function in order to able to use settimeout funciton becuase it dont work properly within while loop
            
        }
        let i=10;
   
            while (i < depth) {
                moveForward(i, context);
                context.stroke();
                turnRight(89);
                i+=10;
                setTimeout( sleep(),50);  // Delay between steps
            }
        
   
    });
};


document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.hourofcode img').forEach(function(x) {
      x.addEventListener('click', function() {
      document.getElementById("dontshowimgid").style.display="block";
      document.getElementById('show').src=x.src;
      document.main.classList.add("blur")
      });
    });
    document.querySelector('.close').addEventListener('click', () => {
        document.getElementById('dontshowimgid').style.display = 'none';
        document.main.classList.remove('blur');
    });
});
