import Header from './components/header'; // Import the Header component
import "./global.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Portfolio of Tomiwa Ogunleye" />
        <title>Your Portfolio | Tomiwa Ogunleye</title>
      </head>
      <body>
        <Header /> {/* Use the Header component here */}
        <main>{children}</main> {/* Ensure the children are wrapped in a <main> tag */}
        <footer className="text-center py-4 bg-gray-100">
          <p>© 2025 Tomiwa Ogunleye. All rights reserved.</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="https://dev.to/tomiwaogun" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">Dev.to</a>
            <a href="https://www.linkedin.com/in/tomiwa-ogunleye/" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">Linkdin</a>
            <a href="https://github.com/TomiwaOgun" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="mailto:ogunleyetomiwa0@gmail.com" className="text-gray-600 hover:text-blue-600" target="_blank" rel="noopener noreferrer">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
