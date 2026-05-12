const webpush = require('web-push');

// Since this is a personal project, we can place the keys directly here!
const publicKey = "BN8LnqbjlXVLn7_mdUIeqHFInouivg-AeckS7pAZPFqyV99vUtoD0fjUTWI6O7EUvkAbK4FGL9znJ1eyXrHmPjk";
const privateKey = "t--96WWeP-1PHDhcrcemXuqs1NsuONov8RlbaLG4txU";

// The email is required by push services to contact you if there is an issue
webpush.setVapidDetails(
  'mailto:035665@mtka.org', 
  publicKey,
  privateKey
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
