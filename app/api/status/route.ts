import { NextResponse } from "next/server";


export async function GET() {
    try {
        const apiUrl = process.env.API_URL;
        const apiKey = process.env.API_KEY;
        //console.log(apiKey)

        if (!apiUrl || !apiKey) {
            return NextResponse.json({ status: 500, message: 'api url or api key not found ' })
        }

        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'x-api-key': apiKey
            }
        })

        const data = await response.json()


        return NextResponse.json(data)
    } catch (error) {
        return NextResponse.json({ status: 500, message: error })
    }

}