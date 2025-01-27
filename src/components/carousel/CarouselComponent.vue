<template>
    <div class="min-w-[1200px] relative">
        <div class="flex justify-between mr-6 mb-2">
            <div class="flex items-center font-semibold pl-[60px] text-white text-2xl cursor-pointer">
                {{ category }}
            </div>
        </div>
        <div>
            <Carousel ref="carousel" v-model="currentSlide" :items-to-show="8" :items-to-scroll="1" :wrap-around="true"
                :transition="500" snapAlign="start" class="bg-transparent">
                <Slide v-for="(slide, index) in movies" :key="slide.videoURL"
                    class="flex items-center object-cover  bg-transparent">
                    <div @click="fullScreenVideo(index)" class="object-cover h-[100%] cursor-pointer" :class="[
                        currentSlide !== index ? 'border-4 border-transparent' : 'border-4 border-white',
                        currentSlideObject(slide, index)
                    ]">
                        <img style="user-select: none" class="pointer-events-none h-[100%] z-[-1]" :src="slide.imageURL"
                            :alt="slide.name">

                    </div>

                </Slide>
                <template #addons>
                    <Navigation />
                </template>
            </Carousel>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, toRefs, defineProps } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Navigation } from 'vue3-carousel'
import { useMovieStore } from '../../stores/movie'
import { storeToRefs } from 'pinia'
import type { MovieDetails } from '../interfaces/interfaces'

interface Props {
    category: string;
    movies: MovieDetails[];
}

const useMovie = useMovieStore()
const { movie, showFullVideos } = storeToRefs(useMovie)

const currentSlide = ref(0)

const props = defineProps<Props>()
const { movies, category } = toRefs(props)

// Atualizando o filme qquando o slide muda:
const currentSlideObject = (slide: MovieDetails, index: number): void => {
    if (index === currentSlide.value) {
        movie.value = slide
    }
}

// Atualiza o slide e ativa o modo de tela cheia
const fullScreenVideo = (index: number): void => {
    currentSlide.value = index
    setTimeout(() => {
        if (showFullVideos.value !== undefined) {
            showFullVideos.value = true
        }
    }, 500)
}
</script>

<style>
.carousel__prev,
.carousel__next,
.carousel__prev:hover,
.carousel__next:hover {
    color: white;
}
</style>