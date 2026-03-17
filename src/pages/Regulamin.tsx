import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

const Regulamin = () => {
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
          <h1 className="text-3xl font-bold text-primary">Regulamin Świadczenia Usług</h1>
        </div>
        <Card className="p-8 space-y-6 text-sm text-foreground leading-relaxed">
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 1. Postanowienia ogólne</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Niniejszy Regulamin określa ogólne warunki, zasady oraz sposób świadczenia usług drogą elektroniczną w modelu SaaS za pośrednictwem platformy internetowej Shoppalyzer.</li>
              <li>Usługodawcą jest Shoppalyzer Sp. z o.o. z siedzibą w Poznaniu, NIP: XXXXXXXXXX, e-mail: <a href="mailto:shoppalyzer@gmail.com" className="text-primary hover:underline">shoppalyzer@gmail.com</a></li>
              <li>Aplikacja Shoppalyzer jest dedykowana wyłącznie dla przedsiębiorców (sektor B2B, w szczególności MŚP e-commerce). Przepisy dotyczące praw konsumentów nie mają zastosowania.</li>
              <li>Przed rozpoczęciem korzystania z Platformy Użytkownik jest zobowiązany do zapoznania się z Regulaminem oraz Polityką Prywatności.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 2. Definicje</h2>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li><strong>Użytkownik</strong> — przedsiębiorca posiadający Konto na Platformie.</li>
              <li><strong>Konto</strong> — indywidualny panel Użytkownika w Aplikacji.</li>
              <li><strong>Subskrypcja</strong> — odpłatna usługa cykliczna umożliwiająca dostęp do pełnych funkcjonalności Platformy.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 3. Rodzaj i zakres świadczonych usług</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Shoppalyzer to inteligentny asystent biznesowy dla e-commerce (AI-powered business advisor).</li>
              <li>Podstawowe usługi obejmują: automatyczny monitoring cen i SKU z marketplace'ów, analizę trendingowości produktów, generatywne rekomendacje tekstowe oraz dostęp do dashboardu analitycznego.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 4. Wymagania techniczne</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Do prawidłowego korzystania z Platformy niezbędne jest urządzenie z dostępem do Internetu, aktualna przeglądarka internetowa oraz aktywny adres e-mail.</li>
              <li>Usługodawca nie ponosi odpowiedzialności za nieprawidłowe działanie Platformy wynikające z niespełnienia wymagań technicznych.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 5. Zakładanie Konta i zawieranie umowy</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Utworzenie Konta jest dobrowolne i wymaga podania prawdziwych danych firmowych.</li>
              <li>Z chwilą skutecznej rejestracji dochodzi do zawarcia umowy o świadczenie usług drogą elektroniczną.</li>
              <li>Umowa o Subskrypcję zostaje zawarta z momentem zaksięgowania pierwszej opłaty cyklicznej za pośrednictwem Stripe.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 6. Płatności i Subskrypcje</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Cena Subskrypcji: plan „Pro" — 89 PLN netto/mies., plan „Agencja" — 199 PLN netto/mies.</li>
              <li>Płatności realizowane są z góry, w modelu subskrypcyjnym odnawialnym automatycznie co miesiąc za pośrednictwem Stripe.</li>
              <li>Do podanych cen doliczany jest podatek VAT zgodnie z obowiązującymi przepisami prawa.</li>
              <li>Użytkownik wyraża zgodę na wystawianie faktur VAT w formie elektronicznej.</li>
              <li>Użytkownik może anulować Subskrypcję ze skutkiem na koniec bieżącego okresu rozliczeniowego. Środki za niewykorzystany okres nie podlegają zwrotowi.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 7. Prawa autorskie i własność intelektualna</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Wszelkie prawa do Platformy, w tym do kodu źródłowego, interfejsu, logiki algorytmów oraz nazwy i logotypu Shoppalyzer, należą do Usługodawcy.</li>
              <li>Użytkownik zachowuje pełnię praw do danych wprowadzanych przez siebie do Aplikacji.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 8. Prawa i obowiązki stron</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Użytkownik zobowiązany jest do korzystania z Platformy zgodnie z prawem. Zabrania się dostarczania treści bezprawnych, udostępniania Konta osobom trzecim oraz ingerowania w kod i infrastrukturę Platformy.</li>
              <li>Usługodawca ma prawo do zablokowania lub usunięcia Konta w przypadku rażącego naruszenia Regulaminu.</li>
              <li>Usługodawca zastrzega sobie prawo do czasowego zawieszenia dostępu do Platformy w celach konserwacyjnych.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 9. Zastrzeżenia technologiczne i wyłączenie odpowiedzialności</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li><strong>Narzędzie analityczne, nie doradztwo:</strong> Generatywne rekomendacje mają charakter wyłącznie pomocniczy i wymagają nadzoru ludzkiego.</li>
              <li><strong>Ryzyko biznesowe:</strong> Użytkownik wdraża rekomendacje wyłącznie na własne ryzyko.</li>
              <li><strong>Zależność od podmiotów trzecich:</strong> Usługodawca nie gwarantuje ciągłości usługi, jeśli marketplace ograniczy dostęp do danych.</li>
              <li><strong>Ograniczenie odpowiedzialności:</strong> Całkowita odpowiedzialność Usługodawcy ograniczona jest do kwoty opłat subskrypcyjnych uiszczonych w ostatnich 3 miesiącach.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 10. Reklamacje</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Reklamacje należy zgłaszać na adres: <a href="mailto:shoppalyzer@gmail.com" className="text-primary hover:underline">shoppalyzer@gmail.com</a></li>
              <li>Zgłoszenie powinno zawierać dane Użytkownika oraz opis problemu.</li>
              <li>Usługodawca rozpatrzy reklamację w terminie 14 dni od daty jej otrzymania.</li>
            </ol>
          </section>
          <section>
            <h2 className="text-lg font-bold text-primary mb-3">§ 11. Postanowienia końcowe</h2>
            <ol className="list-decimal pl-5 space-y-2 text-muted-foreground">
              <li>Usługodawca zastrzega sobie prawo do zmiany Regulaminu. O zmianach Użytkownicy zostaną powiadomieni z 14-dniowym wyprzedzeniem.</li>
              <li>W sprawach nieuregulowanych zastosowanie mają przepisy prawa polskiego, w szczególności Kodeksu cywilnego.</li>
              <li>Wszelkie spory będą rozstrzygane przez sąd powszechny właściwy miejscowo dla siedziby Usługodawcy.</li>
            </ol>
          </section>
        </Card>
      </div>
    </div>
  );
};

export default Regulamin;
