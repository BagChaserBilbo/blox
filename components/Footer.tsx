import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blox-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Top row */}
        <div className="flex items-baseline gap-3 mb-8">
          <span className="font-bold text-xl text-white font-display tracking-tight">
            Blox
          </span>
          <span className="text-sm text-mid-gray">Build Bold.</span>
        </div>

        {/* Legal links */}
        <div className="flex items-center gap-6 mb-8">
          <Link
            href="/impressum"
            className="text-sm text-mid-gray hover:text-white transition-colors duration-200"
          >
            Impressum
          </Link>
          <Link
            href="/datenschutz"
            className="text-sm text-mid-gray hover:text-white transition-colors duration-200"
          >
            Datenschutz
          </Link>
        </div>

        {/* Copyright */}
        <p className="text-xs text-mid-gray">
          © {new Date().getFullYear()} Blox Studio. Alle Rechte vorbehalten. ·
          Wien, Österreich
        </p>
      </div>
    </footer>
  );
}
