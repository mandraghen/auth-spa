'use server'

export async function login(formData: FormData) {
    formData.forEach((value, key) => {
        console.log(`${key}: ${value}`);
    })
}

export async function oidcLogin() {
    console.log('oidcLogin');
}
