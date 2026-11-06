/* =========================================================================
   MODEL PAPERS (मॉडल पेपर) — full exam-pattern practice papers
   -------------------------------------------------------------------------
   हर बार "नया पेपर" दबाने पर प्रश्न-बैंक से इसी पैटर्न पर नया पेपर बनता है।
   पैटर्न बदलने पर यहाँ संख्या बदलें:
     q      = प्रश्नों की संख्या
     marks  = हर सही उत्तर के अंक
     neg    = हर गलत उत्तर पर कटने वाले अंक (0 = कोई कटौती नहीं)
     mins   = उस ब्लॉक (सेक्शन या सत्र) का समय, मिनट में
     from   = किस विषय से प्रश्न आएँगे, और कितना हिस्सा (कुल 1)
   Patterns checked on 23 Oct 2026 against the latest notifications
   (SSC CPO & Selection Post 2026, RRB ALP CEN 01/2026, RRB Group D CEN 09/2025,
   IBPS PO CRP-XVI, IBPS Clerk CSA-XVI, SBI PO & Clerk 2026-27).
   Always confirm with the official notification.
   ========================================================================= */
window.PAPERS = [
  {
    id: "ssc-cgl", exam: "ssc-cgl", name: "SSC CGL Tier-I", name_hi: "SSC CGL टियर-I", family: "ssc",
    note_en: "15 minutes for each section. You cannot go back to a section after it ends.",
    note_hi: "हर सेक्शन के लिए 15 मिनट। सेक्शन खत्म होने के बाद उसमें वापस नहीं जा सकते।",
    blocks: [
      { mins: 15, sections: [{ en: "General Intelligence & Reasoning", hi: "सामान्य बुद्धि और तर्कशक्ति", q: 25, marks: 2, neg: 0.5, from: { reasoning: 1 } }] },
      { mins: 15, sections: [{ en: "General Awareness", hi: "सामान्य जागरूकता", q: 25, marks: 2, neg: 0.5, from: { gk: 0.6, science: 0.4 } }] },
      { mins: 15, sections: [{ en: "Quantitative Aptitude", hi: "संख्यात्मक अभियोग्यता", q: 25, marks: 2, neg: 0.5, from: { maths: 1 } }] },
      { mins: 15, sections: [{ en: "English Comprehension", hi: "अंग्रेज़ी", q: 25, marks: 2, neg: 0.5, from: { english: 1 } }] }
    ]
  },
  {
    id: "ssc-chsl", exam: "ssc-chsl", name: "SSC CHSL Tier-I", name_hi: "SSC CHSL टियर-I", family: "ssc",
    note_en: "15 minutes for each section. You cannot go back to a section after it ends.",
    note_hi: "हर सेक्शन के लिए 15 मिनट। सेक्शन खत्म होने के बाद उसमें वापस नहीं जा सकते।",
    blocks: [
      { mins: 15, sections: [{ en: "English Language", hi: "अंग्रेज़ी भाषा", q: 25, marks: 2, neg: 0.5, from: { english: 1 } }] },
      { mins: 15, sections: [{ en: "General Intelligence", hi: "सामान्य बुद्धि", q: 25, marks: 2, neg: 0.5, from: { reasoning: 1 } }] },
      { mins: 15, sections: [{ en: "Quantitative Aptitude", hi: "संख्यात्मक अभियोग्यता", q: 25, marks: 2, neg: 0.5, from: { maths: 1 } }] },
      { mins: 15, sections: [{ en: "General Awareness", hi: "सामान्य जागरूकता", q: 25, marks: 2, neg: 0.5, from: { gk: 0.6, science: 0.4 } }] }
    ]
  },
  {
    id: "ssc-mts", exam: "ssc-mts", name: "SSC MTS", name_hi: "SSC MTS", family: "ssc",
    note_en: "Two sessions of 45 minutes. No negative marking in Session I; 1 mark is cut for each wrong answer in Session II.",
    note_hi: "45-45 मिनट के दो सत्र। सत्र I में कोई नकारात्मक अंकन नहीं; सत्र II में हर गलत उत्तर पर 1 अंक कटता है।",
    blocks: [
      { mins: 45, en: "Session I", hi: "सत्र I", sections: [
        { en: "Numerical & Mathematical Ability", hi: "संख्यात्मक व गणितीय योग्यता", q: 20, marks: 3, neg: 0, from: { maths: 1 } },
        { en: "Reasoning Ability & Problem Solving", hi: "तर्कशक्ति व समस्या समाधान", q: 20, marks: 3, neg: 0, from: { reasoning: 1 } }] },
      { mins: 45, en: "Session II", hi: "सत्र II", sections: [
        { en: "General Awareness", hi: "सामान्य जागरूकता", q: 25, marks: 3, neg: 1, from: { gk: 0.6, science: 0.4 } },
        { en: "English Language & Comprehension", hi: "अंग्रेज़ी भाषा व बोध", q: 25, marks: 3, neg: 1, from: { english: 1 } }] }
    ]
  },
  {
    id: "ssc-gd", exam: "ssc-gd", name: "SSC GD Constable", name_hi: "SSC GD कांस्टेबल", family: "ssc",
    note_en: "One timer of 60 minutes for the whole paper.",
    note_hi: "पूरे पेपर के लिए 60 मिनट का एक ही समय।",
    blocks: [
      { mins: 60, sections: [
        { en: "General Intelligence & Reasoning", hi: "सामान्य बुद्धि और तर्कशक्ति", q: 20, marks: 2, neg: 0.25, from: { reasoning: 1 } },
        { en: "General Knowledge & General Awareness", hi: "सामान्य ज्ञान और जागरूकता", q: 20, marks: 2, neg: 0.25, from: { gk: 0.6, science: 0.4 } },
        { en: "Elementary Mathematics", hi: "प्रारंभिक गणित", q: 20, marks: 2, neg: 0.25, from: { maths: 1 } },
        { en: "English", hi: "अंग्रेज़ी", q: 20, marks: 2, neg: 0.25, from: { english: 1 } }] }
    ]
  },
  {
    id: "rrb-ntpc", exam: "rrb-ntpc", name: "RRB NTPC CBT-1", name_hi: "RRB NTPC CBT-1", family: "railway",
    note_en: "One timer of 90 minutes for the whole paper.",
    note_hi: "पूरे पेपर के लिए 90 मिनट का एक ही समय।",
    blocks: [
      { mins: 90, sections: [
        { en: "General Awareness", hi: "सामान्य जागरूकता", q: 40, marks: 1, neg: 1 / 3, from: { gk: 0.6, science: 0.25, computer: 0.15 } },
        { en: "Mathematics", hi: "गणित", q: 30, marks: 1, neg: 1 / 3, from: { maths: 1 } },
        { en: "General Intelligence & Reasoning", hi: "सामान्य बुद्धि और तर्कशक्ति", q: 30, marks: 1, neg: 1 / 3, from: { reasoning: 1 } }] }
    ]
  },
  {
    id: "rrb-group-d", exam: "rrb-group-d", name: "RRB Group D CBT", name_hi: "RRB ग्रुप D CBT", family: "railway",
    note_en: "One timer of 90 minutes for the whole paper.",
    note_hi: "पूरे पेपर के लिए 90 मिनट का एक ही समय।",
    blocks: [
      { mins: 90, sections: [
        { en: "General Science", hi: "सामान्य विज्ञान", q: 25, marks: 1, neg: 1 / 3, from: { science: 1 } },
        { en: "Mathematics", hi: "गणित", q: 25, marks: 1, neg: 1 / 3, from: { maths: 1 } },
        { en: "General Intelligence & Reasoning", hi: "सामान्य बुद्धि और तर्कशक्ति", q: 30, marks: 1, neg: 1 / 3, from: { reasoning: 1 } },
        { en: "General Awareness", hi: "सामान्य जागरूकता", q: 20, marks: 1, neg: 1 / 3, from: { gk: 1 } }] }
    ]
  },
  {
    id: "ssc-cpo", exam: "ssc-cpo", name: "SSC CPO Paper-1 (Sub-Inspector)", name_hi: "SSC CPO पेपर-1 (सब-इंस्पेक्टर)", family: "ssc",
    note_en: "New 2026 pattern: 100 questions in 60 minutes, 15 minutes for each section. You cannot go back to a section after it ends.",
    note_hi: "2026 का नया पैटर्न: 60 मिनट में 100 प्रश्न, हर सेक्शन के लिए 15 मिनट। सेक्शन खत्म होने के बाद उसमें वापस नहीं जा सकते।",
    blocks: [
      { mins: 15, sections: [{ en: "General Intelligence & Reasoning", hi: "सामान्य बुद्धि और तर्कशक्ति", q: 25, marks: 1, neg: 0.25, from: { reasoning: 1 } }] },
      { mins: 15, sections: [{ en: "General Knowledge & General Awareness", hi: "सामान्य ज्ञान और जागरूकता", q: 25, marks: 1, neg: 0.25, from: { gk: 0.6, science: 0.4 } }] },
      { mins: 15, sections: [{ en: "Quantitative Aptitude", hi: "संख्यात्मक अभियोग्यता", q: 25, marks: 1, neg: 0.25, from: { maths: 1 } }] },
      { mins: 15, sections: [{ en: "English Comprehension", hi: "अंग्रेज़ी", q: 25, marks: 1, neg: 0.25, from: { english: 1 } }] }
    ]
  },
  {
    id: "ssc-selection-post", exam: "ssc-selection-post", name: "SSC Selection Post", name_hi: "SSC सिलेक्शन पोस्ट", family: "ssc",
    note_en: "15 minutes for each section (from Phase-XIV, 2026). The level of questions depends on the post (10th, 12th or graduation).",
    note_hi: "हर सेक्शन के लिए 15 मिनट (फ़ेज़-XIV, 2026 से)। प्रश्नों का स्तर पद (10वीं, 12वीं या स्नातक) के अनुसार होता है।",
    blocks: [
      { mins: 15, sections: [{ en: "General Intelligence", hi: "सामान्य बुद्धि", q: 25, marks: 2, neg: 0.5, from: { reasoning: 1 } }] },
      { mins: 15, sections: [{ en: "General Awareness", hi: "सामान्य जागरूकता", q: 25, marks: 2, neg: 0.5, from: { gk: 0.6, science: 0.4 } }] },
      { mins: 15, sections: [{ en: "Quantitative Aptitude (Basic Arithmetic)", hi: "संख्यात्मक अभियोग्यता (मूल अंकगणित)", q: 25, marks: 2, neg: 0.5, from: { maths: 1 } }] },
      { mins: 15, sections: [{ en: "English Language (Basic Knowledge)", hi: "अंग्रेज़ी भाषा (मूल ज्ञान)", q: 25, marks: 2, neg: 0.5, from: { english: 1 } }] }
    ]
  },
  {
    id: "rrb-alp", exam: "rrb-alp", name: "RRB ALP CBT-1", name_hi: "RRB ALP CBT-1", family: "railway",
    note_en: "One timer of 60 minutes. From CEN 01/2026, General Awareness is removed from CBT-1. RRB has not published a section-wise split, so 25-25-25 here is only indicative.",
    note_hi: "60 मिनट का एक ही समय। CEN 01/2026 से CBT-1 में सामान्य जागरूकता हटा दी गई है। RRB ने सेक्शन-वार बँटवारा नहीं बताया, इसलिए यहाँ 25-25-25 केवल अनुमानित है।",
    blocks: [
      { mins: 60, sections: [
        { en: "Mathematics", hi: "गणित", q: 25, marks: 1, neg: 1 / 3, from: { maths: 1 } },
        { en: "General Intelligence & Reasoning (Mental Ability)", hi: "सामान्य बुद्धि और तर्कशक्ति (मानसिक योग्यता)", q: 25, marks: 1, neg: 1 / 3, from: { reasoning: 1 } },
        { en: "General Science (Class 10 level)", hi: "सामान्य विज्ञान (कक्षा 10 स्तर)", q: 25, marks: 1, neg: 1 / 3, from: { science: 1 } }] }
    ]
  },
  {
    id: "rpf-constable", exam: "rpf", name: "RPF Constable CBT", name_hi: "RPF कांस्टेबल CBT", family: "railway",
    note_en: "One timer of 90 minutes for the whole paper.",
    note_hi: "पूरे पेपर के लिए 90 मिनट का एक ही समय।",
    blocks: [
      { mins: 90, sections: [
        { en: "General Awareness", hi: "सामान्य जागरूकता", q: 50, marks: 1, neg: 1 / 3, from: { gk: 0.7, science: 0.3 } },
        { en: "Arithmetic", hi: "अंकगणित", q: 35, marks: 1, neg: 1 / 3, from: { maths: 1 } },
        { en: "General Intelligence & Reasoning", hi: "सामान्य बुद्धि और तर्कशक्ति", q: 35, marks: 1, neg: 1 / 3, from: { reasoning: 1 } }] }
    ]
  },
  {
    id: "bank-prelims", exam: "banking-prelims", name: "IBPS Clerk / SBI Clerk Prelims", name_hi: "IBPS क्लर्क / SBI क्लर्क प्रारंभिक", family: "banking",
    note_en: "20 minutes for each section. You cannot go back to a section after it ends. 1 mark per question; 0.25 cut for each wrong answer.",
    note_hi: "हर सेक्शन के लिए 20 मिनट। सेक्शन खत्म होने के बाद उसमें वापस नहीं जा सकते। हर प्रश्न 1 अंक; हर गलत उत्तर पर 0.25 कटता है।",
    blocks: [
      { mins: 20, sections: [{ en: "English Language", hi: "अंग्रेज़ी भाषा", q: 30, marks: 1, neg: 0.25, from: { english: 1 } }] },
      { mins: 20, sections: [{ en: "Numerical Ability", hi: "संख्यात्मक योग्यता", q: 35, marks: 1, neg: 0.25, from: { maths: 1 } }] },
      { mins: 20, sections: [{ en: "Reasoning Ability", hi: "तर्कशक्ति", q: 35, marks: 1, neg: 0.25, from: { reasoning: 1 } }] }
    ]
  },
  {
    id: "ibps-po-prelims", exam: "banking-prelims", name: "IBPS PO Prelims", name_hi: "IBPS PO प्रारंभिक", family: "banking",
    note_en: "20 minutes for each section. From 2026 (CRP-XVI) the 35 Quant questions carry 30 marks and the 35 Reasoning questions carry 40 marks. A wrong answer loses one-quarter of that question's marks. You must clear each section's cut-off.",
    note_hi: "हर सेक्शन के लिए 20 मिनट। 2026 (CRP-XVI) से गणित के 35 प्रश्न 30 अंक के और तर्कशक्ति के 35 प्रश्न 40 अंक के हैं। गलत उत्तर पर उस प्रश्न के अंकों का एक-चौथाई कटता है। हर सेक्शन का कट-ऑफ़ पार करना ज़रूरी है।",
    blocks: [
      { mins: 20, sections: [{ en: "English Language", hi: "अंग्रेज़ी भाषा", q: 30, marks: 1, neg: 0.25, from: { english: 1 } }] },
      { mins: 20, sections: [{ en: "Quantitative Aptitude", hi: "संख्यात्मक अभियोग्यता", q: 35, marks: 6 / 7, neg: 0.25 * 6 / 7, from: { maths: 1 } }] },
      { mins: 20, sections: [{ en: "Reasoning Ability", hi: "तर्कशक्ति", q: 35, marks: 8 / 7, neg: 0.25 * 8 / 7, from: { reasoning: 1 } }] }
    ]
  },
  {
    id: "sbi-po-prelims", exam: "banking-prelims", name: "SBI PO Prelims", name_hi: "SBI PO प्रारंभिक", family: "banking",
    note_en: "20 minutes for each section, 100 marks. SBI PO has more English (40 questions) than other bank prelims. 0.25 cut for each wrong answer; no sectional cut-off.",
    note_hi: "हर सेक्शन के लिए 20 मिनट, 100 अंक। SBI PO में अन्य बैंक परीक्षाओं से अधिक अंग्रेज़ी (40 प्रश्न) है। हर गलत उत्तर पर 0.25 कटता है; सेक्शन-वार कट-ऑफ़ नहीं।",
    blocks: [
      { mins: 20, sections: [{ en: "English Language", hi: "अंग्रेज़ी भाषा", q: 40, marks: 1, neg: 0.25, from: { english: 1 } }] },
      { mins: 20, sections: [{ en: "Quantitative Aptitude", hi: "संख्यात्मक अभियोग्यता", q: 30, marks: 1, neg: 0.25, from: { maths: 1 } }] },
      { mins: 20, sections: [{ en: "Reasoning Ability", hi: "तर्कशक्ति", q: 30, marks: 1, neg: 0.25, from: { reasoning: 1 } }] }
    ]
  }
];
