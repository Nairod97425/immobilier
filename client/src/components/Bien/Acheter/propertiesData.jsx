import Bien1 from "../assets/BienaAcheter/bien1.jpg"
import Bien2 from "../assets/BienaAcheter/bien1(2).jpg"
import Bien3 from "../assets/BienaAcheter/bien1(3).jpg"
import Bien4 from "../assets/BienaAcheter/bien1(4).jpg"
import Bien5 from "../assets/BienaAcheter/bien1(5).jpg"

// bien2
import Bien6 from "../assets/BienaAcheter/bien2(1).jpg"
import Bien7 from "../assets/BienaAcheter/bien2(2).jpg"
import Bien8 from "../assets/BienaAcheter/bien2(3).jpg"
import Bien9 from "../assets/BienaAcheter/bien2(4).jpg"
import Bien10 from "../assets/BienaAcheter/bien2(5).jpg"
// bien3
import Bien11 from "../assets/BienaAcheter/bien3(1).jpg"
import Bien12 from "../assets/BienaAcheter/bien3(2).jpg"
import Bien13 from "../assets/BienaAcheter/bien3(3).jpg"
import Bien14 from "../assets/BienaAcheter/bien3(4).jpg"
import Bien15 from "../assets/BienaAcheter/bien3(5).jpg"
// bien4
import Bien16 from "../assets/BienaAcheter/bien4(1).jpg"
import Bien17 from "../assets/BienaAcheter/bien4(2).jpg"
import Bien18 from "../assets/BienaAcheter/bien4(3).jpg"
import Bien19 from "../assets/BienaAcheter/bien4(4).jpg"
import Bien20 from "../assets/BienaAcheter/bien4(5).jpg"


const propertiesData = [
  // BIEN1 
  {
      id: 1,
      title: "Charmant appartement à Paris",
      images: [
        Bien1,
        Bien2,
        Bien3,
        Bien4,
        Bien5
      ],
      address: "123 Rue de Rivoli, 75001 Paris",
      price: 850000,
      surface: 85,
      bedrooms: 2,
      bathrooms: 1,
      date: "2023-07-10",
      description: "Charmant appartement de 85 m² situé au cœur de Paris. Proche des commerces et des transports en commun. Idéal pour une famille ou un investissement locatif."
    },
    // BIEN2
    {
      id: 2,
      title: "Maison familiale à Versailles",
      images: [
        Bien6,
        Bien7,
        Bien8,
        Bien9,
        Bien10
      ],
      address: "456 Avenue de Paris, 78000 Versailles",
      price: 1250000,
      surface: 150,
      bedrooms: 4,
      bathrooms: 2,
      date: "2023-06-15",
      description: "Belle maison familiale de 150 m² à Versailles, offrant un grand jardin et une vue imprenable sur le château. Parfaite pour une grande famille."
    },
    // BIEN3
    {
      id: 3,
      title: "Studio moderne à Boulogne-Billancourt",
      images: [
        Bien11,
        Bien12,
        Bien13,
        Bien14,
        Bien15
      ],
      address: "789 Rue Thiers, 92100 Boulogne-Billancourt",
      price: 350000,
      surface: 30,
      bedrooms: 1,
      bathrooms: 1,
      date: "2023-05-20",
      description: "Studio moderne de 30 m² à Boulogne-Billancourt. Idéal pour un jeune professionnel ou un étudiant. Proche des transports et des commodités."
    },
    // BIEN4
    {
      id: 4,
      title: "Maison à vendre 6 pièces - 104 m²",
      images: [
        Bien16,
        Bien17,
        Bien18,
        Bien19,
        Bien20
      ],
      address: "321 Rue de la République, 92210 Saint-Cloud",
      price: 970000,
      surface: 104,
      bedrooms: 3,
      bathrooms: 2,
      date: "2023-04-12",
      description: "Maison spacieuse de 104 m² à Saint-Cloud. Comprend 3 chambres, 2 salles de bains et un grand salon. Quartier calme et résidentiel, idéal pour une famille."
    }
  ];
  
  export default propertiesData;
