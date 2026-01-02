import { NextResponse } from "next/server";

// Basic in‑memory rate limit (simple & effective)
const rateLimit = new Map();

const sanitize = (str) =>
  str
    .replace(/[<>$%{};]/g, "")
    .trim()
    .slice(0, 1000);

export async function POST(req) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();

    // Rate limit: 5 requests / minute
    const requests = rateLimit.get(ip) || [];
    const recent = requests.filter((t) => now - t < 60000);

    if (recent.length >= 5) {
      return NextResponse.json({ error: "Too many requests" }, { status: 429 });
    }

    rateLimit.set(ip, [...recent, now]);

    const body = await req.json();

    // Honeypot check
    if (body.website) {
      return NextResponse.json({ error: "Bot detected" }, { status: 400 });
    }

    // Validation
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json({ error: "Invalid request" }, { status: 400 });
    }

    const data = {
      name: sanitize(body.name),
      email: sanitize(body.email),
      phone: sanitize(body.phone),
      message: sanitize(body.message),
    };

    // 👉 SEND MESSAGE (WhatsApp / Email / Web3Forms / etc.)
    // Example: Web3Forms
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: JSON.stringify({
        access_key: process.env.WEB3FORMS_KEY,
        subject: "New Contact Message",
        from_name: "Website",
        ...data,
      }),
      headers: { "Content-Type": "application/json" },
    });

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
