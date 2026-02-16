import React from 'react';

export default function Imprint() {
    return (
        <section className="pt-32 pb-20 px-4 min-h-screen bg-background text-white">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold mb-8">Imprint</h1>

                <div className="glass-card p-8 rounded-2xl space-y-6 text-slate-300">
                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Information pursuant to § 5 DDG</h2>
                        <p>
                            Dominik Lieske<br />
                            Bergstr. 7<br />
                            19372 Spornitz<br />
                            Germany
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Contact</h2>
                        <p>
                            Phone: +49 (0) 176 / 20103824<br />
                            E-Mail: shieldpm-anfragen@clawsucht.eu
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">EU Dispute Resolution</h2>
                        <p>
                            The European Commission provides a platform for online dispute resolution (ODR): <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition">https://ec.europa.eu/consumers/odr/</a>.<br />
                            Our e-mail address can be found above in the site notice.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Dispute Resolution Proceedings in front of a Consumer Arbitration Board</h2>
                        <p>
                            We are not willing or obliged to participate in dispute resolution proceedings in front of a consumer arbitration board.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-white mb-4">Responsibility for Content</h2>
                        <p>
                            Dominik Lieske<br />
                            Bergstr. 7<br />
                            19372 Spornitz
                        </p>
                    </div>

                    <div className="pt-6 border-t border-white/10">
                        <h2 className="text-2xl font-semibold text-white mb-4">Disclaimer</h2>

                        <h3 className="text-xl text-white mb-2">Liability for Contents</h3>
                        <p className="mb-4">
                            As service providers, we are liable for our own content on these pages according to § 7, paragraph 1 DDG (Digitale-Dienste-Gesetz). However, according to §§ 8 to 10 DDG, service providers are not obligated to permanently monitor submitted or stored information or to search for evidences that indicate illegal activities.
                        </p>
                        <p className="mb-4">
                            Legal obligations to removing information or to blocking the use of information remain unchallenged. In this case, liability is only possible at the time of knowledge about a specific violation of law. Illegal contents will be removed immediately at the time we get knowledge of them.
                        </p>

                        <h3 className="text-xl text-white mb-2">Liability for Links</h3>
                        <p className="mb-4">
                            Our offer includes links to external third-party websites. We have no influence on the contents of those websites, therefore we cannot guarantee for those contents. Providers or administrators of linked websites are always responsible for their own contents.
                        </p>
                        <p className="mb-4">
                            The linked websites had been checked for possible violations of law at the time of the establishment of the link. Illegal contents were not detected at the time of the linking. A permanent monitoring of the contents of linked websites cannot be imposed without reasonable indications that there has been a violation of law. Illegal links will be removed immediately at the time we get knowledge of them.
                        </p>

                        <h3 className="text-xl text-white mb-2">Copyright</h3>
                        <p>
                            Contents and compilations published on these websites by the providers are subject to German copyright laws. Reproduction, editing, distribution as well as the use of any kind outside the scope of the copyright law require a written permission of the author or originator. Downloads and copies of these websites are permitted for private use only.
                        </p>
                        <p>
                            The commercial use of our contents without permission of the originator is prohibited. Copyright laws of third parties are respected as long as the contents on these websites do not originate from the provider. Contributions of third parties on this site are indicated as such. However, if you notice any violations of copyright law, please inform us. Such contents will be removed immediately.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
