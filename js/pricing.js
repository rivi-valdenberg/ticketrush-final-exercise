// מחירון TicketRush
const TICKET_PRICE = 350; // ₪ לכרטיס
const SERVICE_FEE = 12;   // ₪ עמלת שירות לכל כרטיס
const MAX_TICKETS = 8;    // מקסימום כרטיסים להזמנה
const MEMBER_MAX_TICKETS = 4;      // מקסימום לחברת מועדון
const MEMBER_DISCOUNT = 0.2;       // 20% הנחה על מחיר הכרטיס
const STUDENT_DISCOUNT = 0.15;     // 15% הנחה על מחיר הכרטיס

function maxTickets(isMember = false) {
  return isMember ? MEMBER_MAX_TICKETS : MAX_TICKETS;
}

function calcTotal(qty, isMember = false, isStudent = false) {
  if (!Number.isInteger(qty) || qty < 1 || qty > maxTickets(isMember)) {
    return null;
  }
  // ההנחות לא מצטברות: מקבלים רק את הגדולה
  let discount = 0;
  if (isMember) discount = Math.max(discount, MEMBER_DISCOUNT);
  if (isStudent) discount = Math.max(discount, STUDENT_DISCOUNT);

  const ticketPrice = TICKET_PRICE * (1 - discount);
  return qty * (ticketPrice + SERVICE_FEE);
}

if (typeof module !== 'undefined') {
  module.exports = {
    TICKET_PRICE, SERVICE_FEE, MAX_TICKETS,
    MEMBER_MAX_TICKETS, MEMBER_DISCOUNT, STUDENT_DISCOUNT,
    maxTickets, calcTotal
  };
}