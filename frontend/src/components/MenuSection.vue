<script setup>
import { useRouter, onBeforeRouteLeave } from 'vue-router'
import { menuList } from '../data/menu'

const router = useRouter()
const phone = '6289693218083'

/* =========================
   🎧 FADE OUT MUSIC
========================= */
const stopMusicWithFade = () => {
    const audio = window.__bananaGodAudio
    if (!audio) return

    const fadeInterval = setInterval(() => {
        if (audio.volume > 0.05) {
            audio.volume -= 0.05
        } else {
            audio.pause()
            audio.currentTime = 0
            window.__bananaGodAudio = null
            clearInterval(fadeInterval)
        }
    }, 50)
}

// ⛔ PASTI MATI SAAT KELUAR HALAMAN MENU
onBeforeRouteLeave(() => {
    stopMusicWithFade()
})

const goBack = () => {
    stopMusicWithFade()
    router.push('/')
}

/* =========================
   📲 WHATSAPP ORDER
========================= */
const orderText = (item) => {
    const text = `Halo BANANA GOD
Aku ingin melakukan persembahan pesanan.

Menu: ${item.name}
Harga: ${item.price}

Nama:
Jumlah:
Alamat:

Semoga dewa pisang merestui`
    return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
}
</script>

<template>
    <section class="relative min-h-screen px-6 py-20 overflow-hidden text-white">
        <!-- Background -->
        <div class="absolute inset-0 bg-cover bg-center" style="background-image: url('/images/Mesir Kuno 1.png')">
        </div>

        <!-- Overlay -->
        <div class="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/85"></div>

        <!-- Glow -->
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_70%_40%,rgba(255,180,80,0.18),transparent_60%)]">
        </div>

        <!-- CONTENT -->
        <div class="relative z-10 max-w-6xl mx-auto">

            <!-- 🔙 BACK BUTTON -->
            <div class="mb-10">
                <button @click="goBack" class="inline-flex items-center gap-2
                 px-5 py-2 rounded-full
                 border border-gold/50 text-gold
                 backdrop-blur-sm
                 transition
                 hover:bg-gold hover:text-dark
                 hover:shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                    ← Kembali ke Gerbang Dewa
                </button>
            </div>

            <!-- Title -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-extrabold text-gold mb-4">
                    Menu Kerajaan
                </h2>
                <p class="text-gray-300 max-w-xl mx-auto">
                    Tertulis dalam kitab suci pisang.
                    Dipersembahkan untuk umat yang lapar dan setia.
                </p>
            </div>

            <!-- Menu Cards -->
            <div class="grid gap-8 md:grid-cols-3">
                <div v-for="item in menuList" :key="item.id" class="group relative overflow-hidden rounded-2xl
                 border border-gold/30
                 bg-black/50 backdrop-blur-sm
                 transition
                 hover:scale-[1.03]
                 hover:border-gold
                 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]">

                    <!-- FOTO -->
                    <div class="h-48 overflow-hidden">
                        <img :src="item.image" :alt="item.name" class="w-full h-full object-cover
                     transition-transform duration-500
                     group-hover:scale-110" />
                    </div>

                    <!-- ISI -->
                    <div class="p-6">
                        <h3 class="text-2xl font-bold text-gold mb-2">
                            {{ item.name }}
                        </h3>

                        <p class="text-gray-300 text-sm mb-6 leading-relaxed">
                            {{ item.desc }}
                        </p>

                        <p class="text-xl font-extrabold mb-6">
                            {{ item.price }}
                        </p>

                        <a :href="orderText(item)" target="_blank" class="block text-center w-full
                     bg-gold text-dark
                     py-3 rounded-full
                     font-semibold tracking-wide
                     transition
                     hover:bg-yellow-400
                     hover:shadow-lg">
                            Pesan Sekarang
                        </a>
                    </div>
                </div>
            </div>

        </div>
    </section>
</template>
