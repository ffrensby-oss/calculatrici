(async function () {
  "use strict";

  /* =========================================================
     1) TASAS — Valores predeterminados (Fallback)
     =========================================================
     Si la API falla, se usarán estos valores para evitar que la app se rompa.
  */
  var DEFAULT_RATES = {
    USD: 680.00,
    EUR: 790.00,
    updatedAt: new Date().toISOString(),
    source: "eltoque"
  };

  var rates = Object.assign({}, DEFAULT_RATES);
  var OFFICIAL_RATES = { USD: 120.00, EUR: 130.00 }; // Tasa oficial fija para la brecha

  var THEME_KEY = "fc_theme";
  var LANG_KEY = "fc_lang";
  var activeCurrency = "USD";

  /* =========================================================
     2) OBTENCIÓN AUTOMÁTICA DE DATOS (API GitHub)
     ========================================================= */
  try {
    const res = await fetch("https://raw.githubusercontent.com/ffrensby-oss/prices/main/response.json");
    if (res.ok) {
      const data = await res.json();
      
      // Asignamos los valores directamente del JSON de GitHub
      rates.USD = data.USD || DEFAULT_RATES.USD;
      rates.EUR = data.ECU || DEFAULT_RATES.EUR; // Nota: Tu JSON usa "ECU" para el Euro
      rates.updatedAt = new Date().toISOString();
      rates.source = "eltoque";
    }
  } catch (e) {
    console.error("No se pudieron cargar las tasas en vivo, usando valores de respaldo:", e);
  }

  var LOCALE_MAP = { es: "es-ES", en: "en-US", it: "it-IT", fr: "fr-FR", pt: "pt-PT", de: "de-DE" };
  function fmtNumber(n, lang) {
    return Number(n).toLocaleString(LOCALE_MAP[lang] || "es-ES", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }
  function fmtDate(iso, lang) {
    try {
      return new Date(iso).toLocaleString(LOCALE_MAP[lang] || "es-ES", { day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit" });
    } catch (e) { return iso; }
  }

  /* =========================================================
     3) Conversión
     ========================================================= */
  var elForeign = document.getElementById("amountForeign");
  var elCUP = document.getElementById("amountCUP");
  var elCurForeign = document.getElementById("curForeign");
  var tabUSD = document.getElementById("tabUSD");
  var tabEUR = document.getElementById("tabEUR");

  function currentRate() { return rates[activeCurrency]; }

  function recomputeFromForeign() {
    if (!elForeign || !elCUP) return;
    var v = parseFloat(elForeign.value);
    if (isNaN(v)) v = 0;
    elCUP.value = (v * currentRate()).toFixed(2);
  }
  function recomputeFromCUP() {
    if (!elForeign || !elCUP) return;
    var v = parseFloat(elCUP.value);
    if (isNaN(v)) v = 0;
    elForeign.value = (v / currentRate()).toFixed(2);
  }

  if (elForeign) elForeign.addEventListener("input", recomputeFromForeign);
  if (elCUP) elCUP.addEventListener("input", recomputeFromCUP);

  function setActiveCurrency(code) {
    activeCurrency = code;
    if (elCurForeign) elCurForeign.textContent = code;
    if (tabUSD) tabUSD.setAttribute("aria-selected", code === "USD" ? "true" : "false");
    if (tabEUR) tabEUR.setAttribute("aria-selected", code === "EUR" ? "true" : "false");
    recomputeFromForeign();
    updateTicker();
    updateGapWidget();
  }
  if (tabUSD) tabUSD.addEventListener("click", function () { setActiveCurrency("USD"); });
  if (tabEUR) tabEUR.addEventListener("click", function () { setActiveCurrency("EUR"); });

  /* =========================================================
     4) Ticker de tasa
     ========================================================= */
  var rateValueEl = document.getElementById("rateValue");
  var rateBadgeEl = document.getElementById("rateBadge");
  var updatedAtTextEl = document.getElementById("updatedAtText");

  function updateTicker() {
    var lang = currentLang;
    if (rateValueEl) rateValueEl.textContent = "1 " + activeCurrency + " = " + fmtNumber(currentRate(), lang) + " CUP";
    if (rateBadgeEl) {
      rateBadgeEl.className = "badge";
      rateBadgeEl.innerHTML = '<span>' + I18N[lang].source_prefix + ': ' + I18N[lang].source_name + '</span>';
    }
    if (updatedAtTextEl) updatedAtTextEl.textContent = "· " + I18N[lang].updated_prefix + ": " + fmtDate(rates.updatedAt, lang);
  }

  /* =========================================================
     5) Brecha cambiaria
     ========================================================= */
  var gapOfficialBar = document.getElementById("gapOfficialBar");
  var gapInformalBar = document.getElementById("gapInformalBar");
  var gapOfficialValue = document.getElementById("gapOfficialValue");
  var gapInformalValue = document.getElementById("gapInformalValue");
  var gapStat = document.getElementById("gapStat");

  function updateGapWidget() {
    var lang = currentLang;
    var official = OFFICIAL_RATES[activeCurrency];
    var informal = currentRate();
    var max = Math.max(official, informal);
    if (gapOfficialBar) gapOfficialBar.style.width = (official / max * 100).toFixed(1) + "%";
    if (gapInformalBar) gapInformalBar.style.width = (informal / max * 100).toFixed(1) + "%";
    if (gapOfficialValue) gapOfficialValue.textContent = fmtNumber(official, lang);
    if (gapInformalValue) gapInformalValue.textContent = fmtNumber(informal, lang);
    var pct = Math.round(((informal - official) / official) * 100);
    if (gapStat) gapStat.innerHTML = I18N[lang].gap_stat_template.replace("{percent}", "<strong>" + pct + "</strong>");
  }

  /* =========================================================
     6) Tema oscuro / claro
     ========================================================= */
  var themeToggle = document.getElementById("themeToggle");
  var themeIcon = document.getElementById("themeIcon");
  var themeLabel = document.getElementById("themeLabel");

  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    if (themeToggle) themeToggle.setAttribute("aria-pressed", theme === "light" ? "true" : "false");
    if (themeIcon) themeIcon.textContent = theme === "dark" ? "☀" : "☾";
    if (themeLabel) {
      themeLabel.setAttribute("data-i18n", theme === "dark" ? "theme_label_light" : "theme_label_dark");
      themeLabel.textContent = I18N[currentLang][theme === "dark" ? "theme_label_light" : "theme_label_dark"];
    }
    try { localStorage.setItem(THEME_KEY, theme); } catch (e) { }
  }
  if (themeToggle) {
    themeToggle.addEventListener("click", function () {
      var current = document.documentElement.getAttribute("data-theme");
      applyTheme(current === "dark" ? "light" : "dark");
    });
  }

  /* =========================================================
     7) Internacionalización (i18n)
     ========================================================= */
  var I18N = {
    es: { source_prefix: "Fuente", source_name: "El Toque (TRMI)", updated_prefix: "Actualizado", gap_stat_template: "El mercado informal paga un {percent}% más que la tasa oficial", theme_label_dark: "Modo oscuro", theme_label_light: "Modo claro" },
    en: { source_prefix: "Source", source_name: "El Toque (TRMI)", updated_prefix: "Updated", gap_stat_template: "The informal market pays {percent}% more than the official rate", theme_label_dark: "Dark mode", theme_label_light: "Light mode" },
    it: { source_prefix: "Fonte", source_name: "El Toque (TRMI)", updated_prefix: "Aggiornato", gap_stat_template: "Il mercato informale paga il {percent}% in più rispetto al tasso ufficiale", theme_label_dark: "Modalità scura", theme_label_light: "Modalità chiara" },
    fr: { source_prefix: "Source", source_name: "El Toque (TRMI)", updated_prefix: "Mis à jour", gap_stat_template: "Le marché informel paie {percent}% de plus que le taux officiel", theme_label_dark: "Mode sombre", theme_label_light: "Mode clair" },
    pt: { source_prefix: "Fonte", source_name: "El Toque (TRMI)", updated_prefix: "Atualizado", gap_stat_template: "O mercado informal paga {percent}% a mais que a taxa oficial", theme_label_dark: "Modo escuro", theme_label_light: "Modo claro" },
    de: { source_prefix: "Quelle", source_name: "El Toque (TRMI)", updated_prefix: "Aktualisiert", gap_stat_template: "Der informelle Markt zahlt {percent}% mehr als der offizielle Kurs", theme_label_dark: "Dunkelmodus", theme_label_light: "Hellmodus" }
  };

  var SPANISH_CACHE = {}; 
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    SPANISH_CACHE[el.getAttribute("data-i18n")] = el.tagName === "SELECT" ? null : el.innerHTML;
  });

  var currentLang = "es";

  function applyLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (lang === "es") {
        if (SPANISH_CACHE[key] != null) el.innerHTML = SPANISH_CACHE[key];
      } else if (I18N[lang] && I18N[lang][key] != null) {
        el.innerHTML = I18N[lang][key];
      }
    });

    if (themeLabel) {
      var theme = document.documentElement.getAttribute("data-theme");
      themeLabel.textContent = I18N[lang][theme === "dark" ? "theme_label_light" : "theme_label_dark"];
    }

    updateTicker();
    updateGapWidget();
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) { }
  }

  var langSelect = document.getElementById("langSelect");
  if (langSelect) {
    langSelect.addEventListener("change", function () { applyLanguage(this.value); });
  }

  /* =========================================================
     8) Arranque e Inicialización
     ========================================================= */
  (function init() {
    var savedTheme = null;
    try { savedTheme = localStorage.getItem(THEME_KEY); } catch (e) { }
    if (!savedTheme) {
      savedTheme = (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) ? "light" : "dark";
    }
    applyTheme(savedTheme);

    var savedLang = null;
    try { savedLang = localStorage.getItem(LANG_KEY); } catch (e) { }
    if (savedLang && I18N[savedLang]) {
      if (langSelect) langSelect.value = savedLang;
      applyLanguage(savedLang);
    } else {
      updateTicker();
      updateGapWidget();
    }

    recomputeFromForeign();
  })();

})();