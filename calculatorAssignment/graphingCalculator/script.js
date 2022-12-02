const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(1,-1);
ctx.translate(canvas.width/2, -canvas.height/2);
ctx.lineWidth = 2;
ctx.moveTo(0,-250);
ctx.lineTo(0,250)
ctx.stroke();
ctx.moveTo(-250,0);
ctx.lineTo(250,0)
ctx.stroke();

// ctx.beginPath();
// ctx.moveTo(0, -250);
// ctx.quadraticCurveTo(50, 250, 100, -250);
// ctx.stroke();

function strokeParabola() {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    for (let i = -75; i <= 75; i = i + 25) {
        ctx.fillRect(i,((i/25)**2) * 25,2,2)
    }
}
strokeParabola()