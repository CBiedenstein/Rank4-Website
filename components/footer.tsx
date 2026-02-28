import Image from "next/image"

export function Footer() {
  return (
    <footer
      className="px-6 py-12 md:px-12 lg:px-20"
      style={{
        backgroundColor: "#211103",
        borderTop: "1px solid rgba(162,112,53,0.15)",
      }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center">
          <Image
            src="/images/rank4-logo.svg"
            alt="Rank4 logo"
            width={1340}
            height={483}
            className="h-auto w-[80px]"
          />
        </div>

        <nav aria-label="Footer navigation">
          <ul className="flex items-center gap-6">
            {[
              { label: "Capabilities", href: "#capabilities" },
              { label: "Philosophy", href: "#philosophy" },
              { label: "Contact", href: "#contact" },
            ].map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-xs font-semibold transition-colors hover:opacity-100"
                  style={{ color: "#A27035", opacity: 0.6 }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <p className="text-xs font-semibold" style={{ color: "#A27035", opacity: 0.4 }}>
          &copy; {new Date().getFullYear()} Rank4. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
