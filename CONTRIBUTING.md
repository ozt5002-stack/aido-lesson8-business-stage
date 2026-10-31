# שלב 3: Manage - איך עובדים בפרויקט

## Branches

- `main` הוא הגרסה היציבה. לא עובדים ישירות עליו.
- לכל משימה פותחים branch חדש מ-`main`, עם קידומת לפי סוג העבודה:
  - `design/...` אפיון
  - `plan/...` תכנון
  - `manage/...` כללי עבודה ותבניות
  - `feature/...` קוד חדש
  - `test/...` בדיקות ו-evals
  - `fix/...` תיקון באג

## מחזור עבודה

1. בוחרים Issue פתוח
2. `git checkout main && git pull`
3. `git checkout -b feature/short-name`
4. עובדים ושומרים ב-commits קטנים עם הודעה ברורה
5. `git push -u origin feature/short-name`
6. פותחים Pull Request ל-`main`, וכותבים בו `Closes #<מספר Issue>`
7. הבדיקה האוטומטית צריכה לעבור לפני מיזוג
8. ממזגים, ומוחקים את ה-branch

## הודעות commit

מתחילים בשם השלב או סוג העבודה: `Design: ...`, `Plan: ...`, `Feature: ...`, `Test: ...`, `Fix: ...`.

## הרצת הבדיקות

```bash
npm test
```
