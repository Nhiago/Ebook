import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { CheckCircle, Star, Download, Users, Clock, Shield } from 'lucide-react'
import ebookCover from './assets/ebook_cover.png'
import './App.css'

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const testimonials = [
    {
      name: "Maria Silva",
      text: "Uma análise profunda e bem fundamentada. Essencial para entender os desafios enfrentados pelo país.",
      rating: 5
    },
    {
      name: "João Santos", 
      text: "Dados precisos e análise imparcial. Recomendo para quem busca informação de qualidade.",
      rating: 5
    },
    {
      name: "Ana Costa",
      text: "Conteúdo bem estruturado e de fácil compreensão. Uma leitura necessária.",
      rating: 5
    }
  ]

  const benefits = [
    "Análise detalhada baseada em fatos e dados",
    "Conteúdo bem estruturado e de fácil leitura",
    "Informações fundamentadas em fontes confiáveis",
    "Perspectiva crítica e imparcial",
    "Material de referência para debates",
    "Acesso imediato após a compra"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Header */}
      <header className="bg-black/50 backdrop-blur-sm border-b border-red-900/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-red-400">Análise Crítica</h1>
            <Badge variant="destructive" className="bg-red-600 hover:bg-red-700">
              Oferta Limitada
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge className="bg-red-600/20 text-red-400 border-red-600/30">
                  🔥 Mais de 1.000 downloads
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="text-red-400">Análise Crítica:</span>
                  <br />
                  Os Desafios de um Mandato
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed">
                  Uma investigação profunda e bem fundamentada sobre as decisões e ações que moldaram um dos períodos mais controversos da política brasileira.
                </p>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-yellow-400 fill-current" />
                  <span className="text-lg font-semibold">4.9/5</span>
                  <span className="text-gray-400">(127 avaliações)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="w-5 h-5 text-blue-400" />
                  <span className="text-gray-300">+1.000 leitores</span>
                </div>
              </div>

              <div className="space-y-4">
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-bold text-red-400 mb-2">
                    R$ 19,90
                  </div>
                  <div className="text-gray-400 line-through text-lg">
                    De R$ 39,90
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="w-full lg:w-auto bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg transition-all duration-300 transform hover:scale-105"
                  onClick={() => setIsModalOpen(true)}
                >
                  <Download className="w-5 h-5 mr-2" />
                  Comprar Agora - 50% OFF
                </Button>

                <div className="flex items-center space-x-2 text-sm text-gray-400">
                  <Shield className="w-4 h-4" />
                  <span>Garantia de 7 dias ou seu dinheiro de volta</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={ebookCover} 
                  alt="Capa do Ebook" 
                  className="w-full max-w-md mx-auto shadow-2xl rounded-lg"
                />
              </div>
              <div className="absolute inset-0 bg-red-600/20 blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            Por que este ebook é <span className="text-red-400">essencial</span>?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Preview */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que você vai <span className="text-red-400">descobrir</span>
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">Capítulo 1: Corrupção e Patrimônio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Análise detalhada sobre o crescimento patrimonial e as acusações de corrupção, incluindo dados do TSE e investigações.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">Capítulo 2: Direitos Humanos</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Compilação das declarações polêmicas e seus impactos nos direitos LGBT, das mulheres, negros e indígenas.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">Capítulo 3: Ataques à Imprensa</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Como a relação hostil com a imprensa e a disseminação de fake news impactaram a democracia brasileira.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <CardTitle className="text-red-400">Capítulo 4: Gestão da Pandemia</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Análise crítica da gestão da COVID-19, incluindo o negacionismo e suas consequências devastadoras.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-black/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12">
            O que os <span className="text-red-400">leitores</span> estão dizendo
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-gray-800/50 border-gray-700">
                <CardContent className="pt-6">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4">"{testimonial.text}"</p>
                  <p className="font-semibold text-red-400">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-red-600/10 border border-red-600/30 rounded-lg p-8">
            <Clock className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">
              Oferta por <span className="text-red-400">tempo limitado</span>
            </h2>
            <p className="text-xl text-gray-300 mb-6">
              Aproveite o desconto de 50% e garante seu exemplar agora mesmo!
            </p>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 text-lg"
              onClick={() => setIsModalOpen(true)}
            >
              Garantir Meu Ebook Agora
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-gray-400">
            © 2024 Análise Crítica. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Garantia de 7 dias | Suporte via WhatsApp | Entrega imediata
          </p>
        </div>
      </footer>

      {/* Modal de Compra */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <Card className="bg-gray-800 border-gray-700 max-w-md w-full">
            <CardHeader>
              <CardTitle className="text-red-400">Como adquirir seu ebook</CardTitle>
              <CardDescription className="text-gray-300">
                Escolha a forma de pagamento que preferir
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-red-400 mb-2">R$ 19,90</div>
                <div className="text-gray-400 line-through">De R$ 39,90</div>
              </div>
              
              <div className="space-y-3">
                <Button className="w-full bg-green-600 hover:bg-green-700" 
                 onClick={() => window.open('https://pay.hotmart.com/Q101573001X?bid=1756169338758', '_blank')}
                 >
                  💳 Pagar com Cartão (Hotmart)
                </Button>
               
              </div>

              <div className="text-xs text-gray-400 text-center">
                ✅ Entrega imediata por email<br/>
                ✅ Garantia de 7 dias<br/>
                ✅ Suporte completo
              </div>

              <Button 
                variant="outline" 
                className="w-full"
                onClick={() => setIsModalOpen(false)}
              >
                Fechar
              </Button>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  )
}

export default App

