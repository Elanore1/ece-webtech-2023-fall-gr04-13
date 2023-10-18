//database 
export const db = [{
  slug : 'AirForceNike',
  title: 'Nike Air Force',
  description: 'The charm continues with the Nike Air Force. This OG basketball shoe revisits its most famous elements: tough stitched reinforcements, sober finishes and just the right amount of sparkle to make you shine.',
  size: 'EU 40',
  price: '119,99€',
  urlArticle: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b7d9211c-26e7-431a-ac24-b0540fb3c00f/chaussure-air-force-1-07-pour-GjGXSP.png'
}, {
  slug : 'JacketNorthFace',
  title: 'The North Face Retro Nuptse Jacket',
  description: 'Black down jacket with lined hood. Made of 100% nylon, warm lining, perfect for winter.',
  size: 'M',
  price: '329,99€',
  urlArticle: 'https://img01.ztat.net/article/spp-media-p1/66279d5f602046be953e67406fb2726b/94401ec7a1a54213bfb0ce6fb28ff0f9.jpg?imwidth=1800&filter=packshot'
}, {
  slug : 'CargoPantsRegular',
  title: 'Regular Fit Cargo Pants 2715',
  description: 'New LBO 2023 collection. White urban cargo pants in stretch cotton. Front pockets, drawcord, wide fit.',
  size: 'M',
  price: '56,99€',
  urlArticle: 'https://assets.laboutiqueofficielle.com/w_1100,q_auto,f_auto/media/products/2022/07/27/lbo_330635_SHALBO-2715_20221014T082015_01.jpg'
}]

export default function handler(req, res) {
  res.status(200).json(db)
}
