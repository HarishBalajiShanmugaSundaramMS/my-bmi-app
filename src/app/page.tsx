import Header from "./components/Header";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import Content from "./components/Content";

export default function Home() {
  return (
    <main className="min-h-screen bg-pink-100	flex flex-col justify-center items-center">
      <Header />
      <Content />
      <Footer />
    </main>
  );
}
