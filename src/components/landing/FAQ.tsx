import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  { q: 'Czy jest plan bezpłatny?', a: 'Tak. Plan Starter pozwala na 2-tygodniowy test Shoppalyzera, w czasie którego można poznać narzędzie oraz przetestować jego możliwości. Korzystanie z planu nie wymaga podpinania jakiegokolwiek dokumentu lub narzędzia płatniczego.' },
  { q: 'Czy Shoppalyzer działa tylko z Allegro?', a: 'Tak, na ten moment Allegro jest naszym jedynym rynkiem. Jeżeli są Państwo zainteresowani współpracą na innych marketplacach to zapraszamy do kontaktu.' },
  { q: 'Czym różni się Shoppalyzer od monitorowania cen?', a: 'Narzędzia do monitorowania cen pokazują tylko liczby. Shoppalyzer analizuje dane i daje Państwu konkretne rekomendacje: na którym produkcie zmienić cenę, co promować, czego się pozbyć.' },
  { q: 'Czy mogę zrezygnować w dowolnym momencie?', a: 'Tak. Żadnych długoterminowych umów. Anulujesz subskrypcję kiedy chcesz a subskrybcja zakończy się po wygaśnięciu trwającego okresu rozrachunkowego.' },
  { q: 'Jestem konsultantem z wieloma klientami. Czy to zadziała?', a: 'Tak — plan Agencja daje Ci panel wielu klientów oraz raporty PDF z własnym logo, które możesz wysyłać klientom pod swoją marką.' },
  { q: 'Ile czasu zajmuje konfiguracja?', a: 'Mniej niż 5 minut. Wczytaj CSV z produktami, a nasze narzędzie przeprowadzi dogłębną analizę za Ciebie. Zero technikaliów.' },
];

export const FAQ = () => (
  <section id="faq" className="py-20">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Często zadawane pytania</h2>
      </div>
      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible>
          {faqs.map((f, i) => (
            <AccordionItem key={i} value={`faq-${i}`}>
              <AccordionTrigger className="text-left text-foreground">{f.q}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </section>
);
