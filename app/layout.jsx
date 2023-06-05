import "@styles/globales.css";

export const metadata = {
  title: "PromptVerse",
  description: "Descubre y comparte IA prompts",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="es">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;
