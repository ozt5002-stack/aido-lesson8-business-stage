# בודק שלב עסק: כבאי, בנאי או פקח

כלי קטן שמקבל תשובות לשאלון האבחון הממוקד (20 שאלות, כל אחת מקבלת 1, 2 או 3) ומחזיר:

- ציון כולל בין 20 ל-60 והשלב של העסק: כבאי, בנאי או פקח
- שלב לכל אחד מחמשת התחומים: אסטרטגיה, הנהלה, מערכות, אנשים, פיננסים

הפרויקט נבנה כתרגיל בשיעור 8 בקורס מטמיעי AI (AIDO). כל שלב בעבודה נעשה ב-branch נפרד ומוזג ל-`main` דרך Pull Request.

## שלבי העבודה

| שלב | Branch | מה נמצא בו |
|---|---|---|
| 1. Design | `design/spec` | [docs/01-design.md](docs/01-design.md): מה בונים, למי, ואיך נדע שזה עבד |
| 2. Plan | `plan/roadmap` | [docs/02-plan.md](docs/02-plan.md) ו-Issues ב-GitHub |
| 3. Manage | `manage/workflow` | [CONTRIBUTING.md](CONTRIBUTING.md), תבניות ל-Issues ול-Pull Requests |
| 4. Build | `feature/scoring` | [src/score.js](src/score.js), [index.html](index.html) |
| 5. Test/Eval | `test/eval` | [tests/](tests), [evals/](evals) ובדיקה אוטומטית ב-GitHub Actions |

Deployment יתווסף אחרי השיעור הבא.
