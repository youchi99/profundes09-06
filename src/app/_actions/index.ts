'use server';

import { appendToSheet } from '@/lib/google-sheets';

export async function submitForm(formData: FormData) {
  console.log("Form submitted:", formData);
  const { name, phone, ville, email, details } = Object.fromEntries(formData);
  
  // Create timestamp for the submission
  const timestamp = new Date().toISOString();
  
  // Prepare the row data
  const rowData = [name, phone, ville, email, details, timestamp];
  
  // Append to Google Sheet
  const result = await appendToSheet(rowData, "Demandez un devis");

  console.log("Result:", result);
  
  if (!result.success) {
    throw new Error('Failed to submit form data');
  }
  
  return { success: true };
}

export async function subscribeEmail(formData: FormData) {
  const { email } = Object.fromEntries(formData);
  
  // Create timestamp for the subscription
  const timestamp = new Date().toISOString();
  
  // Prepare the row data
  const rowData = [email, 'Newsletter Subscription', timestamp];
  
  // Append to Google Sheet
  const result = await appendToSheet(rowData, "E-mail Newsletter");
  
  if (!result.success) {
    throw new Error('Failed to subscribe email');
  }
  
  return { success: true };
}
