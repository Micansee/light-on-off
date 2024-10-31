function switchoff() {
   document.getElementById("bulbImage").src = "https://img.freepik.com/premium-photo/lamp-bulb-hanging-rope-isolated-black-background-new-idea-concept_370059-3258.jpg";
   document.getElementById("catImage").src = "https://tse1.mm.bing.net/th?id=OIG1.PJWZtCgXRfskuj3XBCjf&w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn";
   document.getElementById("switchstatus").innerHTML = "Switched Off"; 
}

function switchon() {
   document.getElementById("bulbImage").src = "https://static.independent.co.uk/s3fs-public/thumbnails/image/2016/01/11/17/15-light-bulb-rex.jpg";
   document.getElementById("catImage").src = "https://tse4.mm.bing.net/th?id=OIG3.2dda2nS6uMjwIlp4APlf&w=270&h=270&c=6&r=0&o=5&dpr=1.5&pid=ImgGn";
   document.getElementById("switchstatus").innerHTML = "Switched On"; 
}