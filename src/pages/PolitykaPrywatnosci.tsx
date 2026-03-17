import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

const PolitykaPrywatnosci = () => {
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
          <h1 className="text-3xl font-bold text-primary">Polityka Prywatności</h1>
        </div>
        <Card className="p-8 space-y-6 text-sm text-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">1. Postanowienia ogólne i definicje</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Niniejsza Polityka Prywatności określa zasady przetwarzania i ochrony danych osobowych podanych przez Użytkowników w związku z korzystaniem z platformy Shoppalyzer.</li>
              <li>Administratorem danych osobowych jest Shoppalyzer Sp. z o.o., z siedzibą w Poznaniu, NIP: XXXXXXXXX, e-mail: shoppalyzer@gmail.com (dalej jako „Administrator").</li>
              <li>Shoppalyzer to platforma oferująca wsparcie MŚP e-commerce w prosty i tani sposób poprzez napędzaną przez AI analizę konkurencji, automatyczne insighty cenowe i rekomendacje działań.</li>
              <li>Administrator stosuje zasady minimalizacji danych osobowych, ograniczenia celu ich przetwarzania, poufności oraz ograniczenia czasu ich przechowywania do niezbędnego minimum.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">2. Pozyskiwanie danych z domen publicznych (Web Scraping)</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Funkcjonowanie platformy opiera się na monitoringu cen, recenzji i stanu SKU z najpopularniejszych marketplace'ów.</li>
              <li>Administrator pobiera z publicznie dostępnych stron internetowych dane rynkowe w celu analizy trendingowości produktów oraz dostarczania generatywnych rekomendacji. Pobierane są m.in.: nazwa produktu, cena, liczba recenzji, średnia ocena, dostępność, ranking popularności.</li>
              <li>Większość pozyskiwanych informacji ma charakter czysto produktowy i nie stanowi danych osobowych. Jeśli jednak podczas analizy rynku zebrane zostaną dane osobowe, są one przetwarzane wyłącznie na podstawie prawnie uzasadnionego interesu Administratora (art. 6 ust. 1 lit. f RODO).</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">3. Zakres przetwarzanych danych Użytkowników</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Dane rejestracyjne i kontaktowe:</strong> Imię, nazwisko, nazwa firmy, adres prowadzenia działalności, numer NIP, adres e-mail, numer telefonu.</li>
              <li><strong>Dane rozliczeniowe:</strong> Informacje niezbędne do obsługi subskrypcji, procesowania płatności oraz wystawiania faktur VAT.</li>
              <li><strong>Dane techniczne i logi systemowe:</strong> Adres IP urządzenia, data i czas wizyty, informacje o systemie operacyjnym i przeglądarce.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">4. Cele i podstawy prawne przetwarzania danych</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li><strong>Świadczenie usługi SaaS (art. 6 ust. 1 lit. b RODO):</strong> Wykonanie umowy o świadczenie usług drogą elektroniczną.</li>
              <li><strong>Realizacja obowiązków prawnych (art. 6 ust. 1 lit. c RODO):</strong> Wystawianie faktur oraz prowadzenie dokumentacji księgowej i podatkowej.</li>
              <li><strong>Prawnie uzasadniony interes Administratora (art. 6 ust. 1 lit. f RODO):</strong> Obsługa zapytań, komunikacja techniczna, wsparcie klienta oraz analiza i rozwój systemu.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">5. Odbiorcy danych osobowych</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Dostawcy technologii i hostingu</strong></li>
              <li><strong>Operatorzy płatności</strong></li>
              <li><strong>Dostawcy sztucznej inteligencji i analizy danych</strong></li>
              <li><strong>Dostawcy narzędzi do ekstrakcji danych</strong></li>
              <li><strong>Usługi doradcze:</strong> Zewnętrzne biura rachunkowe, kancelarie prawne oraz podmioty świadczące wsparcie IT.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">6. Przekazywanie danych poza EOG</h2>
            <p className="text-muted-foreground">Z uwagi na korzystanie z globalnych usługodawców technologicznych dane osobowe mogą być przekazywane do państw trzecich, w tym do Stanów Zjednoczonych. Administrator dba o to, by transfer ten opierał się na odpowiednich zabezpieczeniach zgodnych z RODO, w szczególności na Standardowych Klauzulach Umownych (SCC).</p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">7. Okres przechowywania danych</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Dane związane z założonym kontem i realizacją usług przechowywane są przez cały okres trwania umowy.</li>
              <li>Dane niezbędne do rozliczeń księgowych przechowywane są przez 5 lat od końca roku kalendarzowego, w którym upłynął termin płatności podatku.</li>
              <li>Dane zapisywane w logach systemowych przechowywane są przez czas odpowiadający okresom przedawnienia roszczeń.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">8. Prawa Użytkownika</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Prawo dostępu do swoich danych oraz otrzymania ich kopii.</li>
              <li>Prawo do sprostowania danych nieprawidłowych lub niekompletnych.</li>
              <li>Prawo do usunięcia danych („prawo do bycia zapomnianym").</li>
              <li>Prawo do ograniczenia przetwarzania.</li>
              <li>Prawo do przenoszenia danych do innego administratora.</li>
              <li>Prawo do wniesienia sprzeciwu wobec przetwarzania danych.</li>
              <li>Prawo wniesienia skargi do Prezesa Urzędu Ochrony Danych Osobowych (PUODO).</li>
            </ul>
            <p className="text-muted-foreground mt-2">Aby skorzystać ze swoich praw, skontaktuj się z nami: <a href="mailto:shoppalyzer@gmail.com" className="text-primary hover:underline">shoppalyzer@gmail.com</a></p>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">9. Zmiany w Polityce Prywatności</h2>
            <p className="text-muted-foreground">Administrator zastrzega sobie prawo do wprowadzania zmian w Polityce Prywatności. O każdej istotnej zmianie Użytkownicy zostaną poinformowani z wyprzedzeniem poprzez odpowiedni komunikat na stronie lub drogą mailową.</p>
          </section>
        </Card>
      </div>
    </div>
  );
};

export default PolitykaPrywatnosci;
