import ResponsiveAppBar from "@/layout/Header";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import "@fortawesome/fontawesome-svg-core/styles.css";


export default function App({ Component, pageProps }) {
  return (
    <div>
      <ResponsiveAppBar />
      <Component {...pageProps} />
    </div>
  );
}
