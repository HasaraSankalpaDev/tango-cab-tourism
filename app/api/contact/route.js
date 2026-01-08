// /app/api/contact/route.js
export async function POST(req) {
  try {
    const body = await req.json();
    const response = await fetch("https://formspree.io/f/mvzgewlb", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    if (response.ok) {
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } else {
      return new Response(
        JSON.stringify({ success: false, message: data.error || "Failed" }),
        { status: 400 }
      );
    }
  } catch (err) {
    return new Response(
      JSON.stringify({ success: false, message: err.message }),
      { status: 500 }
    );
  }
}
