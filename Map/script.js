const button1 = document.getElementById("Point1");
const button2 = document.getElementById("Point2");
const button3 = document.getElementById("Point3");
const button4 = document.getElementById("Point4");
const button5 = document.getElementById("Point");
const panel = document.getElementById("img-box");
const images = ['/sprite/map1.png','/sprite/map2.png','/sprite/map3.png','/sprite/map4.png','/sprite/map.png']

button1.addEventListener('click',()=>{
    panel.src = images[0];
});
button2.addEventListener('click',()=>{
    panel.src = images[1];
});
button3.addEventListener('click',()=>{
    panel.src = images[2];
});
button4.addEventListener('click',()=>{
    panel.src = images[3];
});
button5.addEventListener('click',()=>{
    panel.src = images[4];
});