import React, { useEffect, useState } from 'react';
// import useSelector from 'reselect';

// import { createStructuredSelector } from '#src/models/utils'
// import { useSelector } from '#src/models/hooks';


// import { RootState, Actions, dispatch, store } from '#src/models/store'


// const selector = createStructuredSelector({
//    item: (root) => root.stores,
// })

export const Comps_hooks_useMetaProducts = (category: string, query: string) => {

  const [title, setTitle] = useState<string>(`Mushroom Products`)
  const [desc, setDesc] = useState<string>(`Embark on a captivating journey through the world of mushrooms with our comprehensive collection of mushroom products. Our page showcases a diverse array of mushroom-related offerings, ranging from culinary delights to medicinal wonders, and everything in between. Explore a curated list of top-quality mushrooms, extracts, growing supplies, and more, sourced and presented with utmost care to cater to all your mushroom needs. Whether you're a culinary enthusiast, a health-conscious individual, or simply curious about the fascinating realm of fungi, our all-encompassing product lists promise a one-stop destination for all things mushroom. Uncover the vast potential of mushrooms and discover the perfect products to enhance your culinary creations, support your well-being, and satisfy your curiosity about these remarkable fungi.`)
 
  useEffect(() => {

    const getDescByQuery = (query: string, mushroomType: string) => {
      console.log("Q: ", query)
      switch(query) {
        case 'Mushrooms':
          return `Explore a diverse selection of mushrooms available in ${mushroomType} mushrooms, catering to both culinary and medicinal needs. Indulge in the unique flavors and textures of each mushroom category, whether you're a culinary enthusiast or seeking the beneficial properties of medicinal mushrooms. Our carefully curated list offers a wide range of high-quality mushrooms to suit every preference. Delve into the world of fungi and discover the perfect mushrooms for your culinary creations or medicinal pursuits. Elevate your dishes or explore the potential health benefits with our premium ${mushroomType} mushrooms, sourced and presented with utmost care for your satisfaction.`
        case 'Extracts':
          return `Discover a comprehensive selection of ${mushroomType} mushroom extracts, carefully curated to provide you with the finest and most potent formulations. Our page showcases a diverse range of ${mushroomType} mushroom extracts, each offering unique health benefits and medicinal properties. From immune-boosting extracts to cognitive-enhancing elixirs, explore the vast potential of these powerful fungi. Elevate your well-being and discover the natural wonders of mushroom extracts, sourced and prepared with utmost care to ensure maximum efficacy and quality. Explore the world of fungi's medicinal potential and find the perfect mushroom extract to support your health and wellness journey.`
        case 'Edible':
          return `Savor the delectable world of mushroom edibles with our enticing selection of gourmet ${mushroomType} mushroom products. From savory mushroom chocolate bars to mouthwatering mushroom-infused snacks, our page offers a delightful array of edible delights for all taste buds. Indulge in the unique flavors and textures of these carefully crafted mushroom treats, each designed to elevate your culinary experience. Whether you're a seasoned foodie or simply curious about the wonders of mushrooms, our curated list of edible products promises a delectable adventure for your palate. Explore the extraordinary possibilities of mushroom cuisine and discover your new favorite gourmet delights in our exquisite collection of mushroom edible products.`
        case 'Growing':
          return `Embark on a rewarding journey of mushroom cultivation with our comprehensive selection of mushroom growing products. From grow kits to substrates, our page offers a diverse array of premium supplies to help you nurture and cultivate your very own mushrooms at home. Whether you're a beginner or an experienced mycologist, our carefully curated list provides everything you need to create a thriving mushroom growing environment. Discover the joy of cultivating these fascinating fungi and unleash your green thumb with our top-quality mushroom growing products. Start your mushroom cultivation adventure today and experience the satisfaction of growing your own mushrooms from start to finish.`
        default:
          return `ERROR: Not Found`
      }
    }

    switch(category) {
      case 'mushroom-type':
        setTitle(`${query} Mushrooms`)
        setDesc(`Explore a diverse selection of mushrooms available in ${query} mushrooms, catering to both culinary and medicinal needs. Indulge in the unique flavors and textures of each mushroom category, whether you're a culinary enthusiast or seeking the beneficial properties of medicinal mushrooms. Our carefully curated list offers a wide range of high-quality mushrooms to suit every preference. Delve into the world of fungi and discover the perfect mushrooms for your culinary creations or medicinal pursuits. Elevate your dishes or explore the potential health benefits with our premium ${query} mushrooms, sourced and presented with utmost care for your satisfaction.`)
        break;
      case 'extracts':
        setTitle(`${query} Extracts`)
        setDesc(`Discover a comprehensive selection of mushroom extracts, carefully curated to provide you with the finest and most potent formulations. Our page showcases a diverse range of mushroom extracts, each offering unique health benefits and medicinal properties. From immune-boosting extracts to cognitive-enhancing elixirs, explore the vast potential of these powerful fungi. Elevate your well-being and discover the natural wonders of mushroom extracts, sourced and prepared with utmost care to ensure maximum efficacy and quality. Explore the world of fungi's medicinal potential and find the perfect mushroom extract to support your health and wellness journey.`)
        break;
      case 'growing':
        setTitle(`${query} Mushroom Growing`)
        setDesc(`Embark on a rewarding journey of mushroom cultivation with our comprehensive selection of mushroom growing products. From grow kits to substrates, our page offers a diverse array of premium supplies to help you nurture and cultivate your very own mushrooms at home. Whether you're a beginner or an experienced mycologist, our carefully curated list provides everything you need to create a thriving mushroom growing environment. Discover the joy of cultivating these fascinating fungi and unleash your green thumb with our top-quality mushroom growing products. Start your mushroom cultivation adventure today and experience the satisfaction of growing your own mushrooms from start to finish.`)
        break;
      case 'edibles':
        setTitle(`${query} Mushroom Edibles`)
        setDesc(`Savor the delectable world of mushroom edibles with our enticing selection of gourmet mushroom products. From savory mushroom chocolate bars to mouthwatering mushroom-infused snacks, our page offers a delightful array of edible delights for all taste buds. Indulge in the unique flavors and textures of these carefully crafted mushroom treats, each designed to elevate your culinary experience. Whether you're a seasoned foodie or simply curious about the wonders of mushrooms, our curated list of edible products promises a delectable adventure for your palate. Explore the extraordinary possibilities of mushroom cuisine and discover your new favorite gourmet delights in our exquisite collection of mushroom edible products.`)
        break;
      case 'psychoactive':
        setTitle(`${query} Psychoactive Mushrooms`)
        setDesc(getDescByQuery(query, category))
        break;
      case 'medicinal':
        setTitle(`${query} Medicinal Mushrooms`)
        setDesc(getDescByQuery(query, category))
        break;
      case 'cullinary':
        setTitle(`${query} Cullinary Mushrooms`)
        setDesc(getDescByQuery(query, category))
        break;
      case 'nootropic':
        setTitle(`${query} Nootropic Mushrooms`)
        setDesc(getDescByQuery(query, category))
        break;
    }
  },[]);

  return {
    title,
    desc
  };
};
