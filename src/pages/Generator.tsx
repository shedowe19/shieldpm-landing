import { useState } from 'react';
import { Copy, Settings, Database, Cloud, HardDrive, Lock, Server, Terminal, CheckCircle, ChevronUp, ChevronDown } from 'lucide-react';
import { ComposeConfig } from '../types';
import { TIMEZONES, ACME_SERVERS } from '../constants';

export default function Generator() {
    const [copied, setCopied] = useState(false);
    const [showAdvanced, setShowAdvanced] = useState(false);
    const [showNginxAdvanced, setShowNginxAdvanced] = useState(false);

    const [config, setConfig] = useState<ComposeConfig>({
        timezone: 'Europe/Berlin',
        puid: '',
        pgid: '',
        csrfSecret: '',
        npmPort: '81',
        goaPort: '91',
        httpPort: '80',
        httpsPort: '443',
        http3AltSvcPort: '',
        disableHttp: false,
        disableH3Quic: false,
        disableIpv6: false,
        npmListenLocalhost: false,
        goaListenLocalhost: false,
        listenProxyProtocol: false,
        ipv4Binding: '',
        ipv6Binding: '',
        dbType: 'sqlite',
        dbHost: '127.0.0.1',
        dbPort: '3306',
        dbUser: 'npm',
        dbPassword: 'npm',
        dbName: 'npm',
        dbMysqlSsl: false,
        acmeEmail: '',
        acmeServer: 'https://acme-v02.api.letsencrypt.org/directory',
        acmeKeyType: 'ecdsa',
        acmeOcspStapling: false,
        acmeMustStaple: false,
        acmeEabKid: '',
        acmeEabHmacKey: '',
        acmeProfile: '',
        customOcspStapling: false,
        defaultCertId: '',
        crt: '',
        logrotate: false,
        logrotations: '3',
        goaccess: false,
        nginxLogNotFound: false,
        php82: false,
        php83: false,
        php84: false,
        disableProxyBuffering: false,
        nginx404Redirect: false,
        hstsSubdomains: true,
        xFrameOptions: '',
        workerProcesses: '',
        workerConnections: '',
        disableNginxBeautifier: false,
        fullclean: false,
        skipIpRanges: true,
        iprt: '',
        nginxQuicBpf: false,
        loadGeoip2: false,
        loadNjs: false,
        loadNtlm: false,
        loadVhostTrafficStatus: false,
        enableCrowdsec: false,
        enableOpenappsec: false,
        openappsecMode: 'cloud',
        openappsecAgentToken: '',
        openappsecUserEmail: '',
        initialAdminEmail: '',
        initialAdminPassword: '',
        initialDefaultPage: '',
        enablePrerun: false,
        torEnabled: true,
        enableGeoipUpdate: false,
        geoipAccountId: '',
        geoipLicenseKey: '',
        enableCaddy: false,
        volumePath: '/opt/shieldpm',
    });

    const generateCompose = () => {
        const envVars = [`      - "TZ=${config.timezone}"`];

        // System
        if (config.puid) envVars.push(`      - "PUID=${config.puid}"`);
        if (config.pgid) envVars.push(`      - "PGID=${config.pgid}"`);
        if (config.csrfSecret) envVars.push(`      - "CSRF_SECRET=${config.csrfSecret}"`);

        // Ports
        if (config.npmPort !== '81') envVars.push(`      - "NPM_PORT=${config.npmPort}"`);
        if (config.goaPort !== '91') envVars.push(`      - "GOA_PORT=${config.goaPort}"`);
        if (config.httpPort !== '80') envVars.push(`      - "HTTP_PORT=${config.httpPort}"`);
        if (config.httpsPort !== '443') envVars.push(`      - "HTTPS_PORT=${config.httpsPort}"`);
        if (config.http3AltSvcPort) envVars.push(`      - "HTTP3_ALT_SVC_PORT=${config.http3AltSvcPort}"`);
        if (config.disableHttp) envVars.push(`      - "DISABLE_HTTP=true"`);
        if (config.disableH3Quic) envVars.push(`      - "DISABLE_H3_QUIC=true"`);
        if (config.disableIpv6) envVars.push(`      - "DISABLE_IPV6=true"`);
        if (config.npmListenLocalhost) envVars.push(`      - "NPM_LISTEN_LOCALHOST=true"`);
        if (config.goaListenLocalhost) envVars.push(`      - "GOA_LISTEN_LOCALHOST=true"`);
        if (config.listenProxyProtocol) envVars.push(`      - "LISTEN_PROXY_PROTOCOL=true"`);
        if (config.ipv4Binding) envVars.push(`      - "IPV4_BINDING=${config.ipv4Binding}"`);
        if (config.ipv6Binding) envVars.push(`      - "IPV6_BINDING=${config.ipv6Binding}"`);

        // Database
        if (config.dbType === 'mysql') {
            envVars.push(`      - "DB_MYSQL_HOST=${config.dbHost}"`);
            envVars.push(`      - "DB_MYSQL_PORT=${config.dbPort}"`);
            envVars.push(`      - "DB_MYSQL_USER=${config.dbUser}"`);
            envVars.push(`      - "DB_MYSQL_PASSWORD=${config.dbPassword}"`);
            envVars.push(`      - "DB_MYSQL_NAME=${config.dbName}"`);
            if (config.dbMysqlSsl) envVars.push(`      - "DB_MYSQL_SSL=true"`);
        } else if (config.dbType === 'postgres') {
            envVars.push(`      - "DB_POSTGRES_HOST=${config.dbHost}"`);
            envVars.push(`      - "DB_POSTGRES_PORT=${config.dbPort || '5432'}"`);
            envVars.push(`      - "DB_POSTGRES_USER=${config.dbUser}"`);
            envVars.push(`      - "DB_POSTGRES_PASSWORD=${config.dbPassword}"`);
            envVars.push(`      - "DB_POSTGRES_NAME=${config.dbName}"`);
        }

        // ACME
        if (config.acmeEmail) envVars.push(`      - "ACME_EMAIL=${config.acmeEmail}"`);
        if (config.acmeServer !== 'https://acme-v02.api.letsencrypt.org/directory') {
            envVars.push(`      - "ACME_SERVER=${config.acmeServer}"`);
        }
        if (config.acmeKeyType !== 'ecdsa') envVars.push(`      - "ACME_KEY_TYPE=${config.acmeKeyType}"`);
        if (config.acmeOcspStapling) envVars.push(`      - "ACME_OCSP_STAPLING=true"`);
        if (config.acmeMustStaple) envVars.push(`      - "ACME_MUST_STAPLE=true"`);
        if (config.acmeEabKid) envVars.push(`      - "ACME_EAB_KID=${config.acmeEabKid}"`);
        if (config.acmeEabHmacKey) envVars.push(`      - "ACME_EAB_HMAC_KEY=${config.acmeEabHmacKey}"`);
        if (config.acmeProfile) envVars.push(`      - "ACME_PROFILE=${config.acmeProfile}"`);
        if (config.customOcspStapling) envVars.push(`      - "CUSTOM_OCSP_STAPLING=true"`);
        if (config.defaultCertId) envVars.push(`      - "DEFAULT_CERT_ID=${config.defaultCertId}"`);
        if (config.crt) envVars.push(`      - "CRT=${config.crt}"`);

        // Analytics
        if (config.logrotate) envVars.push(`      - "LOGROTATE=true"`);
        if (config.logrotations !== '3') envVars.push(`      - "LOGROTATIONS=${config.logrotations}"`);
        if (config.goaccess) envVars.push(`      - "GOA=true"`);
        if (config.nginxLogNotFound) envVars.push(`      - "NGINX_LOG_NOT_FOUND=true"`);

        // PHP
        if (config.php82) envVars.push(`      - "PHP82=true"`);
        if (config.php83) envVars.push(`      - "PHP83=true"`);
        if (config.php84) envVars.push(`      - "PHP84=true"`);

        // Nginx
        if (config.disableProxyBuffering) envVars.push(`      - "NGINX_DISABLE_PROXY_BUFFERING=true"`);
        if (config.nginx404Redirect) envVars.push(`      - "NGINX_404_REDIRECT=true"`);
        if (!config.hstsSubdomains) envVars.push(`      - "NGINX_HSTS_SUBDOMAINS=false"`);
        if (config.xFrameOptions) envVars.push(`      - "X_FRAME_OPTIONS=${config.xFrameOptions}"`);
        if (config.workerProcesses) envVars.push(`      - "NGINX_WORKER_PROCESSES=${config.workerProcesses}"`);
        if (config.workerConnections) envVars.push(`      - "NGINX_WORKER_CONNECTIONS=${config.workerConnections}"`);
        if (config.disableNginxBeautifier) envVars.push(`      - "DISABLE_NGINX_BEAUTIFIER=true"`);
        if (config.fullclean) envVars.push(`      - "FULLCLEAN=true"`);
        if (!config.skipIpRanges) envVars.push(`      - "SKIP_IP_RANGES=false"`);
        if (config.iprt) envVars.push(`      - "IPRT=${config.iprt}"`);
        if (config.nginxQuicBpf) envVars.push(`      - "NGINX_QUIC_BPF=true"`);

        // Modules
        if (config.loadGeoip2) envVars.push(`      - "NGINX_LOAD_GEOIP2_MODULE=true"`);
        if (config.loadNjs) envVars.push(`      - "NGINX_LOAD_NJS_MODULE=true"`);
        if (config.loadNtlm) envVars.push(`      - "NGINX_LOAD_NTLM_MODULE=true"`);
        if (config.loadVhostTrafficStatus) envVars.push(`      - "NGINX_LOAD_VHOST_TRAFFIC_STATUS_MODULE=true"`);

        // OpenAppSec
        if (config.enableOpenappsec) envVars.push(`      - "NGINX_LOAD_OPENAPPSEC_ATTACHMENT_MODULE=true"`);

        // Initialization
        if (config.initialAdminEmail) envVars.push(`      - "INITIAL_ADMIN_EMAIL=${config.initialAdminEmail}"`);
        if (config.initialAdminPassword) envVars.push(`      - "INITIAL_ADMIN_PASSWORD=${config.initialAdminPassword}"`);
        if (config.initialDefaultPage) envVars.push(`      - "INITIAL_DEFAULT_PAGE=${config.initialDefaultPage}"`);
        if (config.enablePrerun) envVars.push(`      - "ENABLE_PRERUN=true"`);

        // Tor
        if (!config.torEnabled) envVars.push(`      - "TOR_ENABLED=false"`);

        let compose = `services:
  shieldpm:
    image: ghcr.io/shedowe19/shieldpm:develop
    container_name: shieldpm
    restart: always
    network_mode: host
    volumes:
      - "${config.volumePath}:/data"${config.enableOpenappsec ? `
      - "shm-volume:/dev/shm/check-point"` : ''}
    environment:
${envVars.join('\n')}`;

        // Add capabilities for QUIC BPF or OpenAppSec
        if (config.nginxQuicBpf) {
            compose += `
    cap_add:
      - BPF
      - PERFMON
      - NET_ADMIN`;
        }

        if (config.enableOpenappsec) {
            compose += `
    ipc: host`;
        }

        // Add CrowdSec service
        if (config.enableCrowdsec) {
            compose += `

  crowdsec:
    container_name: crowdsec
    image: docker.io/crowdsecurity/crowdsec:latest
    restart: always
    network_mode: bridge
    ports:
      - "127.0.0.1:7422:7422"
      - "127.0.0.1:8080:8080"
    environment:
      - "TZ=${config.timezone}"
      - "USE_WAL=true"
      - "COLLECTIONS=crowdsecurity/nginx crowdsecurity/base-http-scenarios crowdsecurity/http-cve crowdsecurity/modsecurity crowdsecurity/appsec-virtual-patching crowdsecurity/appsec-generic-rules"
    volumes:
      - "/opt/crowdsec/conf:/etc/crowdsec"
      - "/opt/crowdsec/data:/var/lib/crowdsec/data"
      - "${config.volumePath}/nginx:/opt/shieldpm/nginx:ro"
      - "${config.volumePath}/crowdsec/parser.yaml:/etc/crowdsec/parsers/s01-parse/shieldpm-logs.yaml:ro"
      - "${config.volumePath}/crowdsec/collection.yaml:/etc/crowdsec/collections/shieldpm.yaml:ro"
      - "${config.volumePath}/crowdsec/shieldpm-acquis.yaml:/etc/crowdsec/acquis.d/shieldpm.yaml:ro"${config.enableOpenappsec ? `
      - "/opt/openappsec/logs:/opt/openappsec/logs:ro"` : ''}`;
        }

        // Add Database service
        if (config.dbType === 'mysql') {
            compose += `

  db:
    container_name: shieldpm-db
    image: mysql:8
    restart: always
    network_mode: bridge
    environment:
      - "MYSQL_ROOT_PASSWORD=${config.dbPassword}"
      - "MYSQL_DATABASE=${config.dbName}"
      - "MYSQL_USER=${config.dbUser}"
      - "MYSQL_PASSWORD=${config.dbPassword}"
    ports:
      - "3306:3306"
    volumes:
      - "db_data:/var/lib/mysql"`;
        } else if (config.dbType === 'postgres') {
            compose += `

  db:
    container_name: shieldpm-db
    image: postgres:17-bookworm
    restart: always
    network_mode: bridge
    environment:
      - "POSTGRES_DB=${config.dbName}"
      - "POSTGRES_USER=${config.dbUser}"
      - "POSTGRES_PASSWORD=${config.dbPassword}"
    ports:
      - "5432:5432"
    volumes:
      - "${config.volumePath}/postgres:/var/lib/postgresql/data"`;
        }

        // Add GeoIP Update service
        if (config.enableGeoipUpdate) {
            compose += `

  geoipupdate:
    container_name: shieldpm-geoipupdate
    image: ghcr.io/maxmind/geoipupdate:latest
    restart: always
    network_mode: bridge
    environment:
      - "TZ=${config.timezone}"
      - "GEOIPUPDATE_EDITION_IDS=GeoLite2-Country GeoLite2-City GeoLite2-ASN"
      - "GEOIPUPDATE_ACCOUNT_ID=${config.geoipAccountId}"
      - "GEOIPUPDATE_LICENSE_KEY=${config.geoipLicenseKey}"
      - "GEOIPUPDATE_FREQUENCY=24"
    volumes:
      - "${config.volumePath}/nginx:/usr/share/GeoIP"`;
        }

        // Add Caddy Redirector
        if (config.enableCaddy) {
            compose += `

  shieldpm-caddy:
    container_name: shieldpm-caddy
    image: ghcr.io/shedowe19/shieldpm:caddy
    restart: always
    network_mode: bridge
    ports:
      - "80:80"
    environment:
      - "TZ=${config.timezone}"`;
        }

        // Add OpenAppSec services based on mode
        if (config.enableOpenappsec) {
            if (config.openappsecMode === 'cloud') {
                // Cloud mode - only agent with token
                compose += `

  openappsec-agent:
    container_name: openappsec-agent
    image: ghcr.io/openappsec/agent:latest
    restart: always
    ipc: host
    volumes:
      - "shm-volume:/dev/shm/check-point"
      - "/opt/openappsec/conf:/etc/cp/conf"
      - "/opt/openappsec/data:/etc/cp/data"
      - "/opt/openappsec/logs:/var/log/nano_agent"
    environment:
      - "TZ=${config.timezone}"
      - "autoPolicyLoad=true"
      - "registered_server=ShieldPM"${config.openappsecUserEmail ? `
      - "user_email=${config.openappsecUserEmail}"` : ''}
      - "AGENT_TOKEN=${config.openappsecAgentToken}"
    command: /cp-nano-agent`;
            } else {
                // Local mode - all containers
                compose += `

  openappsec-agent:
    container_name: openappsec-agent
    image: ghcr.io/openappsec/agent:latest
    restart: always
    ipc: host
    volumes:
      - "shm-volume:/dev/shm/check-point"
      - "/opt/openappsec/conf:/etc/cp/conf"
      - "/opt/openappsec/data:/etc/cp/data"
      - "/opt/openappsec/logs:/var/log/nano_agent"
      - "/opt/openappsec/localconf:/ext/appsec"
    environment:
      - "TZ=${config.timezone}"
      - "autoPolicyLoad=true"
      - "registered_server=ShieldPM"${config.openappsecUserEmail ? `
      - "user_email=${config.openappsecUserEmail}"` : ''}
      - "SHARED_STORAGE_HOST=openappsec-shared-storage"
      - "LEARNING_HOST=openappsec-smartsync"
      - "TUNING_HOST=openappsec-tuning-svc"
    command: /cp-nano-agent

  openappsec-smartsync:
    container_name: openappsec-smartsync
    image: ghcr.io/openappsec/smartsync:latest
    restart: always
    environment:
      - "TZ=${config.timezone}"
      - "SHARED_STORAGE_HOST=openappsec-shared-storage"
    depends_on:
      - openappsec-shared-storage

  openappsec-shared-storage:
    container_name: openappsec-shared-storage
    image: ghcr.io/openappsec/smartsync-shared-files:latest
    restart: always
    ipc: service:openappsec-agent
    user: root
    environment:
      - "TZ=${config.timezone}"
    volumes:
      - "/opt/openappsec/storage:/db"

  openappsec-tuning-svc:
    container_name: openappsec-tuning-svc
    image: ghcr.io/openappsec/smartsync-tuning:latest
    restart: always
    environment:
      - "TZ=${config.timezone}"
      - "SHARED_STORAGE_HOST=openappsec-shared-storage"
      - "QUERY_DB_HOST=openappsec-db"
      - "QUERY_DB_PASSWORD=password"
      - "QUERY_DB_USER=appsec"
    volumes:
      - "/opt/openappsec/conf:/etc/cp/conf"
    depends_on:
      - openappsec-shared-storage
      - openappsec-db

  openappsec-db:
    container_name: openappsec-db
    image: postgres:17-bookworm
    restart: always
    environment:
      - "TZ=${config.timezone}"
      - "POSTGRES_PASSWORD=password"
      - "POSTGRES_USER=appsec"
    volumes:
      - "/opt/openappsec/pgdb:/var/lib/postgresql/data"`;
            }
        }

        // Add volumes section if needed
        const needsVolumes = config.dbType === 'mysql' || config.enableOpenappsec;
        if (needsVolumes) {
            compose += `

volumes:`;
            if (config.dbType === 'mysql') {
                compose += `
  db_data:`;
            }
            if (config.enableOpenappsec) {
                compose += `
  shm-volume:
    driver: local
    driver_opts:
      type: tmpfs
      device: tmpfs`;
            }
        }

        return compose;
    };

    const copyToClipboard = async () => {
        await navigator.clipboard.writeText(generateCompose());
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const needsEab = config.acmeServer.includes('zerossl') || config.acmeServer.includes('google');

    return (
        <section className="relative pt-32 pb-20 px-4 min-h-screen bg-background text-white overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/05 rounded-full blur-3xl animate-blob"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/05 rounded-full blur-3xl animate-blob animation-delay-2000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div className="text-center mb-12 animate-fade-up opacity-0">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Docker Compose Generator</h2>
                    <p className="text-slate-400 text-lg">
                        Configure ShieldPM to your needs and generate a ready-to-use compose.yaml
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 animate-fade-up opacity-0" style={{ animationDelay: '0.2s' }}>
                    {/* Configuration Panel */}
                    <div className="space-y-6 min-w-0">
                        {/* Basic Settings */}
                        <div className="glass-card rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Settings className="w-5 h-5 text-emerald-400" />
                                Basic Settings
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">Timezone *</label>
                                    <select value={config.timezone} onChange={(e) => setConfig({ ...config, timezone: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none">
                                        {TIMEZONES.map((tz) => (<option key={tz} value={tz}>{tz}</option>))}
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">Data Volume Path</label>
                                    <input type="text" value={config.volumePath} onChange={(e) => setConfig({ ...config, volumePath: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none placeholder:text-slate-600" placeholder="/opt/shieldpm" />
                                </div>

                                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2">PUID</label>
                                        <input type="text" value={config.puid} onChange={(e) => setConfig({ ...config, puid: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="0" />
                                    </div>
                                    <div>
                                        <label className="block text-sm text-slate-400 mb-2">PGID</label>
                                        <input type="text" value={config.pgid} onChange={(e) => setConfig({ ...config, pgid: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="0" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ACME / SSL */}
                        <div className="glass-card rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-emerald-400" />
                                ACME / SSL Certificates
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">ACME Email</label>
                                    <input type="email" value={config.acmeEmail} onChange={(e) => setConfig({ ...config, acmeEmail: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="your@email.com" />
                                </div>

                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">ACME Server</label>
                                    <select value={config.acmeServer} onChange={(e) => setConfig({ ...config, acmeServer: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none">
                                        {ACME_SERVERS.map((server) => (<option key={server.value} value={server.value}>{server.label}</option>))}
                                    </select>
                                </div>

                                {needsEab && (
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg">
                                        <div>
                                            <label className="block text-sm text-amber-400 mb-2">EAB Key ID *</label>
                                            <input type="text" value={config.acmeEabKid} onChange={(e) => setConfig({ ...config, acmeEabKid: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-amber-400 mb-2">EAB HMAC Key *</label>
                                            <input type="text" value={config.acmeEabHmacKey} onChange={(e) => setConfig({ ...config, acmeEabHmacKey: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                    </div>
                                )}

                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="flex-1">
                                        <label className="block text-sm text-slate-400 mb-2">Key Type</label>
                                        <select value={config.acmeKeyType} onChange={(e) => setConfig({ ...config, acmeKeyType: e.target.value as 'ecdsa' | 'rsa' })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none">
                                            <option value="ecdsa">ECDSA (recommended)</option>
                                            <option value="rsa">RSA</option>
                                        </select>
                                    </div>
                                    <div className="flex-1">
                                        <label className="block text-sm text-slate-400 mb-2">Renewal Hours</label>
                                        <input type="text" value={config.crt} onChange={(e) => setConfig({ ...config, crt: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="23" />
                                    </div>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={config.acmeOcspStapling} onChange={(e) => setConfig({ ...config, acmeOcspStapling: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                        <span className="text-sm text-slate-300">OCSP Stapling</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={config.acmeMustStaple} onChange={(e) => setConfig({ ...config, acmeMustStaple: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                        <span className="text-sm text-slate-300">Must Staple</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={config.customOcspStapling} onChange={(e) => setConfig({ ...config, customOcspStapling: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                        <span className="text-sm text-slate-300">Custom Cert OCSP</span>
                                    </label>
                                </div>
                            </div>
                        </div>

                        {/* Database */}
                        <div className="glass-card rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Database className="w-5 h-5 text-emerald-400" />
                                Database
                            </h3>

                            <div className="space-y-4">
                                <div className="flex flex-col sm:flex-row gap-2">
                                    {(['sqlite', 'mysql', 'postgres'] as const).map((db) => (
                                        <button key={db} onClick={() => setConfig({ ...config, dbType: db, dbPort: db === 'postgres' ? '5432' : '3306' })} className={`flex-1 px-4 py-2 rounded-lg font-medium transition ${config.dbType === db ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                                            {db === 'sqlite' ? 'SQLite' : db === 'mysql' ? 'MySQL' : 'PostgreSQL'}
                                        </button>
                                    ))}
                                </div>

                                {config.dbType !== 'sqlite' && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">Host</label>
                                            <input type="text" value={config.dbHost} onChange={(e) => setConfig({ ...config, dbHost: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">Port</label>
                                            <input type="text" value={config.dbPort} onChange={(e) => setConfig({ ...config, dbPort: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">User</label>
                                            <input type="text" value={config.dbUser} onChange={(e) => setConfig({ ...config, dbUser: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">Password</label>
                                            <input type="password" value={config.dbPassword} onChange={(e) => setConfig({ ...config, dbPassword: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        <div className="col-span-2">
                                            <label className="block text-sm text-slate-400 mb-2">Database Name</label>
                                            <input type="text" value={config.dbName} onChange={(e) => setConfig({ ...config, dbName: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        {config.dbType === 'mysql' && (
                                            <label className="col-span-2 flex items-center gap-2 cursor-pointer">
                                                <input type="checkbox" checked={config.dbMysqlSsl} onChange={(e) => setConfig({ ...config, dbMysqlSsl: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                                <span className="text-sm text-slate-300">Enable SSL</span>
                                            </label>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Security Services */}
                        <div className="glass-card rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-emerald-400" />
                                Security Services
                            </h3>

                            <div className="space-y-4">
                                <label className="flex items-center gap-3 cursor-pointer p-3 bg-slate-800/50 rounded-lg">
                                    <input type="checkbox" checked={config.enableCrowdsec} onChange={(e) => setConfig({ ...config, enableCrowdsec: e.target.checked })} className="w-5 h-5 rounded bg-white/10 border-white/10 text-emerald-600 focus:ring-emerald-500" />
                                    <div>
                                        <span className="text-white font-medium">CrowdSec</span>
                                        <p className="text-sm text-slate-400">Community-driven IPS with threat intelligence</p>
                                    </div>
                                </label>

                                <div className={`p-3 rounded-lg ${config.enableOpenappsec ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-slate-800/50'}`}>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" checked={config.enableOpenappsec} onChange={(e) => setConfig({ ...config, enableOpenappsec: e.target.checked })} className="w-5 h-5 rounded bg-white/10 border-white/10 text-emerald-600 focus:ring-emerald-500" />
                                        <div>
                                            <span className="text-white font-medium">OpenAppSec</span>
                                            <p className="text-sm text-slate-400">Advanced ML-based Web Application Firewall</p>
                                        </div>
                                    </label>

                                    {config.enableOpenappsec && (
                                        <div className="mt-4 space-y-4">
                                            <div className="flex flex-col sm:flex-row gap-2">
                                                <button onClick={() => setConfig({ ...config, openappsecMode: 'cloud' })} className={`flex-1 px-4 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${config.openappsecMode === 'cloud' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                                                    <Cloud className="w-4 h-4" />
                                                    Cloud
                                                </button>
                                                <button onClick={() => setConfig({ ...config, openappsecMode: 'local' })} className={`flex-1 px-4 py-3 rounded-lg font-medium transition flex items-center justify-center gap-2 ${config.openappsecMode === 'local' ? 'bg-emerald-600 text-white' : 'bg-slate-800 text-slate-300 hover:bg-slate-700'}`}>
                                                    <HardDrive className="w-4 h-4" />
                                                    Local
                                                </button>
                                            </div>

                                            <p className="text-xs text-slate-400">
                                                {config.openappsecMode === 'cloud'
                                                    ? 'Cloud mode: Uses OpenAppSec cloud management. Requires AGENT_TOKEN from portal.openappsec.io'
                                                    : 'Local mode: Self-hosted management. Deploys all required containers locally (smartsync, tuning, db)'}
                                            </p>

                                            {config.openappsecMode === 'cloud' && (
                                                <div>
                                                    <label className="block text-sm text-slate-400 mb-2">Agent Token *</label>
                                                    <input type="text" value={config.openappsecAgentToken} onChange={(e) => setConfig({ ...config, openappsecAgentToken: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="Get from portal.openappsec.io" />
                                                </div>
                                            )}

                                            <div>
                                                <label className="block text-sm text-slate-400 mb-2">User Email (optional)</label>
                                                <input type="email" value={config.openappsecUserEmail} onChange={(e) => setConfig({ ...config, openappsecUserEmail: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Features */}
                        <div className="glass-card rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-emerald-400" />
                                Features & Modules
                            </h3>

                            <div className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={config.goaccess} onChange={(e) => setConfig({ ...config, goaccess: e.target.checked, logrotate: e.target.checked || config.logrotate })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                        <span className="text-sm text-slate-300">GoAccess Analytics</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={config.logrotate} onChange={(e) => setConfig({ ...config, logrotate: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                        <span className="text-sm text-slate-300">Log Rotation</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={config.php82} onChange={(e) => setConfig({ ...config, php82: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                        <span className="text-sm text-slate-300">PHP 8.2</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={config.php83} onChange={(e) => setConfig({ ...config, php83: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                        <span className="text-sm text-slate-300">PHP 8.3</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={config.php84} onChange={(e) => setConfig({ ...config, php84: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                        <span className="text-sm text-slate-300">PHP 8.4</span>
                                    </label>
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input type="checkbox" checked={config.torEnabled} onChange={(e) => setConfig({ ...config, torEnabled: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                        <span className="text-sm text-slate-300">Tor Onion Services</span>
                                    </label>
                                </div>

                                <div className="border-t border-slate-700 pt-4 mt-4">
                                    <p className="text-sm text-slate-400 mb-3">Nginx Modules</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.loadGeoip2} onChange={(e) => setConfig({ ...config, loadGeoip2: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">GeoIP2</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.loadNjs} onChange={(e) => setConfig({ ...config, loadNjs: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">NJS</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.loadNtlm} onChange={(e) => setConfig({ ...config, loadNtlm: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">NTLM</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.loadVhostTrafficStatus} onChange={(e) => setConfig({ ...config, loadVhostTrafficStatus: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">VHost Traffic Status</span>
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Additional Services */}
                        <div className="glass-card rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                                <Server className="w-5 h-5 text-emerald-400" />
                                Additional Services
                            </h3>

                            <div className="space-y-4">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input type="checkbox" checked={config.enableCaddy} onChange={(e) => setConfig({ ...config, enableCaddy: e.target.checked })} className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-emerald-600" />
                                    <div>
                                        <span className="text-white">Caddy Redirector</span>
                                        <p className="text-sm text-slate-400">HTTP to HTTPS redirect service</p>
                                    </div>
                                </label>

                                <div className={`p-3 rounded-lg ${config.enableGeoipUpdate ? 'bg-emerald-500/10 border border-emerald-500/20' : 'bg-slate-800/50'}`}>
                                    <label className="flex items-center gap-3 cursor-pointer">
                                        <input type="checkbox" checked={config.enableGeoipUpdate} onChange={(e) => setConfig({ ...config, enableGeoipUpdate: e.target.checked })} className="w-5 h-5 rounded bg-slate-800 border-slate-700 text-emerald-600" />
                                        <div>
                                            <span className="text-white">GeoIP Update</span>
                                            <p className="text-sm text-slate-400">MaxMind GeoIP database updates</p>
                                        </div>
                                    </label>

                                    {config.enableGeoipUpdate && (
                                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label className="block text-sm text-slate-400 mb-2">Account ID *</label>
                                                <input type="text" value={config.geoipAccountId} onChange={(e) => setConfig({ ...config, geoipAccountId: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                            </div>
                                            <div>
                                                <label className="block text-sm text-slate-400 mb-2">License Key *</label>
                                                <input type="text" value={config.geoipLicenseKey} onChange={(e) => setConfig({ ...config, geoipLicenseKey: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Advanced Network Settings */}
                        <div className="glass-card rounded-2xl overflow-hidden">
                            <button onClick={() => setShowAdvanced(!showAdvanced)} className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition">
                                <span className="font-semibold">Network & Ports</span>
                                {showAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {showAdvanced && (
                                <div className="px-6 pb-6 space-y-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">UI Port</label>
                                            <input type="text" value={config.npmPort} onChange={(e) => setConfig({ ...config, npmPort: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">GoAccess Port</label>
                                            <input type="text" value={config.goaPort} onChange={(e) => setConfig({ ...config, goaPort: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">HTTP Port</label>
                                            <input type="text" value={config.httpPort} onChange={(e) => setConfig({ ...config, httpPort: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">HTTPS Port</label>
                                            <input type="text" value={config.httpsPort} onChange={(e) => setConfig({ ...config, httpsPort: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">IPv4 Binding</label>
                                            <input type="text" value={config.ipv4Binding} onChange={(e) => setConfig({ ...config, ipv4Binding: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="0.0.0.0" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">IPv6 Binding</label>
                                            <input type="text" value={config.ipv6Binding} onChange={(e) => setConfig({ ...config, ipv6Binding: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="[::]" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.disableHttp} onChange={(e) => setConfig({ ...config, disableHttp: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">Disable HTTP</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.disableH3Quic} onChange={(e) => setConfig({ ...config, disableH3Quic: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">Disable HTTP/3</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.disableIpv6} onChange={(e) => setConfig({ ...config, disableIpv6: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">Disable IPv6</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.listenProxyProtocol} onChange={(e) => setConfig({ ...config, listenProxyProtocol: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">Proxy Protocol</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.npmListenLocalhost} onChange={(e) => setConfig({ ...config, npmListenLocalhost: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">UI Localhost Only</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.goaListenLocalhost} onChange={(e) => setConfig({ ...config, goaListenLocalhost: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">GoAccess Localhost</span>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Advanced Nginx Settings */}
                        <div className="glass-card rounded-2xl overflow-hidden">
                            <button onClick={() => setShowNginxAdvanced(!showNginxAdvanced)} className="w-full px-6 py-4 flex items-center justify-between hover:bg-slate-800/50 transition">
                                <span className="font-semibold">Advanced Nginx</span>
                                {showNginxAdvanced ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                            </button>

                            {showNginxAdvanced && (
                                <div className="px-6 pb-6 space-y-4">
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">Worker Processes</label>
                                            <input type="text" value={config.workerProcesses} onChange={(e) => setConfig({ ...config, workerProcesses: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="auto" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">Worker Connections</label>
                                            <input type="text" value={config.workerConnections} onChange={(e) => setConfig({ ...config, workerConnections: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="512" />
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">X-Frame-Options</label>
                                            <select value={config.xFrameOptions} onChange={(e) => setConfig({ ...config, xFrameOptions: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none">
                                                <option value="">Default</option>
                                                <option value="deny">deny</option>
                                                <option value="sameorigin">sameorigin</option>
                                                <option value="none">none</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm text-slate-400 mb-2">IP Range Update (hours)</label>
                                            <input type="text" value={config.iprt} onChange={(e) => setConfig({ ...config, iprt: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" placeholder="1" />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.disableProxyBuffering} onChange={(e) => setConfig({ ...config, disableProxyBuffering: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">Disable Buffering</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.nginx404Redirect} onChange={(e) => setConfig({ ...config, nginx404Redirect: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">404 Redirect to /</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.hstsSubdomains} onChange={(e) => setConfig({ ...config, hstsSubdomains: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">HSTS Subdomains</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.nginxQuicBpf} onChange={(e) => setConfig({ ...config, nginxQuicBpf: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">QUIC BPF</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.fullclean} onChange={(e) => setConfig({ ...config, fullclean: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">Full Clean</span>
                                        </label>
                                        <label className="flex items-center gap-2 cursor-pointer">
                                            <input type="checkbox" checked={config.nginxLogNotFound} onChange={(e) => setConfig({ ...config, nginxLogNotFound: e.target.checked })} className="w-4 h-4 rounded bg-white/10 border-white/10 text-emerald-600" />
                                            <span className="text-sm text-slate-300">Log 404 Errors</span>
                                        </label>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Initialization */}
                        <div className="glass-card rounded-2xl p-4 sm:p-6">
                            <h3 className="text-lg font-semibold mb-4">Initial Setup (optional)</h3>
                            <p className="text-sm text-slate-400 mb-4">Pre-configure admin account for automated deployments</p>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">Admin Email</label>
                                    <input type="email" value={config.initialAdminEmail} onChange={(e) => setConfig({ ...config, initialAdminEmail: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                </div>
                                <div>
                                    <label className="block text-sm text-slate-400 mb-2">Admin Password</label>
                                    <input type="password" value={config.initialAdminPassword} onChange={(e) => setConfig({ ...config, initialAdminPassword: e.target.value })} className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-emerald-500 focus:outline-none" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Output Panel */}
                    <div className="lg:sticky lg:top-24 h-fit min-w-0">
                        <div className="glass-card rounded-2xl overflow-hidden">
                            <div className="flex items-center justify-between px-4 py-3 bg-white/5 border-b border-white/5">
                                <div className="flex items-center gap-2">
                                    <Terminal className="w-4 h-4 text-slate-400" />
                                    <span className="text-sm text-slate-400">compose.yaml</span>
                                </div>
                                <button onClick={copyToClipboard} className="flex items-center gap-2 px-3 py-1.5 bg-emerald-600 hover:bg-emerald-500 rounded-lg text-sm font-medium transition">
                                    {copied ? <CheckCircle className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                                    {copied ? 'Copied!' : 'Copy'}
                                </button>
                            </div>
                            <pre className="p-4 text-sm text-slate-300 overflow-auto max-h-[700px] font-mono">
                                {generateCompose()}
                            </pre>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
