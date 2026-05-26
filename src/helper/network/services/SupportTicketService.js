import { baseurl } from "@/config/setting";
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

const parseResponse = async (response) => {
  const contentType = response.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    return response.json();
  }

  return response.text();
};

const SupportTicketService = {
  createTicket: async (body = {}) => {
    try {
      const formData = new FormData();
      const attachments = Array.isArray(body.attachments) ? body.attachments : [];

      [
        ["firstName", String(body.firstName || "").trim()],
        ["lastName", String(body.lastName || "").trim()],
        ["name", [body.firstName, body.lastName].filter(Boolean).join(" ").trim()],
        ["email", String(body.email || "").trim().toLowerCase()],
        ["phone", String(body.phone || "").trim()],
        ["category", String(body.category || "general").trim()],
        ["orderReference", String(body.orderReference || "").trim()],
        ["subject", String(body.subject || "").trim()],
        ["description", String(body.description || "").trim()],
        ["preferredContactMethod", String(body.preferredContactMethod || "email").trim()],
        ["source", "website"],
      ].forEach(([key, value]) => {
        if (value) {
          formData.append(key, value);
        }
      });

      attachments.forEach((file) => {
        formData.append("files", file);
      });

      const response = await fetch(`${baseurl}/inquiry/submit`, {
        method: "POST",
        body: formData,
      });
      const responseData = await parseResponse(response);

      if (!response.ok) {
        return {
          error:
            typeof responseData === "string"
              ? responseData
              : responseData?.message || "Ticket submission failed",
        };
      }

      return normalizeTicketEntity(responseData);
    } catch (error) {
      return { error: error?.message || "Ticket submission failed" };
    }
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