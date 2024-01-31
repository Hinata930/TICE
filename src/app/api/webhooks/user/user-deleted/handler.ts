import { sql } from "@vercel/postgres";
import { WebhookEvent } from "@clerk/clerk-sdk-node";
import crypto from 'crypto';
import { NextApiRequest, NextApiResponse } from "next";

// Webhook署名シークレット
const webhookSecret = process.env.WEBHOOK_SECRET_USER_DELETED as string;

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
    
      case 'user.deleted':
        // UserJSON.user_id is a string
        const user_id = evt.data.id
  
        try {
          await sql`
            DELETE FROM users WHERE user_id = ${user_id}
          `;
          console.log('User deleting successfully.');
          res.status(200).end('OK');
        } catch (error) {
          console.error('Error deleting user:', error);
          res.status(500).end('Internal Server Error');
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
