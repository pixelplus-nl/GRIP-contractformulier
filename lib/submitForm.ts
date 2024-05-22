"use server";

export default async function submitForm(formData: FormData) {
    const apiUrl = process.env.GRIP_API_BASE_URL;
    const apiKey = process.env.GRIP_API_KEY; // TODO: Use key when authentication is done

    // Convert the form data object to json
    const object: any = {};

    formData.forEach((value, key) => {
        object[key] = value;
    });

    const response = await fetch(`${apiUrl}/register`, {
        method: 'POST',
        body: formData
    });

    //const data = await response.json();
    const data = await response.json();
    console.log(data);
};
