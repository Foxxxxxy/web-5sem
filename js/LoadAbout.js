function loadAbout() {
  document.getElementById("about-wrapper").innerHTML = `<p class="about__info">Lazy over-productive CS enjoyer</p>
<p class="list__title">About</p>
<ul class="list">
  <li class="list__item">Nikita</li>
  <li class="list__item">20 y.o</li>
</ul>
<p class="list__title">My skills</p>
<ul class="list">
  <li class="list__item"><img class="list__logo" src="icons/skills/java.svg">Java</li>
  <li class="list__item"><img class="list__logo" src="icons/skills/kotlin.svg">Kotlin</li>
  <li class="list__item"><img class="list__logo" src="icons/skills/python.svg">Python</li>
  <ul class="list">
    <li class="list__item">bs4</li>
    <li class="list__item">aiogram</li>
    <li class="list__item">requests</li>
    <li class="list__item">FASTApi</li>
  </ul>
  <li class="list__item"><img class="list__logo" src="icons/skills/go.svg">Go</li>
</ul>`
}