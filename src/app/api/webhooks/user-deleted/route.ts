import type { WebhookEvent } from "@clerk/clerk-sdk-node"
import { sql } from "@vercel/postgres"; 

const handler = req => {
  const evt = req.body.evt as WebhookEvent;
  switch (evt.type) {
    case 'user.deleted':
      // UserJSON.deleted is a boolean
      const deleted = evt.data.deleted
      // UserJSON.id is a string
      const id = evt.data.id
  }
}