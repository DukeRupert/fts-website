import { FTS_MAILCHIMP_API_KEY, FTS_MAILCHIMP_SERVER_PREFIX } from '$env/static/private';
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
	apiKey: FTS_MAILCHIMP_API_KEY,
	server: FTS_MAILCHIMP_SERVER_PREFIX
});

export default mailchimp;
