import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent } from '@clerk/nextjs/server';
import { sql } from '@vercel/postgres';
 
export async function POST(req: Request) {
 
  // You can find this in the Clerk Dashboard -> Webhooks -> choose the webhook
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET_USER_UPDATED;
 
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local');
  }
 
  // Get the headers
  const headerPayload = headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");
 
  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', {
      status: 400
    });
  }
 
  // Get the body
  const payload = await req.json();
  const body = JSON.stringify(payload);
 
  // Create a new Svix instance with your secret.
  const wh = new Webhook(WEBHOOK_SECRET);
 
  let evt: WebhookEvent;
 
  // Verify the payload with the headers
  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', {
      status: 400
    });
  }

  switch (evt.type) {
    case 'user.updated':
      // UserJSON.id is a string
      const user_id = evt.data.id;
      // UserJSON.username is a string
      const username = evt.data.username;
      // UserJSON.first_name is a string
      const firstName = evt.data.first_name;
      // UserJSON.last_name is a string
      const lastName = evt.data.last_name;
      // UserJSON.email_addresses[0].email_address is a string
      const email_address = evt.data.email_addresses[0].email_address;
      // UserJSON.image_url is a string
      const image_url = evt.data.image_url;

      try {
        await sql`
          UPDATE users SET 
            username = ${username},
            first_name = ${firstName},
            last_name = ${lastName},
            email_address = ${email_address},
            image_url = ${image_url}

          WHERE user_id = ${user_id}
        `;
        console.log('User updating successfully.');
        return new Response('OK', {status: 200});
      } catch (error) {
        console.error(`Error updating user (user_id: ${user_id}):`, error);
        return new Response('Internal Server Error', {status: 500});
      }

    default:
      console.log('Unsupported event type:', evt.type);
  }
}