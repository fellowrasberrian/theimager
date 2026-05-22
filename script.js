const gallery = document.getElementById("gallery");
const upload = document.getElementById("upload");

let images = [
  "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=1200",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=1200",
  "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=1200"
];

function render() {
  gallery.innerHTML = "";

  images.forEach(src => {
    const div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `<img src="${src}" />`;
    gallery.appendChild(div);
  });
}

upload.addEventListener("change", (e) => {
  const files = Array.from(e.target.files);

  files.forEach(file => {
    const url = URL.createObjectURL(file);
    images.push(url);
  });

  render();
});

render();