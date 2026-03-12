export const metadata = {
  title: "Impressum — Blox Studio",
};

export default function Impressum() {
  return (
    <div className="bg-off-white dark:bg-[#111111] min-h-screen pt-[52px] transition-colors duration-300">
      <div className="max-w-3xl mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold text-near-black dark:text-white font-display tracking-tight mb-10">
          Impressum
        </h1>

        <div className="prose prose-gray max-w-none space-y-8 text-mid-gray leading-relaxed">
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              Angaben gemäß § 5 ECG
            </h2>
            <p>
              <strong className="text-near-black">Firmenname:</strong> Blox
              Studio
              <br />
              {/* TODO: Replace with real address */}
              <strong className="text-near-black">Adresse:</strong>{" "}
              [Straße und Hausnummer], [PLZ] Wien, Österreich
              <br />
              <strong className="text-near-black">E-Mail:</strong>{" "}
              <a
                href="mailto:hello@blox.studio"
                className="text-blox-blue hover:underline"
              >
                hello@blox.studio
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              Unternehmensgegenstand
            </h2>
            <p>Webdesign / IT-Dienstleistungen</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              Umsatzsteuer-Identifikationsnummer
            </h2>
            {/* TODO: Replace with real UID */}
            <p>UID-Nummer: [ATU-Nummer eintragen]</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              Berufsrecht
            </h2>
            <p>
              Berufsbezeichnung: Webdesign / IT-Dienstleistungen
              <br />
              Verliehen durch: Wirtschaftskammer Wien (WKO)
              <br />
              Mitglied der WKO: Ja
              <br />
              Anwendbare Rechtsvorschriften: Gewerbeordnung (GewO)
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              Aufsichtsbehörde
            </h2>
            <p>Wirtschaftskammer Wien</p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              Haftungsausschluss
            </h2>
            <p>
              Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keine
              Haftung für die Inhalte externer Links. Für den Inhalt der
              verlinkten Seiten sind ausschließlich deren Betreiber
              verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              Urheberrecht
            </h2>
            <p>
              Die auf dieser Website veröffentlichten Inhalte und Werke
              unterliegen dem österreichischen Urheberrecht. Vervielfältigung,
              Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
              Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung
              von Blox Studio.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
