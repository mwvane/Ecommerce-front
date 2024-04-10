import { ILanguage } from './components/language-selector/models/language';
import { CategoryType } from './enums/category-type';
import { IBanner } from './models/banner';
import { ICategory } from './models/category';
import { IcategoryItem } from './models/categoryItem';
import { Isocial } from './models/social';
import { ISidebarItem } from './shared/sidebar/sidbarItem';

export class StaticFiles {
  static languages: ILanguage[] = [
    { id: 1, name: 'English', shortName: 'ENG', code: 'en' },
    { id: 2, name: 'Georgian', shortName: 'GEO', code: 'ge' },
  ];
  static social: Isocial[] = [
    { id: 1, icon: 'bi bi-facebook', url: 'https://www.facebook.com/' },
    { id: 1, icon: 'bi bi-twitter', url: 'https://www.twitter.com/' },
    { id: 1, icon: 'bi bi-instagram', url: 'https://www.instagram.com/' },
    { id: 1, icon: 'bi bi-linkedin', url: 'https://www.linkedin.com/' },
  ];

  static userMenu = [
    {
      label: 'update',
      command: () => {
        console.log('update');
      },
    },
  ];

  static bannerData: IBanner[] = [
    {
      categoryName: 'Sale Offer',
      title: 'new fashion summer sale',
      aditionalText: 'starting at $ 29.99',
      actionName: 'shop now',
      image: 'assets/media/other/banner-1.jpg',
    },
  ];

  static categorySliderItems: IcategoryItem[] = [
    {
      id: 1,
      productCount: 58,
      name: 'dress & frock',
      image: 'assets/images/icons/dress.svg',
      categoryType: CategoryType.Slider,
    },
    {
      id: 2,
      productCount: 12,
      name: 'winter wear',
      image: 'assets/images/icons/coat.svg',
      categoryType: CategoryType.Slider,
    },
    {
      id: 3,
      productCount: 19,
      name: 'glasses & lens',
      image: 'assets/images/icons/glasses.svg',
      categoryType: CategoryType.Slider,
    },
    {
      id: 4,
      productCount: 82,
      name: 'short & jeans',
      image: 'assets/images/icons/shorts.svg',
      categoryType: CategoryType.Slider,
    },
    {
      id: 5,
      productCount: 8,
      name: 't-shirts',
      image: 'assets/images/icons/tee.svg',
      categoryType: CategoryType.Slider,
    },
    {
      id: 6,
      productCount: 18,
      name: 'jacket',
      image: 'assets/images/icons/jacket.svg',
      categoryType: CategoryType.Slider,
    },
    {
      id: 7,
      productCount: 11,
      name: 'watch',
      image: 'assets/images/icons/watch.svg',
      categoryType: CategoryType.Slider,
    },
    {
      id: 8,
      productCount: 23,
      name: 'hat & caps',
      image: 'assets/images/icons/hat.svg',
      categoryType: CategoryType.Slider,
    },
  ];

  static navigationMenuItems: ICategory[] = [
    {
      id: 1,
      name: 'home',
      categoryType: CategoryType.MenuCategory,
    },
    {
      id: 2,
      name: 'categories',
      categoryType: CategoryType.MenuCategory,
      subCategory: [
        {
          categoryType: CategoryType.MenuCategory,
          id: 20,
          name: 'electronics',
          subCategory: [
            { categoryType: CategoryType.Category, name: 'desktop', id: 4 },
            { categoryType: CategoryType.Category, name: 'laptop', id: 5 },
            { categoryType: CategoryType.Category, name: 'camera', id: 6 },
            { categoryType: CategoryType.Category, name: 'tablet', id: 7 },
            { categoryType: CategoryType.Category, name: 'headphone', id: 8 },
          ],
        },
        {
          id: 9,
          name: "men's",
          categoryType: CategoryType.MenuCategory,
          subCategory: [
            { categoryType: CategoryType.Category, name: 'formal', id: 10 },
            { categoryType: CategoryType.Category, name: 'casual', id: 11 },
            { categoryType: CategoryType.Category, name: 'sports', id: 12 },
            { categoryType: CategoryType.Category, name: 'jacket', id: 13 },
            {
              categoryType: CategoryType.Category,
              name: 'sungalasses',
              id: 14,
            },
          ],
        },
        {
          id: 15,
          name: "women's",
          categoryType: CategoryType.MenuCategory,
          subCategory: [
            { categoryType: CategoryType.Category, name: 'formal', id: 16 },
            { categoryType: CategoryType.Category, name: 'casual', id: 17 },
            { categoryType: CategoryType.Category, name: 'perfume', id: 18 },
            { categoryType: CategoryType.Category, name: 'cosmetics', id: 19 },
            { categoryType: CategoryType.Category, name: 'bags', id: 20 },
          ],
        },
        {
          id: 21,
          name: 'Computer',
          categoryType: CategoryType.MenuCategory,
          subCategory: [
            { categoryType: CategoryType.Category, name: 'mouse', id: 22 },
            { categoryType: CategoryType.Category, name: 'keyborad', id: 23 },
            { categoryType: CategoryType.Category, name: 'microphone', id: 24 },
            { categoryType: CategoryType.Category, name: 'monitor', id: 25 },
            { categoryType: CategoryType.Category, name: 'camera', id: 26 },
          ],
        },
      ],
    },
    {
      id: 9,
      name: "men's",
      categoryType: CategoryType.MenuCategory,
      subCategory: [
        { categoryType: CategoryType.Category, name: 'formal', id: 10 },
        { categoryType: CategoryType.Category, name: 'casual', id: 11 },
        { categoryType: CategoryType.Category, name: 'sports', id: 12 },
        { categoryType: CategoryType.Category, name: 'jacket', id: 13 },
        {
          categoryType: CategoryType.Category,
          name: 'sungalasses',
          id: 14,
        },
      ],
    },
    {
      id: 15,
      name: "women's",
      categoryType: CategoryType.MenuCategory,
      subCategory: [
        { categoryType: CategoryType.Category, name: 'formal', id: 16 },
        { categoryType: CategoryType.Category, name: 'casual', id: 17 },
        { categoryType: CategoryType.Category, name: 'perfume', id: 18 },
        { categoryType: CategoryType.Category, name: 'cosmetics', id: 19 },
        { categoryType: CategoryType.Category, name: 'bags', id: 20 },
      ],
    },
    {
      id: 21,
      name: 'Computer',
      categoryType: CategoryType.MenuCategory,
      subCategory: [
        { categoryType: CategoryType.Category, name: 'mouse', id: 22 },
        { categoryType: CategoryType.Category, name: 'keyborad', id: 23 },
        { categoryType: CategoryType.Category, name: 'microphone', id: 24 },
        { categoryType: CategoryType.Category, name: 'monitor', id: 25 },
        { categoryType: CategoryType.Category, name: 'camera', id: 26 },
      ],
    },
  ];

  static sidebarItems: ISidebarItem[] = [
    {id: 1, name: "clothes", image:"./assets/images/icons/dress.svg", items: [
      {id:2, name: "jacket", count: 100},
      {id:3, name: "short & jeans", count: 150},
      {id:4, name: "dress & frock", count: 300},
    ]},
    {id: 5, name: "footwear", image:"./assets/images/icons/shoes.svg", items: [
      {id:6, name: "sports", count: 45},
      {id:7, name: "formal", count: 63},
      {id:8, name: "casual", count: 23},
      {id:9, name: "safety shoes", count: 8},
    ]},
    {id: 10, name: "Jewelry", image:"./assets/images/icons/jewelry.svg", items: [
      {id:11, name: "Earrings", count: 45},
      {id:12, name: "Couple Rings", count: 63},
      {id:13, name: "Necklace", count: 23},
    ]},
    {id: 14, name: "Perfume", image:"./assets/images/icons/perfume.svg", items: [
      {id:15, name: "Clothes Perfume", count: 45},
      {id:16, name: "Deodorant", count: 63},
    ]},
    {id: 17, name: "Cosmetics", image:"./assets/images/icons/cosmetics.svg", items: [
      {id:18, name: "Shampoo", count: 45},
      {id:19, name: "Sunscreen", count: 63},
      {id:20, name: "Body Wash", count: 63},
      {id:21, name: "makeup kit", count: 63},
    ]},
    {id: 22, name: "glasses", image:"./assets/images/icons/shoes.svg", items: [
      {id:23, name: "Sunglasses", count: 45},
      {id:24, name: "Lenses", count: 63},
    ]},
    {id: 25, name: "bags", image:"./assets/images/icons/glasses.svg", items: [
      {id:26, name: "Shopping Bag", count: 45},
      {id:27, name: "Gym Backpack", count: 63},
      {id:28, name: "pusre", count: 63},
      {id:29, name: "wallet", count: 63},
    ]}

  ]
}
