<script setup>
import { onMounted, onBeforeUnmount } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'

let audio = null
let fadeInterval = null

/* =========================
   🎧 STOP MUSIC (FADE OUT)
========================= */
const stopMusic = () => {
    if (!audio) return

    if (fadeInterval) return // cegah double trigger

    let volume = audio.volume

    fadeInterval = setInterval(() => {
        if (volume > 0.05) {
            volume -= 0.05
            audio.volume = volume
        } else {
            audio.pause()
            audio.currentTime = 0
            audio.volume = 0.5
            clearInterval(fadeInterval)
            fadeInterval = null
            window.__bananaGodAudio = null
        }
    }, 50)
}

/* =========================
   🎧 AMBIL AUDIO GLOBAL
========================= */
onMounted(() => {
    audio = window.__bananaGodAudio || null
})

/* =========================
   🚪 STOP SAAT PINDAH ROUTE
========================= */
onBeforeRouteLeave(() => {
    stopMusic()
})

/* =========================
   🧹 SAFETY NET
========================= */
onBeforeUnmount(() => {
    stopMusic()
})
</script>

<template>
    <section class="relative min-h-screen px-6 py-20 overflow-hidden text-white">

        <!-- Background -->
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/Mesir Kuno 1.png')">
        </div>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/70"></div>

        <!-- Content -->
        <div class="relative z-10 max-w-3xl mx-auto text-center">

            <h1 class="text-4xl md:text-5xl font-extrabold text-gold mb-10">
                Kitab Pisang Kuno
            </h1>

            <div class="space-y-6 text-gray-200 leading-relaxed text-lg">

                <p>
                    Dahulu kala, di tengah gurun pasir yang luas,
                    berdirilah sebuah kerajaan yang makmur karena satu hal:
                    resep pisang suci yang diwariskan turun-temurun.
                </p>

                <p>
                    Resep itu dijaga oleh para penjaga rasa,
                    yang bersumpah untuk tidak membiarkan manisnya hilang dari dunia.
                </p>

                <p>
                    Kini, warisan itu kembali hadir,
                    bukan untuk menaklukkan kerajaan,
                    tetapi untuk menaklukkan rasa lapar.
                </p>

                <p class="text-gold font-semibold">
                    Dan legenda itu masih berlanjut…
                </p>

            </div>

        </div>
    </section>
</template>