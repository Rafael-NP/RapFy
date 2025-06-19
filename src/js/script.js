function Dark() {
  document.getElementById("container").style.backgroundColor = "#002535"
  document.getElementById("titulo").style.color= "#91c4ff"
  document.getElementById("artistas").style.color= "#fff"
}
function Light() {
  document.getElementById("container").style.backgroundColor = "#91c4ff"
  document.getElementById("titulo").style.color= "#011b3b"
  document.getElementById("artistas").style.color= "#011b3b"
}
window.onload = Dark