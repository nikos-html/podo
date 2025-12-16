// Mock data for PodoNova website - based on Booksy data

export const services = [
  {
    id: 1,
    name: "Konsultacja podologiczna",
    description: "Konsultacja obejmuje zebranie wywiadu, omówienie stanu skóry i paznokci, ustalenie planu terapii. Przy umówionym zabiegu konsultacja jest bezpłatna.",
    price: "100 zł",
    duration: "20 min",
    benefits: ["Szczegółowa analiza stanu stóp", "Plan indywidualnej terapii", "Profesjonalne doradztwo"],
    forWho: "Dla osób z problemami stóp wymagających specjalistycznej diagnozy"
  },
  {
    id: 2,
    name: "PZP - Podstawowy zabieg podologiczny",
    description: "Skrócenie paznokci, oczyszczenie wałów paznokciowych, opracowanie zrogowaceń na stopach.",
    price: "200 zł",
    duration: "1g 15min",
    benefits: ["Kompleksowa pielęgnacja stóp", "Usunięcie zrogowaceń", "Bezbolesny zabieg"],
    forWho: "Dla każdego, kto chce zadbać o zdrowie i higienę stóp"
  },
  {
    id: 3,
    name: "Leczniczy zabieg podologiczny",
    description: "Podstawowy zabieg podologiczny z opracowaniem modzeli, odcisków i pękających pięt.",
    price: "250 zł",
    duration: "1g 30min",
    benefits: ["Usuwanie modzeli i odcisków", "Leczenie pękających pięt", "Długotrwała ulga"],
    forWho: "Dla osób z modzlami, odciskami i pękającymi piętami"
  },
  {
    id: 4,
    name: "Pedicure SPA",
    description: "Kąpiel stóp, usunięcie zrogowaceń, usunięcie skórek, obcięcie i oszlifowanie paznokci a na koniec zabieg parafinowy.",
    price: "250 zł",
    duration: "1g 45min",
    benefits: ["Relaksująca kąpiel stóp", "Zabieg parafinowy", "Gładka i miękka skóra"],
    forWho: "Dla stóp bez zmian chorobowych - relaks i pielęgnacja"
  },
  {
    id: 5,
    name: "Usuwanie odcisków i modzeli",
    description: "Usunięcie jednego odcisku lub modzela 120 zł, a w przypadku większej ilości 160 zł.",
    price: "od 120 zł",
    duration: "30 min",
    benefits: ["Skuteczne usunięcie bolesnych zmian", "Natychmiastowa ulga", "Bezbolesny zabieg"],
    forWho: "Dla osób z bolesnymi modzlami i odciskami"
  },
  {
    id: 6,
    name: "Brodawka wirusowa HPV",
    description: "Usuwanie brodawek wirusowych. Cena uzależniona od ilości: jedna 100 zł; brodawki mnogie 150 zł. Wizyta kontrolna 80 zł.",
    price: "od 100 zł",
    duration: "30 min",
    benefits: ["Skuteczne leczenie kurzajek", "Wizyty kontrolne", "Profesjonalna terapia"],
    forWho: "Dla osób z brodawkami wirusowymi na stopach"
  },
  {
    id: 7,
    name: "Opracowanie pękających pięt",
    description: "Specjalistyczne opracowanie pękających pięt. Cena uzależniona jest od ilości rozpadlin i czasu zabiegu.",
    price: "od 160 zł",
    duration: "1g 10min",
    benefits: ["Leczenie głębokich pęknięć", "Regeneracja skóry", "Długotrwałe efekty"],
    forWho: "Dla osób z pękającymi, suchymi piętami"
  },
  {
    id: 8,
    name: "Opracowanie paznokci zmienionych chorobowo",
    description: "Jeden paznokieć 150 zł. Więcej niż jeden paznokieć 200 zł.",
    price: "od 150 zł",
    duration: "40 min",
    benefits: ["Leczenie zmian grzybiczych", "Regeneracja płytki paznokciowej", "Zapobieganie postępowi choroby"],
    forWho: "Dla osób z grzybicą paznokci i innymi zmianami chorobowymi"
  },
  {
    id: 9,
    name: "Opracowanie paznokcia wrastającego",
    description: "Podcięcie wrastającego paznokcia i opatrunek.",
    price: "160 zł",
    duration: "40 min",
    benefits: ["Natychmiastowa ulga w bólu", "Bezbolesny zabieg", "Zapobieganie powikłaniom"],
    forWho: "Dla osób z bolesnymi, wrastającymi paznokciami"
  },
  {
    id: 10,
    name: "Założenie klamry ortonyksyjnej",
    description: "Klamra ortonyksyjna do korekcji wrastających paznokci. Przestawienie/kontynuacja terapii 170 zł.",
    price: "190 zł",
    duration: "1g",
    benefits: ["Trwała korekta wrastającego paznokcia", "Bezbolesna metoda", "Długotrwałe rezultaty"],
    forWho: "Dla osób z przewlekle wrastającymi paznokciami"
  },
  {
    id: 11,
    name: "Rekonstrukcja płytki paznokciowej",
    description: "Rekonstrukcja uszkodzonej płytki paznokciowej. Więcej paznokci 200 zł.",
    price: "od 150 zł",
    duration: "40 min",
    benefits: ["Odbudowa uszkodzonej płytki", "Estetyczny wygląd", "Ochrona paznokcia"],
    forWho: "Dla osób z uszkodzonymi lub brakującymi paznokciami"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Agnieszka K.",
    rating: 5,
    service: "Leczniczy zabieg podologiczny",
    comment: "Polecam bardzo profesjonalnie",
    date: "Grudzień 2025",
    verified: true
  },
  {
    id: 2,
    name: "Renata P.",
    rating: 5,
    service: "Leczniczy zabieg podologiczny",
    comment: "Dziękujemy wszytsko super",
    date: "Grudzień 2025",
    verified: true
  },
  {
    id: 3,
    name: "Martyna R.",
    rating: 5,
    service: "Pedicure SPA",
    comment: "Wszystko super, polecam :)",
    date: "Grudzień 2025",
    verified: true
  },
  {
    id: 4,
    name: "Sylwia I.",
    rating: 5,
    service: "PZP - podstawowy zabieg podologiczny",
    comment: "Polecam, wszystko jak trzeba. Czysto i profesjonalnie",
    date: "Grudzień 2025",
    verified: true
  },
  {
    id: 5,
    name: "Jadwiga K.",
    rating: 5,
    service: "Konsultacja podologiczna",
    comment: "Bardzo miła Pani Podolog. Zabieg usunięcia odciska pod palcem stopy wykonany bezboleśnie u 90-letniej Pani. Polecam.",
    date: "Listopad 2025",
    verified: true
  },
  {
    id: 6,
    name: "P K.",
    rating: 5,
    service: "Założenie klamry ortonyksyjnej",
    comment: "Profesjonalne podejście, klamra założona bezboleśnie. Znikł ból wrastającego się paznokcia. Gorąco polecam.",
    date: "Listopad 2025",
    verified: true
  },
  {
    id: 7,
    name: "Anna P.",
    rating: 5,
    service: "Leczniczy zabieg podologiczny",
    comment: "Bardzo fachowe podejście i przemiła pani podolog. Zabieg wykonany dokładnie i bez bólu. Serdecznie polecam!",
    date: "Październik 2025",
    verified: true
  },
  {
    id: 8,
    name: "Elżbieta B.",
    rating: 5,
    service: "Opracowanie pięt",
    comment: "Jestem bardzo zadowolona. Pięty zostały elegancko doprowadzone do porządku. Polecam.",
    date: "Wrzesień 2025",
    verified: true
  }
];

export const footProblems = [
  {
    id: 1,
    title: "Modzele i odciski",
    description: "Bolesne zgrubienia skóry powodujące dyskomfort przy chodzeniu",
    icon: "AlertCircle"
  },
  {
    id: 2,
    title: "Wrastające paznokcie",
    description: "Paznokcie wrastające w skórę, powodujące ból i stany zapalne",
    icon: "AlertTriangle"
  },
  {
    id: 3,
    title: "Pękające pięty",
    description: "Sucha, popękana skóra na piętach wymagająca regeneracji",
    icon: "Activity"
  },
  {
    id: 4,
    title: "Grzybica paznokci",
    description: "Infekcje grzybicze powodujące zmiany koloru i struktury paznokci",
    icon: "Shield"
  },
  {
    id: 5,
    title: "Brodawki wirusowe",
    description: "Kurzajki na stopach wymagające specjalistycznego leczenia",
    icon: "Target"
  },
  {
    id: 6,
    title: "Stopa cukrzycowa",
    description: "Profilaktyka i pielęgnacja stóp u osób z cukrzycą",
    icon: "Heart"
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Indywidualne podejście",
    description: "Każdy pacjent otrzymuje spersonalizowaną opiekę dopasowaną do jego potrzeb",
    icon: "User"
  },
  {
    id: 2,
    title: "Najwyższe standardy higieny",
    description: "Sterylizacja narzędzi, jednorazowe akcesoria, przestrzeganie norm sanitarnych",
    icon: "ShieldCheck"
  },
  {
    id: 3,
    title: "Doświadczenie i wiedza",
    description: "Profesjonalny podolog z bogatym doświadczeniem w leczeniu problemów stóp",
    icon: "Award"
  },
  {
    id: 4,
    title: "Nowoczesny sprzęt",
    description: "Wykorzystujemy profesjonalny sprzęt podologiczny najnowszej generacji",
    icon: "Settings"
  },
  {
    id: 5,
    title: "Bezbolesne zabiegi",
    description: "Delikatne i skuteczne techniki zapewniające komfort podczas zabiegu",
    icon: "Heart"
  },
  {
    id: 6,
    title: "Wizyty domowe",
    description: "Możliwość wykonania zabiegu w domu pacjenta dla osób z ograniczoną mobilnością",
    icon: "Home"
  }
];

export const galleryImages = [
  "https://d375139ucebi94.cloudfront.net/region2/pl/304698/biz_photo/a0c057c3974649238daf41ee9e97f8-podonova-biz-photo-32b4558046544c5dac2939873a79e6-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/pl/304698/inspiration/a836665e208b41c5b0e3b714cc7c7d-podonova-inspiration-e052e215d8774337b730d6cf08c0ab-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/pl/304698/inspiration/9aedeb70ae804439a451a67f8f3d58-podonova-inspiration-43e683c3e18e43d0a8b8618dfb5f1c-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/pl/304698/inspiration/fcc629be599d4c0487040415db47c8-podonova-inspiration-a850e9d15ef84fd2a0c52cdd286651-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/pl/304698/inspiration/5f65d7c760404936825790d6eaeef8-podonova-inspiration-fffb1962b9f54633b7996907347da7-booksy.jpeg",
  "https://d375139ucebi94.cloudfront.net/region2/pl/304698/inspiration/452b0a6c07fc47d89c7b2775efbab6-podonova-inspiration-0e6b1fe7d6fc47d79db21d2baad4ca-booksy.jpeg"
];

export const contactInfo = {
  name: "PodoNova - Gabinet Podologiczny",
  address: "Lubuska 107",
  postalCode: "66-446 Deszczno",
  city: "Deszczno",
  region: "województwo lubuskie",
  phone: "+48 XXX XXX XXX",
  booksyUrl: "https://booksy.com/pl-pl/304698_podonova_podologia_17956_deszczno",
  rating: 5.0,
  reviewsCount: 23,
  coordinates: {
    lat: 52.6547,
    lng: 15.1847
  },
  hours: [
    { day: "Poniedziałek - Piątek", time: "9:00 - 18:00" },
    { day: "Sobota", time: "Na umówione wizyty" },
    { day: "Niedziela", time: "Nieczynne" }
  ]
};
