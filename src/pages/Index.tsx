import React, { useEffect, useRef, useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type CarouselApi } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { Gift, ShoppingCart, Send, MessageSquare, CheckCircle, User, Package, Clipboard, CreditCard, Truck, Sparkles, FileText, CalendarCheck, Image as ImageIconLucide } from "lucide-react";
import { cn } from "@/lib/utils";

const Index = () => {
  const placeholderWhatsAppNumber = "9072993180"; // Replace with your actual WhatsApp number
  const prefilledMessage = encodeURIComponent("Hello TroGifts! I'd like to place an order.");
  const whatsappLink = `https://wa.me/${placeholderWhatsAppNumber}?text=${prefilledMessage}`;
   const forms = `https://docs.google.com/forms/d/e/1FAIpQLScAalHHBMRerSlElnOkbXxeQTXMvvhqp__M2kX_1053pVgWtg/viewform`;

  const posterExamples = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&w=1000&q=80",
      alt: "Poster Example 1",
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1721322800607-8c383fusbneef04?auto=format&fit=crop&w=1000&q=80",
      alt: "Poster Example 2",
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&w=1000&q=80",
      alt: "Poster Example 3",
    },
  ];

  const specialities = [
    { icon: <Truck className="h-8 w-8 text-purple-500" />, title: "Free Delivery All Over India", description: "Get your personalized gifts delivered to your doorstep, anywhere in India, at no extra cost." },
    { icon: <Sparkles className="h-8 w-8 text-pink-500" />, title: "Personalized Just for Your Kid", description: "Unique gifts designed with your child's photo, name, and interests to make them feel special." },
    { icon: <FileText className="h-8 w-8 text-green-500" />, title: "Easy Order via WhatsApp or Online Form", description: "Convenient ordering options to suit your preference. Get started with a simple message or form." },
    { icon: <CalendarCheck className="h-8 w-8 text-yellow-500" />, title: "Fast Delivery – Ready Before School Reopens!", description: "Quick turnaround times to ensure your child's gifts arrive well in time for the new school year or any occasion." },
  ];

  const howToOrderSteps = [
    {
      id: 1,
      icon: <ShoppingCart className="h-10 w-10 text-purple-600" />,
      title: "Choose Your Order Method",
      description: "Select between ordering via WhatsApp or our online form."
    },
    {
      id: 2,
      icon: <Clipboard className="h-10 w-10 text-purple-600" />,
      title: "Submit Your Details",
      description: "Provide your child's name, photo, school name, and delivery address."
    },
    {
      id: 3,
      icon: <CreditCard className="h-10 w-10 text-purple-600" />,
      title: "Make Payment",
      description: "Complete your order by paying via UPI or other accepted methods."
    },
    {
      id: 4,
      icon: <Package className="h-10 w-10 text-purple-600" />,
      title: "Receive Your Stickers",
      description: "Your personalized stickers will be delivered to your doorstep."
    }
  ];

  const designExamples = [
    { id: 1, name: "Superhero Theme", color: "bg-blue-200", imgSrc: "https://images.unsplash.com/photo-1576773720283-a3314880dda3?auto=format&fit=crop&w=300&q=80", alt: "Superhero design" },
    { id: 2, name: "Princess Dreams", color: "bg-pink-200", imgSrc: "https://images.unsplash.com/photo-1581860226246-b1a7a6671a8d?auto=format&fit=crop&w=300&q=80", alt: "Princess design" },
    { id: 3, name: "Animal Friends", color: "bg-green-200", imgSrc: "https://images.unsplash.com/photo-1517059777501-45759cd18372?auto=format&fit=crop&w=300&q=80", alt: "Animal design" },
    { id: 4, name: "Space Adventure", color: "bg-indigo-200", imgSrc: "https://images.unsplash.com/photo-1581833834593-f1d99a02d302?auto=format&fit=crop&w=300&q=80", alt: "Space design" },
    { id: 5, name: "Unicorn Magic", color: "bg-purple-200", imgSrc: "https://images.unsplash.com/photo-1593239008061-43865a7392ab?auto=format&fit=crop&w=300&q=80", alt: "Unicorn design" },
    { id: 6, name: "Sports Star", color: "bg-yellow-200", imgSrc: "https://images.unsplash.com/photo-1552667466-07770ae910d9?auto=format&fit=crop&w=300&q=80", alt: "Sports design" },
  ];

  const plugin = useRef(
    Autoplay({ delay: 4000, stopOnInteraction: true })
  );

  const [carouselApi, setCarouselApi] = useState<CarouselApi | undefined>();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [slideCount, setSlideCount] = useState(0);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }
    setSlideCount(carouselApi.scrollSnapList().length);
    setCurrentSlide(carouselApi.selectedScrollSnap());

    const onSelect = () => {
      if (carouselApi) {
        setCurrentSlide(carouselApi.selectedScrollSnap());
      }
    };
    
    const onReInit = () => {
      if (carouselApi) {
        setSlideCount(carouselApi.scrollSnapList().length);
        setCurrentSlide(carouselApi.selectedScrollSnap());
      }
    }

    carouselApi.on("select", onSelect);
    carouselApi.on("reInit", onReInit);

    return () => {
      carouselApi.off("select", onSelect);
      carouselApi.off("reInit", onReInit);
    };
  }, [carouselApi]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-yellow-100 text-gray-800 font-sans">
      {/* Header */}
      <header className="py-6 px-4 md:px-8 shadow-md bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold text-purple-600">
            <Gift className="inline-block mr-2 h-8 w-8" />
            Tro Gifts
          </h1>
          <div className="hidden md:flex space-x-2">
            <Button onClick={() => window.open(whatsappLink, '_blank')} className="bg-green-500 hover:bg-green-600 text-white">
              <MessageSquare className="mr-2 h-5 w-5" /> WhatsApp Order
            </Button>
             <Button variant="outline" className="border-purple-500 text-purple-600 hover:bg-purple-50 hover:text-purple-700" onClick={() => window.open(forms, '_blank')}>
              <Send className="mr-2 h-5 w-5" /> Order Online
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-20 text-left md:text-center bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Brighten Their Day with Personalized Gifts!
          </h2>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-0 md:mx-auto">
            Create adorable, custom NameSlips for your child featuring their photo, name, school, and more! Perfect for labeling belongings or as a unique present.
          </p>
          <div className="flex justify-start md:justify-center space-x-4">
            <Button size="lg" onClick={() => window.open(whatsappLink, '_blank')} className="bg-green-500 hover:bg-green-600 text-white shadow-lg transform hover:scale-105 transition-transform">
              <MessageSquare className="mr-2" /> Order via WhatsApp
            </Button>
            <Button size="lg" variant="secondary" className="bg-purple-500 hover:bg-purple-600 text-white shadow-lg transform hover:scale-105 transition-transform"  onClick={() => window.open(forms, '_blank')}>
              <Send className="mr-2" /> Order Online Now
            </Button>
          </div>
        </div>
      </section>

      {/* New Poster Carousel Section */}
      <section id="posters" className="py-16 md:py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-left md:text-center mb-12 text-purple-700">Our Featured Posters</h3>
          <Carousel
            setApi={setCarouselApi}
            plugins={[plugin.current]}
            className="w-full max-w-3xl mx-0 md:mx-auto"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
            opts={{
              loop: true,
            }}
          >
            <CarouselContent>
              {posterExamples.map((poster) => (
                <CarouselItem key={poster.id}>
                  <div className="p-1">
                    <Card className="overflow-hidden shadow-lg">
                      <CardContent className="flex items-center justify-center p-0 aspect-[16/9]">
                        <img src={poster.src} alt={poster.alt} className="w-full h-full object-cover" />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="ml-[-40px] text-purple-600 bg-white/80 hover:bg-purple-100" />
            <CarouselNext className="mr-[-40px] text-purple-600 bg-white/80 hover:bg-purple-100" />
          </Carousel>
          {slideCount > 0 && (
            <div className="flex justify-center gap-2 mt-6">
              {Array.from({ length: slideCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => carouselApi?.scrollTo(index)}
                  className={cn(
                    "h-3 w-3 rounded-full transition-all duration-300 ease-out",
                    index === currentSlide
                      ? "bg-purple-600 scale-125"
                      : "bg-purple-300 hover:bg-purple-400"
                  )}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Updated What Makes Our Gifts Special Section */}
      <section id="specialities" className="py-16 md:py-20 bg-white">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-left md:text-center mb-12 text-pink-600">What Makes Our Gifts Special?</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialities.map((speciality) => (
              <div key={speciality.title} className="text-left md:text-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-start md:justify-center mb-4">{speciality.icon}</div>
                <h4 className="text-xl font-semibold text-gray-700 mb-2">{speciality.title}</h4>
                <p className="text-gray-600 text-sm">{speciality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Designs Section */}
      <section id="designs" className="py-16 md:py-20 bg-yellow-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-left md:text-center mb-12 text-yellow-700">Explore Our Designs</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6">
            {designExamples.map((design) => (
              <Card key={design.id} className={`overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${design.color}`}>
                <CardContent className="flex flex-col items-start md:items-center justify-center p-6 aspect-square">
                  {design.imgSrc ? (
                    <img src={design.imgSrc} alt={design.alt} className="w-24 h-24 object-contain mb-4 rounded-md self-start md:self-center" />
                  ) : (
                    <ImageIconLucide className="h-20 w-20 text-gray-700 mb-4 opacity-60 self-start md:self-center" />
                  )}
                  <p className="font-semibold text-lg text-gray-800 text-left md:text-center">{design.name}</p>
                  <p className="text-sm text-gray-600 text-left md:text-center">More details soon</p>
                </CardContent>
              </Card>
            ))}
          </div>
           <p className="text-left md:text-center mt-8 text-gray-600">More exciting designs coming soon. Stay tuned!</p>
        </div>
      </section>

      {/* Updated How to Order Section */}
      <section id="how-to-order" className="py-16 md:py-20 bg-green-50">
        <div className="container mx-auto px-4">
          <h3 className="text-3xl md:text-4xl font-bold text-left md:text-center mb-4 text-green-700">How It Works</h3>
          <p className="text-left md:text-center text-gray-600 mb-12 max-w-xl mx-0 md:mx-auto">
            Ordering your personalized name stickers is quick and easy. Follow these simple steps:
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-left md:text-center mb-12">
            {howToOrderSteps.map((step) => (
              <Card key={step.id} className="bg-white shadow-lg p-6 flex flex-col items-start md:items-center">
                <div className="relative mb-4 self-start md:self-center">
                  <div className="flex items-center justify-center h-20 w-20 rounded-full bg-purple-100">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 flex items-center justify-center h-8 w-8 rounded-full bg-purple-600 text-white text-sm font-bold">
                    {step.id}
                  </div>
                </div>
                <CardTitle className="text-xl font-semibold text-gray-700 mb-2">{step.title}</CardTitle>
                <CardContent className="p-0">
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Final CTA: This section was requested to be removed by the user, but it was removed in a previous step. Keeping it commented out as a reminder if needed. */}
      {/* 
      <section className="py-16 md:py-24 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Your Custom Gifts?</h3>
          <p className="text-lg md:text-xl mb-10 max-w-xl mx-auto">
            Don't wait! Order today and make your child's belongings and gifts stand out.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Button size="lg" onClick={() => window.open(whatsappLink, '_blank')} className="bg-green-500 hover:bg-green-600 text-white w-full sm:w-auto">
              <MessageSquare className="mr-2" /> Order via WhatsApp
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-purple-100 hover:text-purple-700 w-full sm:w-auto" // Changed button style
              onClick={() => alert("Online order form coming soon!")}
            >
              <Send className="mr-2" /> Order Online
            </Button>
          </div>
        </div>
      </section> 
      */}

      {/* Footer */}
      <footer className="py-8 text-left md:text-center bg-gray-800 text-gray-400">
        <div className="container mx-auto px-4">
          <p>&copy; {new Date().getFullYear()} Tro Gifts. All rights reserved.</p>
          <p className="text-sm mt-1">Create with love for your little ones!</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
