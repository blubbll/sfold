const box = document.getElementById("wrap");
box.onclick = () => {
  const oldB = box.style.border;
  box.style.border = "none";
  html2canvas(box, { backgroundColor: "#000000" }).then(canvas => {
    document.body.appendChild(canvas);
    box.style.border = oldB;
    var link = document.getElementById("link");
    link.setAttribute("download", "Fold.png");
    link.setAttribute(
      "href",
      canvas.toDataURL("image/png").replace("image/png", "image/octet-stream")
    );
    link.click();
    document.querySelector("canvas").remove();
  });
};
