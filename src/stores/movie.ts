import { defineStore } from 'pinia'

interface MovieState {
  movie: Movie | null
  showFullVideos: boolean
}

interface Movie {
  id: number
  title: string
  description: string
}

// Usar o `defineStore` com tipagem explícita do estado
export const useMovieStore = defineStore<'movie', MovieState>({
  id: 'movie', // Identificador da store
  state: (): MovieState => ({
    movie: null, // Inicia com `null`, mas depois será um objeto do tipo `Movie`
    showFullVideos: false
  })
})
