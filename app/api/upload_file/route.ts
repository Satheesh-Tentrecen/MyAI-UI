import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    const API_URL = `${process.env.NEXT_PUBLIC_API_BASE_URL}api/auth/upload_file`;
    try {
        console.log("body :", await req.body)
        const { uuid, file } = await req.json();
        const formData = new FormData();
        formData.append("uuid", uuid);
        formData.append("file", file);
        const response = await fetch(
            API_URL,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/form-data",
                },
                body: formData,
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
