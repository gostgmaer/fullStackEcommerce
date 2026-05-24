import {
  // FiUser,
  FiGift,
  FiAlertCircle,
  FiHelpCircle,
  FiTruck,
  FiPhoneCall,
  FiCreditCard,
  FiMail,
  FiMapPin,
} from 'react-icons/fi';
import {
  HiOutlineDocumentText,
  HiOutlinePhoneIncoming,
  HiOutlineShieldCheck,
  HiOutlineUserGroup,
} from 'react-icons/hi';
import {
  IoBagCheckOutline,
  IoGridOutline,
  IoListOutline,
  IoSettingsOutline,
} from 'react-icons/io5';

const pages = [
  // {
  //   title: 'User',
  //   href: '/user/dashboard',
  //   icon: FiUser,
  // },
  // {
  //   title: 'offer-page',
  //   href: '/offer',
  //   icon: FiGift,
  // },
  // {
  //   title: 'checkout-page',
  //   href: '/checkout',
  //   icon: IoBagCheckOutline,
  // },
  {
    title: 'faq-page',
    href: '/faqs',
    icon: FiHelpCircle,
  },
  // {
  //   title: 'about-us-page',
  //   href: '/about-us',
  //   icon: HiOutlineUserGroup,
  // },
  // {
  //   title: 'contact-us-page',
  //   href: '/contact-us',
  //   icon: HiOutlinePhoneIncoming,
  // },
  {
    title: 'privacy-policy-page',
    href: '/privacy-policy',
    icon: HiOutlineShieldCheck,
  },
  {
    title: 'terms-and-conditions-page',
    href: '/terms-and-conditions',
    icon: HiOutlineDocumentText,
  },
  // {
  //   title: 'not-found-page',
  //   href: '/404',
  //   icon: FiAlertCircle,
  // },
];

const userSidebar = [
  {
    title: 'Dashboard',
    href: '/user/dashboard',
    icon: IoGridOutline,
  },
  {
    title: 'My Orders',
    href: '/user/my-orders',
    icon: IoListOutline,
  },
  {
    title: 'Update Profile',
    href: '/user/update-profile',
    icon: IoSettingsOutline,
  },
  {
    title: 'Change Password',
    href: '/user/change-password',
    icon: HiOutlineDocumentText,
  },
];

const sliderData = [
  {
    id: 1,
    title: 'Slider1Title',
    info: 'Slider1description',
    url: '/product/search?category=living-room',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 2,
    title: 'Slider2Title',
    info: 'Slider2description',
    url: '/product/search?category=bedroom',
    image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 3,
    title: 'Slider3Title',
    info: 'Slider3description',
    url: '/product/search?category=dining-kitchen',
    image: 'https://images.unsplash.com/photo-1618220179428-22790b46a015?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
  },
];

const ctaCardData = [
  {
    id: 1,
    title: 'Discover',
    subTitle: 'Modern Living',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    url: '/product/search?category=living-room',
  },
  {
    id: 2,
    title: 'Explore',
    subTitle: 'Cozy Bedrooms',
    image: 'https://images.unsplash.com/photo-1505693314120-0d443867891c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    url: '/product/search?category=bedroom',
  },
  {
    id: 3,
    title: 'Elevate',
    subTitle: 'Home Office',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    url: '/product/search?category=home-office',
  },
];

const featurePromo = [
  {
    id: 1,
    title: 'featurePromo1-title',
    info: 'featurePromo1-info',
    icon: FiTruck,
  },
  {
    id: 2,
    title: 'featurePromo2-title',
    info: 'featurePromo2-info',
    icon: FiPhoneCall,
  },
  {
    id: 3,
    title: 'featurePromo3-title',
    info: 'featurePromo3-info',
    icon: FiCreditCard,
  },
  {
    id: 4,
    title: 'featurePromo4-title',
    info: 'featurePromo4-info',
    icon: FiGift,
  },
];

const contactData = [
  {
    id: 1,
    title: 'contact-page-box1-title',
    info: 'contact-page-box1-info',
    icon: FiMail,
    contact: 'tranhongtri@gmail.com',
    className: 'bg-emerald-100',
  },
  {
    id: 2,
    title: 'contact-page-box2-title',
    info: 'contact-page-box2-info',
    icon: FiPhoneCall,
    contact: '0333-333-333',
    className: 'bg-yellow-100',
  },
  {
    id: 3,
    title: 'contact-page-box3-title',
    info: 'contact-page-box3-info',
    icon: FiMapPin,
    contact: '',
    className: 'bg-indigo-100',
  },
];

export {
  pages,
  userSidebar,
  sliderData,
  ctaCardData,
  featurePromo,
  contactData,
};
