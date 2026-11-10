// רשימת המתנה
function joinWaitlist(list, email) {
  const normalized = String(email).trim().toLowerCase();

  // מייל לא תקין: צריך @ ונקודה אחרי ה-@
  const at = normalized.indexOf('@');
  if (at === -1 || normalized.indexOf('.', at) === -1) {
    return list;
  }

  // כפילות: לא מוסיפים שוב
  if (list.includes(normalized)) {
    return list;
  }

  // מערך חדש, בלי לשנות את המקורי
  return [...list, normalized];
}

module.exports = { joinWaitlist };
