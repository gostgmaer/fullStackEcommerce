import requests from "./httpServices";

const normalizeTicketEntity = (response) => {
  const ticket = response?.data || response?.result || response?.results || response;

  return {
    ...response,
    data: ticket,
    result: ticket,
    results: ticket,
  };
};

const SupportTicketService = {
  createTicket: async (body = {}) => {
    const payload = {
      firstName: String(body.firstName || "").trim(),
      lastName: String(body.lastName || "").trim(),
      name: [body.firstName, body.lastName].filter(Boolean).join(" ").trim(),
      email: String(body.email || "").trim().toLowerCase(),
      phone: String(body.phone || "").trim(),
      category: String(body.category || "general").trim(),
      orderReference: String(body.orderReference || "").trim(),
      subject: String(body.subject || "").trim(),
      description: String(body.description || "").trim(),
      preferredContactMethod: String(body.preferredContactMethod || "email").trim(),
      source: "website",
    };

    const response = await requests.post("/inquiry/submit", payload);
    return normalizeTicketEntity(response);
  },

  trackTicket: async (body = {}) => {
    const response = await requests.post("/inquiry/track", {
      ticketId: String(body.ticketId || "").trim(),
      email: String(body.email || "").trim().toLowerCase(),
    });

    return normalizeTicketEntity(response);
  },
};

export default SupportTicketService;