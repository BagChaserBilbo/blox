export const metadata = {
  title: "Datenschutzerklärung — Blox Studio",
};

export default function Datenschutz() {
  return (
    <div className="bg-off-white dark:bg-[#111111] min-h-screen pt-[52px] transition-colors duration-300">
      <div className="max-w-3xl mx-auto py-24 px-6">
        <h1 className="text-4xl font-bold text-near-black dark:text-white font-display tracking-tight mb-10">
          Datenschutzerklärung
        </h1>

        <div className="space-y-8 text-mid-gray leading-relaxed">
          {/* 1 */}
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              1. Verantwortlicher
            </h2>
            <p>
              Verantwortlicher für die Verarbeitung personenbezogener Daten im
              Sinne der DSGVO ist:
              <br />
              <br />
              Blox Studio
              <br />
              {/* TODO: Replace with real address */}
              [Straße und Hausnummer], [PLZ] Wien, Österreich
              <br />
              E-Mail:{" "}
              <a
                href="mailto:hello@blox.studio"
                className="text-blox-blue hover:underline"
              >
                hello@blox.studio
              </a>
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              2. Erhebung und Verarbeitung personenbezogener Daten
            </h2>
            <p>
              Personenbezogene Daten werden von uns nur dann erhoben und
              verarbeitet, wenn Sie uns diese aktiv mitteilen — zum Beispiel
              durch das Ausfüllen des Kontaktformulars auf dieser Website. Dabei
              verarbeiten wir folgende Daten:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Name</li>
              <li>E-Mail-Adresse</li>
              <li>Projektbeschreibung</li>
              <li>Budgetrahmen</li>
            </ul>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              3. Zweck der Verarbeitung
            </h2>
            <p>
              Die Verarbeitung der übermittelten Daten erfolgt ausschließlich
              zur Beantwortung Ihrer Anfrage und zur Anbahnung eines
              Vertragsverhältnisses. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
              DSGVO (Vertragserfüllung bzw. vorvertragliche Maßnahmen).
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              4. Speicherdauer
            </h2>
            <p>
              Wir speichern Ihre Daten nur so lange, wie es zur Erreichung des
              Verarbeitungszwecks erforderlich ist oder gesetzliche
              Aufbewahrungspflichten bestehen. Nach Abschluss der Anfrage bzw.
              des Auftrags werden die Daten gelöscht, soweit keine gesetzlichen
              Aufbewahrungsfristen entgegenstehen.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              5. Ihre Rechte
            </h2>
            <p>
              Sie haben gemäß DSGVO (Art. 15–22) das Recht auf:
            </p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>Auskunft über Ihre gespeicherten Daten (Art. 15)</li>
              <li>Berichtigung unrichtiger Daten (Art. 16)</li>
              <li>Löschung Ihrer Daten (Art. 17)</li>
              <li>Einschränkung der Verarbeitung (Art. 18)</li>
              <li>Datenübertragbarkeit (Art. 20)</li>
              <li>Widerspruch gegen die Verarbeitung (Art. 21)</li>
            </ul>
            <p className="mt-3">
              Zur Geltendmachung Ihrer Rechte wenden Sie sich bitte an:{" "}
              <a
                href="mailto:hello@blox.studio"
                className="text-blox-blue hover:underline"
              >
                hello@blox.studio
              </a>
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              6. Hosting
            </h2>
            <p>
              Diese Website wird bei einem Hosting-Anbieter betrieben. Die
              Server befinden sich in der EU. Durch den Besuch der Website
              werden technische Daten (z. B. IP-Adresse, Browsertyp,
              Zugriffszeitpunkt) in Server-Logfiles gespeichert. Dies erfolgt
              auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der sicheren und stabilen Bereitstellung der Website).
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              7. Keine Weitergabe an Dritte
            </h2>
            <p>
              Ihre personenbezogenen Daten werden nicht an Dritte weitergegeben,
              verkauft oder vermietet, es sei denn, dies ist zur
              Vertragserfüllung notwendig oder wir sind gesetzlich dazu
              verpflichtet.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              8. Kein Tracking ohne Einwilligung
            </h2>
            <p>
              Diese Website verwendet kein Google Analytics, keine
              Werbe-Cookies und kein sonstiges Tracking. Es werden
              ausschließlich technisch notwendige Cookies eingesetzt, die keine
              Einwilligung erfordern.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-semibold text-near-black dark:text-white mb-3">
              9. Beschwerderecht bei der Datenschutzbehörde
            </h2>
            <p>
              Sie haben das Recht, bei der österreichischen Datenschutzbehörde
              Beschwerde einzureichen:
              <br />
              <br />
              Österreichische Datenschutzbehörde
              <br />
              Barichgasse 40–42, 1030 Wien
              <br />
              <a
                href="https://www.dsb.gv.at"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blox-blue hover:underline"
              >
                www.dsb.gv.at
              </a>
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
