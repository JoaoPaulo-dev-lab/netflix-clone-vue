<template>
    <div class="relative h-[56.25vw] bg-black">
        <!-- Imagem/Vídeo de Fundo -->
        <div class="absolute top-0 left-0 w-full h-full">
            <video src="/public/Top Gun Maverick.mp4" autoplay loop alt="banner video"
                class="w-full h-full object-cover" />
            <!-- Gradiente de sobreposição -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
        </div>
        <div class="absolute bottom-[35%] left-[4%] max-w-[36%]">
            <h1 class="text-white text-[5vw] font-bold tracking-wide mb-4">
                Top Gun Maverick
            </h1>
            <p class="text-white text-lg mb-6">
                After thirty years, Maverick is still pushing the envelope as a top naval aviator, but must confront
                ghosts of his past when he leads TOP GUN's elite graduates on a mission that demands the ultimate
                sacrifice from those chosen to fly it.
            </p>
            <div class="flex gap-4">
                <button
                    class="flex items-center justify-center gap-2 bg-white hover:bg-white/80 text-black font-semibold px-8 py-3 rounded">
                    <FontAwesomeIcon :icon="faPlay" />
                    Assistir
                </button>
                <button
                    class="flex items-center justify-center gap-2 bg-gray-500/70 hover:bg-gray-500/50 text-white font-semibold px-8 py-3 rounded">
                    <span class="material-icons">info</span>
                    Mais informações
                </button>
            </div>

            <!-- Classificação etária -->
            <div class="absolute right-0 top-full mt-4 bg-[#33333399] text-white px-2 py-1 text-sm">
                14
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue';
import type { MovieDetails } from '../interfaces/interfaces'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';

export default defineComponent({
    name: 'MovieComponent',
    props: {
        movie: {
            type: Object as PropType<MovieDetails>,
            required: true,
        },
    },
    data() {
        return {
            FontAwesomeIcon,
            faPlay
        }
    }
});
</script>