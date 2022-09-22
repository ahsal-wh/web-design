var title = document.getElementById("title").innerHTML = "Webhozz!";
console.log(title)
var text = document.getElementById("desc").innerHTML = "Kelas Web design";
console.log(text)

function test() {
    document.getElementById("button").style = "display:none";
    document.getElementById("image").style = "display:block";
}

function imageLeave() {
    document.getElementById("button").style = 'display:block';
    document.getElementById("image").style = 'display:none';
}

function warning() {
    alert("Selamat datang di webhozz")
}