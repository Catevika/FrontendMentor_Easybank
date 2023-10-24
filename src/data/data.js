import onlineIcon from '../assets/icons/icon-online.svg';
import budgetingIcon from '../assets/icons/icon-budgeting.svg';
import onboardingIcon from '../assets/icons/icon-onboarding.svg';
import apiIcon from '../assets/icons/icon-api.svg';

import article1 from '../assets/images/image-currency.jpg';
import article2 from '../assets/images/image-restaurant.jpg';
import article3 from '../assets/images/image-plane.jpg';
import article4 from '../assets/images/image-confetti.jpg';

export const reasons = [
  {
    id: 1,
    src: onlineIcon,
    title: 'Online Banking',
    description: 'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
  },
  {
    id: 2,
    src: budgetingIcon,
    title: 'Simple Budgeting',
    description: 'See exactly where your money goes each month. Receive notifications when you\'re close to hitting your limits.'
  },
  {
    id: 3,
    title: 'Fast Onboarding',
    src: onboardingIcon,
    description: 'We don\'t do branches. Open your account in minutes online and start taking control of your finances right away.'
  },
  {
    id: 4,
    title: 'Open API',
    src: apiIcon,
    description: 'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
  }
];

export const articles = [
  {
    id: 1,
    src: article1,
    subtitle: 'By Claire Robinson',
    title: 'Receive money in any currency with no fees',
    content: 'The world is getting smaller and we\'re becoming more mobile.So why should you be forced to only receive money in a single…'
  },
  {
    id: 2,
    src: article2,
    subtitle: 'By Wilson Hutton',
    title: 'Treat yourself without worrying about money',
    content: 'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month.That means you…'
  },
  {
    id: 3,
    src: article3,
    subtitle: 'By Wilson Hutton',
    title: 'Take your Easybank card wherever you go',
    content: 'We want you to enjoy your travels. This is why we don\'t charge any fees on purchases; while you\'re abroad. We\'ll even show you…'
  },
  {
    id: 4,
    src: article4,
    subtitle: 'By Claire Robinson',
    title: 'Our invite - only Beta accounts are now live!',
    content: 'After a lot of hard work by the whole team, we\'re excited to launch our closed beta.It\'s easy to request an invite through the site...'
  }
];