<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">TechLAw2019</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link active" href="#"><router-link :to="{path:'/'}">Inicio</router-link></a>
            <a class="nav-item nav-link" href="#"><router-link :to="{path:'/sobrenosotros'}">¿Quiénes somos?</router-link></a>
          </div>
        </div>
      </nav>
</div>
</template>

<style>

</style>
