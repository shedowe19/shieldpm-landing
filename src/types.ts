export interface ComposeConfig {
    // System
    timezone: string;
    puid: string;
    pgid: string;
    csrfSecret: string;
    // Ports
    npmPort: string;
    goaPort: string;
    httpPort: string;
    httpsPort: string;
    http3AltSvcPort: string;
    disableHttp: boolean;
    disableH3Quic: boolean;
    disableIpv6: boolean;
    npmListenLocalhost: boolean;
    goaListenLocalhost: boolean;
    listenProxyProtocol: boolean;
    // Bindings
    ipv4Binding: string;
    ipv6Binding: string;
    // Database
    dbType: 'sqlite' | 'mysql' | 'postgres';
    dbHost: string;
    dbPort: string;
    dbUser: string;
    dbPassword: string;
    dbName: string;
    dbMysqlSsl: boolean;
    // ACME
    acmeEmail: string;
    acmeServer: string;
    acmeKeyType: 'ecdsa' | 'rsa';
    acmeOcspStapling: boolean;
    acmeMustStaple: boolean;
    acmeEabKid: string;
    acmeEabHmacKey: string;
    acmeProfile: string;
    customOcspStapling: boolean;
    defaultCertId: string;
    crt: string;
    // Analytics
    logrotate: boolean;
    logrotations: string;
    goaccess: boolean;
    nginxLogNotFound: boolean;
    // PHP
    php82: boolean;
    php83: boolean;
    php84: boolean;
    // Nginx
    disableProxyBuffering: boolean;
    nginx404Redirect: boolean;
    hstsSubdomains: boolean;
    xFrameOptions: string;
    workerProcesses: string;
    workerConnections: string;
    disableNginxBeautifier: boolean;
    fullclean: boolean;
    skipIpRanges: boolean;
    iprt: string;
    nginxQuicBpf: boolean;
    // Modules
    loadGeoip2: boolean;
    loadNjs: boolean;
    loadNtlm: boolean;
    loadVhostTrafficStatus: boolean;
    // Security Services
    enableCrowdsec: boolean;
    enableOpenappsec: boolean;
    openappsecMode: 'local' | 'cloud';
    openappsecAgentToken: string;
    openappsecUserEmail: string;
    // Initialization
    initialAdminEmail: string;
    initialAdminPassword: string;
    initialDefaultPage: string;
    enablePrerun: boolean;
    // Tor
    torEnabled: boolean;
    // Additional Services
    enableGeoipUpdate: boolean;
    geoipAccountId: string;
    geoipLicenseKey: string;
    enableCaddy: boolean;
    // Volume path
    volumePath: string;
}
