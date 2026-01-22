<script setup>
import { useRouter } from 'vue-router'

defineProps({
    brand: String
})

const router = useRouter()

const playMusicAndGo = () => {
    // kalau musik belum ada, buat
    if (!window.__bananaGodAudio) {
        const audio = new Audio('/src/assets/egypt.mp3')
        audio.volume = 0.5
        audio.loop = true
        audio.play()

        window.__bananaGodAudio = audio
    }

    router.push('/menu')
}
</script>

<template>
    <section class="relative w-screen h-screen overflow-hidden">
        <!-- Background -->
        <div class="absolute inset-0 bg-no-repeat bg-cover bg-center" style="
        background-image: url('/src/assets/BANANA GOD.png');
        background-position: center 30%;
      "></div>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/60"></div>

        <!-- Content -->
        <div class="relative z-10 h-full flex items-center justify-center px-6">
            <div class="max-w-3xl text-center">
                <h1 class="text-5xl md:text-7xl font-extrabold text-gold mb-6 tracking-wide">
                    {{ brand }}
                </h1>

                <p class="text-lg md:text-xl text-gray-200 mb-10">
                    Pisang coklat yang disembah sejak zaman piramida.
                    Sekarang hadir di perutmu.
                </p>

                <div class="flex gap-4 justify-center flex-wrap">
                    <!-- BUTTON DENGAN MUSIK -->
                    <button @click="playMusicAndGo" class="bg-gold text-dark px-8 py-3 rounded-full font-semibold
                   hover:scale-105 transition">
                        Lihat Menu Dewa
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>
