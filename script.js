/* ==========================================================
   Portfólio – Data Engineer
   Idiomas (PT / ES / EN), menu, animações e formulário
   ========================================================== */

/* ---------- Traduções ---------- */
const translations = {
  pt: {
    "meta.title": "Edson Assunção | Data Engineer",
    "nav.summary": "Sobre",
    "nav.qualifications": "Competências",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",

    "hero.hello": "",
    "hero.text": "Pipelines de dados claros, estáveis e preparados para sustentar decisões estratégicas.",
    "hero.whatsapp": "Whatsapp",
    "wa.message": "Olá! Vi seu portfólio e gostaria de conversar.",

    "summary.label": "Sobre",
    "summary.title": "Quem está por trás dos projetos?",
    "summary.p1": "Atuo em projetos de orquestração de dados, pipelines, data warehouses e análise, principalmente em ambiente de nuvem.",
    "summary.p2": "Priorizo a qualidade, performance e confiabilidade em todas as soluções que desenvolvo.",
    "summary.p3": "Formação em Ciência de Dados e conhecimentos em Machine Learning, com foco profissional direcionado à atuar com dados e infraestrutura.",
    "summary.stack": "Minhas stacks",

    "qual.label": "Qualificações",
    "qual.title": "Cursos e competências",
    "qual.courses": "Cursos",
    "qual.skills": "Competências",
    "course.meta": "",
    "course1.title": "",
    "course2.title": "",
    "course3.title": "",
    "course4.title": "",
    "skill1": "Modelagem de Dados",
    "skill2": "Pipelines ETL/ELT",
    "skill3": "Data Warehouse",
    "skill4": "Orquestração de workflows",
    "skill5": "Batch & Streaming",
    "skill6": "Bancos de Dados",
    "skill7": "Computação em nuvem",
    "skill8": "Otimização de performance",
    "skill9": "Trabalho em equipe",
    "skill10": "Qualidade e Validação de Dados",
    "skills.langs": "Idiomas",
    "lang.pt": "Português 🇧🇷",
    "lang.en": "Espanhol 🇪🇸",
    "lang.es": "Inglês 🇺🇸",

    "projects.label": "Projetos",
    "projects.title": "Alguns Projetos",
    "projects.notice": "Aqui estão alguns projetos pessoais e contribuições públicas. Projetos comerciais não são apresentados por motivos de ética profissional.",
    "projects.view": "Ver os códigos",
    "proj1.desc": "Automatização desde a extração, transformação e consolidação de múltiplas planilhas Excel em um único arquivo estruturado..",
    "proj2.desc": "Base analítica em Data Warehouse para acompanhar o histórico de preços de ativos financeiros, unindo ingestão em Python, Amazon RDS e modelagem dimensional com dbt Core.",
    "proj3.desc": "Machine Learning de Regressão treinado a partir de dados reais textuais para classificar e rotear automaticamente feedbacks de clientes. ",
    "proj4.desc": "Modelagem dimensional e transformações versionadas para áreas de negócio.",
    "proj5.desc": "API para disponibilizar dados tratados com autenticação e documentação.",
    "proj6.desc": "Painéis com indicadores de negócio alimentados por pipelines automatizados.",

    "contact.label": "Contato",
    "contact.title": "Fale Comigo!",
    "contact.text": "Para assuntos profissionais, projetos e iniciativas relacionadas, utilize os canais disponíveis para contato.",
    "form.name": "Nome",
    "form.name.ph": "Seu nome",
    "form.email": "E-mail",
    "form.email.ph": "voce@exemplo.com",
    "form.message": "Mensagem",
    "form.message.ph": "Conte um pouco sobre o que você precisa",
    "form.send": "Enviar mensagem",
    "form.subject": "Orçamento para solicitação de projeto",
    "form.from": "De",

    "footer.rights": "Todos os direitos reservados. | בָּרוּךְ הַשֵּׁם",
    "footer.top": "Voltar ao topo",
    "aria.menu": "Abrir menu"
  },

  es: {
    "meta.title": "Edson Assuncao | Ingeniero de Datos",
    "nav.summary": "Sobre mí",
    "nav.qualifications": "Competencias",
    "nav.projects": "Proyectos",
    "nav.contact": "Contacto",

    "hero.hello": "",
    "hero.text": "Pipelines de datos claros, estables y preparados para respaldar decisiones estratégicas.",
    "hero.whatsapp": "Escríbeme por WhatsApp",
    "wa.message": "¡Hola! Vi tu portafolio y me gustaría conversar.",

    "summary.label": "Sobre mí",
    "summary.title": "",
    "summary.p1": "Me dedico a proyectos de orquestación de datos, pipelines, almacenes de datos (DW) y analítica, principalmente en entornos de nube.",
    "summary.p2": "Priorizo la calidad, el rendimiento y la fiabilidad en cada solución que desarrollo.",
    "summary.p3": "Tengo formación en Ciencia de Datos y conocimientos de Machine Learning, con una orientación profesional enfocada en la ingeniería de datos y la infraestructura.",
    "summary.stack": "Tecnologías",

    "qual.label": "Calificaciones",
    "qual.title": "Cursos y competencias",
    "qual.courses": "Cursos",
    "qual.skills": "Competencias",
    "course.meta": "",
    "course1.title": "Ciencia de Datos",
    "course2.title": "Introducción a la Ciencia de Datos",
    "course3.title": "AI-900: Fundamentos de IA de Microsoft Azure",
    "course4.title": "Marketing",
    "skill1": "Modelado de datos",
    "skill2": "Pipelines ETL / ELT",
    "skill3": "Data Warehouse",
    "skill4": "Orquestación de flujos de trabajo",
    "skill5": "Batch y Streaming",
    "skill6": "Bases de datos",
    "skill7": "Computación en la nube",
    "skill8": "Optimización de rendimiento",
    "skill9": "Trabajo en equipo",
    "skill10": "Calidad y validación de datos",
    "skills.langs": "Idiomas",
    "lang.pt": "Portugués 🇧🇷",
    "lang.en": "Español 🇪🇸",
    "lang.es": "Inglés 🇺🇸",

    "projects.label": "Proyectos",
    "projects.title": "Algunos trabajos",
    "projects.notice": "Aquí hay algunos proyectos personales y contribuciones públicas. Los proyectos comerciales no se presentan por motivos de ética profesional.",
    "projects.view": "Ver los códigos",
    "proj1.desc": "ETL en Python y Pandas que automatiza la lectura, transformación y consolidación de múltiples hojas de cálculo de Excel en un único archivo estructurado.",
    "proj2.desc": "Base analítica en Data Warehouse para monitorear el histórico de precios de activos financieros, integrando ingesta en Python, Amazon RDS y modelado dimensional con dbt Core.",
    "proj3.desc": "Machine Learning de Regresión entrenado a partir de datos reales en texto para clasificar y enrutar automáticamente el feedback de clientes.",
    "proj4.desc": "Modelado dimensional y transformaciones versionadas para áreas de negocio.",
    "proj5.desc": "API para exponer datos tratados con autenticación y documentación.",
    "proj6.desc": "Paneles con indicadores de negocio alimentados por pipelines automatizados.",

    "contact.label": "Contacto",
    "contact.title": "¡Hablemos!",
    "contact.text": "Para asuntos profesionales, proyectos e iniciativas relacionadas, utiliza los canales de contacto disponibles.",
    "form.name": "Nombre",
    "form.name.ph": "Tu nombre",
    "form.email": "Correo electrónico",
    "form.email.ph": "tu@ejemplo.com",
    "form.message": "Mensaje",
    "form.message.ph": "Cuéntame un poco sobre lo que necesitas",
    "form.send": "Enviar mensaje",
    "form.subject": "solicitud de proyecto",
    "form.from": "De",

    "footer.rights": "Todos los derechos reservados. | בָּרוּךְ הַשֵּׁם",
    "footer.top": "Volver arriba",
    "aria.menu": "Abrir menú"
  },

  en: {
    "meta.title": "Edson Assunção | Data Engineer",
    "nav.summary": "About",
    "nav.qualifications": "Skills",
    "nav.projects": "Projects",
    "nav.contact": "Contact",

    "hero.hello": "",
    "hero.text": "Clear, reliable data pipelines built to support strategic decisions.",
    "hero.whatsapp": "Chat on WhatsApp",
    "wa.message": "Hi! I saw your portfolio and would like to discuss a project",

    "summary.label": "About me",
    "summary.title": "",
    "summary.p1": "I work on data orchestration, pipelines, data warehouses, and analytics—primarily in cloud environments.",
    "summary.p2": "I prioritize quality, performance, and reliability across every solution I build.",
    "summary.p3": "Background in Data Science and Machine Learning, with a career focus on data and infrastructure.",
    "summary.stack": "My tech stack",

    "qual.label": "Qualifications",
    "qual.title": "Courses & skills",
    "qual.courses": "Courses",
    "qual.skills": "Skills",
    "course.meta": "",
    "course1.title": "Associate Degree in Data Science",
    "course2.title": "Introduction to Data Science",
    "course3.title": "AI-900: Microsoft Azure AI Fundamentals",
    "course4.title": "Associate Degree in Marketing",
    "skill1": "Data modeling",
    "skill2": "ETL / ELT pipelines",
    "skill3": "Data Warehousing",
    "skill4": "Workflow orchestration",
    "skill5": "Batch & streaming",
    "skill6": "Databases",
    "skill7": "Cloud Computing",
    "skill8": "Performance optimization",
    "skill9": "Collaboration",
    "skill10": "Data Quality & Validation",
    "skills.langs": "Languages",
    "lang.pt": "Portuguese 🇧🇷",
    "lang.en": "Spanish 🇪🇸",
    "lang.es": "English 🇺🇸",

    "projects.label": "Projects",
    "projects.title": "Selected Projects",
    "projects.notice": "Here are some personal projects and public contributions. Commercial projects aren't shown for reasons of professional ethics.",
    "projects.view": "Source Code",
    "proj1.desc": "Python & Pandas ETL automation to extract, clean, and merge multiple .xlsx spreadsheets into one unified file.",
    "proj2.desc": "Analytical Data Warehouse built to track historical financial asset prices, combining Python ingestion, Amazon RDS, and dimensional modeling with dbt Core.",
    "proj3.desc": "Regression Machine Learning trained on real-world text data to automatically classify and route customer feedback.",
    "proj4.desc": "",
    "proj5.desc": "",
    "proj6.desc": "",

    "contact.label": "Contact",
    "contact.title": "Get in Touch",
    "contact.text": "For professional inquiries, projects, and related initiatives, reach out through the available contact channels.",
    "form.name": "Name",
    "form.name.ph": "Your name",
    "form.email": "Email",
    "form.email.ph": "you@example.com",
    "form.message": "Message",
    "form.message.ph": "Tell me a little about what you need",
    "form.send": "Send message",
    "form.subject": "Project inquiry & estimate",
    "form.from": "From",

    "footer.rights": "All rights reserved. | בָּרוּךְ הַשֵּׁם",
    "footer.top": "Back to top",
    "aria.menu": "Open menu"
  }
};

const htmlLang = { pt: "pt-BR", es: "es", en: "en" };
const STORAGE_KEY = "portfolio-lang";
let currentLang = "pt";

/* ---------- Parte do Idioma ---------- */
function t(key) {
  return (translations[currentLang] && translations[currentLang][key]) || translations.pt[key] || "";
}

function setLang(lang) {
  if (!translations[lang]) lang = "pt";
  currentLang = lang;

  document.documentElement.lang = htmlLang[lang];
  document.title = t("meta.title");

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const value = t(el.dataset.i18n);
    if (value) el.textContent = value;
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const value = t(el.dataset.i18nPlaceholder);
    if (value) el.placeholder = value;
  });

  document.querySelectorAll(".lang__btn").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === lang));
  });

  // Link do zap com mensagem no idioma escolhido
  document.querySelectorAll("[data-wa]").forEach((a) => {
    a.href = `https://wa.me/${a.dataset.wa}?text=${encodeURIComponent(t("wa.message"))}`;
  });

  const burger = document.getElementById("burger");
  if (burger) burger.setAttribute("aria-label", t("aria.menu"));

  try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* ignora */ }
}

function detectLang() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved && translations[saved]) return saved;
  } catch (e) { /* ignora */ }
  const browser = (navigator.language || "pt").slice(0, 2).toLowerCase();
  return translations[browser] ? browser : "pt";
}

document.querySelectorAll(".lang__btn").forEach((btn) => {
  btn.addEventListener("click", () => setLang(btn.dataset.lang));
});

/* ---------- Menu para mobile ---------- */
const burger = document.getElementById("burger");
const nav = document.getElementById("nav");

function closeMenu() {
  nav.classList.remove("open");
  burger.setAttribute("aria-expanded", "false");
}

burger.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  burger.setAttribute("aria-expanded", String(open));
});

nav.querySelectorAll("a").forEach((a) => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMenu(); });

/* ---------- Header com fundo ---------- */
const header = document.getElementById("header");
function onScroll() {
  header.classList.toggle("scrolled", window.scrollY > 24);
}
window.addEventListener("scroll", onScroll, { passive: true });
onScroll();

/* ---------- Link ativo no menu ---------- */
const navLinks = document.querySelectorAll(".nav__link");
const sections = ["resumo", "qualificacoes", "projetos", "contato"]
  .map((id) => document.getElementById(id))
  .filter(Boolean);

if ("IntersectionObserver" in window) {
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          navLinks.forEach((link) => {
            link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
          });
        }
      });
    },
    { rootMargin: "-45% 0px -50% 0px" }
  );
  sections.forEach((s) => spy.observe(s));

  // Home: limpa o destaque
  const hero = document.getElementById("home");
  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) navLinks.forEach((l) => l.classList.remove("active"));
  }, { threshold: 0.6 }).observe(hero);

  /* ---------- Animação ao entrar no site ---------- */
  const reveal = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  document.querySelectorAll(".reveal").forEach((el, i) => {
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    reveal.observe(el);
  });
} else {
  document.querySelectorAll(".reveal").forEach((el) => el.classList.add("visible"));
}

/* ---------- Formulário de contato (abrira o thunder ou outro app de e-mail) ---------- */
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(form);
  const name = data.get("name");
  const email = data.get("email");
  const message = data.get("message");

  const body = `${message}\n\n${t("form.from")}: ${name} (${email})`;
  const url = `mailto:${form.dataset.email}?subject=${encodeURIComponent(t("form.subject"))}&body=${encodeURIComponent(body)}`;
  window.location.href = url;
});


document.getElementById("year").textContent = new Date().getFullYear();

/* ---------- para o Início ---------- */
setLang(detectLang());