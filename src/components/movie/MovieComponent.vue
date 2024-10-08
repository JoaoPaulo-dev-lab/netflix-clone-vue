<template>
    <div class="relative h-[56.25vw] bg-black">
        <!-- Imagem/Vídeo de Fundo -->
        <div class="absolute top-0 left-0 w-full h-full">
            <img src="/public/banner.jpeg" alt="banner image" class="w-full h-full object-cover" />
            <!-- Gradiente de sobreposição -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div class="absolute bottom-[35%] left-[4%] ">
            <img src="/public/title.png" class="tracking-wide mb-4 max-w-[39%]" />
            <div class="flex items-center text-white gap-2 mb-4">
                <img src="/public/top10.png" class="max-w-8 ">
                <div class="font-bold text-[24px]">Top 2 em filmes hoje</div>
            </div>
            <p class="text-white text-lg mb-4 max-w-[39%]">
                Um caçador de recompensas quer se aposentar e abrir um restaurante, mas deve realizar
                sua última missão: encontrar o filho aventureiro de seu chefe na selva amazônica.
            </p>
            <div class="flex justify-between">
                <div class="flex gap-4">
                    <button
                        class="flex items-center justify-center gap-2 bg-white hover:bg-white/80 text-black font-semibold px-8 py-2 rounded">
                        <FontAwesomeIcon :icon="faPlay" />
                        Assistir
                    </button>
                    <button
                        class="flex items-center justify-center gap-2 bg-gray-500/70 hover:bg-gray-500/50 text-white font-semibold px-8 py-2 rounded">
                        <FontAwesomeIcon :icon="faCircleInfo" />
                        Mais informações
                    </button>
                </div>
            </div>
        </div>
        <div class="absolute flex border-l-[3px] top-[60%] right-0 w-[100px] py-[auto] bg-[#22212199] ">
            <img src="/public/12.png" class="flex items-start ml-[12px] max-w-8" alt="">
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlay, faCircleInfo } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
    name: 'MovieComponent',
    components: {
        FontAwesomeIcon
    },
    /*props: {
        movie: {
            type: Object as PropType<MovieDetails>,
            required: true,
        },
    },*/
    data() {
        return {
            faPlay,
            faCircleInfo
        }
    }
});
</script>