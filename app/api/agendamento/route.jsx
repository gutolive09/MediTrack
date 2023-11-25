import { useSearchParams } from "next/navigation"
import { NextResponse } from "next/server";

export async function GET(){

    const searchParams = useSearchParams()

    const email = searchParams.get('email')

    const response = await fetch(`https://localhost:8080/agendamento?user=${email}`)
    if(response.ok){
        const data = await response.json(data);
        return NextResponse.json(data)
    }else{
        return NextResponse.error();
    }

}