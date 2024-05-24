"use server";

export default async function submitForm(formData: FormData) {
    const apiUrl = process.env.GRIP_API_BASE_URL;
    const apiKey = process.env.GRIP_API_KEY;

    // Convert the form data object to json
    const payload: any = {};

    formData.forEach((value, key) => {
        payload[key] = value;
    });

    // Send a request to the registration endpoint
    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        body: JSON.stringify(payload),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        }
    });

    const data = await response.json();
    return data.success;
};
