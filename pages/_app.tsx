import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ProSidebarProvider } from "react-pro-sidebar";
import { MemberstackProvider } from "@memberstack/react";

const config = { publicKey: "pk_1e9c15c9db9c5bb90a8b" };

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MemberstackProvider config={config}>
      <ProSidebarProvider>
        <Component {...pageProps} />
      </ProSidebarProvider>
    </MemberstackProvider>
  );
}
