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

      <!-- Diplomas Cards -->
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

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>Formations</h4>
      </div>

      <!-- Formations Cards -->
      <EducationCard
        v-for="(formation, index) in formations"
        :key="index"
        :year="formation.year"
        :title="formation.title"
        :entity="formation.entity"
        :location="formation.location"
        :descriptionTitle="formation.descriptionTitle"
        :descriptions="formation.descriptions"
      />

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>Expériences Personnelles</h4>
      </div>

      <!-- Personal Experiences Cards -->
      <ExperienceCard
        v-for="(personalExperience, index) in personalExperiences"
        :key="index"
        :year="personalExperience.year"
        :title="personalExperience.title"
        :entity="personalExperience.entity"
        :location="personalExperience.location"
        :detailTitle="personalExperience.detailTitle"
        :details="personalExperience.details"
        :descriptionTitle="personalExperience.descriptionTitle"
        :descriptions="personalExperience.descriptions"
      />

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>Compétences</h4>
      </div>

      <!-- Skills Cards -->
      <SkillCard
        :skills="skills"
      />

      <!-- Section for Title -->
      <div class="title-container">
        <div class="decorative-element"></div>
        <h4>Qualités</h4>
      </div>

      <!-- Qualities Cards -->
      <SkillCard
        :skills="qualities"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import ExperienceCard from '../components/ExperienceCard.vue'
import EducationCard from '../components/EducationCard.vue'
import SkillCard from '../components/SkillCard.vue'

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

const formations = [
  {
    year: 'Juin 2019',
    title: 'Certificat de Qualification Pyrotechnique F4T2',
    entity: 'Association Nationale Europeenne Instruction Pyrotechnique',
    location: 'Caudry, France',
    descriptionTitle: 'Descriptions',
    descriptions: [
      'Formation intensive sur les protocoles et les procédures de sécurité en pyrotechnie, assurant une mise en œuvre sans risque des feux d\'artifice',
      'Apprentissage approfondi des techniques de manipulation et de gestion des explosifs, assurant une expertise dans le domaine pyrotechnique',
      'Préparation complète pour la planification et l\'exécution de spectacles pyrotechniques spectaculaires, garantissant une expérience immersive et sécurisée pour le public'
    ]
  },
  {
    year: 'Février 2018 - Mai 2019',
    title: 'Brevet d\'Aptitude aux Fonctions d\'Animateur',
    entity: 'Éclaireuses Éclaireurs de France',
    location: 'Haut de France, France',
    descriptionTitle: 'Descriptions',
    descriptions: [
      'Formation pratique et théorique pour développer des techniques d\'animation adaptées à différents publics',
      'Apprentissage des bases légales et des responsabilités liées à l\'encadrement de groupes de jeunes',
      'Réalisation et mise en pratique de projets d\'animation favorisant la créativité et l\'interaction sociale'
    ]
  }
]

const personalExperiences = [
  {
    year: '2006 - Aujourd\'hui',
    title: 'Adhérent - Animateur',
    entity: 'Eclaireuses et Eclaireurs de France',
    location: 'Villeneuve d\'Ascq, France',
    detailTitle: 'Compétences',
    details: [
      'Gestion de projet',
      'Animation',
      'Formation'
    ],
    descriptionTitle: 'Missions',
    descriptions: [
      'Organisation et animation de réunions hebdomadaires pour les jeunes membres',
      'Planification et organisation de week-ends et camps de formation en plein air',
      'Formateur pour les jeunes sur divers sujets liés au scoutisme et à la vie en plein air',
      'Participation à des formations continues pour améliorer les compétences d\'animation et de leadership'
    ]
  },
  {
    year: 'Août 2018 - Décembre 2021',
    title: 'Animateur',
    entity: 'Mairie',
    location: 'Villeneuve d\'Ascq, France',
    detailTitle: 'Compétences',
    details: [
      'Gestion de groupe',
      'Gestion du stress',
      'Volontariat'
    ],
    descriptionTitle: 'Missions',
    descriptions: [
      'Encadrement quotidien et activités récréatives pour les enfants de la ville',
      'Planification et organisation d\'activités éducatives et récréatives',
      'Résolution de conflits entre les enfants et gestion des problèmes d\'urgence',
      'Participation à des événements communautaires et projets de volontariat'
    ]
  }
]

const skills = [
  {
    title: 'Langages de programmation',
    description: 'C#, VB.NET, JavaScript, TypeScript, SQL, Java, Script Shell, Batch'
  },
  {
    title: 'Technologies Web',
    description: 'ASP.NET Core, ASP.NET MVC, ASP.NET Web API, Blazor, HTML, CSS, Bootstrap, React, Vue.js'
  },
  {
    title: 'Outil de gestion de versions',
    description: 'Git, GitHub, GitLab'
  },
  {
    title: 'Environnement de développement',
    description: 'Visual Studio, Visual Studio Code, SQL Server Management Studio, Postman, Rider, IntelliJ IDEA'
  },
  {
    title: 'Outils de gestion de projet',
    description: 'Azure DevOps, Trello'
  }
]

const qualities = [
  {
    title: 'Professionnelles',
    description: 'Rigueur, Motivation, Capacité d’adaptation'
  },
  {
    title: 'Humaines',
    description: 'Capacité d’écoute, Volontaire, Conciliant'
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
