// Workshop Base Configuration
// Shared shape + helpers for every per-workshop config. Each workshop config
// file calls createWorkshopConfig() with only the values that differ.

// Defaults shared by every workshop. A per-workshop override is deep-merged
// on top of these (one level deep for nested objects like pricing/utmParams).
const WORKSHOP_DEFAULTS = {
    // UTM Parameters for tracking (campaign is set per workshop)
    utmParams: {
        source: 'landing',
        medium: 'website'
    },

    // Workshop Information
    duration: '90 minutes of interactive learning',
    format: 'Small group (max 20 participants)',

    // Pricing — identical tiers across workshops; a workshop may override the
    // per-tier `features` list (e.g. its action-guide line) by supplying its own.
    pricing: {
        basic: {
            title: 'Attend The Workshop',
            price: 10,
            currency: '€',
            features: [
                'Access to Live Session',
                'Pay a symbolic commitment price'
            ],
            buttonText: 'Get Your Ticket'
        },
        recording: {
            title: 'With Recording',
            price: 19,
            currency: '€',
            featured: true,
            features: [
                'Everything in Access to Live Session',
                'Become a workshop patron',
                'Session recording',
                'Action guide with key highlights'
            ],
            buttonText: 'Plus Recording And Resources'
        },
        coaching: {
            title: 'With Coaching',
            price: 150,
            currency: '€',
            features: [
                'Everything in Recording package',
                '45 minutes personal coaching session',
                'Personalized feedback'
            ],
            buttonText: 'Plus 1:1 Coaching'
        }
    },

    // External Resources
    favicon: 'https://www.robertoferraro.net/favicon.ico'
};

// Deep-merge (one level) a per-workshop override onto WORKSHOP_DEFAULTS and
// return the finished config. Nested objects (utmParams, pricing, pricing.*,
// meta) are merged rather than replaced, so an override only needs to state
// what actually differs.
function createWorkshopConfig(overrides) {
    overrides = overrides || {};
    const config = {};

    // Merge top-level keys from defaults then overrides.
    const keys = new Set([
        ...Object.keys(WORKSHOP_DEFAULTS),
        ...Object.keys(overrides)
    ]);

    keys.forEach(key => {
        const base = WORKSHOP_DEFAULTS[key];
        const over = overrides[key];

        if (isPlainObject(base) && isPlainObject(over)) {
            config[key] = mergeNested(base, over);
        } else {
            config[key] = over !== undefined ? over : base;
        }
    });

    return config;
}

// One-more-level merge so pricing tiers (pricing.basic, pricing.recording, …)
// merge their fields instead of an override having to repeat every tier.
function mergeNested(base, over) {
    const out = {};
    const keys = new Set([...Object.keys(base), ...Object.keys(over)]);
    keys.forEach(key => {
        const b = base[key];
        const o = over[key];
        if (isPlainObject(b) && isPlainObject(o)) {
            out[key] = Object.assign({}, b, o);
        } else {
            out[key] = o !== undefined ? o : b;
        }
    });
    return out;
}

function isPlainObject(value) {
    return value !== null && typeof value === 'object' && !Array.isArray(value);
}

// Build the Luma checkout URL for a config, appending its UTM parameters.
// Defaults to the globally-set WORKSHOP_CONFIG so existing inline callers that
// invoke buildLumaUrl() with no argument keep working.
function buildLumaUrl(config) {
    config = config || (typeof window !== 'undefined' ? window.WORKSHOP_CONFIG : undefined);
    if (!config || !config.eventUrl) return '';

    const baseUrl = config.eventUrl;
    const utm = config.utmParams || {};
    const params = new URLSearchParams();

    if (utm.source) params.append('utm_source', utm.source);
    if (utm.medium) params.append('utm_medium', utm.medium);
    if (utm.campaign) params.append('utm_campaign', utm.campaign);

    const queryString = params.toString();
    return queryString ? `${baseUrl}?${queryString}` : baseUrl;
}

// Export for use in other files (if using modules)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { WORKSHOP_DEFAULTS, createWorkshopConfig, buildLumaUrl };
}

// Make available globally for inline use
if (typeof window !== 'undefined') {
    window.createWorkshopConfig = createWorkshopConfig;
    window.buildLumaUrl = buildLumaUrl;
}
