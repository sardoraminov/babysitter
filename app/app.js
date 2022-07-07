let gallery = document.getElementById("gallery");

for (let i = 0; i < 47; i++) {
  if (i === 4) {
    console.log("");
  } else if (i === 5) {
    console.log("");
  } else if (i === 10) {
    console.log("");
  } else if (i === 11) {
    console.log("");
  } else if (i === 20) {
    console.log("");
  } else if (i === 21) {
    console.log("");
  } else if (i === 22) {
    console.log("");
  } else if (i === 24) {
    console.log("");
  } else if (i === 26) {
    console.log("");
  } else {
    let div = document.createElement("div");
    let img = document.createElement("img");

    div.classList.add("image");
    img.src = `../style/img/img${i}.jpg`;
    img.style.width = "100%";
    img.style.height = "100%";
    img.style.objectFit = "cover";

    div.appendChild(img);
    gallery.appendChild(div);
  }
}
