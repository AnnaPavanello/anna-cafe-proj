<template>
    <div class="ranking-view">
        <h1>{{ titulo }}</h1>
        <p>{{ texto }}</p>

        <ul>
            <li>Café Arabe - Fazenda água doce - 9.1</li>
            <li>Café Japones - Fazenda água roxa - 8.4</li>
            <li>Café Portugues - Fazenda água dourada - 7.1</li>
            <li>Café Sueco - Fazenda água vermelha - 3.1</li>
        </ul>
        <ul>
            <li v-for="cafe in cafesOrdenados" :key="cafe.id">
                Nome:{{ cafe.nome }}
                Produtor:{{ cafe.local }}
                Media:{{ cafe.nota }}
            </li>
        </ul>
    </div>
</template>

<script setup>
    import{ computed, ref } from 'vue'
    const titulo = 'Ranking Geral'
    const descricao = 'Confira o ranking dos melhores avaliados'

    const cafes = ref([
    {
        id: 1,
        nome:'Café Arabe',
        local:'Fazenda Água Doce',
        nota:'9.1'
    },
    {
        id: 2,
        nome:'Café Japones',
        local:'Fazenda Água Roxa',
        nota:'8.4'
    },
    {
        id: 3,
        nome:'Café Portugues',
        local:'Fazenda Água Dourada',
        nota:'7.1'
    },
    {
        id: 4,
        nome:'Café Sueco',
        local:'Fazenda Água Vemelha',
        nota:'3.1'
    }
]);

const cafesOrdenados = computed(() => {
    return [...cafes.value].sort((a,b) => b.nota - a.nota)
});

</script>

<style scoped>
</style>