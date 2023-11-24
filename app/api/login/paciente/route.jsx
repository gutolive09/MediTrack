import { NextResponse } from "next/server"

export async function POST(request, response){

    const {email, senha} = request.json()

    if(email == "prof@email.com" && senha == "123"){
        return NextResponse.json({"status": true})
    }

    const body = {
        "email": email,
        "senha": senha
    }

    try {
        const response = await fetch("http://localhost:8080/paciente",{
            method: "POST",
            header:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(body)
        })

        if(response.status == "200") return NextResponse.json({"status": true})
        NextResponse.json({"status": false})

    } catch (error) {
        NextResponse.error()
    }
}