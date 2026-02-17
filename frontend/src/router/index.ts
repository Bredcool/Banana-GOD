import { createRouter, createWebHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Menu from '../pages/Menu.vue'
import Cerita from '../pages/Cerita.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/menu', name: 'Menu', component: Menu },
        { path: '/cerita', name: 'Cerita', component: Cerita }
    ]
})

/* =====================================
   GLOBAL AUDIO STOP SYSTEM
===================================== */

let isFading = false

const fadeOutAndStop = () => {
    const audio = window.__bananaGodAudio
    if (!audio) return
    if (isFading) return

    isFading = true

    let volume = audio.volume

    const fade = setInterval(() => {
        if (volume > 0.05) {
            volume -= 0.05
            audio.volume = volume
        } else {
            clearInterval(fade)

            audio.pause()
            audio.currentTime = 0
            audio.volume = 0.5

            window.__bananaGodAudio = undefined
            isFading = false
        }
    }, 50)
}

router.beforeEach((to, from, next) => {
    if (from.name === 'Menu' && to.name !== 'Menu') {
        fadeOutAndStop()
    }

    next()
})

export default router
