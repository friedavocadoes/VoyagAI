import React from 'react';
import Card from '../components/Card';

// Define data for different categories
const categories = [
  {
    title: 'Mountains',
    cards: [
      { title: 'Darjeeling -WestBengal ', imageSrc: 'https://static.toiimg.com/thumb/msid-51990254,width-748,height-499,resizemode=4,imgsize-183784/.jpg' },
      { title: 'Ooty - TamilNadu', imageSrc: 'https://assets.gqindia.com/photos/62f67dd24c3aadbd8ac31c68/4:3/w_1440,h_1080,c_limit/Nilgiri-Mountain-Toy-Train.jpg' },
      { title: 'Mussoorie - Uttrakhand ', imageSrc: 'https://www.tripsavvy.com/thmb/hlPXvr0mVj3MJqyaHpbmhfdRqb0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-450780653-5b11083e119fa80036d96713.jpg' },
      { title: 'Manali - Himachal pradesh', imageSrc: 'https://hikerwolf.com/wp-content/uploads/2020/04/WhatsApp-Image-2020-04-02-at-7.18.33-PM-1046x800.jpeg' },
      { title: 'Gulmarg - Jammu and kashmir ', imageSrc: 'https://content.r9cdn.net/rimg/dimg/c9/fc/777e2b93-city-58627-1683882bbd0.jpg?width=1366&height=768&xhint=1482&yhint=1002&crop=true' }
    ]
  },
  {
    title: 'Coastal Areas',
    cards: [
      { title: 'Goa -', imageSrc: 'https://www.tourmyindia.com/socialimg/calangute-beach-goa.jpg' },
      { title: 'Alibaug -Maharashtra ', imageSrc: 'https://static.javatpoint.com/tourist-places/images/tourist-places-in-alibag1.png' },
      { title: 'Puri -Orissa ', imageSrc: ' https://ihplb.b-cdn.net/wp-content/uploads/2021/11/blog-header-image-1-750x430.jpg' },
      { title: ' Kochi -', imageSrc: ' https://media.tacdn.com/media/attractions-content--1x-1/0b/e2/64/ad.jpg' },
      { title: 'Puducherry -', imageSrc: ' https://swarajya.gumlet.io/swarajya/2020-04/582e9fd6-9bf0-48ff-aa69-70b98aea778b/1024px_Puducherry_beach.jpg?w=640&q=75&auto=format,compress&format=webp' }
    ]
  },
  {
    title: 'Culture and Heritage',
    cards: [
      { title: 'Taj Mahal - Uttar Pradesh', imageSrc: ' https://media.cnn.com/api/v1/images/stellar/prod/171017153620-the-taj-mahal-general-view.jpg?q=x_0,y_156,h_1688,w_3000,c_crop/h_833,w_1480' },
      { title: 'Jaipur - Rajasthan', imageSrc: 'https://www.cygnetthotels.com/blog/wp-content/uploads/2021/05/jaipur-blog1.jpg' },
      { title: 'Sun Temple - Odisha', imageSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Konarka_Temple.jpg' },
      { title: 'Ellora Caves - Maharashtra', imageSrc: 'https://www.pilgrimagetour.in/blog/wp-content/uploads/2023/12/How-to-Reach-Ellora-Caves.jpg' },
      { title: 'Ahmedabad - Gujrat', imageSrc: ' https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/eb/b8/4d/lake-view.jpg?w=400&h=300&s=1' }
    ]
  },
  {
    title: 'Cold WinterSpots',
    cards: [
      { title: 'Andematt - switzerland', imageSrc: ' https://switzerland-tour.com/storage/media/Andermatt/Snowy-Andermatt-Switzerland.jpg' },
      { title: ' Greenland ', imageSrc: ' https://i.natgeofe.com/k/eab9da18-cd90-4291-8c54-9a327b2bc3a6/greenland-polar-bear_2x1.jpg' },
      { title: 'Spiti Valley, Himachal Pradesh ', imageSrc: ' https://vargiskhan.com/log/wp-content/uploads/2018/10/spiti-valley-in-february.jpg' },
      { title: 'Rohtang, Himachal Pradesh', imageSrc: '  https://englishtribuneimages.blob.core.windows.net/gallary-content/2023/6/2023_6$largeimg_412010642.jpg' },
      { title: 'Auli, Uttarakhand', imageSrc: 'https://uttarakhandguide.com/wp-content/uploads/2019/04/vishwanath-negi-qZaXh7_Hwa0-unsplash-scaled.jpg' }
    ]
  },
  {
    title: 'Natural Attractions',
    cards: [
      { title: 'ladakh ', imageSrc: 'https://instahimachal.com/wp-content/uploads/2022/09/Spiti-Winter-Trip-Himachal-Pradesh-Insta-Himachal-jpeg.webp' },
      { title: 'National zoological park ', imageSrc: 'https://media1.thrillophilia.com/filestore/kbv6beow43zly03jypa9wt8kdq86_shutterstock_1624279141.jpg' },
      { title: 'Sundarbans ', imageSrc: 'https://www.oyorooms.com/travel-guide/wp-content/uploads/2020/01/Mangroves-in-Sunderbans-1-4.jpg' },
      { title: ' Venice, Italy ', imageSrc: 'https://lp-cms-production.imgix.net/2021-06/GettyRF_543346423.jpg?w=1920&h=640&fit=crop&crop=faces%2Cedges&auto=format&q=75' },
      { title: 'Iceland. ', imageSrc: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/202305/from-india-today-spice-wher_0-sixteen_nine.jpg?VersionId=802wokx_kw26IsvPXGjAZqXr7HqR3peJ' }
    ]
  }
];

const Explore = () => {
  return (
    <div
      className="container mx-auto py-8"
      style={{ backgroundImage: `url('/background.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
        <br></br>
        <br></br>
        <br></br>
      <div className="text-white text-center mb-8">
        <h2 className="text-5xl font-bold mb-4">Explore Places to Visit</h2>
      </div>

      {/* Render categories */}
      {categories.map((category, index) => (
        <div key={index} className="mb-8">
          <h3 className="text-3xl font-semibold mb-2 text-white">{category.title}</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Render cards for each category */}
            {category.cards.map((card, cardIndex) => (
              <Card key={cardIndex} title={card.title} imageSrc={card.imageSrc} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Explore;
