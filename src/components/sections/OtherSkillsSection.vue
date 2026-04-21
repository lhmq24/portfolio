<template>
  <section class="animate-fadeIn flex flex-col w-full">
    <!-- Title -->
    <div class="flex flex-col items-center mb-6">
      <h2 class="text-3xl font-bold text-slate-800">
        Other Skills
      </h2>
      <div class="h-1 w-20 bg-blue-600 rounded mt-4"></div>
    </div>

    <!-- Cards -->
    <div class="grid md:grid-cols-3 gap-3 w-full pt-10">
      
      <!-- Languages -->
      <div class="border border-slate-200 rounded-lg p-3">
        <h3 class="text-xl font-semibold text-slate-700 pb-4 text-center">Languages</h3>
        <ul class="space-y-2">
          <li
            v-for="(lang, idx) in otherSkills.languages"
            :key="idx"
            class="flex items-start gap-2 w-full bg-white border-l-4 border-blue-600 pl-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <span class="text-blue-600 mt-1">•</span>
            {{ lang }}
          </li>
        </ul>
      </div>

      <!-- Soft Skills -->
      <div class="border border-slate-200 rounded-lg p-3">
        <h3 class="text-xl font-semibold text-slate-700 pb-4 text-center">Soft Skills</h3>
        <ul class="space-y-2">
          <li
            v-for="(skill, idx) in otherSkills.soft"
            :key="idx"
            class="flex items-start gap-2 w-full bg-white border-l-4 border-blue-600 pl-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <span class="text-blue-600 mt-1">•</span>
            {{ skill }}
          </li>
        </ul>
      </div>

      <!-- Interests -->
      <div class="border border-slate-200 rounded-lg p-3">
        <h3 class="text-xl font-semibold text-slate-700 pb-4 text-center">Interests</h3>
        <ul class="space-y-2">
          <li
            v-for="(interest, idx) in otherSkills.interests"
            :key="idx"
            class="flex items-start gap-2 w-full bg-white border-l-4 border-blue-600 pl-4 py-3 text-slate-600 hover:bg-slate-50 transition-colors"
          >
            <span class="text-blue-600 mt-1">•</span>
            {{ interest }}
          </li>
        </ul>
      </div>

    </div>
  </section>
</template>


<script setup>

defineProps({
  otherSkills: {
    type: Object,
    required: true
  }
})
</script>