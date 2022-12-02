const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

ctx.scale(1,-1);
ctx.translate(canvas.width/2, -canvas.height/2);

function strokeBackground() {
    ctx.strokeStyle = 'black';
    ctx.lineWidth = 2;
    ctx.moveTo(0,-250);
    ctx.lineTo(0,250)
    ctx.stroke();
    ctx.moveTo(-250,0);
    ctx.lineTo(250,0)
    ctx.stroke();
}

function strokeParabola() {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    for (let i = -10; i <= 10; i += 0.01 ) {
        ctx.fillRect(i * 25, i**2 * 25, 1, 1)
    }
}
strokeBackground()
strokeParabola()