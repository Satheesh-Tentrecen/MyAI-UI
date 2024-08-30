import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}api/auth/signup`;
    try {
        const { firstname, lastname, mobile_number, email_id, password } = await req.json();
        const apiData = new URLSearchParams({ firstname, lastname, mobile_number, email_id, password });
        const response = await fetch(
            API_URL,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: apiData.toString(),
            }
        );

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return NextResponse.json(data); // Send the response from the external API to the client
    } catch (error) {
        console.error('Error during login:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
