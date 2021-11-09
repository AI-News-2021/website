import mailchimp, { Status } from '@mailchimp/mailchimp_marketing';
import { NextApiRequest, NextApiResponse } from 'next';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: process.env.MAILCHIMP_SERVER // e.g. us1
});

const handler =  async (req: NextApiRequest, res: NextApiResponse) => {
  console.log(process.env.MAILCHIMP_AUDIENCE_ID)
  
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  try {
    await mailchimp.lists.addListMember(process.env.MAILCHIMP_AUDIENCE_ID || '', {
      email_address: email,
      status: 'subscribed' as Status.subscribed,
      tags: ['newsletterLandingPage']
    });

    return res.status(201).json({ error: '' });
  } catch (error: any) {
      console.log(error)
    return res.status(500).json({ error: error.message || error.toString() });
  }
};

export default handler