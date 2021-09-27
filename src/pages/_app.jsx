import "tailwindcss/tailwind.css";
import { TaskProvider } from "../context/taskContext";

import Header from "../components/Header";
function MyApp({ Component, pageProps }) {
  return (
    <TaskProvider>
      <Header>
        <Component {...pageProps} />
      </Header>
    </TaskProvider>
  );
}

export default MyApp;
