const publications = [
  { year: 2026, title: "MDM2-linked microglial dysfunction in obsessive-compulsive disorder", journal: "Research Square", authors: "Soyoung Sung et al.", type: "Preprint", role: "Co-author", url: "https://doi.org/10.21203/rs.3.rs-9325069/v1" },
  { year: 2026, title: "Postpartum brain reveals repopulating process and long-lasting proteomic changes of microglia", journal: "Glia", authors: "Chan Rim, Min-Jung You, Dongyoon Shin et al.", type: "Research article", role: "Co-first author", featured: true, url: "https://doi.org/10.1002/glia.70088" },
  { year: 2025, title: "Nuclear profilin-1 for DNA damage repair is involved in phagocytic impairment of senescent microglia", journal: "Glia", authors: "Chan Rim et al.", type: "Research article", role: "First author", featured: true, url: "https://doi.org/10.1002/glia.70028" },
  { year: 2024, title: "Emerging role of senescent microglia in brain aging-related neurodegenerative diseases", journal: "Translational Neurodegeneration", authors: "Chan Rim, Min-Jung You et al.", type: "Review", role: "Co-first author", featured: true, url: "https://doi.org/10.1186/s40035-024-00402-3" },
  { year: 2023, title: "Possible involvement of peripheral IL-10 and microglia in postpartum depression", journal: "Frontiers in Cellular Neuroscience", authors: "Hui-Ju Kim et al.", type: "Research article", role: "Co-author", url: "https://doi.org/10.3389/fncel.2023.1162966" },
  { year: 2023, title: "A molecular characterization and clinical relevance of microglia-like cells derived from patients with panic disorder", journal: "Translational Psychiatry", authors: "Min-Jung You, Chan Rim, Minji Bang et al.", type: "Research article", role: "Co-first author", featured: true, url: "https://doi.org/10.1038/s41398-023-02342-4" },
  { year: 2022, title: "Microglia involvement in sex-dependent behaviors and schizophrenia occurrence in offspring with maternal dexamethasone exposure", journal: "Schizophrenia", authors: "Chan Rim, Hyun-Sun Park et al.", type: "Research article", role: "Co-first author", featured: true, url: "https://doi.org/10.1038/s41537-022-00280-6" },
  { year: 2022, title: "Fluoxetine decreases phagocytic function via REV-ERBα in microglia", journal: "Neurochemical Research", authors: "Da-Yoon Jang et al.", type: "Research article", role: "Co-author", url: "https://doi.org/10.1007/s11064-022-03733-7" },
  { year: 2022, title: "Possible role of arginase 1 positive microglia on depressive/anxiety-like behaviors in atopic dermatitis mouse model", journal: "Archives of Pharmacal Research", authors: "Bohyun Yang et al.", type: "Research article", role: "Co-author", url: "https://doi.org/10.1007/s12272-022-01369-3" },
  { year: 2022, title: "Persistent acidic environment induces impaired phagocytosis via ERK in microglia", journal: "Neurochemical Research", authors: "Kyu-Beom Jang et al.", type: "Research article", role: "Co-author", url: "https://doi.org/10.1007/s11064-022-03533-z" },
  { year: 2021, title: "A new method for obtaining bankable and expandable adult-like microglial cells", journal: "Journal of Neuroinflammation", authors: "Min-Jung You et al.", type: "Research article", role: "Co-author", url: "https://doi.org/10.1186/s12974-021-02351-4" },
];

const publicationsKo = [
  { year: 2026, title: "MDM2 연관 미세아교세포 기능장애와 강박장애", journal: "Research Square", authors: "Soyoung Sung et al.", type: "프리프린트", role: "공동저자", url: "https://doi.org/10.21203/rs.3.rs-9325069/v1" },
  { year: 2026, title: "산후 뇌에서 미세아교세포가 다시 채워지는 과정과 장기적인 단백질체 변화", journal: "Glia", authors: "Chan Rim, Min-Jung You, Dongyoon Shin et al.", type: "연구 논문", role: "공동 제1저자", featured: true, url: "https://doi.org/10.1002/glia.70088" },
  { year: 2025, title: "노화 미세아교세포의 DNA 손상 복구에 관여하는 핵 내 profilin-1과 식균작용 저하", journal: "Glia", authors: "Chan Rim et al.", type: "연구 논문", role: "제1저자", featured: true, url: "https://doi.org/10.1002/glia.70028" },
  { year: 2024, title: "뇌 노화 관련 퇴행성 뇌질환에서 노화 미세아교세포의 새로운 역할", journal: "Translational Neurodegeneration", authors: "Chan Rim, Min-Jung You et al.", type: "리뷰", role: "공동 제1저자", featured: true, url: "https://doi.org/10.1186/s40035-024-00402-3" },
  { year: 2023, title: "산후우울증에서 말초 IL-10과 미세아교세포의 관련 가능성", journal: "Frontiers in Cellular Neuroscience", authors: "Hui-Ju Kim et al.", type: "연구 논문", role: "공동저자", url: "https://doi.org/10.3389/fncel.2023.1162966" },
  { year: 2023, title: "공황장애 환자 유래 미세아교세포 유사 세포의 분자 특성과 임상적 의미", journal: "Translational Psychiatry", authors: "Min-Jung You, Chan Rim, Minji Bang et al.", type: "연구 논문", role: "공동 제1저자", featured: true, url: "https://doi.org/10.1038/s41398-023-02342-4" },
  { year: 2022, title: "어미의 dexamethasone 노출 뒤 태어난 자녀에서 미세아교세포와 성별에 따른 행동·조현병 발생의 관련성", journal: "Schizophrenia", authors: "Chan Rim, Hyun-Sun Park et al.", type: "연구 논문", role: "공동 제1저자", featured: true, url: "https://doi.org/10.1038/s41537-022-00280-6" },
  { year: 2022, title: "Fluoxetine이 REV-ERBα를 통해 미세아교세포의 식균작용을 낮추는 과정", journal: "Neurochemical Research", authors: "Da-Yoon Jang et al.", type: "연구 논문", role: "공동저자", url: "https://doi.org/10.1007/s11064-022-03733-7" },
  { year: 2022, title: "아토피 피부염 동물모델에서 arginase 1 양성 미세아교세포와 우울·불안 행동의 관련 가능성", journal: "Archives of Pharmacal Research", authors: "Bohyun Yang et al.", type: "연구 논문", role: "공동저자", url: "https://doi.org/10.1007/s12272-022-01369-3" },
  { year: 2022, title: "지속적인 산성 환경이 ERK를 통해 미세아교세포의 식균작용을 떨어뜨리는 과정", journal: "Neurochemical Research", authors: "Kyu-Beom Jang et al.", type: "연구 논문", role: "공동저자", url: "https://doi.org/10.1007/s11064-022-03533-z" },
  { year: 2021, title: "성인형 미세아교세포를 안정적으로 확보하고 증식시키는 새로운 방법", journal: "Journal of Neuroinflammation", authors: "Min-Jung You et al.", type: "연구 논문", role: "공동저자", url: "https://doi.org/10.1186/s12974-021-02351-4" },
];

const isKorean = document.body.dataset.lang === "ko";
const $ = (selector, scope = document) => scope.querySelector(selector);
const $$ = (selector, scope = document) => [...scope.querySelectorAll(selector)];

const lensContent = {
  repair: {
    image: "assets/paper-figures/pfn1-dna-damage-localization.png",
    alt: isKorean ? "미세아교세포의 DNA 손상 표지와 profilin-1 위치" : "DNA damage markers and profilin-1 localization in microglia",
    title: isKorean ? "핵으로 이동하는 profilin-1" : "Profilin-1 moves into the nucleus",
    question: isKorean ? "DNA 이중가닥 절단 뒤 PFN1은 핵으로 이동해 복구를 돕지만, 노화 미세아교세포에서는 이 균형의 붕괴가 식균작용 저하와 연결됩니다." : "After DNA double-strand breaks, PFN1 enters the nucleus to support repair; in senescent microglia, disruption of this balance is linked to impaired phagocytosis.",
    evidence: isKorean ? "제1저자 · Glia 2025 · DSB · NHEJ · nuclear F-actin" : "First author · Glia 2025 · DSB · NHEJ · nuclear F-actin",
  },
  patient: {
    image: "assets/paper-figures/panic-disorder-img-phagocytosis.png",
    alt: isKorean ? "공황장애 환자 유래 미세아교세포 유사 세포의 식균작용" : "Phagocytosis in panic-disorder-derived microglia-like cells",
    title: isKorean ? "환자에서 세포로 이어지는 단서" : "From patient to cellular mechanism",
    question: isKorean ? "공황장애 환자 유래 iMG는 식균작용이 감소하고 TREM2 발현이 증가했으며, 일부 변화는 공황장애의 임상 중증도와 연결됐습니다." : "Panic-disorder-derived iMGs showed reduced phagocytosis and increased TREM2 expression, with cellular changes linked to clinical severity.",
    evidence: isKorean ? "공동 제1저자 · Translational Psychiatry 2023 · patient-derived iMG · TREM2" : "Co-first author · Translational Psychiatry 2023 · patient-derived iMG · TREM2",
  },
  repopulation: {
    image: "assets/fluorescently-labeled-microglia-in-a-coronal-brain.jpg",
    alt: isKorean ? "붉은 형광으로 미세아교세포가 표지된 생쥐 뇌 관상면" : "Coronal mouse brain section with microglia labelled red",
    title: isKorean ? "산후 뇌를 다시 채우는 세포" : "Cells repopulating the postpartum brain",
    question: isKorean ? "출산 뒤 감소한 해마 미세아교세포는 말초 세포의 유입이 아니라 resident microglia의 증식으로 회복되며, 장기적인 단백질체 변화를 남깁니다." : "After parturition, reduced hippocampal microglia recover through resident-cell proliferation rather than peripheral infiltration, while leaving long-lasting proteomic changes.",
    evidence: isKorean ? "공동 제1저자 · Glia 2026 · resident proliferation · LC–MS/MS" : "Co-first author · Glia 2026 · resident proliferation · LC–MS/MS",
  },
  development: {
    image: "assets/paper-figures/developmental-synaptic-engulfment.png",
    alt: isKorean ? "태아기 dexamethasone 노출 뒤 미세아교세포의 시냅스 포식" : "Microglial engulfment of synaptic markers after prenatal dexamethasone exposure",
    title: isKorean ? "태아기 환경이 남기는 성별 차이" : "Prenatal stress leaves sex- and region-specific traces",
    question: isKorean ? "태아기 dexamethasone 노출은 수컷의 조현병 관련 행동과 전전두엽 미세아교세포 변화를, 암컷의 우울 유사 행동과 해마 염증 반응을 다르게 유도했습니다." : "Prenatal dexamethasone produced schizophrenia-relevant behaviours in male offspring and depressive-like behaviours in females, accompanied by distinct microglial changes across the mPFC and hippocampus.",
    evidence: isKorean ? "공동 제1저자 · Schizophrenia 2022 · prenatal DEX · sex difference" : "Co-first author · Schizophrenia 2022 · prenatal DEX · synaptic pruning",
    papers: [{ label: isKorean ? "Schizophrenia, 2022 · 공동 제1저자" : "Schizophrenia, 2022 · Co-first author", url: "https://doi.org/10.1038/s41537-022-00280-6" }],
    fit: "contain",
  },
  adulthood: {
    image: "assets/paper-figures/panic-disorder-img-phagocytosis.png",
    alt: isKorean ? "공황장애 환자 유래 미세아교세포 유사 세포의 식균작용" : "Phagocytosis in panic-disorder-derived microglia-like cells",
    title: isKorean ? "환자 유래 세포가 분자 변화와 증상을 잇습니다" : "Patient-derived cells connect molecular change to symptoms",
    question: isKorean ? "공황장애 환자 유래 iMG에서는 식균작용이 감소하고 TREM2가 증가했으며, ACAT2 증가를 포함해 콜레스테롤 생합성과 스테로이드 대사가 달라졌습니다." : "Panic-disorder-derived iMGs showed reduced phagocytosis, increased TREM2 and altered cholesterol biosynthesis and steroid metabolism, including elevated ACAT2.",
    evidence: isKorean ? "공동 제1저자 · Translational Psychiatry 2023 · 환자 17명 / 대조군 16명 · RNA-seq · ACAT2" : "Co-first author · Translational Psychiatry 2023 · 17 PD / 16 controls · RNA-seq · ACAT2",
    papers: [{ label: isKorean ? "Translational Psychiatry, 2023 · 공동 제1저자" : "Translational Psychiatry, 2023 · Co-first author", url: "https://doi.org/10.1038/s41398-023-02342-4" }],
    fit: "contain",
  },
  aging: {
    image: "assets/paper-figures/pfn1-dna-damage-localization.png",
    alt: isKorean ? "미세아교세포의 profilin-1 위치와 DNA 손상 표지" : "Profilin-1 localization and DNA damage markers in microglia",
    title: isKorean ? "DNA 복구는 미세아교세포 노화의 핵심 특징입니다" : "DNA repair becomes a hallmark of microglial aging",
    question: isKorean ? "DNA 손상 뒤 PFN1은 핵으로 이동해 비상동 말단 연결 복구를 돕습니다. 노화 미세아교세포에서는 PFN1의 핵 내 잔류와 응집이 식균작용 저하와 함께 나타납니다." : "PFN1 enters the nucleus after DNA damage to support non-homologous end joining. In senescent microglia, nuclear retention and aggregation of PFN1 accompany impaired phagocytosis.",
    evidence: isKorean ? "제1저자 · Glia 2025 · DNA 손상 · NHEJ · 핵 내 F-actin" : "First author · Glia 2025 · DNA damage · NHEJ · nuclear F-actin",
    papers: [
      { label: isKorean ? "Translational Neurodegeneration, 2024 · 공동 제1저자 · 리뷰" : "Translational Neurodegeneration, 2024 · Co-first author · Review", url: "https://doi.org/10.1186/s40035-024-00402-3" },
      { label: isKorean ? "Glia, 2025 · 제1저자" : "Glia, 2025 · First author", url: "https://doi.org/10.1002/glia.70028" },
    ],
    fit: "contain",
  },
};

function renderPublications(year = "featured") {
  const list = $("#publication-list");
  if (!list) return;
  const currentPublications = isKorean ? publicationsKo : publications;
  const filtered = year === "all" ? currentPublications : year === "featured" ? currentPublications.filter((paper) => paper.featured) : currentPublications.filter((paper) => String(paper.year) === year);
  const years = [...new Set(filtered.map((paper) => paper.year))].sort((a, b) => b - a);
  list.innerHTML = years.map((groupYear) => {
    const group = filtered.filter((paper) => paper.year === groupYear);
    return `<section class="publication-group" aria-labelledby="year-${groupYear}"><h3 class="publication-year" id="year-${groupYear}">${groupYear}</h3>${group.map((paper) => `<article class="publication-item"><div><h4 class="publication-title">${paper.title}</h4></div><p class="publication-meta">${paper.journal} · ${paper.type}<br>${paper.authors} · ${paper.role}</p><a class="publication-link" href="${paper.url}" target="_blank" rel="noreferrer" aria-label="${isKorean ? "논문 열기" : "Open paper"}: ${paper.title}">↗</a></article>`).join("")}</section>`;
  }).join("");
  const count = $("#publication-count");
  if (count) count.textContent = isKorean ? `${filtered.length}편` : `${filtered.length} ${filtered.length === 1 ? "paper" : "papers"}`;
}

function observeReveals() {
  const items = $$('[data-reveal]:not(.is-in)');
  if (!("IntersectionObserver" in window)) { items.forEach((item) => item.classList.add("is-in")); return; }
  const observer = new IntersectionObserver((entries, currentObserver) => entries.forEach((entry) => { if (entry.isIntersecting) { entry.target.classList.add("is-in"); currentObserver.unobserve(entry.target); } }), { rootMargin: "0px 0px -12% 0px", threshold: 0.08 });
  items.forEach((item) => observer.observe(item));
}

function setupLens() {
  const tabs = $$(".lens-tab");
  const image = $("#lens-image");
  const picture = $(".lens-picture");
  if (!tabs.length || !image || !picture) return;
  tabs.map((tab) => lensContent[tab.dataset.lensKey]).filter(Boolean).forEach((item) => { const preload = new Image(); preload.src = item.image; });
  const activate = (tab) => {
    const item = lensContent[tab.dataset.lensKey];
    if (!item) return;
    tabs.forEach((current) => { current.classList.toggle("is-active", current === tab); current.setAttribute("aria-selected", String(current === tab)); current.tabIndex = current === tab ? 0 : -1; });
    picture.classList.add("is-changing");
    window.setTimeout(() => {
      image.src = item.image; image.alt = item.alt;
      image.style.objectFit = item.fit || "cover";
      image.style.objectPosition = item.position || "center";
      $("#lens-title").textContent = item.title;
      $("#lens-question").textContent = item.question;
      const papers = (item.papers || []).map((paper) => `<a href="${paper.url}" target="_blank" rel="noreferrer">${paper.label}</a>`).join("");
      $("#lens-evidence").innerHTML = `<strong>${isKorean ? "연결된 논문" : "My papers"}</strong><span class="lens-paper-links">${papers || item.evidence}</span>`;
      picture.classList.remove("is-changing");
    }, 220);
  };
  tabs.forEach((tab, index) => {
    tab.addEventListener("click", () => activate(tab));
    tab.addEventListener("keydown", (event) => {
      if (!["ArrowRight", "ArrowLeft", "ArrowDown", "ArrowUp"].includes(event.key)) return;
      event.preventDefault();
      const direction = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
      const next = tabs[(index + direction + tabs.length) % tabs.length]; next.focus(); activate(next);
    });
  });
}

function setupNavigation() {
  const toggle = $(".menu-toggle"); const nav = $("#site-nav");
  if (!toggle || !nav) return;
  toggle.addEventListener("click", () => { const open = toggle.classList.toggle("is-open"); nav.classList.toggle("is-open", open); toggle.setAttribute("aria-expanded", String(open)); });
  $$(".site-nav a").forEach((link) => link.addEventListener("click", () => { toggle.classList.remove("is-open"); nav.classList.remove("is-open"); toggle.setAttribute("aria-expanded", "false"); }));
}

function setupFilters() {
  $$(".filter-button").forEach((button) => {
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(button.classList.contains("is-active")));
    button.addEventListener("click", () => {
      $$(".filter-button").forEach((item) => { item.classList.remove("is-active"); item.setAttribute("aria-selected", "false"); });
      button.classList.add("is-active"); button.setAttribute("aria-selected", "true"); renderPublications(button.dataset.year);
    });
  });
}

function setupVideo() {
  const calm = matchMedia("(prefers-reduced-motion: reduce)");
  const videos = $$('video[autoplay]');
  if (!videos.length) return;
  const visible = new Set();
  const sync = (video) => { if (calm.matches || !visible.has(video)) video.pause(); else video.play().catch(() => {}); };
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => { if (entry.isIntersecting) visible.add(entry.target); else visible.delete(entry.target); sync(entry.target); }), { threshold: 0.2 });
  videos.forEach((video) => observer.observe(video));
  calm.addEventListener("change", () => videos.forEach(sync));
}

const year = $("#year");
if (year) year.textContent = new Date().getFullYear();
renderPublications();
setupLens();
setupFilters();
setupNavigation();
setupVideo();
observeReveals();
