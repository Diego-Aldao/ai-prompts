import Nav from "@components/Navegacion/Nav";
import Provider from "@components/Provider";
import "@styles/globales.css";

export const metadata = {
  title: "PromptVerse",
  description: "Descubre y comparte IA prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient"></div>
          </div>
          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
};

export default RootLayout;
