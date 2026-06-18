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
    title: "Calculadora de interÃ©s compuesto, prÃ©stamos, hipotecas e inversiÃ³n",
    metaDescription: "Calculadoras financieras modernas: interÃ©s compuesto, prÃ©stamos, hipotecas e inversiÃ³n con resultados instantÃ¡neos, modo oscuro y diseÃ±o adaptable para Android.",
    appName: "Calculadoras financieras",
    eyebrow: "Suite privada",
    language: "Idioma",
    dark: "Modo oscuro",
    light: "Modo claro",
    ariaDark: "Cambiar a modo oscuro",
    ariaLight: "Cambiar a modo claro",
    tools: {
      compound: ["InterÃ©s compuesto", "Crecimiento por aportes", "Crecimiento futuro", "Valor futuro"],
      loan: ["PrÃ©stamos", "Cuota y costo total", "Cuota mensual", "Pago estimado"],
      mortgage: ["Hipotecas", "Pago, seguros e impuestos", "Pago completo", "Pago mensual"],
      investment: ["InversiÃ³n", "Meta y rendimiento real", "Meta financiera", "Valor proyectado"]
    },
    fields: {
      principal: "Capital inicial",
      monthly: "Aporte mensual",
      rate: "Tasa anual (%)",
      years: "Tiempo (aÃ±os)",
      frequency: "CapitalizaciÃ³n",
      amount: "Monto del prÃ©stamo",
      months: "Plazo (meses)",
      fee: "Cargo inicial",
      price: "Precio de la vivienda",
      down: "Inicial / enganche",
      taxes: "Impuestos anuales",
      insurance: "Seguro anual",
      investmentPrincipal: "InversiÃ³n inicial",
      returnRate: "Rendimiento anual (%)",
      inflation: "InflaciÃ³n anual (%)",
      horizon: "Horizonte (aÃ±os)",
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
      principalInterest: "Capital e interÃ©s",
      escrow: "Impuestos + seguro",
      financed: "Monto financiado",
      downUsed: "Inicial usada",
      goal: "Meta",
      realValue: "Valor real estimado",
      realReturn: "Rendimiento real anual"
    },
    years: "aÃ±os",
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
    title: "Calculateur d'intÃ©rÃªt composÃ©, prÃªts, hypothÃ¨ques et investissement",
    metaDescription: "Calculateurs financiers modernes pour intÃ©rÃªt composÃ©, prÃªts, hypothÃ¨ques et investissements avec rÃ©sultats instantanÃ©s, mode sombre et design adaptÃ© Ã  Android.",
    appName: "Calculateurs financiers",
    eyebrow: "Suite privÃ©e",
    language: "Langue",
    dark: "Mode sombre",
    light: "Mode clair",
    ariaDark: "Passer au mode sombre",
    ariaLight: "Passer au mode clair",
    tools: {
      compound: ["IntÃ©rÃªt composÃ©", "Croissance avec versements", "Croissance future", "Valeur future"],
      loan: ["PrÃªts", "MensualitÃ© et coÃ»t total", "MensualitÃ©", "Paiement estimÃ©"],
      mortgage: ["HypothÃ¨ques", "Paiement, taxes et assurance", "Paiement complet", "Paiement mensuel"],
      investment: ["Investissement", "Objectif et rendement rÃ©el", "Objectif financier", "Valeur projetÃ©e"]
    },
    fields: {
      principal: "Capital initial",
      monthly: "Versement mensuel",
      rate: "Taux annuel (%)",
      years: "DurÃ©e (annÃ©es)",
      frequency: "Capitalisation",
      amount: "Montant du prÃªt",
      months: "DurÃ©e (mois)",
      fee: "Frais initiaux",
      price: "Prix du logement",
      down: "Apport initial",
      taxes: "Taxes annuelles",
      insurance: "Assurance annuelle",
      investmentPrincipal: "Investissement initial",
      returnRate: "Rendement annuel (%)",
      inflation: "Inflation annuelle (%)",
      horizon: "Horizon (annÃ©es)",
      goal: "Objectif"
    },
    options: ["Mensuelle", "Trimestrielle", "Annuelle", "Quotidienne"],
    metrics: {
      gain: "Gain",
      contributed: "Total versÃ©",
      interest: "IntÃ©rÃªts gagnÃ©s",
      monthlyContribution: "Versement mensuel",
      horizon: "Horizon",
      cost: "CoÃ»t",
      totalPaid: "Total payÃ©",
      financeCost: "IntÃ©rÃªts + frais",
      fee: "Frais initiaux",
      term: "DurÃ©e",
      down: "Apport",
      principalInterest: "Capital et intÃ©rÃªts",
      escrow: "Taxes + assurance",
      financed: "Montant financÃ©",
      downUsed: "Apport utilisÃ©",
      goal: "Objectif",
      realValue: "Valeur rÃ©elle estimÃ©e",
      realReturn: "Rendement rÃ©el annuel"
    },
    years: "annÃ©es",
    months: "mois"
  },
  pt: {
    locale: "pt-BR",
    htmlLang: "pt",
    ogLocale: "pt_BR",
    title: "Calculadora de juros compostos, emprÃ©stimos, hipotecas e investimentos",
    metaDescription: "Calculadoras financeiras modernas para juros compostos, emprÃ©stimos, hipotecas e investimentos com resultados instantÃ¢neos, modo escuro e design adaptado para Android.",
    appName: "Calculadoras financeiras",
    eyebrow: "Suite privada",
    language: "Idioma",
    dark: "Modo escuro",
    light: "Modo claro",
    ariaDark: "Mudar para modo escuro",
    ariaLight: "Mudar para modo claro",
    tools: {
      compound: ["Juros compostos", "Crescimento com aportes", "Crescimento futuro", "Valor futuro"],
      loan: ["EmprÃ©stimos", "Parcela e custo total", "Parcela mensal", "Pagamento estimado"],
      mortgage: ["Hipotecas", "Pagamento, impostos e seguro", "Pagamento completo", "Pagamento mensal"],
      investment: ["Investimento", "Meta e retorno real", "Meta financeira", "Valor projetado"]
    },
    fields: {
      principal: "Capital inicial",
      monthly: "Aporte mensal",
      rate: "Taxa anual (%)",
      years: "Tempo (anos)",
      frequency: "CapitalizaÃ§Ã£o",
      amount: "Valor do emprÃ©stimo",
      months: "Prazo (meses)",
      fee: "Taxa inicial",
      price: "PreÃ§o do imÃ³vel",
      down: "Entrada",
      taxes: "Impostos anuais",
      insurance: "Seguro anual",
      investmentPrincipal: "Investimento inicial",
      returnRate: "Retorno anual (%)",
      inflation: "InflaÃ§Ã£o anual (%)",
      horizon: "Horizonte (anos)",
      goal: "Meta"
    },
    options: ["Mensal", "Trimestral", "Anual", "DiÃ¡ria"],
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
    title: "Rechner fÃ¼r Zinseszins, Darlehen, Hypotheken und Investitionen",
    metaDescription: "Moderne Finanzrechner fÃ¼r Zinseszins, Darlehen, Hypotheken und Investitionen mit Sofortergebnissen, Dunkelmodus und Android-freundlichem Design.",
    appName: "Finanzrechner",
    eyebrow: "Private Suite",
    language: "Sprache",
    dark: "Dunkelmodus",
    light: "Hellmodus",
    ariaDark: "Zum Dunkelmodus wechseln",
    ariaLight: "Zum Hellmodus wechseln",
    tools: {
      compound: ["Zinseszins", "Wachstum mit BeitrÃ¤gen", "ZukÃ¼nftiges Wachstum", "Endwert"],
      loan: ["Darlehen", "Rate und Gesamtkosten", "Monatsrate", "GeschÃ¤tzte Rate"],
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
      fee: "AnfangsgebÃ¼hr",
      price: "Hauspreis",
      down: "Anzahlung",
      taxes: "JÃ¤hrliche Steuern",
      insurance: "JÃ¤hrliche Versicherung",
      investmentPrincipal: "Startinvestition",
      returnRate: "Jahresrendite (%)",
      inflation: "JÃ¤hrliche Inflation (%)",
      horizon: "Horizont (Jahre)",
      goal: "Ziel"
    },
    options: ["Monatlich", "VierteljÃ¤hrlich", "JÃ¤hrlich", "TÃ¤glich"],
    metrics: {
      gain: "Gewinn",
      contributed: "Gesamt eingezahlt",
      interest: "Verdiente Zinsen",
      monthlyContribution: "Monatlicher Beitrag",
      horizon: "Horizont",
      cost: "Kosten",
      totalPaid: "Gesamt bezahlt",
      financeCost: "Zinsen + GebÃ¼hren",
      fee: "AnfangsgebÃ¼hr",
      term: "Laufzeit",
      down: "Anzahlung",
      principalInterest: "Tilgung und Zinsen",
      escrow: "Steuern + Versicherung",
      financed: "Finanzierter Betrag",
      downUsed: "Genutzte Anzahlung",
      goal: "Ziel",
      realValue: "GeschÃ¤tzter Realwert",
      realReturn: "Reale Jahresrendite"
    },
    years: "Jahre",
    months: "Monate"
  }
};

const seoCopy = {
  es: {
    compound: {
      heading: "Calculadora de interÃ©s compuesto online",
      intro: "Usa esta calculadora de interÃ©s compuesto para estimar el valor futuro de una inversiÃ³n, comparar aportes mensuales y entender cÃ³mo crece el capital con una tasa anual.",
      items: [
        ["CÃ³mo usar la calculadora de interÃ©s compuesto", "Introduce el capital inicial, el aporte mensual, la tasa anual y el tiempo en aÃ±os. La herramienta calcula el valor futuro, el total aportado y los intereses ganados, datos clave para planificar ahorro, inversiÃ³n y metas financieras."],
        ["QuÃ© es el interÃ©s compuesto", "El interÃ©s compuesto ocurre cuando los intereses generados se reinvierten y empiezan a producir nuevos intereses. Por eso una inversiÃ³n a largo plazo puede crecer mÃ¡s rÃ¡pido que una cuenta con interÃ©s simple."],
        ["Palabras clave financieras importantes", "Calculadora de interÃ©s compuesto, inversiÃ³n con aportes mensuales, valor futuro, tasa anual, capitalizaciÃ³n mensual, ahorro a largo plazo y crecimiento del capital son conceptos esenciales para evaluar escenarios financieros."]
      ]
    },
    loan: {
      heading: "Calculadora de prÃ©stamos online",
      intro: "Calcula la cuota mensual de un prÃ©stamo, el total pagado, los intereses y los cargos para tomar una decisiÃ³n financiera mÃ¡s clara antes de solicitar crÃ©dito.",
      items: [
        ["CÃ³mo calcular un prÃ©stamo", "Escribe el monto del prÃ©stamo, la tasa anual, el plazo en meses y cualquier cargo inicial. La calculadora estima el pago mensual y el costo financiero total del crÃ©dito."],
        ["QuÃ© influye en la cuota mensual", "La cuota mensual depende del capital solicitado, la tasa de interÃ©s anual y la duraciÃ³n del prÃ©stamo. Un plazo mÃ¡s largo puede reducir la cuota, pero normalmente aumenta el total de intereses pagados."],
        ["TÃ©rminos SEO y financieros", "Calculadora de prÃ©stamos, cuota mensual, tasa de interÃ©s, costo total del prÃ©stamo, amortizaciÃ³n, prÃ©stamo personal y pago estimado son bÃºsquedas frecuentes para comparar opciones de crÃ©dito."]
      ]
    },
    mortgage: {
      heading: "Calculadora de hipotecas online",
      intro: "Estima el pago mensual de una hipoteca incluyendo capital, intereses, impuestos, seguro e inicial para analizar mejor la compra de una vivienda.",
      items: [
        ["CÃ³mo estimar una hipoteca", "Agrega el precio de la vivienda, el enganche, la tasa anual, el plazo, los impuestos y el seguro. La calculadora muestra el pago mensual completo y el monto financiado."],
        ["QuÃ© incluye el pago hipotecario", "Un pago hipotecario suele incluir capital e intereses, ademÃ¡s de impuestos de propiedad y seguro. Separar estos valores ayuda a ver el costo real de comprar casa."],
        ["Palabras clave para hipotecas", "Calculadora de hipotecas, pago mensual de hipoteca, prÃ©stamo hipotecario, enganche, tasa hipotecaria, impuestos de vivienda y seguro anual son tÃ©rminos Ãºtiles para bÃºsquedas financieras."]
      ]
    },
    investment: {
      heading: "Calculadora de inversiÃ³n online",
      intro: "Proyecta una inversiÃ³n con aportes mensuales, rendimiento anual, inflaciÃ³n y meta financiera para visualizar el valor nominal y el valor real estimado.",
      items: [
        ["CÃ³mo proyectar una inversiÃ³n", "Introduce la inversiÃ³n inicial, el aporte mensual, el rendimiento anual, la inflaciÃ³n, el horizonte y la meta. La calculadora estima el valor futuro y el progreso hacia tu objetivo."],
        ["Por quÃ© considerar la inflaciÃ³n", "La inflaciÃ³n reduce el poder de compra del dinero. Por eso esta calculadora muestra el valor real estimado, una referencia mÃ¡s Ãºtil para comparar resultados a largo plazo."],
        ["Conceptos clave de inversiÃ³n", "Calculadora de inversiÃ³n, rendimiento anual, inflaciÃ³n, valor real, valor proyectado, aportes mensuales, meta financiera e inversiÃ³n a largo plazo son tÃ©rminos relevantes para planificar capital."]
      ]
    }
  },
  en: {
    compound: {
      heading: "Online compound interest calculator",
      intro: "Use this compound interest calculator to estimate future value, compare monthly contributions and understand how capital grows with an annual rate.",
      items: [
        ["How to use the compound interest calculator", "Enter initial capital, monthly contribution, annual rate and time in years. The tool calculates future value, total contributions and interest earned for savings and investment planning."],
        ["What compound interest means", "Compound interest happens when earned interest is reinvested and starts generating more interest. This is why long-term investing can grow faster than simple interest."],
        ["Important finance keywords", "Compound interest calculator, monthly contributions, future value, annual rate, monthly compounding, long-term savings and capital growth are essential concepts for financial planning."]
      ]
    },
    loan: {
      heading: "Online loan calculator",
      intro: "Calculate loan monthly payment, total paid, interest and fees before comparing credit options or applying for financing.",
      items: [
        ["How to calculate a loan", "Enter the loan amount, annual rate, term in months and upfront fee. The calculator estimates the monthly payment and the full financing cost."],
        ["What affects the monthly payment", "Monthly payment depends on the borrowed amount, annual interest rate and loan term. A longer term may lower the payment but usually increases total interest."],
        ["SEO and finance terms", "Loan calculator, monthly payment, interest rate, total loan cost, amortization, personal loan and estimated payment are common search terms for credit comparison."]
      ]
    },
    mortgage: {
      heading: "Online mortgage calculator",
      intro: "Estimate a mortgage monthly payment including principal, interest, taxes, insurance and down payment to review home affordability.",
      items: [
        ["How to estimate a mortgage", "Add home price, down payment, annual rate, term, taxes and insurance. The calculator shows the full monthly payment and financed amount."],
        ["What a mortgage payment includes", "A mortgage payment often includes principal and interest plus property taxes and insurance. Separating these values helps reveal the real cost of buying a home."],
        ["Mortgage keywords", "Mortgage calculator, monthly mortgage payment, home loan, down payment, mortgage rate, property taxes and annual insurance are useful financial search terms."]
      ]
    },
    investment: {
      heading: "Online investment calculator",
      intro: "Project an investment with monthly contributions, annual return, inflation and a financial goal to view nominal and estimated real value.",
      items: [
        ["How to project an investment", "Enter initial investment, monthly contribution, annual return, inflation, time horizon and goal. The calculator estimates future value and progress toward the target."],
        ["Why inflation matters", "Inflation reduces purchasing power over time. This calculator includes estimated real value, which can be more useful for long-term comparison."],
        ["Key investment concepts", "Investment calculator, annual return, inflation, real value, projected value, monthly contributions, financial goal and long-term investing are relevant planning terms."]
      ]
    }
  },
  it: {
    compound: {
      heading: "Calcolatore online di interesse composto",
      intro: "Usa questo calcolatore di interesse composto per stimare il valore futuro, confrontare versamenti mensili e capire come cresce il capitale con un tasso annuo.",
      items: [
        ["Come usare il calcolatore di interesse composto", "Inserisci capitale iniziale, versamento mensile, tasso annuo e durata in anni. Lo strumento calcola valore futuro, totale versato e interessi maturati."],
        ["Che cos'Ã¨ l'interesse composto", "L'interesse composto si crea quando gli interessi maturati vengono reinvestiti e generano nuovi interessi. Per questo gli investimenti a lungo termine possono crescere piÃ¹ rapidamente."],
        ["Parole chiave finanziarie", "Calcolatore interesse composto, versamenti mensili, valore futuro, tasso annuo, capitalizzazione mensile, risparmio a lungo termine e crescita del capitale sono concetti importanti."]
      ]
    },
    loan: {
      heading: "Calcolatore online di prestiti",
      intro: "Calcola rata mensile, totale pagato, interessi e costi di un prestito prima di confrontare offerte di credito.",
      items: [
        ["Come calcolare un prestito", "Inserisci importo del prestito, tasso annuo, durata in mesi e costo iniziale. Il calcolatore stima la rata mensile e il costo finanziario totale."],
        ["Cosa influenza la rata mensile", "La rata dipende dall'importo richiesto, dal tasso di interesse annuo e dalla durata. Una durata piÃ¹ lunga puÃ² ridurre la rata ma aumentare gli interessi totali."],
        ["Termini finanziari utili", "Calcolatore prestiti, rata mensile, tasso di interesse, costo totale del prestito, ammortamento, prestito personale e pagamento stimato sono ricerche frequenti."]
      ]
    },
    mortgage: {
      heading: "Calcolatore online di mutui",
      intro: "Stima la rata mensile di un mutuo includendo capitale, interessi, tasse, assicurazione e anticipo.",
      items: [
        ["Come stimare un mutuo", "Aggiungi prezzo della casa, anticipo, tasso annuo, durata, tasse e assicurazione. Il calcolatore mostra il pagamento mensile completo e l'importo finanziato."],
        ["Cosa include la rata del mutuo", "La rata del mutuo include spesso capitale e interessi, oltre a tasse sulla proprietÃ  e assicurazione. Separare questi valori chiarisce il costo reale della casa."],
        ["Parole chiave sui mutui", "Calcolatore mutuo, rata mensile mutuo, prestito ipotecario, anticipo, tasso mutuo, tasse casa e assicurazione annuale sono termini di ricerca importanti."]
      ]
    },
    investment: {
      heading: "Calcolatore online di investimento",
      intro: "Proietta un investimento con versamenti mensili, rendimento annuo, inflazione e obiettivo finanziario per visualizzare valore nominale e reale.",
      items: [
        ["Come proiettare un investimento", "Inserisci investimento iniziale, versamento mensile, rendimento annuo, inflazione, orizzonte e obiettivo. Il calcolatore stima valore futuro e progresso."],
        ["PerchÃ© considerare l'inflazione", "L'inflazione riduce il potere d'acquisto nel tempo. Per questo il calcolatore mostra anche il valore reale stimato."],
        ["Concetti chiave di investimento", "Calcolatore investimento, rendimento annuo, inflazione, valore reale, valore previsto, versamenti mensili, obiettivo finanziario e investimento a lungo termine sono termini rilevanti."]
      ]
    }
  },
  fr: {
    compound: {
      heading: "Calculateur d'intÃ©rÃªt composÃ© en ligne",
      intro: "Utilisez ce calculateur d'intÃ©rÃªt composÃ© pour estimer la valeur future, comparer les versements mensuels et comprendre la croissance du capital.",
      items: [
        ["Comment utiliser le calculateur d'intÃ©rÃªt composÃ©", "Saisissez le capital initial, le versement mensuel, le taux annuel et la durÃ©e en annÃ©es. L'outil calcule la valeur future, le total versÃ© et les intÃ©rÃªts gagnÃ©s."],
        ["Qu'est-ce que l'intÃ©rÃªt composÃ©", "L'intÃ©rÃªt composÃ© apparaÃ®t lorsque les intÃ©rÃªts gÃ©nÃ©rÃ©s sont rÃ©investis et produisent Ã  leur tour de nouveaux intÃ©rÃªts. C'est un moteur important de la croissance Ã  long terme."],
        ["Mots-clÃ©s financiers", "Calculateur intÃ©rÃªt composÃ©, versements mensuels, valeur future, taux annuel, capitalisation mensuelle, Ã©pargne long terme et croissance du capital sont des notions essentielles."]
      ]
    },
    loan: {
      heading: "Calculateur de prÃªt en ligne",
      intro: "Calculez la mensualitÃ© d'un prÃªt, le total payÃ©, les intÃ©rÃªts et les frais avant de comparer des options de crÃ©dit.",
      items: [
        ["Comment calculer un prÃªt", "Indiquez le montant du prÃªt, le taux annuel, la durÃ©e en mois et les frais initiaux. Le calculateur estime la mensualitÃ© et le coÃ»t total du financement."],
        ["Ce qui influence la mensualitÃ©", "La mensualitÃ© dÃ©pend du montant empruntÃ©, du taux d'intÃ©rÃªt annuel et de la durÃ©e. Une durÃ©e plus longue peut rÃ©duire la mensualitÃ© mais augmenter les intÃ©rÃªts totaux."],
        ["Termes SEO et financiers", "Calculateur de prÃªt, mensualitÃ©, taux d'intÃ©rÃªt, coÃ»t total du prÃªt, amortissement, prÃªt personnel et paiement estimÃ© sont des recherches courantes."]
      ]
    },
    mortgage: {
      heading: "Calculateur d'hypothÃ¨que en ligne",
      intro: "Estimez le paiement mensuel d'une hypothÃ¨que avec capital, intÃ©rÃªts, taxes, assurance et apport initial.",
      items: [
        ["Comment estimer une hypothÃ¨que", "Ajoutez le prix du logement, l'apport, le taux annuel, la durÃ©e, les taxes et l'assurance. Le calculateur affiche le paiement complet et le montant financÃ©."],
        ["Ce qu'inclut le paiement hypothÃ©caire", "Un paiement hypothÃ©caire inclut souvent capital et intÃ©rÃªts, ainsi que taxes fonciÃ¨res et assurance. Les sÃ©parer aide Ã  comprendre le coÃ»t rÃ©el."],
        ["Mots-clÃ©s hypothÃ©caires", "Calculateur hypothÃ¨que, paiement mensuel hypothÃ¨que, prÃªt immobilier, apport, taux hypothÃ©caire, taxes logement et assurance annuelle sont des termes utiles."]
      ]
    },
    investment: {
      heading: "Calculateur d'investissement en ligne",
      intro: "Projetez un investissement avec versements mensuels, rendement annuel, inflation et objectif financier pour voir la valeur nominale et rÃ©elle estimÃ©e.",
      items: [
        ["Comment projeter un investissement", "Saisissez l'investissement initial, le versement mensuel, le rendement annuel, l'inflation, l'horizon et l'objectif. Le calculateur estime la valeur future."],
        ["Pourquoi l'inflation compte", "L'inflation rÃ©duit le pouvoir d'achat au fil du temps. Le calculateur affiche donc une valeur rÃ©elle estimÃ©e pour une comparaison plus utile."],
        ["Concepts clÃ©s d'investissement", "Calculateur investissement, rendement annuel, inflation, valeur rÃ©elle, valeur projetÃ©e, versements mensuels, objectif financier et investissement long terme sont des termes importants."]
      ]
    }
  },
  pt: {
    compound: {
      heading: "Calculadora online de juros compostos",
      intro: "Use esta calculadora de juros compostos para estimar valor futuro, comparar aportes mensais e entender o crescimento do capital.",
      items: [
        ["Como usar a calculadora de juros compostos", "Informe capital inicial, aporte mensal, taxa anual e tempo em anos. A ferramenta calcula valor futuro, total aportado e juros ganhos."],
        ["O que sÃ£o juros compostos", "Juros compostos acontecem quando os juros gerados sÃ£o reinvestidos e passam a gerar novos juros. Isso favorece o crescimento no longo prazo."],
        ["Palavras-chave financeiras", "Calculadora de juros compostos, aportes mensais, valor futuro, taxa anual, capitalizaÃ§Ã£o mensal, poupanÃ§a de longo prazo e crescimento do capital sÃ£o termos importantes."]
      ]
    },
    loan: {
      heading: "Calculadora online de emprÃ©stimos",
      intro: "Calcule parcela mensal, total pago, juros e taxas de um emprÃ©stimo antes de comparar opÃ§Ãµes de crÃ©dito.",
      items: [
        ["Como calcular um emprÃ©stimo", "Informe valor do emprÃ©stimo, taxa anual, prazo em meses e taxa inicial. A calculadora estima a parcela mensal e o custo financeiro total."],
        ["O que afeta a parcela mensal", "A parcela depende do valor financiado, da taxa de juros anual e do prazo. Um prazo maior pode reduzir a parcela, mas aumentar os juros totais."],
        ["Termos financeiros Ãºteis", "Calculadora de emprÃ©stimos, parcela mensal, taxa de juros, custo total do emprÃ©stimo, amortizaÃ§Ã£o, emprÃ©stimo pessoal e pagamento estimado sÃ£o buscas comuns."]
      ]
    },
    mortgage: {
      heading: "Calculadora online de hipotecas",
      intro: "Estime o pagamento mensal de uma hipoteca com principal, juros, impostos, seguro e entrada.",
      items: [
        ["Como estimar uma hipoteca", "Adicione preÃ§o do imÃ³vel, entrada, taxa anual, prazo, impostos e seguro. A calculadora mostra o pagamento mensal completo e o valor financiado."],
        ["O que inclui o pagamento hipotecÃ¡rio", "O pagamento costuma incluir principal e juros, alÃ©m de impostos e seguro. Separar esses valores ajuda a entender o custo real."],
        ["Palavras-chave de hipoteca", "Calculadora de hipoteca, pagamento mensal, financiamento imobiliÃ¡rio, entrada, taxa hipotecÃ¡ria, impostos do imÃ³vel e seguro anual sÃ£o termos Ãºteis."]
      ]
    },
    investment: {
      heading: "Calculadora online de investimento",
      intro: "Projete um investimento com aportes mensais, retorno anual, inflaÃ§Ã£o e meta financeira para ver valor nominal e real estimado.",
      items: [
        ["Como projetar um investimento", "Informe investimento inicial, aporte mensal, retorno anual, inflaÃ§Ã£o, horizonte e meta. A calculadora estima o valor futuro e o progresso."],
        ["Por que considerar a inflaÃ§Ã£o", "A inflaÃ§Ã£o reduz o poder de compra ao longo do tempo. Por isso a calculadora mostra tambÃ©m o valor real estimado."],
        ["Conceitos-chave de investimento", "Calculadora de investimento, retorno anual, inflaÃ§Ã£o, valor real, valor projetado, aportes mensais, meta financeira e longo prazo sÃ£o termos relevantes."]
      ]
    }
  },
  de: {
    compound: {
      heading: "Online-Zinseszinsrechner",
      intro: "Nutzen Sie diesen Zinseszinsrechner, um Endwert, monatliche BeitrÃ¤ge und Kapitalwachstum mit einem Jahreszins zu schÃ¤tzen.",
      items: [
        ["So verwenden Sie den Zinseszinsrechner", "Geben Sie Startkapital, monatlichen Beitrag, Jahreszins und Laufzeit ein. Das Tool berechnet Endwert, Einzahlungen und verdiente Zinsen."],
        ["Was Zinseszins bedeutet", "Zinseszins entsteht, wenn erzielte Zinsen wieder angelegt werden und weitere Zinsen erzeugen. Dadurch kann Kapital langfristig schneller wachsen."],
        ["Wichtige Finanzbegriffe", "Zinseszinsrechner, monatliche BeitrÃ¤ge, Endwert, Jahreszins, monatliche Verzinsung, langfristiges Sparen und Kapitalwachstum sind wichtige Suchbegriffe."]
      ]
    },
    loan: {
      heading: "Online-Darlehensrechner",
      intro: "Berechnen Sie Monatsrate, Gesamtzahlung, Zinsen und GebÃ¼hren eines Darlehens, bevor Sie Kreditangebote vergleichen.",
      items: [
        ["So berechnen Sie ein Darlehen", "Geben Sie Darlehensbetrag, Jahreszins, Laufzeit in Monaten und AnfangsgebÃ¼hr ein. Der Rechner schÃ¤tzt Monatsrate und Gesamtkosten."],
        ["Was die Monatsrate beeinflusst", "Die Rate hÃ¤ngt von Betrag, Jahreszins und Laufzeit ab. Eine lÃ¤ngere Laufzeit kann die Rate senken, erhÃ¶ht aber oft die Gesamtzinsen."],
        ["Finanzielle Suchbegriffe", "Darlehensrechner, Monatsrate, Zinssatz, Gesamtkosten, Tilgung, Privatkredit und geschÃ¤tzte Zahlung sind hÃ¤ufige Begriffe."]
      ]
    },
    mortgage: {
      heading: "Online-Hypothekenrechner",
      intro: "SchÃ¤tzen Sie eine monatliche Hypothekenzahlung mit Tilgung, Zinsen, Steuern, Versicherung und Anzahlung.",
      items: [
        ["So schÃ¤tzen Sie eine Hypothek", "FÃ¼gen Sie Hauspreis, Anzahlung, Jahreszins, Laufzeit, Steuern und Versicherung hinzu. Der Rechner zeigt Monatszahlung und finanzierten Betrag."],
        ["Was eine Hypothekenzahlung enthÃ¤lt", "Eine Hypothekenzahlung enthÃ¤lt oft Tilgung und Zinsen sowie Grundsteuern und Versicherung. Die Aufteilung zeigt die tatsÃ¤chlichen Kosten."],
        ["Hypotheken-Keywords", "Hypothekenrechner, monatliche Hypothekenzahlung, Immobilienkredit, Anzahlung, Hypothekenzins, Grundsteuer und Jahresversicherung sind nÃ¼tzliche Begriffe."]
      ]
    },
    investment: {
      heading: "Online-Investitionsrechner",
      intro: "Projizieren Sie eine Investition mit monatlichen BeitrÃ¤gen, Jahresrendite, Inflation und Finanzziel fÃ¼r nominalen und realen Wert.",
      items: [
        ["So projizieren Sie eine Investition", "Geben Sie Startinvestition, monatlichen Beitrag, Jahresrendite, Inflation, Horizont und Ziel ein. Der Rechner schÃ¤tzt Endwert und Fortschritt."],
        ["Warum Inflation wichtig ist", "Inflation senkt die Kaufkraft im Laufe der Zeit. Deshalb zeigt der Rechner auch einen geschÃ¤tzten realen Wert."],
        ["Wichtige Anlagebegriffe", "Investitionsrechner, Jahresrendite, Inflation, realer Wert, Prognosewert, monatliche BeitrÃ¤ge, Finanzziel und langfristiges Investieren sind relevante Begriffe."]
      ]
    }
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

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function renderSeoContent() {
  const container = document.querySelector("#seo-accordion");
  const copy = seoCopy[language]?.[activeTool];
  if (!container || !copy) return;

  container.innerHTML = `
    <h2 class="seo-heading">${escapeHTML(copy.heading)}</h2>
    <p class="seo-intro">${escapeHTML(copy.intro)}</p>
    ${copy.items.map(([title, body]) => `
      <details class="seo-details">
        <summary>${escapeHTML(title)}</summary>
        <p>${escapeHTML(body)}</p>
      </details>
    `).join("")}
  `;
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
  renderSeoContent();
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


