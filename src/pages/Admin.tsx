import { useEffect, useState } from "react";

type Contact = {
  id: number;
  name: string;
  company: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  status?: string;
};

const Admin = () => {
  const [logs, setLogs] = useState<any[]>([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(false);

  const role = localStorage.getItem("adminRole");

  // ================= AUTO LOGIN =================
  useEffect(() => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      setLoggedIn(true);
      loadContacts();
      loadLogs();
    }
  }, []);

  // ================= LOGIN =================
  const handleLogin = async () => {
    try {
      const res = await fetch("http://localhost:5050/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.success) {
        localStorage.setItem("adminToken", data.token);
        localStorage.setItem("adminRole", data.role);
        setLoggedIn(true);
        loadContacts();
        loadLogs();
      } else {
        alert("Wrong credentials");
      }
    } catch (err) {
      console.error(err);
      alert("Server error");
    }
  };

  // ================= LOGOUT =================
  const handleLogout = () => {
    localStorage.removeItem("adminToken");
    localStorage.removeItem("adminRole");
    setLoggedIn(false);
  };

  // ================= LOAD CONTACTS =================
  const loadContacts = () => {
    const token = localStorage.getItem("adminToken");

    setLoading(true);

    fetch("http://localhost:5050/api/contact", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unauthorized");
        return res.json();
      })
      .then((data) => {
        setContacts(data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
        handleLogout();
      });
  };

  // ================= LOAD LOGS =================
  const loadLogs = async () => {
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch("http://localhost:5050/api/contact/logs/all", {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error();

      const data = await res.json();
      setLogs(data.reverse());
    } catch (err) {
      console.error(err);
    }
  };

  // ================= CHANGE STATUS =================
  const changeStatus = async (id: number, status: string) => {
    const token = localStorage.getItem("adminToken");

    try {
      const res = await fetch(
        `http://localhost:5050/api/contact/${id}/status`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ status }),
        }
      );

      if (!res.ok) throw new Error();

      loadContacts();
      loadLogs();
    } catch (err) {
      console.error(err);
    }
  };

  // ================= DELETE =================
  const handleDelete = async (id: number) => {
    const token = localStorage.getItem("adminToken");

    if (!window.confirm("Delete this contact?")) return;

    try {
      const res = await fetch(`http://localhost:5050/api/contact/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) throw new Error("Failed");

      loadContacts();
      loadLogs();
    } catch (err) {
      console.error(err);
      alert("Delete failed");
    }
  };

  // ================= LOGIN SCREEN =================
  if (!loggedIn) {
    return (
      <main className="pt-32 pb-20">
        <div className="container-enterprise max-w-md mx-auto">
          <div className="glass-panel p-8 space-y-4">
            <h1 className="text-2xl font-bold text-center">Admin Login</h1>

            <input
              type="email"
              placeholder="Enter email"
              className="w-full p-3 rounded bg-secondary border border-border"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Enter password"
              className="w-full p-3 rounded bg-secondary border border-border"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              onClick={handleLogin}
              className="w-full bg-primary text-white p-3 rounded"
            >
              Login
            </button>
          </div>
        </div>
      </main>
    );
  }

  // ================= DASHBOARD =================
  return (
    <main className="pt-32 pb-20">
      <div className="container-enterprise">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>

          <button
            onClick={handleLogout}
            className="px-4 py-2 rounded bg-red-600 text-white"
          >
            Logout
          </button>
        </div>

        <p className="text-sm text-muted-foreground mb-8">
          Role: {role}
        </p>

        {/* ================= CONTACTS ================= */}
        <h2 className="text-2xl font-bold mb-4">Contacts</h2>

        {loading ? (
          <p>Loading...</p>
        ) : contacts.length === 0 ? (
          <p>No messages yet.</p>
        ) : (
          <div className="space-y-6">
            {contacts.map((c) => (
              <div key={c.id} className="glass-panel p-6">
                <p><strong>Name:</strong> {c.name}</p>
                <p><strong>Company:</strong> {c.company}</p>
                <p><strong>Email:</strong> {c.email}</p>
                <p><strong>Phone:</strong> {c.phone}</p>
                <p><strong>Service:</strong> {c.service}</p>
                <p><strong>Message:</strong> {c.message}</p>

                <div className="mt-4">
                  <label className="text-sm mr-2">Status:</label>

                  <select
                    value={c.status || "NEW"}
                    onChange={(e) => changeStatus(c.id, e.target.value)}
                    disabled={role === "viewer"}
                    className="px-2 py-1 rounded bg-secondary border border-border"
                  >
                    <option value="NEW">NEW</option>
                    <option value="CONTACTED">CONTACTED</option>
                    <option value="IN_PROGRESS">IN PROGRESS</option>
                    <option value="CLOSED">CLOSED</option>
                  </select>
                </div>

                {role === "admin" && (
                  <button
                    onClick={() => handleDelete(c.id)}
                    className="mt-4 px-3 py-2 bg-red-600 text-white rounded"
                  >
                    Delete
                  </button>
                )}
              </div>
            ))}
          </div>
        )}

        {/* ================= LOGS ================= */}
        {role === "admin" && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold mb-6">Activity Logs</h2>

            {logs.length === 0 ? (
              <p>No activity yet.</p>
            ) : (
              <div className="space-y-4">
                {logs.map((l) => (
                  <div key={l.id} className="glass-panel p-4 text-sm">
                    <p>
                      <strong>Action:</strong> {l.action}
                      {l.newStatus && ` → ${l.newStatus}`}
                    </p>
                    <p><strong>Contact ID:</strong> {l.contactId}</p>
                    <p><strong>By:</strong> {l.by}</p>
                    <p><strong>Role:</strong> {l.role}</p>
                    <p><strong>Time:</strong> {new Date(l.at).toLocaleString()}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
};

export default Admin;
