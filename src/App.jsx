import { Header } from "./components/Header";
import { MainArticle } from "./components/MainArticle";
import { NewsContainer } from "./components/NewsContainer";
import { PopularContainer } from "./components/PopularContainer";
import { Footer } from "./components/Footer";

function App() {
  return (
    <main className="px-4 py-6 max-w-7xl mx-auto font-Inter sm:overflow-visible">
      <Header />
      <section className="lg:flex lg:gap-8">
        <MainArticle />
        <NewsContainer />
      </section>
      <PopularContainer />
      <Footer />
    </main>
  );
}

export default App;
