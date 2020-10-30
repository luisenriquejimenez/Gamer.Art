<template>

    <div><br><br><br><br>
        <h1>
            Inicia secion para descargar un Videojuego 
        </h1>
        <form class="formulario"><br>
            
            <div class="contenedor">
                <h3>Ingresar cuenta</h3>

                <div class="imput-contenedor">
                    <input type="texto" placeholder="Usuario">

                </div>

                <div class="imput-contenedor"><br>
                    <input type="password" placeholder="Contraseña">

                </div><br>

                <button class="btn btn-dark" type="submit">Iniciar Secion</button>
                <p>olvidaste tu contraseña</p>
            </div>
        </form><br><br><br><br><br><br>
        
      </div>
</template>


<script>
export default {
    name: 'login'
}
</script>


<style scoped>
h1{
    color: white;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
     
}
        
        
h3 {
     color:white;
     font-size: px;
     font-family: Arial, Helvetica, sans-serif;
   }    

</style>