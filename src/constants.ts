// Timezone options
export const TIMEZONES = [
    "Europe/Berlin", "Europe/London", "Europe/Paris", "Europe/Amsterdam", "Europe/Rome",
    "Europe/Madrid", "Europe/Vienna", "Europe/Zurich", "Europe/Warsaw", "Europe/Moscow",
    "America/New_York", "America/Los_Angeles", "America/Chicago", "America/Denver",
    "America/Toronto", "America/Vancouver", "America/Sao_Paulo", "America/Mexico_City",
    "Asia/Tokyo", "Asia/Shanghai", "Asia/Hong_Kong", "Asia/Singapore", "Asia/Dubai",
    "Asia/Kolkata", "Asia/Seoul", "Australia/Sydney", "Australia/Melbourne",
    "Pacific/Auckland", "Africa/Cairo", "Africa/Johannesburg", "UTC"
];

// ACME Servers
export const ACME_SERVERS = [
    { value: "https://acme-v02.api.letsencrypt.org/directory", label: "Let's Encrypt (Production)" },
    { value: "https://acme-staging-v02.api.letsencrypt.org/directory", label: "Let's Encrypt (Staging)" },
    { value: "https://acme.zerossl.com/v2/DV90", label: "ZeroSSL" },
    { value: "https://dv.acme-v02.api.pki.goog/directory", label: "Google Trust Services" },
    { value: "https://acme.buypass.com/acme/directory", label: "Buypass" },
];

export const STACK_ITEMS = [
    { category: "Frontend", items: ["React", "TypeScript", "Vite", "Tailwind CSS"] },
    { category: "Backend", items: ["Node.js", "Express.js", "Knex.js", "Objection.js"] },
    { category: "Security", items: ["ModSecurity", "CrowdSec", "OpenAppSec", "MaxMind GeoIP"] },
    { category: "Infrastructure", items: ["Docker", "Nginx", "Caddy", "PHP-FPM"] }
];
