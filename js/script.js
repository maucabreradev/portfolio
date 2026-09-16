const translations = {
  es: {
    greeting: "Hola, soy",
    title: "Mauricio Cabrera",
    subtitle: "Desarrollador Web especialista en Java & Spring Boot",
    description: "Construyo soluciones backend escalables, modernas y de alto rendimiento con el ecosistema Java empresarial.",
    viewProjects: "Ver Proyectos",
    contactMe: "Contactarme",
    aboutTitle: "Sobre mí",
    aboutDesc1: "Soy un desarrollador web apasionado por el ecosistema Java, con enfoque en Spring Boot y arquitecturas backend. Mi viaje comenzó con Java puro y hoy abarco desde consola hasta aplicaciones web empresariales con J2EE, Servlets, JSP y bases de datos relacionales.",
    aboutDesc2: "Especializado en crear soluciones robustas, escalables y mantenibles. Cada proyecto es una oportunidad para aplicar patrones de diseño, testing y buenas prácticas de ingeniería de software.",
    projectsLabel: "Proyectos",
    testsLabel: "Tests JUnit",
    techLabels: "Tecnologías principales",
    projectsTitle: "Proyectos",
    smarttaskDesc: "Gestor de tareas de consola desarrollado en Java puro para la evaluación del Módulo 4: Fundamentos de Programación.",
    springeduDesc: "Proyecto para TD Para Chile que aprovecha el ecosistema Spring Boot para crear soluciones educativas escalables.",
    untecDesc: "Sistema web dinámico con arquitectura MVC, JSP/Servlets, JDBC, MySQL, 24 tests JUnit 5 y despliegue en Tomcat 9.",
    viewRepo: "Ver repositorio →",
    caseStudyTitle: "Caso de Estudio",
    caseStudySubtitle: "Biblioteca Digital UNTEC — Un sistema de gestión bibliotecaria empresarial",
    csDescTitle: "Descripción",
    csDesc: "Sistema web para la gestión integral de catálogo, préstamos, devoluciones y usuarios de la Universidad Tecnológica UNTEC, desarrollado con Java EE y patrón MVC estricto.",
    csChallengeTitle: "Desafío Principal",
    csChallenge: "Gestionar la concurrencia de préstamos, mantener la consistencia del inventario entre múltiples roles de usuario (estudiante y administrador) y garantizar la integridad transaccional del sistema sin un framework ORM.",
    csSolutionTitle: "Solución Propuesta",
    csSolution: "Arquitectura MVC con Servlets HTTP como controladores, JSP + JSTL como motor de vistas, patrón DAO con JDBC, PreparedStatement contra inyección SQL, y transacciones manejadas con setAutoCommit(false) para garantizar la consistencia entre stock de libros y registros de préstamo.",
    csToolsTitle: "Herramientas Técnicas",
    csTools: "Java 8+, Java EE 8 (Servlet 4.0, JSP 2.3, JSTL 1.2), Apache Tomcat 9, MySQL 8.0, Eclipse Enterprise Edition, Bootstrap 5, JUnit 5 (Jupiter), scripts PowerShell para build automatizado.",
    csLearningsTitle: "Principales Aprendizajes",
    csLearnings: "Patrón Singleton para conexiones JDBC, manejo de sesiones HTTP con HttpSession, implementación de AuthFilter para seguridad de rutas, gestión de estados con control de caché, y el valor de una capa DAO bien definida para mantener la separación de responsabilidades.",
    csMetricsTitle: "Métricas de Impacto",
    csMetrics: "24 pruebas unitarias y de integración con 100% de aprobación en JUnit 5. Cero vulnerabilidades SQL mediante PreparedStatement. Soporte para 2 roles de usuario con acceso diferenciado. Generación automatizada de archivo .WAR. Tiempo de despliegue reducido mediante scripts build.",
    csSkillsTitle: "Habilidades Técnicas Aplicadas",
    csSkills: "Java EE 8, Servlets, JSP, JSTL, JDBC, MySQL, Patrón MVC, Singleton, AuthFilter, JUnit 5, Bootstrap 5, HTML5/CSS3, scripting PowerShell, estructura de proyectos Enterprise.",
    csWhyTitle: "¿Por qué este proyecto?",
    csWhy: "Demuestra dominio completo del ecosistema Java web empresarial más allá de Spring Boot. Complementa mi perfil mostrando que puedo trabajar con la pila completa de Java EE: desde Servlets y JSP hasta JDBC, seguridad y testing, lo cual es fundamental para entender la base sobre la que se construye Spring.",
    skillsTitle: "Habilidades",
    contactTitle: "Contacto",
    contactSubtitle: "¿Tienes un proyecto en mente? Hablemos.",
    footer: "© 2026 Mauricio Cabrera. Todos los derechos reservados."
  },
  en: {
    greeting: "Hello, I'm",
    title: "Mauricio Cabrera",
    subtitle: "Web Developer specialized in Java & Spring Boot",
    description: "I build scalable, modern, and high-performance backend solutions with the Java enterprise ecosystem.",
    viewProjects: "View Projects",
    contactMe: "Contact Me",
    aboutTitle: "About me",
    aboutDesc1: "I'm a web developer passionate about the Java ecosystem, with a focus on Spring Boot and backend architectures. My journey started with pure Java and today I cover everything from console to enterprise web applications with J2EE, Servlets, JSP, and relational databases.",
    aboutDesc2: "Specialized in creating robust, scalable, and maintainable solutions. Every project is an opportunity to apply design patterns, testing, and best engineering practices.",
    projectsLabel: "Projects",
    testsLabel: "JUnit Tests",
    techLabels: "Main Technologies",
    projectsTitle: "Projects",
    smarttaskDesc: "Console task manager developed in pure Java for Module 4 evaluation: Programming Fundamentals.",
    springeduDesc: "Project for TD Para Chile leveraging the Spring Boot ecosystem to create scalable educational solutions.",
    untecDesc: "Dynamic web system with MVC architecture, JSP/Servlets, JDBC, MySQL, 24 JUnit 5 tests, and deployment on Tomcat 9.",
    viewRepo: "View repository →",
    caseStudyTitle: "Case Study",
    caseStudySubtitle: "UNTEC Digital Library — An enterprise library management system",
    csDescTitle: "Description",
    csDesc: "Web system for the comprehensive management of catalog, loans, returns, and users of Universidad Tecnológica UNTEC, developed with Java EE and strict MVC pattern.",
    csChallengeTitle: "Main Challenge",
    csChallenge: "Managing loan concurrency, maintaining inventory consistency across multiple user roles (student and admin), and ensuring transactional integrity without an ORM framework.",
    csSolutionTitle: "Proposed Solution",
    csSolution: "MVC architecture with HTTP Servlets as controllers, JSP + JSTL as view engine, DAO pattern with JDBC, PreparedStatement against SQL injection, and transactions managed with setAutoCommit(false) to ensure consistency between book stock and loan records.",
    csToolsTitle: "Technical Tools",
    csTools: "Java 8+, Java EE 8 (Servlet 4.0, JSP 2.3, JSTL 1.2), Apache Tomcat 9, MySQL 8.0, Eclipse Enterprise Edition, Bootstrap 5, JUnit 5 (Jupiter), PowerShell scripts for automated build.",
    csLearningsTitle: "Key Learnings",
    csLearnings: "Singleton pattern for JDBC connections, HTTP session management with HttpSession, AuthFilter implementation for route security, state management with cache control, and the value of a well-defined DAO layer for maintaining separation of concerns.",
    csMetricsTitle: "Impact Metrics",
    csMetrics: "24 unit and integration tests with 100% approval in JUnit 5. Zero SQL vulnerabilities through PreparedStatement. Support for 2 user roles with differentiated access. Automated .WAR generation. Reduced deployment time via build scripts.",
    csSkillsTitle: "Technical Skills Applied",
    csSkills: "Java EE 8, Servlets, JSP, JSTL, JDBC, MySQL, MVC Pattern, Singleton, AuthFilter, JUnit 5, Bootstrap 5, HTML5/CSS3, PowerShell scripting, Enterprise project structure.",
    csWhyTitle: "Why this project?",
    csWhy: "Demonstrates complete mastery of the Java enterprise web ecosystem beyond Spring Boot. Complements my profile by showing I can work with the full Java EE stack: from Servlets and JSP to JDBC, security, and testing, which is fundamental to understanding the base on which Spring is built.",
    skillsTitle: "Skills",
    contactTitle: "Contact",
    contactSubtitle: "Have a project in mind? Let's talk.",
    footer: "© 2026 Mauricio Cabrera. All rights reserved."
  }
};

let currentLang = localStorage.getItem('lang') || 'es';
let currentTheme = localStorage.getItem('theme') || 'dark';

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  currentTheme = theme;
  localStorage.setItem('theme', theme);
  document.getElementById('themeIcon').textContent = theme === 'dark' ? '☀️' : '🌙';
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.getElementById('langLabel').textContent = lang.toUpperCase();
  const keys = Object.keys(translations[lang]);
  keys.forEach(key => {
    const el = document.querySelector(`[data-i18n="${key}"]`);
    if (el) el.textContent = translations[lang][key];
  });
}

function init() {
  applyTheme(currentTheme);
  applyLang(currentLang);

  const navbar = document.getElementById('navbar');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('navbar--scrolled');
    } else {
      navbar.classList.remove('navbar--scrolled');
    }

    const sections = document.querySelectorAll('.section');
    const navLinks = document.querySelectorAll('.navbar__link');
    let current = '';
    sections.forEach(section => {
      const top = section.offsetTop - 120;
      if (window.scrollY >= top) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('navbar__link--active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('navbar__link--active');
      }
    });
  });

  document.getElementById('themeToggle').addEventListener('click', () => {
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });

  document.getElementById('langToggle').addEventListener('click', () => {
    const newLang = currentLang === 'es' ? 'en' : 'es';
    applyLang(newLang);
  });

  const hamburger = document.getElementById('hamburger');
  const navMenu = document.getElementById('navMenu');

  hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('open');
  });

  document.querySelectorAll('.navbar__link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('open');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.project-card, .stat, .skill, .case-study__point, .contact__item').forEach(el => {
    el.classList.add('reveal');
    observer.observe(el);
  });
}

document.addEventListener('DOMContentLoaded', init);
