import { sql } from "@vercel/postgres";
import { WebhookEvent } from "@clerk/clerk-sdk-node";
import crypto from 'crypto';
import { NextApiRequest, NextApiResponse } from "next";

// 署名シークレット
const webhookSecret = process.env.WEBHOOK_SECRET_USER_CREATED as string;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const evt = req.body.evt as WebhookEvent;
  const receivedSignature = req.headers['x-clerk-webhook-signature'];

  // 署名を計算
  const expectedSignature = crypto
    .createHmac('sha256', webhookSecret)
    .update(JSON.stringify(evt))
    .digest('base64');

  // 署名の検証
  if (receivedSignature === expectedSignature) {
    console.log('Webhook signature is valid.');

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

    res.status(200).end('OK');
  } else {
    console.warn('Webhook signature is not valid. Rejecting request.');
    res.status(401).end('Unauthorized');
  }
};

export default handler;
