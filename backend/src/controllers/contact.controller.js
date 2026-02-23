// in-memory storage
const messages = [];
const activityLogs = [];



// ================= CREATE =================
export const submitContact = (req, res) => {
  console.log("New contact:", req.body);

  messages.push({
    id: Date.now(),
    status: "NEW",
    ...req.body,
  });

  res.json({ success: true });
};



// ================= READ =================
export const getContacts = (req, res) => {
  res.json(messages);
};



// ================= UPDATE STATUS =================
export const updateStatus = (req, res) => {
  const id = Number(req.params.id);
  const { status } = req.body;

  const contact = messages.find((m) => m.id === id);

  if (!contact) {
    return res.status(404).json({ message: "Not found" });
  }

  // viewer cannot modify
  if (req.user.role === "viewer") {
    return res.status(403).json({ message: "Not allowed" });
  }

  contact.status = status;

  // 🔥 activity log
  activityLogs.push({
    id: Date.now(),
    action: "STATUS_CHANGE",
    contactId: id,
    newStatus: status,
    by: req.user.email,
    role: req.user.role,
    at: new Date().toISOString(),
  });

  console.log(`Status updated → ${id} = ${status}`);

  res.json({ success: true });
};



// ================= DELETE =================
export const deleteContact = (req, res) => {
  // only admin allowed
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Not allowed" });
  }

  const id = Number(req.params.id);
  const index = messages.findIndex((m) => m.id === id);

  if (index === -1) {
    return res.status(404).json({ message: "Not found" });
  }

  messages.splice(index, 1);

  // 🔥 activity log
  activityLogs.push({
    id: Date.now(),
    action: "DELETE_CONTACT",
    contactId: id,
    by: req.user.email,
    role: req.user.role,
    at: new Date().toISOString(),
  });

  console.log(`Contact ${id} deleted by ${req.user.email}`);

  res.json({ success: true });
};



// ================= LOGS =================
export const getLogs = (req, res) => {
  // only admin can view
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Not allowed" });
  }

  res.json(activityLogs);
};
