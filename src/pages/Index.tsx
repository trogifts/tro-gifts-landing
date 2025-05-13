
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Gift, Image as ImageIcon, ShoppingCart, Send, MessageSquare, School, User, CheckCircle } from "lucide-react";

const Index = () => {
  const placeholderWhatsAppNumber = "1234567890"; // Replace with your actual WhatsApp number
  const prefilledMessage = encodeURIComponent("Hi, I’d like to order a custom name sticker for my child.");
  const whatsappLink = `https://wa.me/${placeholderWhatsAppNumber}?text=${prefilledMessage}`;

  const stickerExamples = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1599056430580-9770526ac115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8a2lkcyUyMHN0aWNrZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      alt: "Sample Sticker 1 - Boy with superhero theme",
      name: "Alex P.",
      details: "Grade 2, Superhero Fun!"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1580220864239-b60440360959?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8a2lkcyUyMHN0aWNrZXJzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      alt: "Sample Sticker 2 - Girl with princess theme",
      name: "Mia K.",
      details: "Kindergarten, Princess Dreams"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1610719010073-72610993b033?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGtpZHMlMjBzdGlja2Vyc3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=500&q=60",
      alt: "Sample Sticker 3 - Generic animal theme",
      name: "Leo S.",
      details: "Playschool, Animal Friends"
    },
  ];

  const features = [
    { icon: <ImageIcon className="h-8 w-8 text-pink-500" />, title: "Your Child's Photo", description: "Make it truly personal with their adorable picture." },
    { icon: <User className="h-8 w-8 text-blue-500" />, title: "Custom Name", description: "Clearly displayed so belongings never get lost." },
    { icon: <School className="h-8 w-8 text-green-500" />, title: "School & Class Details", description: "Perfect for easy identification at school." },
    { icon: <Gift className="h-8 w-8 text-yellow-500" />, title: "Unique Designs", description: "Fun and vibrant themes kids will love!" },
  ];


  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 shadow-md bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-600">
            <Gift className="inline-block mr-2 h-8 w-8" />
            KiddoStickers
          </h1>
          <div className="space-x-2">
            <Button onClick={() => window.open(whatsappLink, '_blank')} className="bg-green-500 hover:bg-green-600 text-white">
              <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Order
            </Button>
             <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50" onClick={() => alert("Online order form coming soon! You can link this to a Google Form or Typeform.")}>
              <Send className="mr-2 h-5 w-5" /> Order Online
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 text-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Brighten Their Day with Personalized Name Stickers!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            Create adorable, custom name stickers for your child featuring their photo, name, school, and more! Perfect for labeling belongings or as a unique gift.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" onClick={() => window.open(whatsappLink, '_blank')} className="bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-transform">
              <MessageSquare className="mr-2" /> Order via WhatsApp
            </Button>
            <Button size="lg" variant="secondary" className="bg-purple-500 hover:bg-purple-600 text-white shadow-lg transform hover:scale-105 transition-transform" onClick={() => alert("Online order form coming soon! You can link this to a Google Form or Typeform.")}>
              <Send className="mr-2" /> Order Online Now
            </Button>
          </div>
          <img src="https://images.unsplash.com/photo-1518364538800-60f2d5ce9956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGtpZHMlMjBoYXBweSUyMHdpdGglMjBzdGlja2Vyc3xlbnwwfHwwfHx8MA&auto=format&fit=crop&w=1000&q=80" alt="Happy kids with stickers" className="mt-12 mx-auto rounded-lg shadow-xl max-h-96" />
        </div>
      </section>

      {/* Product Features Section */}
      <section id="features" className="py-16 md:py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-purple-700">What Makes Our Stickers Special?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature) => (
              <Card key={feature.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white">
                <CardHeader className="flex flex-col items-center">
                  {feature.icon}
                  <CardTitle className="mt-4 text-xl font-semibold text-gray-700">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sticker Examples Section */}
      <section id="examples" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-600">See Our Cute Stickers in Action!</h3>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-4xl mx-auto"
          >
            <CarouselContent>
              {stickerExamples.map((sticker) => (
                <CarouselItem key={sticker.id} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <CardContent className="flex flex-col items-center justify-center p-0">
                        <img src={sticker.src} alt={sticker.alt} className="w-full h-64 object-cover" />
                        <div className="p-4 bg-gray-50 w-full text-center">
                          <p className="font-semibold text-lg text-purple-700">{sticker.name}</p>
                          <p className="text-sm text-gray-500">{sticker.details}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-[-40px] text-purple-600 bg-white/80 hover:bg-purple-100" />
            <CarouselNext className="mr-[-40px] text-purple-600 bg-white/80 hover:bg-purple-100" />
          </Carousel>
          <p className="text-center mt-8 text-gray-600">We use placeholder images here. You can upload your own product examples!</p>
        </div>
      </section>

      {/* How to Order Section */}
      <section id="how-to-order" className="py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-center mb-12 text-green-700">Ordering is Easy as 1-2-3!</h3>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <span className="text-3xl font-bold">1</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-700">Choose & Customize</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Browse our designs (or suggest your own!) and provide your child's photo, name, school, and class details.</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <span className="text-3xl font-bold">2</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-700">Place Your Order</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">Contact us via WhatsApp with your details or fill out our quick online order form (coming soon!).</p>
              </CardContent>
            </Card>
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                  <span className="text-3xl font-bold">3</span>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-700">Receive & Stick!</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">We'll confirm your order and payment details. Your awesome stickers will be on their way soon!</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Payment Info (Optional) */}
      <section className="py-12 bg-yellow-50">
        <div className="container mx-auto px-4 text-center">
          <CheckCircle className="h-10 w-10 text-yellow-600 mx-auto mb-4" />
          <h4 className="text-2xl font-semibold text-yellow-700 mb-2">Payment Options</h4>
          <p className="text-gray-600 max-w-lg mx-auto">
            We accept various payment methods. We'll discuss payment details with you when you place your order via WhatsApp.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 md:py-24 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Custom Stickers?</h3>
          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Don't wait for the back-to-school rush! Order today and make your child's belongings stand out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" onClick={() => window.open(whatsappLink, '_blank')} className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
              <MessageSquare className="mr-2" /> Order via WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600 w-full sm:w-auto" onClick={() => alert("Online order form coming soon!")}>
              <Send className="mr-2" /> Order Online
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center bg-gray-800 text-gray-400">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} KiddoStickers. All rights reserved.</p>
          <p className="text-sm mt-1">Create with love for your little ones!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

