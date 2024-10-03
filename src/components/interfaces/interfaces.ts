export interface MovieGenre {
  one: string
  two: string
  three: string
}

export interface MovieDetails {
  id?: number
  name: string
  year: number
  genre: MovieGenre
  description: string
  title?: string
  videoURL?: string
  imageURL?: string
}

export interface MovieState {
  movie: MovieDetails | null
  showFullVideos: boolean
}
