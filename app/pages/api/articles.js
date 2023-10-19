//database 
export const db = [{
  slug : 'AirForceNike',
  title: 'Nike Air Force',
  description: 'The charm continues with the Nike Air Force. This OG basketball shoe revisits its most famous elements: tough stitched reinforcements, sober finishes and just the right amount of sparkle to make you shine.',
  size: 'EU 40',
  price: '$119,99',
  urlArticle: 'https://img01.ztat.net/article/spp-media-p1/e9e654de922743e1afe423143638f45d/9637b0fbf302417985e76724d14cea3c.jpg?imwidth=1800'
}, {
  slug : 'JacketNorthFace',
  title: 'The North Face Retro Nuptse Jacket',
  description: 'Black down jacket with lined hood. Made of 100% nylon, warm lining, perfect for winter.',
  size: 'M',
  price: '$329,99',
  urlArticle: 'https://img01.ztat.net/article/spp-media-p1/66279d5f602046be953e67406fb2726b/94401ec7a1a54213bfb0ce6fb28ff0f9.jpg?imwidth=1800&filter=packshot'
}, {
  slug : 'CargoPantsRegular',
  title: 'Regular Fit Cargo Pants 2715',
  description: 'New LBO 2023 collection. White urban cargo pants in stretch cotton. Front pockets, drawcord, wide fit.',
  size: 'M',
  price: '$56,99',
  urlArticle: 'https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2022/07/27/lbo_330635_SHALBO-2715_20221014T082015_01.jpg'
}]

export default function handler(req, res) {
  res.status(200).json(db)
}
