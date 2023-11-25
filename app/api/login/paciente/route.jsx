import { NextResponse } from "next/server";

export async function POST(request, response) {
  const { email, senha } = await request.json();
  if ((await email) == "prof@email.com" && (await senha) == "123") {
    return NextResponse.json({ status: true });
  }
    const body = {
      "email": email,
      "senha": senha,
    };

    try {
      const response = await fetch("http://localhost:8080/paciente", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      if (response.status == "200") {
        return NextResponse.json({ "status": true });
      } else {
        return NextResponse.json({ "status": false });
      }
    } catch (error) {
      return NextResponse.error();
    }
}
