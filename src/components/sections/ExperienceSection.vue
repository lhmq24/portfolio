<template>
  <section class="animate-fadeIn flex flex-col items-center justify-center">
    <h2 class="text-3xl font-bold text-slate-800 mb-6">
      Experiences
    </h2>
    <div class="h-1 w-20 bg-blue-600 rounded my-6"></div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-4 md:mb-8 pt-4 md:pt-8">
      <div 
        v-for="(experience, index) in experiences" 
        :key="index" 
        class="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
      >
        <div class="p-6 h-full flex flex-col md:gap-4 sm:gap-2">
          <div class=" flex flex-row items-start gap-2">
            <h3 class="text-xl font-bold text-slate-800 mb-3">
              {{ experience.company }}
            </h3>

            <PinIcon
              class="hidden md:block text-green-600 fill-green-600 max-w-10 max-h-10 min-w-10 min-h-5 min-w-5"
            />
          </div>

          <p class="text-slate-600 mb-4">
            {{ experience.title }}
          </p> 

          <span class="text-sm text-slate-500 mb-4">
            {{ experience.period }} | {{ experience.location }}
          </span>


          <div class="flex flex-wrap gap-2 mb-4">
            <span 
              v-for="(tech, idx) in experience.technologies" 
              :key="idx"
              class="px-3 py-1 bg-slate-100 text-slate-700 rounded text-xs font-medium"
            >
              {{ tech }}
            </span>
          </div>

          <ul class="space-y-2 mb-4">
            <li 
              v-for="(highlight, idx) in experience.highlights" 
              :key="idx" 
              class="text-sm text-slate-600 flex items-start gap-2"
            >
              <span class="text-blue-600 mt-1">•</span>
              {{ highlight }}
            </li>
          </ul>

          <!-- pushed to bottom -->
          <div v-if="experience.link" class="mt-auto flex justify-end items-start">
            <a 
              :href="experience.link"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex gap-2 text-blue-600 hover:text-blue-700 font-medium"
            >
              View Project →
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>

  import { PinIcon } from 'lucide-vue-next';

defineProps({
  experiences: {
    type: Array,
    required: true
  }
})
</script>