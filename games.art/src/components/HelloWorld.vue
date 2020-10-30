<template>
  <div id="components-layout-demo-basic">
    <a-layout>
      <a-layout-content>
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
     </ol>
   <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="../assets/136.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>FORTNITE</h1>
        <h3>CON UN TOTAL DE 350 MILLONES DE USUARIOS REGISTRADOS</h3>
      </div>
     </div>
     <div class="carousel-item">
      <img src="../assets/gt.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>GRAND THEFTAUTO V</h1>
        <h3>CON UN TOTAL DE 150 MILLONES DE UNIDADES VENDIDAS EN EL 2020</h3>
      </div>
      </div>
     <div class="carousel-item">
      <img src="../assets/war.jpg" class="d-block w-100" alt="...">
      <div class="carousel-caption d-none d-md-block">
        <h1>WARZONE</h1>
        <h3>CON UN TOTAL DE 80 MILLONES DE JUGADORES AL MES </h3>
      </div>
      </div>
     </div>
     <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
     </a>
    <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
    </a>
    </div>
      </a-layout-content><br><br>
      <a-layout-footer>
        <div class="container">
          <h2>Ultimas Noticias</h2> 

         <div class="card-deck">
         <div class="card">
       <img src="../assets/PS5-3.jpg" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title">PS5</h5>
      <p class="card-text">PS5 grabará un breve vídeo cada vez que consigas un trofeo,
             al igual que PS4 capturaba una imagen al conseguir un trofeo, PS5 hará lo propio pero tomará una secuencia completa en vídeo.</p>
        </div>
      <div class="card-footer">
      <small class="text-muted">Last updated 30 mins ago</small>
     </div>
     </div>
     <div class="card">
     <img src="../assets/cyber.jpg" class="card-img-top" alt="...">
     <div class="card-body">
      <h5 class="card-title">CYBERPUNK 2077</h5>
      <p class="card-text">Cyberpunk 2077 vuelve a retrasarse y fija su lanzamiento para el 10 de diciembre,
            el estudio ha pedido disculpas a los fans y asegura que necesitan más días para terminar de comprobar que el juego funciona correctamente en todas las versiones.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 20 mins ago</small>
    </div>
    </div>
    <div class="card">
    <img src="../assets/falll.jpg" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">FALL GUYS</h5>
      <p class="card-text">Fall Guys: Ultimate Knockout recibirá un disfraz de Godzilla la semana que viene,
         el 3 de noviembre podremos celebrar el día de este popular kaiju adquiriendo su traje por 10 coronas </p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 10 mins ago</small>
      </div>
      </div>
      </div>
                  
              
        </div><br><br>
 
      </a-layout-footer>
    </a-layout>
    
    
  </div> 
     
</template>



<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>


<style scoped>
h3 {
  font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
}
h1{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
 h2 {
    color: white;
    font-size: 250%;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    background-color: black;
    font-style: italic;
}
</style>

