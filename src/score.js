// Scoring for the 20-question business stage questionnaire.
// Every answer is 1 (כבאי), 2 (בנאי) or 3 (פקח).

export const DOMAINS = [
  {
    id: 'strategy',
    name: 'אסטרטגיה ויעדים',
    questions: [
      'יש חזון ל-3 שנים? מי מכיר אותו?',
      'לאיזה טווח נקבעים היעדים?',
      'יש תוכנית עבודה כתובה?',
      'מה בראש סדר העדיפויות של ההנהלה?',
    ],
  },
  {
    id: 'management',
    name: 'הנהלה ומבנה ארגוני',
    questions: [
      'במה המנכ"ל עסוק ביום רגיל?',
      'מה המבנה הארגוני?',
      'איך ואיפה מתקבלות החלטות?',
      'יש ישיבות בקרה קבועות?',
    ],
  },
  {
    id: 'systems',
    name: 'תהליכים ומערכות מידע',
    questions: [
      'אילו מערכות מידע קיימות, ומי באמת עובד בהן?',
      'איך מתבצעת הבקרה היומיומית?',
      'יש מנגנון שימור ידע?',
      'איך מתקיימת התקשורת בין המחלקות?',
    ],
  },
  {
    id: 'people',
    name: 'אנשים ותרבות ארגונית',
    questions: [
      'מה מניע את העובדים ביום-יום?',
      'מה עובד עושה עם בעיה שהוא לא יודע לפתור?',
      'יש לעובדים מסלולי צמיחה?',
      'על מה נשענות ההחלטות: מערכות או פוליטיקה?',
    ],
  },
  {
    id: 'finance',
    name: 'פיננסים',
    questions: [
      'מה רמת הרווחיות?',
      'כמה תזרים המזומנים מעסיק את ההנהלה?',
      'היעדים הפיננסיים מוגדרים במספרים ובתאריכים?',
      'איך מוקצים משאבים למחלקות ולפרויקטים?',
    ],
  },
];

export const STAGES = {
  firefighter: 'כבאי',
  builder: 'בנאי',
  inspector: 'פקח',
};

const QUESTION_COUNT = DOMAINS.reduce((n, d) => n + d.questions.length, 0);

export function stageForTotal(total) {
  if (total <= 33) return 'firefighter';
  if (total <= 46) return 'builder';
  return 'inspector';
}

export function stageForAverage(average) {
  if (average < 1.7) return 'firefighter';
  if (average < 2.4) return 'builder';
  return 'inspector';
}

// answers: { strategy: [1, 2, 3, 1], management: [...], ... }
export function scoreBusiness(answers) {
  const domains = DOMAINS.map((domain) => {
    const values = answers?.[domain.id];
    if (!Array.isArray(values) || values.length !== domain.questions.length) {
      throw new Error(`Domain "${domain.id}" needs ${domain.questions.length} answers`);
    }
    for (const v of values) {
      if (![1, 2, 3].includes(v)) {
        throw new Error(`Answers must be 1, 2 or 3 (got ${v} in "${domain.id}")`);
      }
    }
    const sum = values.reduce((a, b) => a + b, 0);
    const average = Math.round((sum / values.length) * 10) / 10;
    return { id: domain.id, name: domain.name, sum, average, stage: stageForAverage(average) };
  });

  const total = domains.reduce((n, d) => n + d.sum, 0);
  return { total, max: QUESTION_COUNT * 3, stage: stageForTotal(total), domains };
}
