<script setup>
import { menuList } from '../data/menu'

const phone = '6289693218083'

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
        <div class="absolute inset-0 bg-cover bg-center"
            style="background-image: url('/images/BOOK OF BANANA.png')"></div>

        <!-- Overlay utama (lebih terang tapi aman) -->
        <div class="absolute inset-0
             bg-gradient-to-b
             from-black/35
             via-black/50
             to-black/80"></div>

        <!-- Glow lilin (cinematic) -->
        <div class="absolute inset-0
             bg-[radial-gradient(circle_at_70%_40%,rgba(255,180,80,0.18),transparent_60%)]"></div>

        <!-- CONTENT -->
        <div class="relative z-10 max-w-6xl mx-auto">
            <!-- Title -->
            <div class="text-center mb-16">
                <h2 class="text-4xl md:text-5xl font-extrabold text-gold tracking-wide mb-4">
                    Menu Kerajaan
                </h2>
                <p class="text-gray-300 max-w-xl mx-auto">
                    Tertulis dalam kitab suci pisang.
                    Dipersembahkan untuk umat yang lapar dan setia.
                </p>
            </div>

            <!-- Menu Cards -->
            <div class="grid gap-8 md:grid-cols-3">
                <div v-for="item in menuList" :key="item.id" class="group relative rounded-2xl border border-gold/30
                 bg-black/50 backdrop-blur-sm
                 p-6 transition
                 hover:scale-[1.03]
                 hover:border-gold
                 hover:shadow-[0_0_40px_rgba(212,175,55,0.25)]">
                    <!-- Name -->
                    <h3 class="text-2xl font-bold text-gold mb-2">
                        {{ item.name }}
                    </h3>

                    <!-- Desc -->
                    <p class="text-gray-300 text-sm mb-6 leading-relaxed">
                        {{ item.desc }}
                    </p>

                    <!-- Price -->
                    <p class="text-xl font-extrabold mb-6">
                        {{ item.price }}
                    </p>

                    <!-- CTA -->
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
    </section>
</template>
