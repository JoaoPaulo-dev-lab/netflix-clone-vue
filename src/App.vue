<script setup lang="ts">
import { onMounted } from "vue";
import movies from './movies.json'
import CarouselComponent from './components/carousel/CarouselComponent.vue';
import MovieComponent from './components/movie/MovieComponent.vue';
import Magnify from 'vue-material-design-icons/Magnify.vue';
import HomeOutline from 'vue-material-design-icons/HomeOutline.vue';
import TrendingUp from 'vue-material-design-icons/TrendingUp.vue';
import Television from 'vue-material-design-icons/Television.vue';
import MovieOutline from 'vue-material-design-icons/MovieOutline.vue';
import Plus from 'vue-material-design-icons/Plus.vue';
import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import BellOutline from 'vue-material-design-icons/BellOutline.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'

import { useMovieStore } from './stores/movie';
import { storeToRefs } from 'pinia';

interface MovieDetails {
  name: string;
  id: number;
  title: string;
  description: string;
  imageURL?: string
}

const useMovie = useMovieStore();
const { movie, showFullVideos } = storeToRefs(useMovie);

onMounted(() => {
  setTimeout(() => {
    if (movies[0] && movies[0][0]) {
      movie.value = movies[0][0] as MovieDetails;
    }
  }, 100);
});

</script>

<template>
  <div class="w-full h-screen bg-black">
    <header class="flex items-center w-full py-2 px-14 justify-between text-white">
      <div class="flex items-center gap-x-12">
        <div>
          <img class="max-w-24" src="../public/Netflix-Logo.png" alt="">
        </div>
        <div class="flex gap-x-4">
          <li class="list-none">
            <a href="" class="no-underline hover:text-white font-semibold text-slate-300 text-[15px]">Início</a>
          </li>
          <li class="list-none">
            <a href="" class="no-underline hover:text-white font-semibold text-slate-300 text-[15px]">Séries</a>
          </li>
          <li class="list-none">
            <a href="" class="no-underline hover:text-white font-semibold text-slate-300 text-[15px]">Filmes</a>
          </li>
          <li class="list-none">
            <a href="" class="no-underline hover:text-white font-semibold text-slate-300 text-[15px]">Bombando</a>
          </li>
          <li class="list-none">
            <a href="" class="no-underline hover:text-white font-semibold text-slate-300 text-[15px]">Minha lista</a>
          </li>
          <li class="list-none">
            <a href="" class="no-underline hover:text-white font-semibold text-slate-300 text-[15px]">Navegar por
              idiomas</a>
          </li>
        </div>
      </div>
      <div class="flex items-center gap-x-5">
        <div>
          <Magnify class="cursor-pointer  text-slate-300 hover:text-white" />
        </div>
        <div>
          <a href="" class="font-semibold text-slate-300 text-[15px] no-underline hover:text-white">
            Infantil
          </a>
        </div>
        <div>
          <div class="cursor-pointer text-slate-300 hover:text-white">
            <BellOutline />
          </div>
        </div>
        <div class="flex items-center cursor-pointer">
          <img src="../public/user.png" alt="">
          <div class="cursor-pointer text-slate-300 hover:text-white">
            <ChevronDown />
          </div>
        </div>
      </div>
    </header>
    <div v-if="!showFullVideos" class="">
      <div class="fixed flex z-20  right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border">
        <div class="absolute z-30 h-[600px] left-[120px] w-[77%] right-0 " />

        <MovieComponent v-if="movie" :movie="movie" />
        <video v-if="movie" :src="`/videos/${movie.name}.mp4`" autoplay loop
          class="absolute z-0 w-full h-[600px] right-0 top-0" />
      </div>

      <!-- <div class="absolute z-20 h-[70%] left-[120px] w-[100%] right-0 bottom-0" /> -->
    </div>
    <!-- <div v-if="showFullVideos">
      <div @click="showFullVideos = false"
        class="absolute z-50 p-2 m-4 bg-white bg-opacity-50 rounded-full cursor-pointer">
        <ChevronLeft fillColor="#FFFFFF" :size="40" />
      </div>
      <video :src="`/videos/${movie?.name}.mp4`" autoplay loop controls
        class="absolute z-0 w-[75%] h-[75%] object-fit" />
    </div> 
    <!-- <div v-if="!showFullVideos" id="SideNav" class="flex z-40 items-center w-[120px] h-screen bg-black relative">
      <img class="absolute top-0 w-[35px] mt-10 ml-10 pb-4" src="/images/netflix-logo.png" alt="Netflix Logo">
      <div class="flex flex-col w-[150px] gap-y-[5vh] pt-14">
        <div class=" mx-10">
          <Magnify fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class=" mx-10 border-b-4 border-b-red-500">
          <HomeOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class=" mx-10">
          <TrendingUp fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class="mx-10">
          <Television fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class="mx-10">
          <MovieOutline fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
        <div class="mx-10">
          <Plus fillColor="#FFFFFF" :size="40" class="cursor-pointer" />
        </div>
      </div>
    </div> -->
    <!-- <div v-if="!showFullVideos">
      <div class="fixed flex z-20 top-0 right-0 w-full h-[50%] bg-black pl-[120px] bg-clip-border">
        <div class="absolute z-30 h-[600px] left-[120px] w-[77%] right-0 top-0 bg-gradient-to-r from-black via-black" />

        <MovieComponent v-if="movie" :movie="movie" />
        <video v-if="movie" :src="`/videos/${movie.name}.mp4`" autoplay loop
          class="absolute z-0 h-[600px] right-0 top-0" />
      </div>
      <div>
        <div class="fixed z-30 bottom-0 right-0 w-full h-[55%] pl-[120px] overflow-y-hidden">
          <CarouselComponent class="pb-14 pt-14" category="Popular Movies" :movies="movies[0]" />

        </div>
      </div>
      <div class="absolute z-20 h-[70%] left-[120px] w-[100%] right-0 bottom-0 bg-gradient-to-t from-black via-black" />
    </div> -->
    <!-- <div v-if="showFullVideos">
      <div @click="showFullVideos = false"
        class="absolute z-50 p-2 m-4 bg-white bg-opacity-50 rounded-full cursor-pointer">
        <ChevronLeft fillColor="#FFFFFF" :size="40" />
      </div>
      <video :src="`/videos/${movie?.name}.mp4`" autoplay loop controls
        class="absolute z-0 w-[75%] h-[75%] object-fit" />
    </div> -->
  </div>
</template>
