<template>
  <div class="min-h-screen bg-slate-50 flex">

    <!-- SIDEBAR (DESKTOP ONLY) -->
    <aside class="hidden md:block w-48 bg-white border-r border-slate-200 flex justify-center py-8">
      <NavigationBar
        :sections="sections"
        :activeSection="activeSection"
        @update:activeSection="activeSection = $event"
      />
    </aside>

    <!-- RIGHT SIDE -->
    <div class="flex-1 flex flex-col min-w-0">

      <!-- HEADER -->
      <HeaderSection :personal="portfolioData.personal">
        <!-- MOBILE MENU BUTTON -->
        <template #menu>
          <button
            class="md:hidden p-2 rounded-md hover:bg-slate-100"
            @click="sidebarOpen = true"
          >
            ☰
          </button>
        </template>
      </HeaderSection>

      <!-- MAIN CONTENT -->
      <main class="flex-1 overflow-y-auto bg-slate-50 px-2 md:px-4 py-2 md:py-2">
          <component
            :is="sectionMap[activeSection]"
            v-bind="sectionProps"
          />
      </main>

    </div>

    <!-- MOBILE SIDEBAR DRAWER_toggle -->
    <div
      v-if="sidebarOpen"
      class="fixed inset-0 z-40 md:hidden"
    >
      <!-- Overlay -->
      <div
        class="absolute inset-0 bg-black/40"
        @click="sidebarOpen = false"
      ></div>

      <!-- Drawer -->
      <aside
        class="absolute left-0 top-0 h-full w-72 bg-white shadow-xl"
      >
        <NavigationBar
          :sections="sections"
          :activeSection="activeSection"
          @update:activeSection="onSelectSection"
        />
      </aside>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import {
  User, Code, Briefcase, Award, GraduationCap, Heart, Folder
} from 'lucide-vue-next'

import HeaderSection from './components/layout/HeaderSection.vue'
import NavigationBar from './components/layout/NavigationBar.vue'

import AboutSection from './components/sections/AboutSection.vue'
import SkillsSection from './components/sections/SkillsSection.vue'
import ProjectsSection from './components/sections/ProjectsSection.vue'
import ExperienceSection from './components/sections/ExperienceSection.vue'
import PublicationsSection from './components/sections/PublicationsSection.vue'
import EducationSection from './components/sections/EducationSection.vue'
import OtherSkillsSection from './components/sections/OtherSkillsSection.vue'

import { portfolioData } from './data/portfolioData.js'

const activeSection = ref('about')
const sidebarOpen = ref(false)

const sections = [
  { id: 'about', label: 'About Me', icon: User },
  { id: 'skills', label: 'Skills', icon: Code },
  { id: 'projects', label: 'Projects', icon: Folder },
  { id: 'experiences', label: 'Experience', icon: Briefcase },
  { id: 'publications', label: 'Pubs/Certs', icon: Award },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'other', label: 'Other Skills', icon: Heart }
]

const sectionMap = {
  about: AboutSection,
  skills: SkillsSection,
  projects: ProjectsSection,
  experiences: ExperienceSection,
  publications: PublicationsSection,
  education: EducationSection,
  other: OtherSkillsSection
}

const sectionProps = computed(() => ({
  objective: portfolioData.objective,
  personal: portfolioData.personal,
  skills: portfolioData.skills,
  projects: portfolioData.projects,
  experiences: portfolioData.experiences,
  items: portfolioData.publicationsAndCerts,
  education: portfolioData.education,
  otherSkills: portfolioData.otherSkills
}))

function onSelectSection(id) {
  activeSection.value = id
  sidebarOpen.value = false
}
</script>
