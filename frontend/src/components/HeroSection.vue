<script setup>
import { useRouter } from 'vue-router'
import { ref } from 'vue'

defineProps({
    brand: String
})

const router = useRouter()
const isLoading = ref(false)

const playMusicAndGo = async () => {
    if (isLoading.value) return
    isLoading.value = true

    let audio = window.__bananaGodAudio

    try {
        // kalau belum ada audio global → buat baru
        if (!audio) {
            audio = new Audio('/audio/Arabian Nights.mp3')
            audio.volume = 0.5
            audio.loop = true

            await audio.play()
            window.__bananaGodAudio = audio
        }

        // kalau sudah ada tapi paused → play lagi
        else if (audio.paused) {
            await audio.play()
        }

        await router.push('/menu')
    } catch (err) {
        console.warn('Audio play gagal:', err)
        router.push('/menu')
    } finally {
        isLoading.value = false
    }
}
</script>

<template>
    <section class="relative w-screen h-screen overflow-hidden">

        <!-- Background -->
        <div class="absolute inset-0 bg-no-repeat bg-cover bg-center" style="
        background-image: url('/images/Mesir Kuno 2.png');
        background-position: center 30%;
      ">
        </div>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-black/60"></div>

        <!-- Content -->
        <div class="relative z-10 h-full flex items-center justify-center px-6">
            <div class="max-w-3xl text-center">

                <h1 class="text-5xl md:text-7xl font-extrabold text-gold mb-6 tracking-wide">
                    {{ brand }}
                </h1>

                <p class="text-lg md:text-xl text-gray-200 mb-4 leading-relaxed">
                    Sebuah persembahan pisang suci, diracik dengan resep rahasia
                    yang diwariskan turun-temurun sejak zaman piramida kuno.
                </p>

                <p class="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed">
                    Kini hadir untuk mengisi rasa manis yang lama hilang,
                    dan memuaskan jiwa yang lapar.
                </p>

                <div class="flex gap-4 justify-center flex-wrap">
                    <button @click="playMusicAndGo" :disabled="isLoading" class="bg-gold text-dark px-8 py-3 rounded-full font-semibold
                   transition
                   hover:scale-105
                   hover:shadow-[0_0_25px_rgba(212,175,55,0.6)]
                   disabled:opacity-50 disabled:cursor-not-allowed">
                        Lihat Menu Kerajaan
                    </button>
                </div>

            </div>
        </div>
    </section>
</template>
