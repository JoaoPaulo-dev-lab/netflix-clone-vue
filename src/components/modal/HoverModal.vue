<template>
    <div class="bg-zinc-800 text-white p-4 rounded-md shadow-lg w-64">
        <h3 class="text-lg font-bold mb-2">{{ movie.title }}</h3>
        <p class="text-sm mb-4">{{ movie.description }}</p>
        <div class="flex space-x-2">
            <button class="px-4 py-2 bg-white text-black rounded hover:bg-gray-200 transition-colors">
                Play
            </button>
            <button class="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors">
                + My List
            </button>
        </div>
    </div>
</template>

<script lang="ts" setup>
defineProps<{
    movie: {
        id: number;
        name: string;
        title: string;
        description: string;
    }
}>()
</script>