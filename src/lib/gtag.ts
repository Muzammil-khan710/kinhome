export const GA_MEASUREMENT_ID = 'G-2XX42RRH26';
//change here as well as in _app

declare global {
    interface Window {
        gtag:Function;
    }
}

export const pageview = (url: string) => {
	window.gtag && window.gtag("config", GA_MEASUREMENT_ID, {
		page_path: url,
	});
};

type GTagEvent = {
	action: string,
	category: string,
	label: string,
	value: string,
}
export const event = ({ action, category, label, value }: GTagEvent) => {
	window.gtag &&  window?.gtag("event", action, {
		event_category: category,
		event_label: label,
		value,
	});
};