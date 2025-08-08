const API_BASE_URL = "http://localhost:9000";

export const submitLeadForm = async (formData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || "Request failed");
    }

    return await res.json();
  } catch (err) {
    console.error("API Error:", err.message);
    throw err;
  }
};

export const fetchLeads = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/api/leads`);

    if (!res.ok) {
      throw new Error("Failed to fetch leads");
    }

    return await res.json();
  } catch (err) {
    console.error("API Error:", err.message);
    throw err;
  }
};
