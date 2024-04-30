export const PRODUCT_CATEGORIES = [
  {
    label: 'UI Kits',
    value: 'ui_kits' as const,
    featured: [
      {
        name: 'Editor picks',
        href: `/products?category=ui_kits`,
        imageSrc: '/nav/ui-kits/mixed.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=ui_kits&sort=desc',
        imageSrc: '/nav/ui-kits/blue.jpg',
      },
      {
        name: 'Bestsellers',
        href: '/products?category=ui_kits',
        imageSrc: '/nav/ui-kits/purple.jpg',
      },
    ],
  },
  {
    label: 'Icons',
    value: 'icons' as const,
    featured: [
      {
        name: 'Favorite Icon Picks',
        href: `/products?category=icons`,
        imageSrc: '/nav/icons/picks.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=icons&sort=desc',
        imageSrc: '/nav/icons/new.jpg',
      },
      {
        name: 'Bestselling Icons',
        href: '/products?category=icons',
        imageSrc: '/nav/icons/bestsellers.jpg',
      },
    ],
  },
  {
    label: 'Pdfs',
    value: 'pdfs' as const,
    featured: [
      {
        name: 'Favorite ebook Picks',
        href: `/products?category=pdfs`,
        imageSrc: '/nav/pdfs/grow.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=pdfs&sort=desc',
        imageSrc: '/nav/pdfs/resume.jpg',
      },
      {
        name: 'Bestselling ebook',
        href: '/products?category=pdfs',
        imageSrc: '/nav/pdfs/business.jpg',
      },
    ],
  },
  {
    label: 'Excel',
    value: 'excel' as const,
    featured: [
      {
        name: 'Spreadsheets',
        href: `/products?category=excel`,
        imageSrc: '/nav/excel/excel.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=excel&sort=desc',
        imageSrc: '/nav/excel/excelfile.png',
      },
      {
        name: 'Bestselling',
        href: '/products?category=excel',
        imageSrc: '/nav/excel/business.jpg',
      },
    ],
  },
  {
    label: 'Zip',
    value: 'zip' as const,
    featured: [
      {
        name: 'Archive file format',
        href: `/products?category=zip`,
        imageSrc: '/nav/zip/zip.jpg',
      },
      {
        name: 'New Arrivals',
        href: '/products?category=excel&sort=desc',
        imageSrc: '/nav/zip/zipfile.jpg',
      },
      {
        name: 'Bestselling',
        href: '/products?category=excel',
        imageSrc: '/nav/zip/zipfiles.jpg',
      },
      
    ],
  },
]
