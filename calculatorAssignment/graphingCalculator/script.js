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
    for (let i = -10; i < 20; i += 2) {
        if (i==10) {continue};
        ctx.strokeStyle = 'gray'
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(i * 25, -250);
        ctx.lineTo(i * 25, 250);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(-250, i * 25);
        ctx.lineTo(250, i * 25);
        ctx.stroke();
    }
}

function strokeParabola() {
    ctx.beginPath();
    ctx.fillStyle = 'red';
    let y
    for (let x = -10; x <= 10; x += 0.001 ) {
        ctx.fillRect(x * 25, 2 * Math.sin(x) * 25, 1, 1)
    }
}
strokeBackground()
strokeParabola()