import React, { useEffect, useState } from 'react';
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'


// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_hooks_useMetaSpecies = (category: string, query: string) => {
  console.log("🚀 ~ file: index.tsx:16 ~ query:", query)
  console.log("🚀 ~ file: index.tsx:16 ~ category:", category)
  
  const [title, setTitle] = useState<string>("Browse All Species")
  const [desc, setDesc] = useState<string>("Discover a comprehensive collection of information about diverse mushroom species. From culinary delights to medicinal wonders and everything in between, explore a wide array of mushroom types and learn about their unique characteristics, benefits, and uses. Start your journey into the fascinating world of mushrooms today! Filter to discover the perfect mushroom for your needs.")

  useEffect(() => {
    
    switch(category){
      case 'helpsWith':
        setTitle(`Mushrooms to help with ${query}`)
        setDesc(`Discover a curated list of mushrooms known for their potential to help with ${query.toLowerCase()}. Explore a variety of mushroom species renowned for their medicinal properties and their potential to alleviate ${query.toLowerCase()}. Learn about their unique benefits and properties, and find the perfect mushroom remedy to support your health and well-being. Start your journey into the world of medicinal mushrooms and unlock their natural healing potential for ${query.toLowerCase()}.`)
        break;
      case 'type':
        setTitle(`Browse ${query} Mushrooms`)
        setDesc(`Explore a curated collection of information about various mushroom ${query.toLowerCase()} species. From culinary delights to medicinal wonders, delve into the diverse characteristics, benefits, and uses of ${query.toLowerCase()} mushrooms. Learn about their unique properties and discover the fascinating world of ${query.toLowerCase()} fungi. Start your exploration today and deepen your knowledge about these remarkable ${query.toLowerCase()} mushrooms.`)
        break;
      case 'effect':
        setTitle(`Mushrooms with ${query} effect`)
        setDesc(`Explore a diverse collection of mushrooms associated with an improvement or enhancement in ${query.toLowerCase()} or for it's ${query.toLowerCase()} effect. Discover a wide range of mushroom species renowned for their unique properties and abilities to induce ${query.toLowerCase()}. Learn about the fascinating effects of these mushrooms and find the perfect variety to experience the ${query.toLowerCase()} sensation. Delve into the captivating world of ${query.toLowerCase()} mushrooms and embrace the intriguing effects they have to offer.`)
        break;
      case 'flavor':
        setTitle(`${query} tasting mushrooms`)
        setDesc(`Indulge in a delightful assortment of mushrooms renowned for their ${query.toLowerCase()} flavor. Explore a diverse selection of mushroom species, each offering a distinct and enticing ${query.toLowerCase()} taste. Discover culinary delights and savor the unique flavors that these mushrooms bring to your dishes. Uncover the rich palette of ${query.toLowerCase()} mushrooms and elevate your culinary experiences with their exquisite and mouthwatering essence.`)
        break;
      case 'texture':
        setTitle(`${query} textured mushrooms`)
        setDesc(`Embark on a sensory journey with mushrooms known for their ${query.toLowerCase()} texture. Delve into a curated collection of mushroom species, each offering a unique and enticing ${query.toLowerCase()} feel. Explore the diverse textures of these mushrooms and discover how they add depth and character to your culinary creations. Immerse yourself in the world of ${query.toLowerCase()} mushrooms and elevate your dishes with their delightful and distinctive textures.`)
        break;
      case 'fragrance':
        setTitle(`${query} smelling mushrooms`)
        setDesc(`Awaken your senses with a captivating selection of mushrooms known for their ${query.toLowerCase()} fragrance. Explore a diverse array of mushroom species, each exuding a unique and alluring ${query.toLowerCase()} aroma. Immerse yourself in the enchanting scents of these mushrooms and discover how they enhance the flavors and ambiance of your culinary creations. Embrace the delightful world of ${query.toLowerCase()} mushrooms and elevate your culinary experiences with their aromatic charm.`)
        break;
      case 'chemistry':
        setTitle(`${query} mushrooms`)
        setDesc(`Discover a curated list of mushrooms rich in ${query.toLowerCase()} chemical compound. Explore a diverse selection of mushroom species, each containing the unique ${query.toLowerCase()} compound. Learn about the fascinating properties and potential benefits of these mushrooms enriched with ${query.toLowerCase()}. Uncover the captivating world of ${query.toLocaleLowerCase}-infused mushrooms and embrace the enriching experiences they offer. Delve into the realm of natural compounds and unlock the wonders of ${query.toLowerCase()} within these extraordinary fungi.`)
        break;
    }
  },[]);

  return {
    title,
    desc
  };
};
