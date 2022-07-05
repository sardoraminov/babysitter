let gallery = document.getElementById("gallery");

for (let i = 0; i < 47; i++) {
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
