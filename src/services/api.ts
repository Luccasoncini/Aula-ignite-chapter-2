import axios from 'axios'

export const api = axios.create({
    baseURL: 'https://aula-ignite-chapter-2.vercel.app/api'
})