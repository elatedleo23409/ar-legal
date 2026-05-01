import type { Metadata } from "next";
import "./globals.css";
import DisclaimerModal from "../components/DisclaimerModal";

export const metadata: Metadata = {
  title: "A R Legal Associates | Your Firewall against all legal impasses",
  description:
    "A R Legal Associates is a Kochi-based law firm offering counsel across property, family, corporate, criminal, employment, and civil matters.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* GitHub Pages SPA routing restore */}
        <script dangerouslySetInnerHTML={{ __html: `
          (function() {
            var redirect = sessionStorage.redirect;
            delete sessionStorage.redirect;
            if (redirect && redirect !== location.href) {
              history.replaceState(null, null, redirect);
            }
            // Restore path from ?p= query param set by 404.html
            var l = window.location;
            if (l.search[1] === 'p') {
              var decoded = l.search.slice(1).split('&').map(function(s) {
                return s.replace(/~and~/g, '&');
              });
              window.history.replaceState(
                null, null,
                l.pathname.slice(0, -1) + (decoded[0] ? '/' + decoded[0] : '') +
                (decoded[1] ? '?' + decoded[1] : '') +
                l.hash
              );
            }
          })();
        ` }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=EB+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased font-serif text-ink-900 bg-white">
        <div id="webcrumbs">
          <DisclaimerModal />
          {children}
        </div>
      </body>
    </html>
  );
}
