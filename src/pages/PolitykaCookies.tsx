import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

const PolitykaCookies = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="flex items-center gap-4 mb-8">
          <Button variant="outline" onClick={() => navigate('/')} className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Wróć na stronę główną
          </Button>
          <h1 className="text-3xl font-bold text-primary">Polityka Cookies</h1>
        </div>
        <Card className="p-8 space-y-6 text-sm text-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">1. Czym są pliki cookies?</h2>
            <p className="text-muted-foreground">Pliki cookies to niewielkie pliki tekstowe zapisywane na Twoim urządzeniu podczas korzystania z platformy Shoppalyzer. Służą do zapewnienia prawidłowego działania strony, zapamiętywania preferencji oraz zbierania danych analitycznych.</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">2. W jakim celu wykorzystujemy pliki cookies?</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Niezbędne (Techniczne):</strong> Konieczne do prawidłowego funkcjonowania dashboardu — logowanie, nawigacja, utrzymanie sesji.</li>
              <li><strong>Funkcjonalne:</strong> Zapamiętują wybrane ustawienia (preferencje widoku, filtry analizowanych produktów).</li>
              <li><strong>Analityczne i Wydajnościowe:</strong> Pomagają zrozumieć sposób korzystania z platformy. Zbierane dane są anonimowe.</li>
              <li><strong>Związane z bezpieczeństwem i płatnościami:</strong> Wspierają procesy weryfikacji autentyczności użytkowników i obsługę subskrypcji.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">3. Rodzaje cookies ze względu na czas przechowywania</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Cookies sesyjne:</strong> Pliki tymczasowe przechowywane do momentu zakończenia sesji lub zamknięcia przeglądarki.</li>
              <li><strong>Cookies stałe:</strong> Pozostają na urządzeniu przez określony czas lub do momentu ręcznego usunięcia.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">4. Pliki cookies podmiotów trzecich</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Bubble.io:</strong> Dashboard zbudowany na platformie Bubble.io wykorzystuje własne pliki techniczne i analityczne.</li>
              <li><strong>Stripe:</strong> Operator płatności stosuje własne pliki cookies do weryfikacji tożsamości i zapobiegania nadużyciom finansowym.</li>
              <li><strong>Gemini (Google):</strong> Modele językowe używane do generowania rekomendacji. Integracja może wiązać się z technicznymi plikami cookies Google służącymi autoryzacji zapytań.</li>
              <li><strong>Vertex (Google Cloud):</strong> Platforma chmurowa używana do analizy danych. Usługi Google Cloud mogą wykorzystywać pliki cookies do uwierzytelniania komunikacji i monitorowania wydajności.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">5. Jak możesz zarządzać plikami cookies?</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Panel zgód na stronie:</strong> Przy pierwszej wizycie zostaniesz poproszony o wyrażenie zgody na użycie ciasteczek. Preferencje możesz zmienić w ustawieniach profilu.</li>
              <li><strong>Ustawienia przeglądarki:</strong> Możesz zablokować automatyczną obsługę cookies w ustawieniach przeglądarki (zakładka "Prywatność" lub "Bezpieczeństwo").</li>
            </ul>
            <p className="text-muted-foreground mt-2">Pamiętaj, że zablokowanie cookies niezbędnych może uniemożliwić korzystanie z konta na platformie.</p>
          </section>
        </Card>
      </div>
    </div>
  );
};

export default PolitykaCookies;
