import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { HowWeHelp } from './components/HowWeHelp';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <HowWeHelp />
      <ContactForm />
      <Footer />
    </div>
  );
}
