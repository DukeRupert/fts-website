import { POSTMARK_API_KEY } from '$env/static/private';
import postmark from 'postmark';

const Postmark = new postmark.ServerClient(POSTMARK_API_KEY);

export default Postmark;
