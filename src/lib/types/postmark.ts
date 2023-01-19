// Lead model
export interface LeadModel {
	first_name: string;
	last_name: string;
	action_url: string;
	support_email: string;
	sender_name: string;
	company_name: string;
}

export interface PromoModel {
	first_name: string;
	last_name: string;
	promo_value: string;
	promo_code: string;
	action_url: string;
	sender_name: string;
	unsubscribe_url: string;
	company_name: string;
}
