import React from 'react';

export default function Privacy() {
    return (
        <section className="pt-32 pb-20 px-4 min-h-screen bg-background text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>

                <div className="glass-card p-8 rounded-2xl space-y-6 text-slate-300">
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">1. Privacy at a Glance</h2>
                        <h3 className="text-xl text-white mb-2">General Information</h3>
                        <p className="mb-4">
                            The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is all data with which you can be personally identified. This policy complies with the General Data Protection Regulation (GDPR) and the German Telecommunications Digital Services Data Protection Act (TDDDG).
                        </p>

                        <h3 className="text-xl text-white mb-2">Data Collection on this Website</h3>
                        <p className="mb-2"><strong>Who is responsible for data collection on this website?</strong></p>
                        <p className="mb-4">
                            The data processing on this website is carried out by the website operator. You can find their contact details in the Imprint of this website.
                        </p>

                        <p className="mb-2"><strong>How do we collect your data?</strong></p>
                        <p className="mb-4">
                            On the one hand, your data is collected when you communicate it to us. This may be data that you enter in a contact form, for example.
                            Other data is collected automatically or after your consent when visiting the website by our IT systems. These are mainly technical data (e.g. internet browser, operating system or time of the page view). This data is collected automatically as soon as you enter this website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">2. Hosting</h2>
                        <p>
                            We host the content of our website with the following provider:
                        </p>
                        <h3 className="text-xl text-white mt-4 mb-2">GitHub Pages</h3>
                        <p>
                            The provider is GitHub Inc., 88 Colin P Kelly Jr St, San Francisco, CA 94107, USA (hereinafter referred to as "GitHub").
                            When you visit our website, the personal data collected on this website is stored on the servers of GitHub. This may include, but is not limited to, IP addresses, contact requests, meta and communication data, contract data, contact details, names, website accesses, and other data generated via a website.
                        </p>
                        <p className="mt-4">
                            The use of GitHub Pages is based on Art. 6 (1) (f) GDPR. We have a legitimate interest in the most reliable representation of our website. If a corresponding consent has been requested, the processing takes place exclusively on the basis of Art. 6 (1) (a) GDPR and § 25 (1) TDDDG, insofar as the consent includes the storage of cookies or access to information in the user's terminal device (e.g., device fingerprinting) within the meaning of the TDDDG. The consent can be revoked at any time.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">3. General Notes and Mandatory Information</h2>

                        <h3 className="text-xl text-white mb-2">Data Protection</h3>
                        <p className="mb-4">
                            The operators of these pages take the protection of your personal data very seriously. We treat your personal data confidentially and in accordance with the statutory data protection regulations and this privacy policy.
                        </p>

                        <h3 className="text-xl text-white mb-2">Notice concerning the Responsible Party</h3>
                        <p className="mb-2">The responsible party for data processing on this website is:</p>
                        <p className="mb-4 text-emerald-400">
                            Dominik Lieske<br />
                            Bergstr. 7<br />
                            19372 Spornitz<br />
                            Germany<br /><br />
                            Phone: +49 (0) 176 / 20103824<br />
                            E-Mail: shieldpm-anfragen@clawsucht.eu
                        </p>

                        <h3 className="text-xl text-white mb-2">Revocation of your Consent to Data Processing</h3>
                        <p className="mb-4">
                            Many data processing operations are only possible with your express consent. You can revoke an already given consent at any time. The legality of the data processing carried out until the revocation remains unaffected by the revocation.
                        </p>

                        <h3 className="text-xl text-white mb-2">Right of Appeal to the Competent Supervisory Authority</h3>
                        <p className="mb-4">
                            In the event of violations of the GDPR, those affected are entitled to a right of appeal to a supervisory authority, in particular in the Member State of their habitual residence, their place of work or the place of the alleged violation.
                        </p>

                        <h3 className="text-xl text-white mb-2">Right to Data Portability</h3>
                        <p className="mb-4">
                            You have the right to have data that we process automatically based on your consent or in fulfillment of a contract handed over to you or to a third party in a standard, machine-readable format.
                        </p>

                        <h3 className="text-xl text-white mb-2">SSL or TLS Encryption</h3>
                        <p>
                            For security reasons and to protect the transmission of confidential content, such as orders or inquiries that you send to us as the site operator, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
