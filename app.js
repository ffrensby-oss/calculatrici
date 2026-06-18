const tabs = document.querySelectorAll(".tool-tab");
const forms = document.querySelectorAll(".form-card");
const toolTitle = document.querySelector("#tool-title");
const toolKicker = document.querySelector("#tool-kicker");
const primaryLabel = document.querySelector("#primary-label");
const primaryResult = document.querySelector("#primary-result");
const resultList = document.querySelector("#result-list");
const meter = document.querySelector(".meter");
const meterLabel = document.querySelector("#meter-label");
const meterValue = document.querySelector("#meter-value");
const themeToggle = document.querySelector("#theme-toggle");
const themeLabel = document.querySelector("#theme-label");
const languageSelect = document.querySelector("#language-select");
const languageLabel = document.querySelector("#language-label");
const themeMeta = document.querySelector('meta[name="theme-color"]');
const descriptionMeta = document.querySelector('meta[name="description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');
const ogLocale = document.querySelector('meta[property="og:locale"]');

const translations = {
  es: {
    locale: "es-US",
    htmlLang: "es",
    ogLocale: "es_ES",
    title: "Calculadora de interés compuesto, préstamos, hipotecas e inversión",
    metaDescription: "Calculadoras financieras modernas: interés compuesto, préstamos, hipotecas e inversión con resultados instantáneos, modo oscuro y diseño adaptable para Android.",
    appName: "Calculadoras financieras",
    eyebrow: "Suite privada",
    language: "Idioma",
    dark: "Modo oscuro",
    light: "Modo claro",
    ariaDark: "Cambiar a modo oscuro",
    ariaLight: "Cambiar a modo claro",
    tools: {
      compound: ["Interés compuesto", "Crecimiento por aportes", "Crecimiento futuro", "Valor futuro"],
      loan: ["Préstamos", "Cuota y costo total", "Cuota mensual", "Pago estimado"],
      mortgage: ["Hipotecas", "Pago, seguros e impuestos", "Pago completo", "Pago mensual"],
      investment: ["Inversión", "Meta y rendimiento real", "Meta financiera", "Valor proyectado"]
    },
    fields: {
      principal: "Capital inicial",
      monthly: "Aporte mensual",
      rate: "Tasa anual (%)",
      years: "Tiempo (años)",
      frequency: "Capitalización",
      amount: "Monto del préstamo",
      months: "Plazo (meses)",
      fee: "Cargo inicial",
      price: "Precio de la vivienda",
      down: "Inicial / enganche",
      taxes: "Impuestos anuales",
      insurance: "Seguro anual",
      investmentPrincipal: "Inversión inicial",
      returnRate: "Rendimiento anual (%)",
      inflation: "Inflación anual (%)",
      horizon: "Horizonte (años)",
      goal: "Meta"
    },
    options: ["Mensual", "Trimestral", "Anual", "Diaria"],
    metrics: {
      gain: "Ganancia",
      contributed: "Total aportado",
      interest: "Intereses ganados",
      monthlyContribution: "Aporte mensual",
      horizon: "Horizonte",
      cost: "Costo",
      totalPaid: "Total pagado",
      financeCost: "Intereses + cargos",
      fee: "Cargo inicial",
      term: "Plazo",
      down: "Inicial",
      principalInterest: "Capital e interés",
      escrow: "Impuestos + seguro",
      financed: "Monto financiado",
      downUsed: "Inicial usada",
      goal: "Meta",
      realValue: "Valor real estimado",
      realReturn: "Rendimiento real anual"
    },
    years: "años",
    months: "meses"
  },
  en: {
    locale: "en-US",
    htmlLang: "en",
    ogLocale: "en_US",
    title: "Compound interest, loan, mortgage and investment calculator",
    metaDescription: "Modern financial calculators for compound interest, loans, mortgages and investments with instant results, dark mode and Android-friendly design.",
    appName: "Financial calculators",
    eyebrow: "Private suite",
    language: "Language",
    dark: "Dark mode",
    light: "Light mode",
    ariaDark: "Switch to dark mode",
    ariaLight: "Switch to light mode",
    tools: {
      compound: ["Compound interest", "Growth with contributions", "Future growth", "Future value"],
      loan: ["Loans", "Payment and total cost", "Monthly payment", "Estimated payment"],
      mortgage: ["Mortgages", "Payment, taxes and insurance", "Full payment", "Monthly payment"],
      investment: ["Investment", "Goal and real return", "Financial goal", "Projected value"]
    },
    fields: {
      principal: "Initial capital",
      monthly: "Monthly contribution",
      rate: "Annual rate (%)",
      years: "Time (years)",
      frequency: "Compounding",
      amount: "Loan amount",
      months: "Term (months)",
      fee: "Upfront fee",
      price: "Home price",
      down: "Down payment",
      taxes: "Annual taxes",
      insurance: "Annual insurance",
      investmentPrincipal: "Initial investment",
      returnRate: "Annual return (%)",
      inflation: "Annual inflation (%)",
      horizon: "Horizon (years)",
      goal: "Goal"
    },
    options: ["Monthly", "Quarterly", "Yearly", "Daily"],
    metrics: {
      gain: "Gain",
      contributed: "Total contributed",
      interest: "Interest earned",
      monthlyContribution: "Monthly contribution",
      horizon: "Horizon",
      cost: "Cost",
      totalPaid: "Total paid",
      financeCost: "Interest + fees",
      fee: "Upfront fee",
      term: "Term",
      down: "Down",
      principalInterest: "Principal & interest",
      escrow: "Taxes + insurance",
      financed: "Financed amount",
      downUsed: "Down used",
      goal: "Goal",
      realValue: "Estimated real value",
      realReturn: "Annual real return"
    },
    years: "years",
    months: "months"
  },
  it: {
    locale: "it-IT",
    htmlLang: "it",
    ogLocale: "it_IT",
    title: "Calcolatore di interesse composto, prestiti, mutui e investimenti",
    metaDescription: "Calcolatori finanziari moderni per interesse composto, prestiti, mutui e investimenti con risultati immediati, tema scuro e design compatibile con Android.",
    appName: "Calcolatori finanziari",
    eyebrow: "Suite privata",
    language: "Lingua",
    dark: "Tema scuro",
    light: "Tema chiaro",
    ariaDark: "Passa al tema scuro",
    ariaLight: "Passa al tema chiaro",
    tools: {
      compound: ["Interesse composto", "Crescita con versamenti", "Crescita futura", "Valore futuro"],
      loan: ["Prestiti", "Rata e costo totale", "Rata mensile", "Pagamento stimato"],
      mortgage: ["Mutui", "Rata, tasse e assicurazione", "Pagamento completo", "Rata mensile"],
      investment: ["Investimento", "Obiettivo e rendimento reale", "Obiettivo finanziario", "Valore previsto"]
    },
    fields: {
      principal: "Capitale iniziale",
      monthly: "Versamento mensile",
      rate: "Tasso annuo (%)",
      years: "Tempo (anni)",
      frequency: "Capitalizzazione",
      amount: "Importo del prestito",
      months: "Durata (mesi)",
      fee: "Costo iniziale",
      price: "Prezzo della casa",
      down: "Anticipo",
      taxes: "Tasse annuali",
      insurance: "Assicurazione annuale",
      investmentPrincipal: "Investimento iniziale",
      returnRate: "Rendimento annuo (%)",
      inflation: "Inflazione annua (%)",
      horizon: "Orizzonte (anni)",
      goal: "Obiettivo"
    },
    options: ["Mensile", "Trimestrale", "Annuale", "Giornaliera"],
    metrics: {
      gain: "Guadagno",
      contributed: "Totale versato",
      interest: "Interessi maturati",
      monthlyContribution: "Versamento mensile",
      horizon: "Orizzonte",
      cost: "Costo",
      totalPaid: "Totale pagato",
      financeCost: "Interessi + costi",
      fee: "Costo iniziale",
      term: "Durata",
      down: "Anticipo",
      principalInterest: "Capitale e interessi",
      escrow: "Tasse + assicurazione",
      financed: "Importo finanziato",
      downUsed: "Anticipo usato",
      goal: "Obiettivo",
      realValue: "Valore reale stimato",
      realReturn: "Rendimento reale annuo"
    },
    years: "anni",
    months: "mesi"
  },
  fr: {
    locale: "fr-FR",
    htmlLang: "fr",
    ogLocale: "fr_FR",
    title: "Calculateur d'intérêt composé, prêts, hypothèques et investissement",
    metaDescription: "Calculateurs financiers modernes pour intérêt composé, prêts, hypothèques et investissements avec résultats instantanés, mode sombre et design adapté à Android.",
    appName: "Calculateurs financiers",
    eyebrow: "Suite privée",
    language: "Langue",
    dark: "Mode sombre",
    light: "Mode clair",
    ariaDark: "Passer au mode sombre",
    ariaLight: "Passer au mode clair",
    tools: {
      compound: ["Intérêt composé", "Croissance avec versements", "Croissance future", "Valeur future"],
      loan: ["Prêts", "Mensualité et coût total", "Mensualité", "Paiement estimé"],
      mortgage: ["Hypothèques", "Paiement, taxes et assurance", "Paiement complet", "Paiement mensuel"],
      investment: ["Investissement", "Objectif et rendement réel", "Objectif financier", "Valeur projetée"]
    },
    fields: {
      principal: "Capital initial",
      monthly: "Versement mensuel",
      rate: "Taux annuel (%)",
      years: "Durée (années)",
      frequency: "Capitalisation",
      amount: "Montant du prêt",
      months: "Durée (mois)",
      fee: "Frais initiaux",
      price: "Prix du logement",
      down: "Apport initial",
      taxes: "Taxes annuelles",
      insurance: "Assurance annuelle",
      investmentPrincipal: "Investissement initial",
      returnRate: "Rendement annuel (%)",
      inflation: "Inflation annuelle (%)",
      horizon: "Horizon (années)",
      goal: "Objectif"
    },
    options: ["Mensuelle", "Trimestrielle", "Annuelle", "Quotidienne"],
    metrics: {
      gain: "Gain",
      contributed: "Total versé",
      interest: "Intérêts gagnés",
      monthlyContribution: "Versement mensuel",
      horizon: "Horizon",
      cost: "Coût",
      totalPaid: "Total payé",
      financeCost: "Intérêts + frais",
      fee: "Frais initiaux",
      term: "Durée",
      down: "Apport",
      principalInterest: "Capital et intérêts",
      escrow: "Taxes + assurance",
      financed: "Montant financé",
      downUsed: "Apport utilisé",
      goal: "Objectif",
      realValue: "Valeur réelle estimée",
      realReturn: "Rendement réel annuel"
    },
    years: "années",
    months: "mois"
  },
  pt: {
    locale: "pt-BR",
    htmlLang: "pt",
    ogLocale: "pt_BR",
    title: "Calculadora de juros compostos, empréstimos, hipotecas e investimentos",
    metaDescription: "Calculadoras financeiras modernas para juros compostos, empréstimos, hipotecas e investimentos com resultados instantâneos, modo escuro e design adaptado para Android.",
    appName: "Calculadoras financeiras",
    eyebrow: "Suite privada",
    language: "Idioma",
    dark: "Modo escuro",
    light: "Modo claro",
    ariaDark: "Mudar para modo escuro",
    ariaLight: "Mudar para modo claro",
    tools: {
      compound: ["Juros compostos", "Crescimento com aportes", "Crescimento futuro", "Valor futuro"],
      loan: ["Empréstimos", "Parcela e custo total", "Parcela mensal", "Pagamento estimado"],
      mortgage: ["Hipotecas", "Pagamento, impostos e seguro", "Pagamento completo", "Pagamento mensal"],
      investment: ["Investimento", "Meta e retorno real", "Meta financeira", "Valor projetado"]
    },
    fields: {
      principal: "Capital inicial",
      monthly: "Aporte mensal",
      rate: "Taxa anual (%)",
      years: "Tempo (anos)",
      frequency: "Capitalização",
      amount: "Valor do empréstimo",
      months: "Prazo (meses)",
      fee: "Taxa inicial",
      price: "Preço do imóvel",
      down: "Entrada",
      taxes: "Impostos anuais",
      insurance: "Seguro anual",
      investmentPrincipal: "Investimento inicial",
      returnRate: "Retorno anual (%)",
      inflation: "Inflação anual (%)",
      horizon: "Horizonte (anos)",
      goal: "Meta"
    },
    options: ["Mensal", "Trimestral", "Anual", "Diária"],
    metrics: {
      gain: "Ganho",
      contributed: "Total aportado",
      interest: "Juros ganhos",
      monthlyContribution: "Aporte mensal",
      horizon: "Horizonte",
      cost: "Custo",
      totalPaid: "Total pago",
      financeCost: "Juros + taxas",
      fee: "Taxa inicial",
      term: "Prazo",
      down: "Entrada",
      principalInterest: "Principal e juros",
      escrow: "Impostos + seguro",
      financed: "Valor financiado",
      downUsed: "Entrada usada",
      goal: "Meta",
      realValue: "Valor real estimado",
      realReturn: "Retorno real anual"
    },
    years: "anos",
    months: "meses"
  },
  de: {
    locale: "de-DE",
    htmlLang: "de",
    ogLocale: "de_DE",
    title: "Rechner für Zinseszins, Darlehen, Hypotheken und Investitionen",
    metaDescription: "Moderne Finanzrechner für Zinseszins, Darlehen, Hypotheken und Investitionen mit Sofortergebnissen, Dunkelmodus und Android-freundlichem Design.",
    appName: "Finanzrechner",
    eyebrow: "Private Suite",
    language: "Sprache",
    dark: "Dunkelmodus",
    light: "Hellmodus",
    ariaDark: "Zum Dunkelmodus wechseln",
    ariaLight: "Zum Hellmodus wechseln",
    tools: {
      compound: ["Zinseszins", "Wachstum mit Beiträgen", "Zukünftiges Wachstum", "Endwert"],
      loan: ["Darlehen", "Rate und Gesamtkosten", "Monatsrate", "Geschätzte Rate"],
      mortgage: ["Hypotheken", "Rate, Steuern und Versicherung", "Gesamtzahlung", "Monatszahlung"],
      investment: ["Investition", "Ziel und reale Rendite", "Finanzielles Ziel", "Prognosewert"]
    },
    fields: {
      principal: "Startkapital",
      monthly: "Monatlicher Beitrag",
      rate: "Jahreszins (%)",
      years: "Zeit (Jahre)",
      frequency: "Verzinsung",
      amount: "Darlehensbetrag",
      months: "Laufzeit (Monate)",
      fee: "Anfangsgebühr",
      price: "Hauspreis",
      down: "Anzahlung",
      taxes: "Jährliche Steuern",
      insurance: "Jährliche Versicherung",
      investmentPrincipal: "Startinvestition",
      returnRate: "Jahresrendite (%)",
      inflation: "Jährliche Inflation (%)",
      horizon: "Horizont (Jahre)",
      goal: "Ziel"
    },
    options: ["Monatlich", "Vierteljährlich", "Jährlich", "Täglich"],
    metrics: {
      gain: "Gewinn",
      contributed: "Gesamt eingezahlt",
      interest: "Verdiente Zinsen",
      monthlyContribution: "Monatlicher Beitrag",
      horizon: "Horizont",
      cost: "Kosten",
      totalPaid: "Gesamt bezahlt",
      financeCost: "Zinsen + Gebühren",
      fee: "Anfangsgebühr",
      term: "Laufzeit",
      down: "Anzahlung",
      principalInterest: "Tilgung und Zinsen",
      escrow: "Steuern + Versicherung",
      financed: "Finanzierter Betrag",
      downUsed: "Genutzte Anzahlung",
      goal: "Ziel",
      realValue: "Geschätzter Realwert",
      realReturn: "Reale Jahresrendite"
    },
    years: "Jahre",
    months: "Monate"
  }
};

let language = "es";
let activeTool = document.body.dataset.tool || "compound";
let money = createMoneyFormatter(language, 0);
let decimalMoney = createMoneyFormatter(language, 2);
let percent = createPercentFormatter(language);

function createMoneyFormatter(lang, digits) {
  return new Intl.NumberFormat(translations[lang].locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: digits
  });
}

function createPercentFormatter(lang) {
  return new Intl.NumberFormat(translations[lang].locale, {
    style: "percent",
    maximumFractionDigits: 1
  });
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function readForm(id) {
  const form = document.querySelector(`[data-form="${id}"]`);
  return Object.fromEntries(
    [...new FormData(form).entries()].map(([key, value]) => [key, Number(value) || 0])
  );
}

function monthlyPayment(amount, annualRate, months) {
  const principal = Math.max(0, amount);
  const term = Math.max(0, months);
  const monthlyRate = annualRate / 100 / 12;

  if (!principal || !term) return 0;
  if (!monthlyRate) return principal / term;

  const factor = (1 + monthlyRate) ** term;
  return principal * (monthlyRate * factor) / (factor - 1);
}

function futureValue(principal, monthly, annualRate, years, contributionTiming = "end") {
  const months = Math.max(0, years * 12);
  const monthlyRate = annualRate / 100 / 12;
  const base = Math.max(0, principal);
  const payment = Math.max(0, monthly);

  if (!months) return base;
  if (!monthlyRate) return base + payment * months;

  const factor = (1 + monthlyRate) ** months;
  const annuity = payment * ((factor - 1) / monthlyRate);
  const timingMultiplier = contributionTiming === "beginning" ? 1 + monthlyRate : 1;

  return base * factor + annuity * timingMultiplier;
}

function metric(label, value) {
  return `<article class="metric"><span>${label}</span><strong>${value}</strong></article>`;
}

function displayPercent(value) {
  if (!Number.isFinite(value)) return "0%";
  return percent.format(value);
}

function setMeter(label, value, ratio, color) {
  const safeRatio = Number.isFinite(ratio) ? clamp(ratio, 0, 1) : 0;
  const degrees = safeRatio * 360;
  const trackColor = getComputedStyle(document.documentElement).getPropertyValue("--track").trim() || "#e4ebe5";

  meter.style.background = `conic-gradient(${color} ${degrees}deg, ${trackColor} ${degrees}deg)`;
  meterLabel.textContent = label;
  meterValue.textContent = value;
}

function showResults(primary, items) {
  primaryResult.textContent = primary;
  resultList.innerHTML = items.map((item) => metric(item.label, item.value)).join("");
}

function calculateCompound() {
  const t = translations[language];
  const data = readForm("compound");
  const total = futureValue(data.principal, data.monthly, data.rate, data.years, "end");
  const contributed = Math.max(0, data.principal) + Math.max(0, data.monthly) * Math.max(0, data.years) * 12;
  const gains = total - contributed;
  const growthRatio = contributed ? gains / contributed : 0;

  setMeter(t.metrics.gain, displayPercent(Math.max(0, growthRatio)), growthRatio, "#5d88ff");
  showResults(money.format(total), [
    { label: t.metrics.contributed, value: money.format(contributed) },
    { label: t.metrics.interest, value: money.format(gains) },
    { label: t.metrics.monthlyContribution, value: money.format(data.monthly) },
    { label: t.metrics.horizon, value: `${Math.max(0, data.years)} ${t.years}` }
  ]);
}

function calculateLoan() {
  const t = translations[language];
  const data = readForm("loan");
  const payment = monthlyPayment(data.amount, data.rate, data.months);
  const totalPaid = payment * Math.max(0, data.months) + Math.max(0, data.fee);
  const financeCost = totalPaid - Math.max(0, data.amount);
  const costRatio = data.amount ? financeCost / data.amount : 0;

  setMeter(t.metrics.cost, displayPercent(Math.max(0, costRatio)), costRatio, "#83d5bd");
  showResults(decimalMoney.format(payment), [
    { label: t.metrics.totalPaid, value: money.format(totalPaid) },
    { label: t.metrics.financeCost, value: money.format(financeCost) },
    { label: t.metrics.fee, value: money.format(data.fee) },
    { label: t.metrics.term, value: `${Math.max(0, data.months)} ${t.months}` }
  ]);
}

function calculateMortgage() {
  const t = translations[language];
  const data = readForm("mortgage");
  const price = Math.max(0, data.price);
  const down = clamp(data.down, 0, price);
  const principal = price - down;
  const months = Math.max(0, data.years * 12);
  const principalAndInterest = monthlyPayment(principal, data.rate, months);
  const escrow = (Math.max(0, data.taxes) + Math.max(0, data.insurance)) / 12;
  const payment = principalAndInterest + escrow;
  const downRatio = price ? down / price : 0;

  setMeter(t.metrics.down, displayPercent(downRatio), downRatio, "#ff8066");
  showResults(decimalMoney.format(payment), [
    { label: t.metrics.principalInterest, value: decimalMoney.format(principalAndInterest) },
    { label: t.metrics.escrow, value: decimalMoney.format(escrow) },
    { label: t.metrics.financed, value: money.format(principal) },
    { label: t.metrics.downUsed, value: money.format(down) }
  ]);
}

function calculateInvestment() {
  const t = translations[language];
  const data = readForm("investment");
  const nominal = futureValue(data.principal, data.monthly, data.returnRate, data.years, "end");
  const inflationFactor = (1 + Math.max(0, data.inflation) / 100) ** Math.max(0, data.years);
  const real = inflationFactor ? nominal / inflationFactor : nominal;
  const contributed = Math.max(0, data.principal) + Math.max(0, data.monthly) * Math.max(0, data.years) * 12;
  const goalRatio = data.goal ? nominal / data.goal : 0;
  const realReturn = ((1 + data.returnRate / 100) / (1 + Math.max(0, data.inflation) / 100)) - 1;

  setMeter(t.metrics.goal, displayPercent(goalRatio), goalRatio, "#e9ba55");
  showResults(money.format(nominal), [
    { label: t.metrics.realValue, value: money.format(real) },
    { label: t.metrics.contributed, value: money.format(contributed) },
    { label: t.metrics.realReturn, value: displayPercent(realReturn) },
    { label: t.metrics.goal, value: money.format(data.goal) }
  ]);
}

const calculators = {
  compound: calculateCompound,
  loan: calculateLoan,
  mortgage: calculateMortgage,
  investment: calculateInvestment
};

function labelFor(selector, text) {
  const field = document.querySelector(selector);
  const label = field?.closest("label");
  if (!label) return;

  for (const node of label.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim()) {
      node.textContent = `\n              ${text}\n              `;
      return;
    }
  }

  label.insertBefore(document.createTextNode(`\n              ${text}\n              `), label.firstChild);
}

function applyStaticTranslations() {
  const t = translations[language];
  const toolButtons = document.querySelectorAll(".tool-tab");

  document.documentElement.lang = t.htmlLang;
  document.title = t.title;
  descriptionMeta?.setAttribute("content", t.metaDescription);
  ogTitle?.setAttribute("content", t.appName);
  ogDescription?.setAttribute("content", t.metaDescription);
  ogLocale?.setAttribute("content", t.ogLocale);

  document.querySelector(".brand-block .eyebrow").textContent = t.eyebrow;
  document.querySelector("h1").textContent = t.appName;
  languageLabel.textContent = t.language;

  ["compound", "loan", "mortgage", "investment"].forEach((tool, index) => {
    const [title, subtitle] = t.tools[tool];
    toolButtons[index].querySelector("strong").textContent = title;
    toolButtons[index].querySelector("small").textContent = subtitle;
  });

  labelFor('#compound-form [name="principal"]', t.fields.principal);
  labelFor('#compound-form [name="monthly"]', t.fields.monthly);
  labelFor('#compound-form [name="rate"]', t.fields.rate);
  labelFor('#compound-form [name="years"]', t.fields.years);
  labelFor('#compound-form [name="frequency"]', t.fields.frequency);

  document.querySelectorAll('#compound-form [name="frequency"] option').forEach((option, index) => {
    option.textContent = t.options[index];
  });

  labelFor('#loan-form [name="amount"]', t.fields.amount);
  labelFor('#loan-form [name="rate"]', t.fields.rate);
  labelFor('#loan-form [name="months"]', t.fields.months);
  labelFor('#loan-form [name="fee"]', t.fields.fee);

  labelFor('#mortgage-form [name="price"]', t.fields.price);
  labelFor('#mortgage-form [name="down"]', t.fields.down);
  labelFor('#mortgage-form [name="rate"]', t.fields.rate);
  labelFor('#mortgage-form [name="years"]', t.fields.years);
  labelFor('#mortgage-form [name="taxes"]', t.fields.taxes);
  labelFor('#mortgage-form [name="insurance"]', t.fields.insurance);

  labelFor('#investment-form [name="principal"]', t.fields.investmentPrincipal);
  labelFor('#investment-form [name="monthly"]', t.fields.monthly);
  labelFor('#investment-form [name="returnRate"]', t.fields.returnRate);
  labelFor('#investment-form [name="inflation"]', t.fields.inflation);
  labelFor('#investment-form [name="years"]', t.fields.horizon);
  labelFor('#investment-form [name="goal"]', t.fields.goal);
}

function activateTool(id) {
  const t = translations[language];
  activeTool = id;

  tabs.forEach((tab) => tab.classList.toggle("active", tab.dataset.tool === id));
  forms.forEach((form) => form.classList.toggle("active", form.dataset.form === id));

  toolTitle.textContent = t.tools[id][0];
  toolKicker.textContent = t.tools[id][2];
  primaryLabel.textContent = t.tools[id][3];

  calculators[id]();
}

function setTheme(theme) {
  const t = translations[language];
  const isDark = theme === "dark";
  document.body.classList.toggle("dark", isDark);
  themeToggle.setAttribute("aria-label", isDark ? t.ariaLight : t.ariaDark);
  themeLabel.textContent = isDark ? t.light : t.dark;
  themeMeta.setAttribute("content", isDark ? "#0c1210" : "#eef3ec");
  localStorage.setItem("finance-theme", theme);
  calculators[activeTool]();
}

function setLanguage(nextLanguage) {
  language = translations[nextLanguage] ? nextLanguage : "es";
  languageSelect.value = language;
  money = createMoneyFormatter(language, 0);
  decimalMoney = createMoneyFormatter(language, 2);
  percent = createPercentFormatter(language);
  localStorage.setItem("finance-language", language);
  applyStaticTranslations();
  activateTool(activeTool);
  setTheme(document.body.classList.contains("dark") ? "dark" : "light");
}

function initialTheme() {
  const saved = localStorage.getItem("finance-theme");
  if (saved === "dark" || saved === "light") return saved;
  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function initialLanguage() {
  const saved = localStorage.getItem("finance-language");
  if (translations[saved]) return saved;
  const browserLanguage = navigator.language.slice(0, 2).toLowerCase();
  return translations[browserLanguage] ? browserLanguage : "es";
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => activateTool(tab.dataset.tool));
});

forms.forEach((form) => {
  form.addEventListener("input", () => calculators[activeTool]());
});

themeToggle.addEventListener("click", () => {
  setTheme(document.body.classList.contains("dark") ? "light" : "dark");
});

languageSelect.addEventListener("change", () => {
  setLanguage(languageSelect.value);
});

language = initialLanguage();
setLanguage(language);
setTheme(initialTheme());
