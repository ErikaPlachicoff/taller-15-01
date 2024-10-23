const navbar = `<nav class="navbar navbar-expand-lg" style="background-color: #6c757d;">
  <div class="container-fluid">
    <a class="navbar-brand text-light" href="#">LOREM IPSUM</a>
    <button class="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false"
      aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
      <form class="d-flex order-1 order-lg-2 my-2 my-lg-0" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
      </form>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0 order-2 order-lg-1">
        <li class="nav-item">
          <a class="nav-link text-light active" aria-current="page" href="#">Dolor</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Sit</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-light" href="#">Amet</a>
        </li>
        <li class="nav-item dropdown d-lg-none">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown"
            aria-haspopup="true" aria-expanded="false">
            Opciones
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <a class="dropdown-item text-decoration-underline" href="#">Opcion 1</a>
            <a class="dropdown-item text-decoration-underline" href="#">Opcion 2</a>
            <a class="dropdown-item text-decoration-underline" href="#">Opcion 3</a>
            <a class="dropdown-item text-decoration-underline" href="#">Opcion 4</a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</nav>
`

document.body.insertAdjacentHTML('afterbegin', navbar);


const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})
