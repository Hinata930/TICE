import { sql } from "@vercel/postgres";
import { WebhookEvent } from "@clerk/clerk-sdk-node";

const handler = async (req: { body: { evt: WebhookEvent; }; }) => {
  const evt = req.body.evt as WebhookEvent;

  switch (evt.type) {
    
    case 'user.created':
      // UserJSON.user_id is a string
      const user_id = evt.data.id;
      // UserJSON.username is a string
      const username = evt.data.username;
      // UserJSON.firstName is a string
      const firstName = evt.data.first_name;
      // UserJSON.lastName is a string
      const lastName = evt.data.last_name;
      // UserJSON.email_address is a string
      const email_address = evt.data.email_addresses[0].email_address;
      // UserJSON.image_url is a string
      const image_url = evt.data.image_url;

      try {
        await sql`
          INSERT INTO users (user_id, username, first_name, last_name, email_address, image_url)
          VALUES (
            ${user_id},
            ${username}, 
            ${firstName}, 
            ${lastName}, 
            ${email_address}, 
            ${image_url}
          );
        `;
        console.log('User inserted successfully.');
      } catch (error) {
        console.error('Error inserting user:', error);
      }
      break;

    default:
      console.log('Unsupported event type:', evt.type);
  }
};

export default handler;
