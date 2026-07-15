<template>
  <main>
    <div class="hero">
      <div class="hero-texto">
        <h1>Campeonato de café</h1>
        <p>Torneio de alguma coisa de café</p>
      </div>
      <div class="hero-imagem">
        <img src="@/assets/img/images.jpeg">
      </div>
    </div>
    <button class="button">
      <RouterLink to="/ranking" class="text-button">Ranking</RouterLink>
    </button>
  </main>
</template>

<script setup>
</script>

<style scoped>
.button{
  color: #fff;
  text-decoration: none;
  border: 1px solid yellow;
  border-radius: 10px;
  background-color: brown;
}
.button-hover{
  background-color: rgb(255, 255, 255);
  color: rgb(0, 0, 0);
  transition: all 0.3s;
  transform: translateY(-2px);
}
.text-button{
  text-decoration: none;
  color: yellow;
  text-transform: uppercase;
}
.hero{
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
}
</style>