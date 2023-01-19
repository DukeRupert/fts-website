type StructuredFormData = string | boolean | number | File | StructuredFormData[];

export function formBody(body: FormData) {
	return [...body.entries()].reduce((data, [k, v]) => {
		let value: StructuredFormData = v;
		if (v === 'true') value = true;
		if (v === 'false') value = false;
		if (!isNaN(Number(v))) value = Number(v);

		// For grouped fields like multi-selects and checkboxes, we need to
		// store the values in an array.
		if (k in data) {
			const val = data[k];
			value = Array.isArray(val) ? [...val, value] : [val, value];
		}

		data[k] = value;

		return data;
	}, {} as Record<string, StructuredFormData>);
}

export function getFormData(object: Record<string, any>) {
	const formData = new FormData();
	Object.keys(object).forEach((key) => {
		if (typeof object[key] !== 'object') formData.append(key, object[key]);
		else formData.append(key, JSON.stringify(object[key]));
	});
	return formData;
}
