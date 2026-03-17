import { ArrowLeft, Cookie, Shield, Clock, Building, Settings, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';

const Section = ({ icon, number, title, children }: { icon: React.ReactNode; number: string; title: string; children: React.ReactNode }) => (
  <section className="mb-10">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#e5f3ff' }}>
        <span style={{ color: '#1E5F8E' }}>{icon}</span>
      </div>
      <h2 className="text-xl font-bold" style={{ color: '#1E5F8E' }}>{number}. {title}</h2>
    </div>
    <div className="ml-1 border-l-2 pl-6" style={{ borderColor: '#F0921C' }}>
      {children}
    </div>
  </section>
);

const PolitykaCookies = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #1E5F8E, #163D5C)' }} className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <button
            onClick={() => { navigate('/'); window.scrollTo(0, 0); }}
            style={{ border: '1.5px solid rgba(255,255,255,0.4)', color: 'white', background: 'transparent', borderRadius: '8px', padding: '8px 16px', fontSize: '14px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '24px' }}
          >
            <ArrowLeft className="h-4 w-4" />
            Wróć na stronę główną
          </button>
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.15)' }}>
              <Cookie className="h-7 w-7 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-extrabold text-white">Polityka Cookies</h1>
              <p className="text-white/70 mt-1 text-sm">Shoppalyzer Sp. z o.o. — ostatnia aktualizacja: 2026</p>
            </div>
          </div>
        </div>
      </div>

      {/* Highlight bar */}
      <div style={{ background: '#F0921C' }} className="py-3 px-4">
        <div className="container mx-auto max-w-4xl">
          <p className="text-white text-sm font-medium text-center">
            🍪 Masz pełną kontrolę nad plikami cookies — możesz je dostosować lub odrzucić w dowolnym momencie
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 max-w-4xl">

        <Section icon={<Cookie className="h-5 w-5" />} number="1" title="Czym są pliki cookies?">
          <p className="text-sm text-muted-foreground leading-relaxed">
            Pliki cookies (ciasteczka) to niewielkie pliki tekstowe, które są zapisywane na Twoim urządzeniu końcowym (komputerze, smartfonie, tablecie) podczas korzystania z platformy Shoppalyzer. Służą one do zapewnienia prawidłowego działania strony, zapamiętywania Twoich preferencji oraz zbierania danych analitycznych, które pomagają nam rozwijać nasze narzędzie.
          </p>
        </Section>

        {/* Cele cookies — karty */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#e5f3ff' }}>
              <Shield className="h-5 w-5" style={{ color: '#1E5F8E' }} />
            </div>
            <h2 className="text-xl font-bold" style={{ color: '#1E5F8E' }}>2. W jakim celu wykorzystujemy pliki cookies?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 ml-1">
            {[
              { title: 'Niezbędne (Techniczne)', desc: 'Są absolutnie konieczne do prawidłowego funkcjonowania naszego dashboardu. Umożliwiają m.in. logowanie do konta, nawigację po stronie oraz utrzymanie bezpiecznej sesji użytkownika. Bez nich strona nie mogłaby działać.', icon: '🔒', required: true },
              { title: 'Funkcjonalne', desc: 'Pozwalają stronie zapamiętać wybrane przez Ciebie ustawienia (np. preferencje widoku, filtry analizowanych produktów), co znacząco ułatwia i przyspiesza codzienną pracę z narzędziem.', icon: '⚙️', required: false },
              { title: 'Analityczne i Wydajnościowe', desc: 'Pomagają nam zrozumieć, w jaki sposób użytkownicy korzystają z platformy. Dzięki nim wiemy, które funkcje są najbardziej przydatne, a które wymagają optymalizacji. Zbierane dane są anonimowe.', icon: '📊', required: false },
              { title: 'Bezpieczeństwo i płatności', desc: 'Wspierają procesy weryfikacji autentyczności użytkowników, zapobiegają oszustwom oraz są niezbędne do prawidłowej obsługi subskrypcji.', icon: '💳', required: true },
            ].map(c => (
              <div key={c.title} className="rounded-xl p-5 border" style={{ borderColor: '#e5f3ff', background: '#f8fbff' }}>
                <div className="flex justify-between items-start mb-2">
                  <div className="text-2xl">{c.icon}</div>
                  {c.required
                    ? <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: '#1E5F8E', color: 'white' }}>Zawsze aktywne</span>
                    : <span className="text-xs font-bold px-2 py-1 rounded-full" style={{ background: '#fff3e0', color: '#F0921C' }}>Opcjonalne</span>
                  }
                </div>
                <h3 className="font-bold text-sm mb-1" style={{ color: '#1E5F8E' }}>{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Czas przechowywania */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#e5f3ff' }}>
              <Clock className="h-5 w-5" style={{ color: '#1E5F8E' }} />
            </div>
            <h2 className="text-xl font-bold" style={{ color: '#1E5F8E' }}>3. Rodzaje cookies ze względu na czas przechowywania</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 ml-1">
            {[
              { title: 'Cookies sesyjne', desc: 'Są to pliki tymczasowe, które przechowujemy w pamięci Twojej przeglądarki tylko do momentu zakończenia sesji (wylogowania się z platformy lub zamknięcia przeglądarki).', icon: '⏱️' },
              { title: 'Cookies stałe', desc: 'Pozostają na Twoim urządzeniu przez określony czas (zdefiniowany w parametrach pliku) lub do momentu ich ręcznego usunięcia. Służą m.in. do tego, abyś nie musiał logować się ponownie przy każdej wizycie.', icon: '💾' },
            ].map(c => (
              <div key={c.title} className="rounded-xl p-5 border" style={{ borderColor: '#e5f3ff', background: '#f8fbff' }}>
                <div className="text-2xl mb-2">{c.icon}</div>
                <h3 className="font-bold text-sm mb-1" style={{ color: '#1E5F8E' }}>{c.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Podmioty trzecie */}
        <section className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0" style={{ background: '#e5f3ff' }}>
              <Building className="h-5 w-5" style={{ color: '#1E5F8E' }} />
            </div>
            <h2 className="text-xl font-bold" style={{ color: '#1E5F8E' }}>4. Pliki cookies podmiotów trzecich</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 ml-1">
            {[
              { title: 'Bubble.io', desc: 'Nasz dashboard, z którym bezpośrednio wchodzisz w interakcję, jest zbudowany na platformie Bubble.io. Platforma ta wykorzystuje własne pliki techniczne i analityczne niezbędne do prawidłowego wyświetlania interfejsu oraz obsługi logiki strony.', icon: '🔵' },
              { title: 'Stripe', desc: 'W celu umożliwienia bezpiecznego procesowania płatności subskrypcyjnych, zintegrowaliśmy platformę z operatorem Stripe. Stripe stosuje własne pliki cookies w celu weryfikacji tożsamości, zapobiegania nadużyciom finansowym oraz obsługi płatności.', icon: '💜' },
              { title: 'Gemini (Google)', desc: 'Wykorzystujemy zaawansowane modele językowe Gemini do analizowania danych rynkowych i generowania rekomendacji. Integracja z infrastrukturą Google może wiązać się ze stosowaniem technicznych plików cookies służących autoryzacji
