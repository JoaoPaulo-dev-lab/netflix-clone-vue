<template>
    <div v-if="movie" class="z-40 text-white w-[53%] pt-20">
        <div class="text-[55px] font-semibold font-serif">{{ movie.name }}</div>
        <div class="flex items-center text-lg pt-4">
            <div>{{ movie.year }}</div>
            <div class="relative">
                <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
                <span class="pl-4">{{ movie.genre.one }}</span>
            </div>
            <div class="relative">
                <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
                <span class="pl-4">{{ movie.genre.two }}</span>
            </div>
            <div class="relative">
                <span class="absolute left-[2px] -top-[12px] text-[40px]">.</span>
                <span class="pl-4">{{ movie.genre.three }}</span>
            </div>
        </div>
        <div class="text-2xl pt-6">{{ movie.description }}</div>
    </div>
</template>

<!-- Script -->
<script lang="ts">
import { defineComponent, type PropType } from 'vue';

interface MovieGenre {
    one: string;
    two: string;
    three: string;
}

interface Movie {
    name: string;
    year: number;
    genre: MovieGenre;
    description: string;
}

export default defineComponent({
    name: 'MovieComponent',
    props: {
        movie: {
            type: Object as PropType<Movie>,
            required: true,
        },
    },
});
</script>