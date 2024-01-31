import { sql } from "@vercel/postgres";
import { WebhookEvent } from "@clerk/clerk-sdk-node";

const handler = async (req: { body: { evt: WebhookEvent; }; }) => {
  const evt = req.body.evt as WebhookEvent;

  switch (evt.type) {
    
    case 'user.deleted':
      // UserJSON.user_id is a string
      const user_id = evt.data.id

      try {
        await sql`
          DELETE FROM users WHERE user_id = ${user_id}
        `;
        console.log('User deleting successfully.');
      } catch (error) {
        console.error('Error deleting user:', error);
      }
      break;

    default:
      console.log('Unsupported event type:', evt.type);
  }
};

export default handler;
