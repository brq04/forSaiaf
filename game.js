// ===== إعداداتك =====
// رقمك للواتساب بالصيغة الدولية بدون + وبدون صفر، مثل "9665XXXXXXXX".
// لو تركته فاضي يفتح واتساب ويخلّيه يختار المحادثة.
const WHATSAPP_NUMBER = "966563253823";
// قفل خفيف: اكتبي سؤال وجواب يعرفونه انتم الثنين. لو الجواب فاضي ينلغي القفل.
// (الجواب يظهر لمن يفتح الكود، فهذا حاجز بسيط مو حماية.)
const GATE = { question: "What song did you send me that i still love listening to ", answer: "neon kitchen" };

const store = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch {} }
};

const dates = [
  ["ديت فود تركس", ["فود ترك", "فود تركس", "عربات اكل", "food trucks"]],
  ["ديت سيارة أح", ["سيارة", "لفة بالسيارة"]],
  ["ديت مكتبة وو الخ", ["مكتبة", "كتب"]],
  ["ديت حديقة ", ["حديقة", "بارك"]],
  ["ديت سرير", ["سرير"]],
  ["نجرب مطاعم", ["مطاعم", "مطعم"]],
  ["عشوائية بشكل", ["عشوائية", "طلعة عشوائية"]],
  ["بحر مدري كيف", ["بحر"]],
  ["ديت شواية الخليج ", ["شواية الخليج", "شواية"]],
  ["ايكيا اح", ["ايكيا", "ikea"]],
  ["ديت مكتبة مره ثانيه ونقرإ كتب ونشتغل", ["مكتبة مرة ثانية", "نقرا ونشتغل"]],
  ["مطل ونسولف", ["مطل", "نسولف"]],
  ["ديت رسم", ["رسم"]],
  ["ديت ناكل مطاعم عشوائيه ", ["مطعم ", "اكل"]],
  ["نرسم على ظهر بعض", ["نرسم على ظهر بعض", "ظهر بعض"]],
  ["ديت سياكل", ["سياكل", "دراجات"]],
  ["ابحر", ["بحر", "البحر"]],
  ["ديت نصنع فخّار", ["فخار"]],
  ["بوليفارد وورلد وناكل", ["بوليفارد وورلد", "بوليفارد"]],
  ["الدرعية ديت وغيوم وفخامه", ["الدرعية", "درعية"]],
  ["ديت نروح كرفان ورومانسيه ونطبخ سوا اه", ["كرفان", "نطبخ سوا"]],
  ["نحجز شقة وتكون مطله على المالية او فوووق", ["المالية", "شقة", "كافد", "kafd"]]
];

const rounds = [
  {
    clue: "وش كنت أقول لنفسي بالبداية عشان أجحد اللي أحس فيه؟",
    answers: ["تسلية", "طقطقة", "وناسة", "just for fun", "for fun"],
    hint: "كنت أقول عادي، بس تـ…",
    story: "كنت أحاول أجحدها كثر ما أقدر وأقول بس تسلية. وبعدين أسكّر الكول وأستوعب إن عندي سبب جديد أبيك عشانه بحياتي."
  },
  {
    clue: "وش الحركة اللي أحبها حتى قبل ما تضحكني فعلاً؟",
    answers: ["تحاول تضحكني", "تضحكني", "يضحكني", "تحاول تخليني اضحك", "محاولتك", "المحاولة", "الضحك"],
    hint: "أحب المحاولة نفسها، حتى قبل لا أضحك.",
    story: "أهخ محد يفهم قد ايش أحب لما يحاول يضحكني. المحاولة لحالها شي أحبه فيك."
  },
  {
    clue: "إذا قدرت أكون أنا على طبيعتي معك، وش الإحساس اللي يجيني؟",
    answers: ["أمان", "الأمان", "راحة", "الراحة", "ارتياح", "safe"],
    hint: "أقدر أقول لك اللي براسي وأنا مرتاح.",
    story: "أحس بأمان معك. أحب قد إيش تحاول تفهمني حتى لما أنا ألخبط وأنا أحاول أقول لك وش فيني."
  },
  {
    clue: "وش ردة فعلك اللي إذا شفتها أقول بيني وبين نفسي «أحبب مره»؟",
    answers: ["غيرة", "الغيرة", "غيرتك", "تغار", "أغار", "jealous"],
    hint: "تغـ… علي.",
    story: "لما تغار علي أحبب مره. ألاحظها وأبتسم، وأحيانًا أقعد أفكر فيها بعد ما تخلص السالفة."
  },
  {
    clue: "فيه شي من لبسك يستاهل جولة كاملة عندي. وش هو؟",
    answers: ["تيشرتاتك", "تيشرتاتي", "تيشرتات", "تيشيرتاتك", "تيشيرتاتي", "تيشرت", "تيشيرت", "قمصان", "t shirts", "tshirts"],
    hint: "شي تلبسه وعندك منه أشياء حلوة.",
    story: "عنده تيشرتات حلوه. وإيه، هذي سالفة تستاهل جولة كاملة."
  },
  {
    clue: "خمن ديت واحد من اللي ودي نطلعه سوا.",
    hint: "ممكن أكل، كتب، أو شي نسويه بيدنا.",
    story: "ودي نطلع ديتس كثير. ودي نجلس لحالنا بين فترة وفترة، ونطلع ونجرب أشياء سوا."
  }
];

const byId = id => document.getElementById(id);
const clue = byId("clue");
const form = byId("guess");
const input = byId("answer");
const feedback = byId("feedback");
const actions = byId("actions");
const card = byId("reveal-card");
const progress = byId("progress");
const unlockedSections = ["notes", "dates", "talk", "reply"].map(byId);
const chips = [];

let roundIndex = Math.min(Number(store.get("round")) || 0, rounds.length);
let lastDate = -1;
progress.max = rounds.length;

// Same cleanup for guesses and aliases: diacritics, tatweel, alef forms,
// ة/ه, ى/ي, stretched letters, and the ال / بال / وال / لل prefixes.
const stem = word => word.replace(/^(وال|بال|كال|فال|لل|ال)(?=.{2})/, "");

function normalize(text) {
  return text.toLowerCase()
    .replace(/[\u064B-\u065F\u0670\u0640]/g, "")
    .replace(/[أإآٱ]/g, "ا")
    .replace(/ة/g, "ه")
    .replace(/ى/g, "ي")
    .replace(/(.)\1{2,}/gu, "$1")
    .replace(/[^\p{L}\p{N}\s]/gu, " ")
    .split(/\s+/)
    .filter(Boolean)
    .map(stem)
    .join(" ");
}

const matches = (guess, aliases) =>
  aliases.some(alias => ` ${guess} `.includes(` ${normalize(alias)} `));

const dateAliases = dates.flatMap(([title, aliases]) =>
  aliases.map(alias => ({ title, alias: normalize(alias) }))
).sort((a, b) => b.alias.length - a.alias.length); // specific beats generic («مطعم هندي» > «مطعم»)

function renderRound({ focus = true } = {}) {
  const finished = roundIndex === rounds.length;

  byId("round").textContent = finished
    ? "من برق، لك أنت"
    : `Round ${roundIndex + 1} / ${rounds.length}`;
  clue.textContent = finished ? "أحبك يا سياف." : rounds[roundIndex].clue;
  progress.value = roundIndex;
  form.hidden = finished;
  actions.hidden = finished;
  card.hidden = true;
  byId("ending").hidden = !finished;
  for (const section of unlockedSections) section.hidden = !finished;
  input.value = "";
  feedback.textContent = "";

  if (focus) clue.focus();
}

function showAnswer(solution, guessed) {
  form.hidden = true;
  actions.hidden = true;
  progress.value = roundIndex + 1;
  feedback.textContent = guessed ? "إيه، جبتها ♥" : "";
  byId("solution").textContent = solution;
  byId("story").textContent = rounds[roundIndex].story;
  byId("next").textContent = roundIndex === rounds.length - 1
    ? "افتح الرسالة ←"
    : "الجولة اللي بعدها ←";
  card.hidden = false;
  byId("solution").focus();
}

form.addEventListener("submit", event => {
  event.preventDefault();

  const guess = normalize(input.value);
  const { answers } = rounds[roundIndex];
  if (!guess) {
    feedback.textContent = "اكتب كلمة أو عبارة عشان أخمّن وش تقصد.";
    return;
  }

  if (answers) {
    if (matches(guess, answers)) {
      showAnswer(answers[0], true);
    } else {
      feedback.textContent = "جرّب كلمة ثانية، أو خذ Hint.";
    }
    return;
  }

  const hit = dateAliases.find(({ alias }) => ` ${guess} `.includes(` ${alias} `));
  if (hit) {
    showAnswer(hit.title, true);
  } else {
    feedback.textContent = "للحين ما جبت شي من قائمتي. جرّب مرة ثانية.";
  }
});

byId("hint").addEventListener("click", () => {
  feedback.textContent = rounds[roundIndex].hint;
  input.focus();
});

byId("reveal").addEventListener("click", () => {
  const round = rounds[roundIndex];
  const solution = round.answers
    ? round.answers[0]
    : dates[Math.floor(Math.random() * dates.length)][0];
  showAnswer(solution, false);
});

byId("next").addEventListener("click", () => {
  roundIndex++;
  store.set("round", roundIndex);
  renderRound();
  if (roundIndex === rounds.length) hearts();
});

byId("restart").addEventListener("click", () => {
  roundIndex = 0;
  store.set("round", 0);
  lastDate = -1;
  byId("date-pick").textContent = "";
  chips.forEach(chip => chip.classList.remove("picked"));
  renderRound();
  byId("game").scrollIntoView({ block: "start" });
});

byId("draw").addEventListener("click", () => {
  const choices = dates.map((_, index) => index).filter(index => index !== lastDate);
  lastDate = choices[Math.floor(Math.random() * choices.length)];
  byId("date-pick").textContent = `طلعت لنا — ${dates[lastDate][0]}`;
  chips.forEach((chip, index) => chip.classList.toggle("picked", index === lastDate));
});

for (const [title] of dates) {
  const item = document.createElement("li");
  item.textContent = title;
  byId("date-list").append(item);
  chips.push(item);
}

renderRound({ focus: false });

// ===== قلوب النهاية =====
function hearts() {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  for (let i = 0; i < 26; i++) {
    const heart = document.createElement("span");
    heart.className = "heart";
    heart.setAttribute("aria-hidden", "true");
    heart.textContent = "♥";
    heart.style.cssText = `left:${Math.random() * 100}vw;font-size:${14 + Math.random() * 22}px;` +
      `animation-duration:${3 + Math.random() * 3}s;animation-delay:${Math.random() * 1.5}s`;
    document.body.append(heart);
    setTimeout(() => heart.remove(), 7500);
  }
}

// ===== اسحب سؤال =====
const questions = [
  "وش أكثر لحظة بيننا حسيت فيها بالراحة؟",
  "وش شي صغير أقدر أسويه ويخليك تحس إني قريبة منك؟",
  "لو نبي نتكلم عن علاقتنا، وش الطريقة اللي تريحك؟ كلام مباشر ولا نمشيها تدريجي؟",
  "وش شي تتمنى أعرفه عنك بدون ما تضطر تشرحه؟",
  "وش أحلى شي صار بيننا من أول كول؟",
  "وش شي تحب تسمعه مني أكثر؟",
  "لو نطلع ديت اليوم، وش تبي نسوي؟",
  "وش شي تحس إنه تغيّر فيك من يوم عرفتني؟"
];
let lastQuestion = -1;

byId("ask").addEventListener("click", () => {
  const choices = questions.map((_, index) => index).filter(index => index !== lastQuestion);
  lastQuestion = choices[Math.floor(Math.random() * choices.length)];
  byId("question-pick").textContent = questions[lastQuestion];
});

// ===== الرد =====
const replyText = byId("reply-text");
const replyMsg = byId("reply-msg");

byId("send").addEventListener("click", () => {
  const text = replyText.value.trim();
  if (!text) { replyMsg.textContent = "اكتب شي أول، حتى لو كلمة."; return; }
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
  replyMsg.textContent = "";
});

byId("copy").addEventListener("click", async () => {
  const text = replyText.value.trim();
  if (!text) { replyMsg.textContent = "اكتب شي أول، حتى لو كلمة."; return; }
  try {
    await navigator.clipboard.writeText(text);
    replyMsg.textContent = "اننسخ ♥";
  } catch {
    replyText.select();
    replyMsg.textContent = "حدد الكلام وانسخه من عندك.";
  }
});

// ===== القفل الخفيف =====
if (GATE.answer && store.get("gate") !== "ok") {
  const gate = byId("gate");
  document.body.classList.add("locked");
  gate.hidden = false;
  byId("gate-q").textContent = GATE.question;
  byId("gate-form").addEventListener("submit", event => {
    event.preventDefault();
    if (normalize(byId("gate-answer").value) === normalize(GATE.answer)) {
      store.set("gate", "ok");
      document.body.classList.remove("locked");
      gate.hidden = true;
    } else {
      byId("gate-msg").textContent = "مو هذي. جرّب مرة ثانية.";
    }
  });
}
