const previews = document.querySelectorAll('.js-preview-item')
const closers = document.querySelectorAll(".js-popup-closer")

let modal

previews.forEach(el => el.addEventListener('click', event => {
  const previewTheme = event.target.getAttribute("data-preview-theme")
  modal = document.getElementById(previewTheme)
  modal.style.display = "flex"
}))

closers.forEach(el => el.addEventListener('click', () => {
    modal.style.display = "none"
}))

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}

document.addEventListener("keydown", (e) => {
    if (e.key  == 'Escape' && modal) {
        modal.style.display = "none"
    }
});