import Image from "next/image";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

export default function Home() {
  return (
    <main>
      <Header />
      <Navigation />
      <Content />
      <Footer />
    </main>
  );
}
