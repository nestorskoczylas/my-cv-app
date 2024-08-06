<template>
  <div class="cv-page">
    <div class="cv-background">
      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>Expériences Professionnelles</h4>
      </div>

      <!-- Experience Cards -->
      <ExperienceCard
      v-for="(experience, index) in experiences"
      :key="index"
      :year="experience.year"
      :title="experience.title"
      :entity="experience.entity"
      :location="experience.location"
      :detailTitle="experience.detailTitle"
      :details="experience.details"
      :descriptionTitle="experience.descriptionTitle"
      :descriptions="experience.descriptions"
      />

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>Diplômes</h4>
      </div>

      <!-- Education Cards -->
      <EducationCard
        v-for="(education, index) in educations"
        :key="index"
        :year="education.year"
        :title="education.title"
        :entity="education.entity"
        :location="education.location"
        :descriptionTitle="education.descriptionTitle"
        :descriptions="education.descriptions"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ExperienceCard from '../components/ExperienceCard.vue'
import EducationCard from '../components/EducationCard.vue'

const experiences = [
  {
    year: 'Septembre 2022 - 2024',
    title: 'Développeur FullStack - Alternance',
    entity: 'Opalean',
    location: 'Lille, France',
    detailTitle: 'Compétences',
    details: [
      'C#',
      'VB.NET',
      'SQL Server',
      'Vue.js'
    ],
    descriptionTitle: 'Missions',
    descriptions: [
      'Développement d’une application CRM pour la gestion des profils clients (C#)',
      'Ajout de nouvelles routes à une API existante (VB.Net)',
      'Création d’un prototype de drag-and-drop pour les fichiers CSV et XLS (Vue2.js)',
      'Migration d’une API existante de VB.Net à C#'
    ]
  },
  {
    year: 'Avril - Juillet 2022',
    title: 'Développeur Web - Stage',
    entity: 'Vallourec Tubes France',
    location: 'Aulnoye-Aymeries, France',
    detailTitle: 'Compétences',
    details: [
      'React',
      'TypeScript',
      'Cypress',
      'Méthodologie Agile Scrum'
    ],
    descriptionTitle: 'Missions',
    descriptions: [
      'Développement d\'une application web basée sur React',
      'Refonte du design et de l\'interface utilisateur d\'un CRM de gestion d\'inventaire',
      'Participation aux rituels Agile de l\'équipe de développement',
      'Contribution à l\'analyse technique de la solution',
      'Rédaction de tests fonctionnels et unitaires'
    ]
  },
  {
    year: '2022 - Aujourd\'hui',
    title: 'Pyrotechnicien',
    entity: 'Wagnon Artifices',
    location: 'Haut de France, France',
    detailTitle: 'Compétences',
    details: [
      'Rigueur',
      'Autonomie',
      'Respect des consignes de sécurité',
      'Créativité'
    ],
    descriptionTitle: 'Missions',
    descriptions: [
      'Préparation, installation et manipulation des feux d\'artifices en veillant à la sécurité du public et du personnel',
      'Prise en charge individuelle de tâches spécifiques liées à la mise en place et au déclenchement des feux d\'artifices',
      'Application stricte des procédures de sécurité et des réglementations en vigueur lors de la manipulation des feux d\'artifices'
    ]
  }
]

const educations = [
  {
    year: 'Septembre 2022 - 2024',
    title: 'Master Informatique Mention E-Services',
    entity: 'Université de Lille',
    location: 'Lille, France',
    descriptionTitle: 'Descriptions',
    descriptions: [
      'Concentration sur la conception et le développement de services numériques accessibles via divers moyens de communication numérique',
      'Compétences opérationnelles en conception de services numériques, interfaces homme-machine, gestion de projets et design applicatif',
      'Projet Platine : Développement de projets complets allant de la conception à la réalisation et à la promotion, en mettant l\'accent sur les aspects utilisateurs, usages, IHM, UX, et l\'innovation technologique'
    ]
  },
  {
    year: 'Septembre 2019 - 2022',
    title: 'Licence Informatique',
    entity: 'Université de Lille',
    location: 'Lille, France',
    descriptionTitle: 'Descriptions',
    descriptions: [
      'Formation complète en informatique avec un enseignement théorique et appliqué',
      'Développement de compétences professionnelles avancées et transversales',
      'Préparation efficace pour des masters spécialisés et insertion professionnelle dans divers secteurs'
    ]
  }
]
</script>

<style scoped lang="scss">
.cv-page {
  background-color: $dark-beige;
  padding: 1.25rem;
  min-height: 100vh;
}

.cv-background {
  max-width: 800px;
  margin: 0 auto;
}

/* Title and Decorative Element */
.title-container {
  display: flex;
  align-items: center;
}

.title-container h4 {
  font-weight: bold;
}

.decorative-element {
  width: 15px;
  height: 15px;
  background-color: blue;
  margin-right: 15px;
}
</style>
