// Fictional database for Japan travel blog with localStorage persistence
const isClient = typeof window !== 'undefined';

// Load blog posts from localStorage or use defaults
const getInitialBlogPosts = () => {
  if (isClient) {
    const savedPosts = localStorage.getItem('article');
    if (savedPosts) {
      return JSON.parse(savedPosts);
    }
  }
    return [
      {
        id: 1,
        title: "First Day in Tokyo",
        date: "2025-03-15",
        localisation: "Tokyo",
        content: "Today marks the beginning of my adventure in Japan. After a long flight, I finally arrived in Tokyo. The city is a fascinating blend of traditional culture and futuristic technology. I visited Shibuya Crossing, one of the busiest intersections in the world, and was amazed by the sea of people moving in perfect harmony.",
        image: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Tokyo", "First Impressions", "Travel"]
      },
      {
        id: 2,
        title: "Exploring Kyoto's Temples",
        date: "2025-03-18",
        localisation: "Kyoto",
        content: "Kyoto, the cultural heart of Japan, is home to over 1,600 Buddhist temples and 400 Shinto shrines. Today, I visited Kinkaku-ji (the Golden Pavilion) and was stunned by its reflection in the surrounding pond. The tranquility of the gardens provided a perfect escape from the hustle and bustle of city life.",
        image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Kyoto", "Temples", "Culture"]
      },
      {
        id: 3,
        title: "Mount Fuji: A Majestic View",
        date: "2025-03-22",
        localisation: "Hakone",
        content: "Today I had the privilege of seeing Mount Fuji in all its glory. The iconic snow-capped peak is even more impressive in person than in photographs. I took a day trip from Tokyo to Hakone, where I enjoyed the hot springs and the breathtaking views of Japan's highest mountain. The journey to Hakone was an experience in itself. I took the shinkansen (bullet train) from Tokyo Station to Odawara, marveling at how smoothly the train glided along the tracks at incredible speeds. From Odawara, I transferred to a scenic railway that wound through the mountains, offering glimpses of the rural Japanese countryside. Upon arriving in Hakone, I was immediately struck by the fresh mountain air and the peaceful atmosphere, a welcome change from the energetic buzz of Tokyo. My first stop was Lake Ashi, a crater lake that formed after a volcanic eruption thousands of years ago. I boarded a sightseeing cruise on a replica pirate ship, which sounds touristy but was actually quite charming. From the deck, I got my first clear view of Mount Fuji rising majestically in the distance, its perfect conical shape exactly as I had always imagined. After the cruise, I took the Hakone Ropeway, a cable car that provided aerial views of the volcanic valley below. The sulfuric vents of Owakudani, an active volcanic zone, created an otherworldly landscape of barren rock and steam rising from the earth. Here, I tried the famous black eggs, which are regular eggs boiled in the sulfuric hot springs. Legend has it that eating one adds seven years to your life! In the afternoon, I visited the Hakone Open-Air Museum, which features an impressive collection of sculptures set against the backdrop of the surrounding mountains. The combination of art and nature created a harmonious experience that was both stimulating and relaxing. As the day drew to a close, I indulged in one of Japan's most beloved traditions: the onsen (hot spring bath). Soaking in the mineral-rich waters while gazing at Mount Fuji in the distance was a moment of pure bliss. The Japanese have perfected the art of relaxation, and I can now understand why onsens are such an integral part of their culture.",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Mount Fuji", "Nature", "Hakone"]
      },
      {
        id: 4,
        title: "Mount Fuji: A Majestic View",
        date: "2025-03-22",
        localisation: "Hakone",
        content: "Today I had the privilege of seeing Mount Fuji in all its glory. The iconic snow-capped peak is even more impressive in person than in photographs. I took a day trip from Tokyo to Hakone, where I enjoyed the hot springs and the breathtaking views of Japan's highest mountain.Today I had the privilege of seeing Mount Fuji in all its glory. The iconic snow-capped peak is even more impressive in person than in photographs. I took a day trip from Tokyo to Hakone, where I enjoyed the hot springs and the breathtaking views of Japan's highest mountain.",
        image: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Mount Fuji", "Nature", "Hakone"]
      },
      {
        id: 5,
        title: "Exploring Japan: A Land of Contrasts",
        date: "2025-12-20",
        localisation: "Japan",
        content: "Today I had the privilege of seeing Mount Fuji in all its glory. The iconic snow-capped peak is even more impressive in person than in photographs. I took a day trip from Tokyo to Hakone, where I enjoyed the hot springs and the breathtaking views of Japan's highest mountain.Today I had the privilege of seeing Mount Fuji in all its glory. The iconic snow-capped peak is even more impressive in person than in photographs. I took a day trip from Tokyo to Hakone, where I enjoyed the hot springs and the breathtaking views of Japan's highest mountain.",
        image: "https://cdn.pixabay.com/photo/2015/02/15/03/04/japanese-umbrellas-636870_1280.jpg",
        tags: ["Japan", "Travel", "Culture", "Tradition", "Nature"]
      }
    ];
  };
  
// Load gallery images from localStorage or use defaults
const getInitialGalleryImages = () => {
  if (isClient) {
    const savedImages = localStorage.getItem('photos');
    if (savedImages) {
      return JSON.parse(savedImages);
    }
  }
    return [
      {
        id: 1,
        title: "Tokyo Skyline",
        date: "2025-03-15",
        description: "View of Tokyo skyline with Tokyo Tower",
        url: "https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Tokyo", "Night", "Skyline", "Urban"]
      },
      {
        id: 2,
        title: "Cherry Blossoms",
        date: "2025-05-15",
        description: "Cherry blossoms in full bloom at Ueno Park",
        url: "https://images.unsplash.com/photo-1522383225653-ed111181a951?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Kyoto", "Shrine", "Traditional", "Torii"]
      },
      {
        id: 3,
        title: "Traditional Tea Ceremony",
        date: "2025-04-15",
        description: "Experiencing a traditional Japanese tea ceremony",
        url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Mount Fuji", "Nature", "Cherry Blossoms", "Landscape"]
      },
      {
        id: 4,
        title: "Fushimi Inari Shrine",
        date: "2025-09-15",
        description: "The famous torii gates at Fushimi Inari Shrine in Kyoto",
        url: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Osaka", "Food", "Street", "Night"]
      },
      {
        id: 5,
        title: "Traditional Tea Ceremony",
        date: "2025-04-25",
        description: "Experiencing a traditional Japanese tea ceremony",
        url: "https://images.unsplash.com/photo-1607619662634-3ac55ec0e216?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
        tags: ["Mount Fuji", "Nature", "Cherry Blossoms", "Landscape"]
      },
      {
        id: 6,
        title: "Fushimi Inari Shrine",
        date: "2025-09-14",
        description: "The famous torii gates at Fushimi Inari Shrine in Kyoto",
        url: "https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
        tags: ["Osaka", "Food", "Street", "Night"]
      }
    ];
  };
  
  // Initialize data from localStorage or defaults
export const article = getInitialBlogPosts();
export const photos = getInitialGalleryImages();

// Admin credentials
export const adminCredentials = {
  username: "admin",
  password: "japan2025"
};

// Function to add a new blog post
export const addBlogPost = (post) => {
  const newPost = {
    ...post,
    id: article.length > 0 ? Math.max(...article.map(p => p.id)) + 1 : 1,
    date: new Date().toISOString().split('T')[0]
  };
  article.unshift(newPost);

  // Save to localStorage
  if (isClient) {
    localStorage.setItem('article', JSON.stringify(article));
  }

  return newPost;
};

// Function to add a new gallery image
export const addGalleryImage = (image) => {
  const newImage = {
    ...image,
    id: photos.length > 0 ? Math.max(...photos.map(img => img.id)) + 1 : 1
  };

  photos.push(newImage);

  // Save to localStorage if on client side
  if (isClient) {
    localStorage.setItem('photos', JSON.stringify(photos));
  }

  return newImage;
};
