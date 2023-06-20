const mainContent = document.querySelector(".main-contente")

const posts = [
  { title: "Avatar: O Caminho da Água", image: "assets/images/movie01.jpeg" },
  { title: "Resgate 2", image: "assets/images/movie02.jpg" },
]

const listPosts = () => {
    let output = ""
    posts.forEach(
      ({ title, image }) =>
        (output += `
                <article>
                    <h2>${title}</h2>
                    <h5>Jonathan, Jun 22, 2023</h5>
                    <img class="post-image" src=${image} alt="Avatar: Caminho da Agua" />
                    <p>Algum texto...</p>
                    <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                </article>
                `)
    )
    mainContent.innerHTML = output
}

document.addEventListener("DOMContentLoaded", listPosts)

// Registro do Service Worker

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  })
}