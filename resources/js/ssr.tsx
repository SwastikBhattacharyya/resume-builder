import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { Toaster } from "sonner";

const appName = import.meta.env.VITE_APP_NAME;
createServer(
  (page) =>
    createInertiaApp({
      title: (title) => (title ? `${title} - ${appName}` : appName),
      page,
      render: ReactDOMServer.renderToString,
      resolve: (name) => {
        const pages = import.meta.glob("./pages/**/*.tsx", { eager: true });
        return pages[`./pages/${name}.tsx`];
      },
      setup: ({ App, props }) => (
        <>
          <App {...props} />
          <Toaster toastOptions={{ className: "font-sans" }} richColors />
        </>
      ),
    }),
  { cluster: true },
);
