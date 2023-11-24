import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { email, senha } = request.json();

  if (email == "prof@email.com" && senha == "123") {
    return NextResponse.json({ status: true });
  }

  const body = {
    email: email,
    senha: senha,
  };

  try {
    const response = await fetch("http://localhost:3000/paciente", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (response.status == "200") {
      return NextResponse.json({ status: true });
    } else {
      return NextResponse.json({ status: false });
    }
  } catch (error) {
    return NextResponse.error();
  }
}
