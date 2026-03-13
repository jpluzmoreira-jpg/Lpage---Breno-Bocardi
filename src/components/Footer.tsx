export function Footer() {
  return (
    <footer id="contato" className="bg-darker py-16 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          <h2 className="font-display text-3xl font-bold mb-2">Breno Bocardi</h2>
          <p className="text-gray-400 text-sm">Especialista em Imóveis na Planta • CRECI 73645</p>
        </div>
        <div className="text-left md:text-right text-sm text-gray-400 space-y-2">
          <p className="text-white text-lg mb-4">47 99248-6758 | brenomb.eng@gmail.com</p>
          <p>O Novo Imobiliário - Rua 264, 141 - Sala 03</p>
          <p>Meia Praia, Itapema - SC, 88220-000</p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-16 pt-8 border-t border-white/5 text-center text-xs text-gray-600">
        <p>&copy; 2026 Mercado imobiliário de imóveis na planta para investimentos em Porto Belo-SC e Itapema-SC.</p>
      </div>
    </footer>
  );
}
