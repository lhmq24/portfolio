<template>
  <section class="animate-fadeIn flex flex-col items-center justify-center">
    <h2 class="text-3xl font-bold text-slate-800 mb-6 text-center">
      Publications & Certifications
    </h2>

    <div class="h-1 w-20 bg-blue-600 rounded my-6"></div>

    <!-- 2 columns -->
    <div class="grid md:grid-cols-2 gap-8 w-full pt-8">
      
      <!-- Certifications -->
      <div class="bg-white rounded-lg shadow p-6 flex flex-col justify-center md:gap-4 sm:gap-2">
        <h3 class="text-xl font-semibold text-slate-800 mb-4">
          Certifications
        </h3>

        <div class="space-y-4">
          <div 
            v-for="(item, index) in certifications" 
            :key="index"
            class="border-l-4 border-green-500 pl-4 py-2"
          >
            <h4 class="font-medium text-slate-800">
              {{ item.title }}
            </h4>
            <p class="text-sm text-slate-600">
              {{ item.issuer }}
            </p>
            <span class="text-xs text-slate-500">
              {{ item.date }}
            </span>
          </div>
        </div>
      </div>

      <!-- Publications -->
      <div class="bg-white rounded-lg shadow p-6 flex flex-col md:gap-4 sm:gap-2">
        <h3 class="text-xl font-semibold text-slate-800 mb-4">
          Publications
        </h3>

        <div class="space-y-4">
          <div 
            v-for="(item, index) in publications" 
            :key="index"
            class="border-l-4 border-purple-500 pl-4 py-2"
          >
            <h4 class="font-medium text-slate-800">
              {{ item.title }}
            </h4>
            <p class="text-sm text-slate-600">
              {{ item.publisher }}
            </p>
            <span class="text-xs text-slate-500">
              {{ item.date }}
            </span>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  items: {
    type: Array,
    required: true
  }
})

const certifications = computed(() =>
  props.items.filter(item => item.type === 'certification')
)

const publications = computed(() =>
  props.items.filter(item => item.type === 'publication')
)
</script>