<template>
    <header class="flex items-center w-full py-2 px-14 bg-black justify-between text-white">
        <div class="flex items-center gap-x-12">
            <div>
                <img class="max-w-24" src="../../../public/Netflix-Logo.png" alt="">
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
                    <a href=""
                        class="no-underline hover:text-white font-semibold text-slate-300 text-[15px]">Bombando</a>
                </li>
                <li class="list-none">
                    <a href="" class="no-underline hover:text-white font-semibold text-slate-300 text-[15px]">Minha
                        lista</a>
                </li>
                <li class="list-none">
                    <a href="" class="no-underline hover:text-white font-semibold text-slate-300 text-[15px]">Navegar
                        por
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
                <img src="../../../public/user.png" alt="">
                <div class="cursor-pointer text-slate-300 hover:text-white">
                    <ChevronDown />
                </div>
            </div>
        </div>
    </header>

</template>

<script setup lang="ts">
import Magnify from 'vue-material-design-icons/Magnify.vue';
//import ChevronLeft from 'vue-material-design-icons/ChevronLeft.vue';
import BellOutline from 'vue-material-design-icons/BellOutline.vue'
import ChevronDown from 'vue-material-design-icons/ChevronDown.vue'
</script>