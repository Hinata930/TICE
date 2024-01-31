import type { WebhookEvent } from "@clerk/clerk-sdk-node"
import { sql } from "@vercel/postgres"; 

const handler = async (req: { body: { evt: WebhookEvent; }; }) => {
  const evt = req.body.evt as WebhookEvent;
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
            firstName = ${firstName},
            lastName = ${lastName},
            email_address = ${email_address},
            image_url = ${image_url}

          WHERE user_id = ${user_id}
        `;
        console.log('User updating successfully.');
      } catch (error) {
        console.error(`Error updating user (user_id: ${user_id}):`, error);
      }
      break;

    default:
      console.log('Unsupported event type:', evt.type);
  }
};

export default handler