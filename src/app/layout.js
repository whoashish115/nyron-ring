import "../styles/globals.css";

import { config } from "@/data/config";
import Providers from "@/components/layout/Providers";

export const metadata = {
  title: {
    default: `${config.name} · ${config.tagline}`,
    template: `%s · ${config.name}`,
  },
  description: config.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={config.language} suppressHydrationWarning>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
