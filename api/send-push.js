const webpush = require('web-push');

// Vercel will inject these securely from your project settings
const privateVapidKey = process.env.PRIVATE_VAPID_KEY;

// You MUST set your email and your VAPID keys here to use web push
// The email is required by push services (like Google/Apple) to contact you if there is an issue
webpush.setVapidDetails(
  'mailto:your-email@example.com', // <-- Replace with your email!
  process.env.NEXT_PUBLIC_VAPID_KEY,
  privateVapidKey
);

export default async function handler(req, res) {
  // Only accept POST requests from our frontend
  if (req.method === 'POST') {
    const { subscription, payload } = req.body;
    
    try {
      // Ask Apple/Google/Mozilla to wake up the browser and send the push
      await webpush.sendNotification(subscription, JSON.stringify(payload));
      res.status(200).json({ success: true, message: 'Push sent!' });
    } catch (error) {
      console.error('Error sending push:', error);
      res.status(500).json({ error: 'Failed to send push notification' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
