# שלב 2: Plan

פירוק העבודה למשימות קטנות. כל משימה היא Issue ב-GitHub, וכל שלב עבודה נעשה ב-branch משלו שמתמזג ל-`main` דרך Pull Request.

## משימות

| # | משימה | Branch | תלויה ב- |
|---|---|---|---|
| 1 | לכתוב מסמך אפיון | `design/spec` | - |
| 2 | לפרק את העבודה למשימות | `plan/roadmap` | 1 |
| 3 | להגדיר כללי עבודה ותבניות | `manage/workflow` | 2 |
| 4 | פונקציית ציון: סכום, שלב כללי ושלב לכל תחום | `feature/scoring` | 1 |
| 5 | דף HTML עם השאלון והתוצאה | `feature/scoring` | 4 |
| 6 | בדיקות יחידה למקרי גבול | `test/eval` | 4 |
| 7 | Evals: עסקים לדוגמה עם שלב צפוי | `test/eval` | 4 |
| 8 | הרצה אוטומטית של הבדיקות בכל Pull Request | `test/eval` | 6 |

## סדר העבודה

Design ← Plan ← Manage ← Build ← Test/Eval. העבודה הבאה מתחילה רק אחרי שהקודמת מוזגה ל-`main`.

## הגדרת "גמור"

- כל הבדיקות וה-evals עוברים
- הבדיקה האוטומטית ב-GitHub Actions ירוקה
- ה-Pull Request מוזג ל-`main`, וה-Issue שלו נסגר
