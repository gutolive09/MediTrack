import { useSearchParams } from "next/navigation";
import { NextResponse } from "next/server";

const agendamento = [{ id: 1, titulo: "Exame de Sangue", data: "28/11" }];

export async function GET() {
  const searchParams = useSearchParams();

  const email = searchParams.get("email");
  console.log(email);

  if (email == "prof@email.com") {
    console.log("sucesso");
    return NextResponse.json(agendamento);
  }

  const response = await fetch(
    `https://localhost:8080/agendamento?user=${email}`
  );
  if (response.ok) {
    const data = await response.json(data);
    return NextResponse.json(data);
  } else {
    return NextResponse.error();
  }
}
