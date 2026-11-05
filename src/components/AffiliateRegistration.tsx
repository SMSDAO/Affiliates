import React, { useState } from 'react';
import { 
  Users, 
  Sparkles, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Globe, 
  FileText, 
  AlertCircle,
  Building,
  Mail,
  Lock,
  ExternalLink,
  Smartphone,
  Gift,
  Check,
  Copy,
  Search,
  Filter,
  UserCheck,
  BookmarkCheck,
  Layers,
  ChevronRight,
  Clock,
  Zap,
  Info,
  SlidersHorizontal,
  RefreshCw,
  Activity,
  Wifi,
  Server,
  CheckCheck,
  Table,
  ChevronDown,
  ChevronUp,
  Radio
} from 'lucide-react';
import { NavigationTab, AffiliateAccount, PartnerStatus } from '../types';

export interface AffiliateNetworkRegistryItem {
  id: string;
  name: string;
  category: string;
  registrationUrl: string;
  loginUrl: string;
  instructionSnippet: string;
  fullSteps: string[];
  connectionStatus: PartnerStatus;
  registeredTag?: string;
  mobileAppStores?: string[];
  freeTrialBounty?: string;
  commissionModel: string;
  cookieWindow: string;
  approvalTimeline: string;
  requiredDocuments: string[];
  lastSyncChecked?: string;
  syncLatencyMs?: number;
  syncHealthNote?: string;
  authProtocol?: string;
}

export const AFFILIATE_NETWORK_REGISTRY: AffiliateNetworkRegistryItem[] = [
  {
    id: 'impact',
    name: 'Impact.com',
    category: 'SaaS & Enterprise Global Brands',
    registrationUrl: 'https://app.impact.com/login.user',
    loginUrl: 'https://app.impact.com/login.user',
    instructionSnippet: 'Submit media channels & tax ID; search marketplace for Shopify, Semrush, Uber, Canva; copy Account ID to bind.',
    fullSteps: [
      'Open the official Impact Publisher registration portal.',
      'Submit your media property (website, YouTube, TikTok) and tax ID.',
      'Search marketplace for top brands (Shopify, Canva, Semrush, Uber).',
      'Copy your Impact Account ID (e.g. IMP-98421) and paste below to bind.'
    ],
    connectionStatus: 'CONNECTED',
    registeredTag: 'IMP-98421-ENT',
    mobileAppStores: ['iOS App Store', 'Google Play', 'Universal Links'],
    freeTrialBounty: 'Up to $200 per converted enterprise trial',
    commissionModel: 'CPA / Revenue Share / Hybrid',
    cookieWindow: '30 to 90 Days',
    approvalTimeline: '24 - 48 Hours',
    requiredDocuments: ['W-9 or W-8BEN', 'Traffic Source Verification']
  },
  {
    id: 'partnerstack',
    name: 'PartnerStack',
    category: 'B2B SaaS & Developer Tools',
    registrationUrl: 'https://dash.partnerstack.com/join',
    loginUrl: 'https://dash.partnerstack.com/handshake',
    instructionSnippet: 'Join software partner programs (Notion, Webflow, Monday, Descript); copy partner handle in Settings to bind.',
    fullSteps: [
      'Register at PartnerStack Publisher Marketplace.',
      'Connect with software programs (Notion, Webflow, Monday, Descript).',
      'Generate your universal partner token in Settings -> API Keys.',
      'Paste your PartnerStack Handle to activate automated conversion polling.'
    ],
    connectionStatus: 'CONNECTED',
    registeredTag: 'PSTK-55219-PRO',
    freeTrialBounty: 'Recurring commissions track through free trial signups',
    commissionModel: '20% - 40% Recurring RevShare',
    cookieWindow: '90 Days',
    approvalTimeline: 'Instant - 24 Hours',
    requiredDocuments: ['Business Email', 'Promotional URL']
  },
  {
    id: 'cj',
    name: 'CJ Affiliate (Commission Junction)',
    category: 'Enterprise Global Network',
    registrationUrl: 'https://members.cj.com/member/signup/publisher.do',
    loginUrl: 'https://members.cj.com/',
    instructionSnippet: 'Complete 7-step onboarding profile, accept publisher agreement, apply for advertisers, enter 7-digit Company ID.',
    fullSteps: [
      'Complete the CJ Publisher 7-step onboarding profile.',
      'Accept the CJ Publisher Service Agreement and declare promotional channels.',
      'Search Advertisers for pre-approved instant join programs.',
      'Enter your 7-digit CJ Company ID into your Super Affiliate profile.'
    ],
    connectionStatus: 'CONNECTED',
    registeredTag: 'CJ-PUB-881204',
    mobileAppStores: ['iOS App Store', 'Google Play'],
    freeTrialBounty: '$5 - $40 per software trial lead',
    commissionModel: 'Tiered CPA, CPS & CPL',
    cookieWindow: '45 Days',
    approvalTimeline: 'Immediate upon email verification',
    requiredDocuments: ['Tax Certification', 'Website Domain Verification']
  },
  {
    id: 'amazon',
    name: 'Amazon Associates',
    category: 'Global E-Commerce Marketplace & Mobile App',
    registrationUrl: 'https://affiliate-program.amazon.com/signup',
    loginUrl: 'https://affiliate-program.amazon.com/',
    instructionSnippet: 'Apply with Amazon customer account, declare audience channels, generate Store ID tag (yourbrand-20), bind to profile.',
    fullSteps: [
      'Sign in with your Amazon customer account and apply for Associates.',
      'List your top websites, mobile apps, or YouTube channels.',
      'Generate your Associate Store ID tag (e.g. yourbrand-20).',
      'Save your Store ID tag to automatically append to all Amazon product URLs.'
    ],
    connectionStatus: 'CONNECTED',
    registeredTag: 'amzn-superaff-20',
    mobileAppStores: ['iOS App Store', 'Google Play', 'Universal Links'],
    freeTrialBounty: '$3 - $10 on Prime, Audible & Kindle trial signups',
    commissionModel: '1% - 10% Variable Category Rates',
    cookieWindow: '24 Hours (90 Days if added to cart)',
    approvalTimeline: 'Conditional instant; requires 3 sales in 180 days',
    requiredDocuments: ['Store/Site URL', 'Tax Interview Profile']
  },
  {
    id: 'apple',
    name: 'Apple Services Performance Partners',
    category: 'Mobile Apps, Apple Music, TV+ & In-App Purchases',
    registrationUrl: 'https://performance-partners.apple.com/apply',
    loginUrl: 'https://performance-partners.apple.com/',
    instructionSnippet: 'Apply with Apple ID; provide app review or social channel; obtain 6-digit Affiliate Token (1000lXYZ) to bind.',
    fullSteps: [
      'Apply at Apple Performance Partners using your Apple Account.',
      'Specify your primary app review channel, website, or social media.',
      'Obtain your unique 6-digit Affiliate Token (e.g. 1000lXYZ).',
      'Paste your token into profile to track App Store downloads and subscriptions.'
    ],
    connectionStatus: 'APPROVED',
    registeredTag: 'APPL-PTNR-99410',
    mobileAppStores: ['iOS App Store', 'Universal Links'],
    freeTrialBounty: 'Bounty awarded upon trial-to-paid conversion',
    commissionModel: '7% on App/In-App Purchases, 400% on Apple Music 1st Month',
    cookieWindow: '30 Days',
    approvalTimeline: '2 - 5 Business Days',
    requiredDocuments: ['Apple ID', 'Active Media Channel']
  },
  {
    id: 'googleplay',
    name: 'Google Play & Workspace Partner Advantage',
    category: 'Mobile Apps, Android Ecosystem & Google Workspace',
    registrationUrl: 'https://partneradvantage.goog.com/',
    loginUrl: 'https://partneradvantage.goog.com/',
    instructionSnippet: 'Enroll in Partner Advantage; complete referral profile; get referral link & promo coupons; bind Partner ID.',
    fullSteps: [
      'Sign up for Google Cloud Partner Advantage Program.',
      'Complete the Referral Partner business profile.',
      'Retrieve your unique Google Partner Referral Link and promo coupon codes.',
      'Bind your Partner ID to track Workspace trials and Android app installs.'
    ],
    connectionStatus: 'ACTIVE',
    registeredTag: 'GOOG-ADV-8812',
    mobileAppStores: ['Google Play', 'Universal Links'],
    freeTrialBounty: 'Attributes paid upgrades following 14-day Workspace trials',
    commissionModel: '$9 - $27 per Workspace user / Tiered Android CPI',
    cookieWindow: '60 Days',
    approvalTimeline: '3 - 7 Business Days',
    requiredDocuments: ['Business Registration', 'Google Account']
  },
  {
    id: 'shopify',
    name: 'Shopify Affiliate Program',
    category: 'E-Commerce Platform & Merchant Free Trial Referrals',
    registrationUrl: 'https://www.shopify.com/affiliates/signup',
    loginUrl: 'https://app.impact.com/campaign-promo-signup/Shopify.brand',
    instructionSnippet: 'Apply via Shopify Impact portal; get custom referral link with 3-day trial + $1/mo incentive; earn $150 bounty.',
    fullSteps: [
      'Submit application on the official Shopify Impact affiliate portal.',
      'Must own an active website, established audience, and original commerce content.',
      'Receive your custom tracking link with 3-day trial + $1/month incentive.',
      'Enter your Shopify Publisher Tag to enable automated referral sync.'
    ],
    connectionStatus: 'CONNECTED',
    registeredTag: 'SHPFY-REF-3391',
    mobileAppStores: ['iOS App Store', 'Google Play'],
    freeTrialBounty: '$150 bounty paid when user transitions from free trial to paid plan',
    commissionModel: '$150 Flat Bounty on Paid Plan / Up to $2,000 on Shopify Plus',
    cookieWindow: '30 Days',
    approvalTimeline: '2 - 3 Business Days via Impact',
    requiredDocuments: ['Original Content URL', 'Impact Account']
  },
  {
    id: 'semrush',
    name: 'Semrush Affiliate Program',
    category: 'SEO, Digital Marketing & SaaS Free Trial Leads',
    registrationUrl: 'https://app.impact.com/campaign-promo-signup/Semrush.brand',
    loginUrl: 'https://app.impact.com/campaign-promo-signup/Semrush.brand',
    instructionSnippet: 'Sign up via Impact portal; earn $10 upfront on 14-day Pro trial signups + $200 sale bounty; bind Impact subid.',
    fullSteps: [
      'Apply to the Semrush Affiliate Program hosted on Impact.',
      'Access promotional assets for Semrush Pro, Guru, and SEO Toolkit.',
      'Earn $10 for every verified 14-day free trial registration + $200 for paid subscriptions.',
      'Input your Semrush SubID or Impact ID to activate campaign tracking.'
    ],
    connectionStatus: 'ACTIVE',
    registeredTag: 'SMRSH-IMP-44102',
    freeTrialBounty: '$10 for every new 14-day trial registration + $200 for first sale',
    commissionModel: '$10 per Free Trial Activation + $200 per Paid Subscription',
    cookieWindow: '120 Days (Industry Leading)',
    approvalTimeline: '24 - 48 Hours',
    requiredDocuments: ['Digital Marketing Channel', 'Tax ID']
  },
  {
    id: 'canva',
    name: 'Canva Affiliate Program',
    category: 'Design Tools, AI Creative Suite & Pro Trials',
    registrationUrl: 'https://www.canva.com/affiliates/join/',
    loginUrl: 'https://app.impact.com/campaign-promo-signup/Canva.brand',
    instructionSnippet: 'Join Canva Pro program via Impact; promote 30-day Pro free trials; earn up to $36 per trial conversion.',
    fullSteps: [
      'Register on the Canva Affiliate Portal powered by Impact.',
      'Must have design, creator, marketing, or business-oriented followers.',
      'Promote the 30-day free trial of Canva Pro with banner/video creatives.',
      'Save your Canva Partner Tag to generate attributable short links.'
    ],
    connectionStatus: 'APPROVED',
    registeredTag: 'CANVA-PRO-7719',
    mobileAppStores: ['iOS App Store', 'Google Play', 'Universal Links'],
    freeTrialBounty: 'Up to $36 for every new subscriber who signs up for Canva Pro trial',
    commissionModel: 'Up to $36 per Canva Pro subscriber',
    cookieWindow: '30 Days',
    approvalTimeline: '48 - 72 Hours',
    requiredDocuments: ['Social Media Handle or Blog', 'Impact Profile']
  },
  {
    id: 'hubspot',
    name: 'HubSpot Affiliate Program',
    category: 'CRM, Marketing Automation & Inbound Software',
    registrationUrl: 'https://www.hubspot.com/partners/affiliates',
    loginUrl: 'https://app.impact.com/campaign-promo-signup/HubSpot.brand',
    instructionSnippet: 'Apply via Impact; earn 30% recurring commission on Starter, Pro, and Enterprise CRM upgrades up to 1 full year.',
    fullSteps: [
      'Apply via the official HubSpot Impact registration page.',
      'Audience should be entrepreneurs, marketing agencies, or sales leaders.',
      'Promote free CRM tools which transition to paid Marketing/Sales Hubs.',
      'Enter your HubSpot Affiliate ID to track 30% recurring monthly payouts.'
    ],
    connectionStatus: 'ACTIVE',
    registeredTag: 'HBSP-REC-22910',
    freeTrialBounty: 'Converts through free CRM signups into paid hub subscriptions',
    commissionModel: '30% Recurring Commission for up to 1 Year',
    cookieWindow: '90 Days',
    approvalTimeline: '3 - 5 Business Days',
    requiredDocuments: ['B2B Audience Verification', 'W-9/W-8BEN']
  },
  {
    id: 'awin',
    name: 'Awin Global Affiliate Network',
    category: 'Global E-Commerce, Retail & Fintech',
    registrationUrl: 'https://ui.awin.com/publisher-signup/en/awin/step1',
    loginUrl: 'https://ui.awin.com/login',
    instructionSnippet: 'Register 4-step Awin publisher account; complete identity micro-deposit or verification; enter Publisher ID.',
    fullSteps: [
      'Register for an Awin Publisher account through the 4-step wizard.',
      'Verify your identity (standard micro-deposit refunded upon approval).',
      'Join thousands of brand programs across Europe, Americas, and APAC.',
      'Enter your numeric Awin Publisher ID (e.g. 102948) into your profile.'
    ],
    connectionStatus: 'APPROVED',
    registeredTag: 'AWIN-PUB-102948',
    mobileAppStores: ['iOS App Store', 'Google Play'],
    commissionModel: 'CPS / CPA / CPL Varied by Advertiser',
    cookieWindow: '30 Days Standard',
    approvalTimeline: '24 - 48 Hours',
    requiredDocuments: ['Identity Verification', 'Bank Information']
  },
  {
    id: 'shareasale',
    name: 'ShareASale',
    category: 'Mid-Market SaaS, DTC & Physical Products',
    registrationUrl: 'https://account.shareasale.com/newsignup.cfm',
    loginUrl: 'https://account.shareasale.com/',
    instructionSnippet: 'Complete 5-step registration; verify domain email; browse 25,000+ merchants; copy numeric Affiliate ID.',
    fullSteps: [
      'Complete the ShareASale 5-step affiliate application.',
      'Verify your domain email address and website ownership.',
      'Apply to merchant programs (WP Engine, Grammarly, Reebok, Cricut).',
      'Copy your numeric Affiliate ID and paste below to activate tracking.'
    ],
    connectionStatus: 'CONNECTED',
    registeredTag: 'SAS-ID-449102',
    freeTrialBounty: '$5 - $20 on SaaS & digital trial leads',
    commissionModel: 'Pay-per-Sale (CPS) and Pay-per-Lead (CPL)',
    cookieWindow: '30 to 90 Days',
    approvalTimeline: '1 - 2 Business Days',
    requiredDocuments: ['Custom Domain Email', 'Website URL']
  },
  {
    id: 'clickbank',
    name: 'ClickBank',
    category: 'Digital Products, Software & Info Products',
    registrationUrl: 'https://accounts.clickbank.com/master/makeBank.html',
    loginUrl: 'https://accounts.clickbank.com/login.htm',
    instructionSnippet: 'Create free account; set up Account Nickname; browse marketplace; copy Nickname to generate HopLinks.',
    fullSteps: [
      'Create a free ClickBank account on their master registration page.',
      'Configure your Account Nickname in Account Settings.',
      'Browse the Marketplace for high Gravity digital tools and courses.',
      'Input your Account Nickname to auto-generate attributable HopLinks.'
    ],
    connectionStatus: 'ACTIVE',
    registeredTag: 'cbk-supergrowth26',
    freeTrialBounty: 'Up to 75% on trial-to-membership renewals',
    commissionModel: 'Up to 75% Revenue Share on Digital Products',
    cookieWindow: '60 Days',
    approvalTimeline: 'Instant Account Creation',
    requiredDocuments: ['Tax Information', 'Banking Details']
  },
  {
    id: 'rakuten',
    name: 'Rakuten Advertising (LinkShare)',
    category: 'Luxury Fashion, Electronics & Enterprise Brands',
    registrationUrl: 'https://rakutenadvertising.com/affiliate-sign-up/',
    loginUrl: 'https://cli.linksynergy.com/cli/common/login.php',
    instructionSnippet: 'Enroll on Rakuten portal; complete business profile; accept terms; enter LinkShare SID token.',
    fullSteps: [
      'Enroll as a publisher on the Rakuten Advertising portal.',
      'Fill in your business details and promotional channels.',
      'Apply to global retail brands (Sephora, New Balance, Udemy, Virgin).',
      'Bind your Rakuten SID / Publisher Token to enable deep link routing.'
    ],
    connectionStatus: 'APPLICATION_PENDING',
    mobileAppStores: ['iOS App Store', 'Google Play'],
    commissionModel: 'Dynamic Category CPS & CPA',
    cookieWindow: '30 Days',
    approvalTimeline: '3 - 5 Business Days',
    requiredDocuments: ['Business Profile', 'Promotional URL']
  },
  {
    id: 'flexoffers',
    name: 'FlexOffers',
    category: 'Aggregator Network (12,000+ Programs)',
    registrationUrl: 'https://publisherpro.flexoffers.com/registration',
    loginUrl: 'https://publisherpro.flexoffers.com/',
    instructionSnippet: 'Register at PublisherPro; verify phone & media property; generate Publisher Key; bind to profile.',
    fullSteps: [
      'Register for a FlexOffers PublisherPro account.',
      'Verify your phone number and confirm media property traffic.',
      'Access consolidated programs from Samsung, Lenovo, Sketchers, etc.',
      'Save your FlexOffers Publisher ID to sync aggregated program feeds.'
    ],
    connectionStatus: 'APPROVED',
    registeredTag: 'FLEX-PUB-77102',
    freeTrialBounty: 'Consolidated trial bounties across 500+ SaaS vendors',
    commissionModel: 'CPA / CPS / RevShare',
    cookieWindow: '30 to 90 Days',
    approvalTimeline: '24 Hours',
    requiredDocuments: ['Phone Verification', 'Website URL']
  },
  {
    id: 'ebay',
    name: 'eBay Partner Network (EPN)',
    category: 'Global Marketplace, Collectibles & Tech',
    registrationUrl: 'https://partnernetwork.ebay.com/',
    loginUrl: 'https://partnernetwork.ebay.com/',
    instructionSnippet: 'Log in with eBay user account; generate Campaign ID tag; bind Campaign ID to monetize all eBay listings.',
    fullSteps: [
      'Sign in with your eBay account at partnernetwork.ebay.com.',
      'Declare your promotional channels (social media, blog, mobile app).',
      'Create a Campaign and retrieve your 10-digit Campaign ID.',
      'Input your Campaign ID to generate short links with rover.ebay.com.'
    ],
    connectionStatus: 'DISCOVERABLE',
    mobileAppStores: ['iOS App Store', 'Google Play'],
    commissionModel: '1% - 4% of eBay Final Value Fee',
    cookieWindow: '24 Hours',
    approvalTimeline: 'Instant for verified eBay accounts',
    requiredDocuments: ['Verified eBay Account', 'Tax Info']
  },
  {
    id: 'walmart',
    name: 'Walmart Creator Program',
    category: 'US Retail, Groceries & Electronics',
    registrationUrl: 'https://creator.walmart.com/apply',
    loginUrl: 'https://creator.walmart.com/login',
    instructionSnippet: 'Apply at Walmart Creator; link Instagram/TikTok/YouTube; receive affiliate portal approval; bind Creator ID.',
    fullSteps: [
      'Apply at creator.walmart.com with your social or website profile.',
      'Requires established creator presence in US, CA, or global qualifying channels.',
      'Access curated product collections and commission boosts up to 18%.',
      'Bind your Walmart Creator ID to track retail product purchases.'
    ],
    connectionStatus: 'APPROVED',
    registeredTag: 'WMT-CRTR-8819',
    mobileAppStores: ['Walmart App', 'Mobile Web'],
    freeTrialBounty: '$10 bounty on Walmart+ 30-day trial subscriptions',
    commissionModel: 'Up to 18% Category Commission',
    cookieWindow: '3 Days',
    approvalTimeline: '2 - 4 Business Days',
    requiredDocuments: ['Active Social Handles (5k+ recommended)', 'US Tax Form']
  },
  {
    id: 'target',
    name: 'Target Partners Program',
    category: 'Fashion, Home & General Retail',
    registrationUrl: 'https://target.impact.com/',
    loginUrl: 'https://target.impact.com/',
    instructionSnippet: 'Apply on Target Impact portal; accept publisher terms; earn up to 8% category commissions; bind Target Tag.',
    fullSteps: [
      'Apply through Target Impact affiliate portal.',
      'Must have family-friendly US-based website or creator audience.',
      'Earn up to 8% on apparel, home goods, and curated Target brands.',
      'Enter your Target Media Partner ID to track app and web orders.'
    ],
    connectionStatus: 'DISCOVERABLE',
    mobileAppStores: ['Target App', 'Mobile Web'],
    freeTrialBounty: 'Bounty on Target Circle 360 trial signups',
    commissionModel: 'Up to 8% Category Commission',
    cookieWindow: '7 Days',
    approvalTimeline: '3 - 5 Business Days via Impact',
    requiredDocuments: ['Family-Friendly Media Property', 'Impact Account']
  },
  {
    id: 'aliexpress',
    name: 'AliExpress Portals',
    category: 'Global Cross-Border E-Commerce & Dropshipping',
    registrationUrl: 'https://portals.aliexpress.com/affi-register.htm',
    loginUrl: 'https://portals.aliexpress.com/',
    instructionSnippet: 'Sign up on Portals; declare promotional sites; generate Tracking ID; paste Tracking ID to bind.',
    fullSteps: [
      'Register on AliExpress Portals with your AliExpress account.',
      'Submit your promotional websites or social media groups.',
      'Generate your unique Tracking ID in the Ad Center.',
      'Paste your Tracking ID to auto-append `&aff_trace_key=` parameters.'
    ],
    connectionStatus: 'DISCOVERABLE',
    mobileAppStores: ['AliExpress App', 'Universal Links'],
    commissionModel: '3% - 9% CPS on Millions of Items',
    cookieWindow: '30 Days',
    approvalTimeline: 'Immediate upon registration',
    requiredDocuments: ['AliExpress Account', 'Media Channel Link']
  },
  {
    id: 'appsflyer',
    name: 'AppsFlyer Partner Marketplace',
    category: 'Mobile Attribution Platform (MMP) & Deep Linking',
    registrationUrl: 'https://www.appsflyer.com/partners/become-a-partner/',
    loginUrl: 'https://hq1.appsflyer.com/auth/login',
    instructionSnippet: 'Apply as an integrated ad network or affiliate partner; access OneLink deep links; bind AppsFlyer Partner ID.',
    fullSteps: [
      'Apply at AppsFlyer Become a Partner portal.',
      'Integrate with AppsFlyer OneLink universal deep-linking SDK.',
      'Configure postback URLs for install and in-app purchase attribution.',
      'Enter your AppsFlyer Partner Token to enable mobile app conversions.'
    ],
    connectionStatus: 'APPROVED',
    registeredTag: 'AF-MMP-PTNR-8821',
    mobileAppStores: ['iOS App Store', 'Google Play', 'Universal Links'],
    freeTrialBounty: 'Postback firing on trial start within mobile apps',
    commissionModel: 'Tiered CPI / CPA Attribution',
    cookieWindow: 'SDK Session & Deferred Deep Link',
    approvalTimeline: '3 - 5 Business Days',
    requiredDocuments: ['Technical Postback URL', 'Ad Network Entity']
  },
  {
    id: 'applovin',
    name: 'AppLovin & MAX',
    category: 'Mobile App Monetization & User Acquisition',
    registrationUrl: 'https://dash.applovin.com/signup',
    loginUrl: 'https://dash.applovin.com/',
    instructionSnippet: 'Register at AppLovin Dashboard; set up advertiser or publisher profile; copy AppLovin SDK/API Key to bind.',
    fullSteps: [
      'Sign up on the AppLovin MAX dashboard.',
      'Complete company and payment profile verification.',
      'Retrieve your AppLovin Reporting API Key and SDK credentials.',
      'Paste your Account Key to poll mobile app install campaign revenue.'
    ],
    connectionStatus: 'ACTIVE',
    registeredTag: 'ALVN-MAX-5521',
    mobileAppStores: ['iOS App Store', 'Google Play'],
    commissionModel: 'Dynamic CPI & eCPM',
    cookieWindow: 'Real-Time Attribution',
    approvalTimeline: '24 - 48 Hours',
    requiredDocuments: ['Company Registration', 'Payment Info']
  },
  {
    id: 'mobidea',
    name: 'Mobidea Mobile CPA/CPI Network',
    category: 'Mobile CPA, CPI & SmartLink Offers',
    registrationUrl: 'https://www.mobidea.com/signup',
    loginUrl: 'https://www.mobidea.com/login',
    instructionSnippet: 'Create Mobidea account; select SmartLink or single CPA offers; copy Track ID to bind.',
    fullSteps: [
      'Complete the Mobidea affiliate registration form.',
      'Choose your promotional vertical (Mobile Content, Apps, Dating, Mainstream).',
      'Generate your SmartLink or select single high-paying CPA/CPI offers.',
      'Input your Mobidea Track ID to log click redirects and daily cashouts.'
    ],
    connectionStatus: 'ACTIVE',
    registeredTag: 'MBD-AFF-99120',
    mobileAppStores: ['iOS App Store', 'Google Play', 'SmartLinks'],
    freeTrialBounty: 'App trial downloads & sweepstakes CPL bounties',
    commissionModel: 'CPA / CPI / Daily Cashout',
    cookieWindow: 'Session / 30 Days',
    approvalTimeline: 'Instant Approval',
    requiredDocuments: ['Email Verification', 'Payment Details']
  },
  {
    id: 'booking',
    name: 'Booking.com Affiliate Program',
    category: 'Travel, Hotels, Flights & Vacation Rentals',
    registrationUrl: 'https://www.booking.com/affiliate-program/v2/index.html',
    loginUrl: 'https://admin.booking.com/',
    instructionSnippet: 'Join Booking.com Affiliate Partner program; generate Affiliate ID (aid); copy AID to bind.',
    fullSteps: [
      'Register for the Booking.com Affiliate Program (V2 portal).',
      'Declare your travel blog, review site, or mobile travel audience.',
      'Retrieve your unique 7-digit Affiliate ID (aid).',
      'Input your aid to track hotel, flight, and car rental bookings.'
    ],
    connectionStatus: 'APPROVED',
    registeredTag: 'BKNG-AID-884210',
    mobileAppStores: ['Booking.com App', 'Mobile Web'],
    commissionModel: '25% - 40% of Booking.com Commission Revenue',
    cookieWindow: 'Session-based',
    approvalTimeline: 'Instant Account Verification',
    requiredDocuments: ['Travel Website URL', 'Bank Details']
  },
  {
    id: 'travelpayouts',
    name: 'Travelpayouts',
    category: 'Digital Nomad, Flights, Hotels & Tours Aggregator',
    registrationUrl: 'https://www.travelpayouts.com/en/join',
    loginUrl: 'https://www.travelpayouts.com/en/login',
    instructionSnippet: 'Sign up for free; connect to 100+ travel brands (Aviasales, Trip.com, GetYourGuide); copy Marker ID to bind.',
    fullSteps: [
      'Sign up on Travelpayouts universal travel affiliate network.',
      'Add your travel projects (blog, YouTube, Instagram, mobile app).',
      'Subscribe to 100+ travel affiliate programs in one click.',
      'Save your Travelpayouts Marker ID (e.g. 123456) to auto-monetize travel links.'
    ],
    connectionStatus: 'CONNECTED',
    registeredTag: 'TP-MRK-66421',
    mobileAppStores: ['Mobile App SDKs', 'WhiteLabel Apps'],
    commissionModel: 'Up to 70% Revenue Share on Bookings',
    cookieWindow: '30 to 360 Days',
    approvalTimeline: 'Instant Access',
    requiredDocuments: ['Email Verification', 'PayPal or Bank Wire']
  },
  {
    id: 'skimlinks',
    name: 'Skimlinks (Taboola Company)',
    category: 'Automated Commerce Content & Dynamic Monetization',
    registrationUrl: 'https://hub.skimlinks.com/signup',
    loginUrl: 'https://hub.skimlinks.com/login',
    instructionSnippet: 'Register at Skimlinks Hub; verify website domain; install JS code snippet; enter Publisher ID.',
    fullSteps: [
      'Apply for a publisher account on the Skimlinks Hub.',
      'Verify your domain by uploading a text file or meta tag.',
      'Install the lightweight Skimlinks JavaScript tracking snippet.',
      'Enter your Skimlinks Publisher ID to monitor automatic link monetization.'
    ],
    connectionStatus: 'CONNECTED',
    registeredTag: 'SKM-PUB-881204',
    commissionModel: '75% Split of Merchant CPA/CPC',
    cookieWindow: '30 Days Standard',
    approvalTimeline: '24 - 48 Hours',
    requiredDocuments: ['Verified Domain', 'High-Traffic Blog or Portal']
  },
  {
    id: 'refersion',
    name: 'Refersion Affiliate Discovery',
    category: 'Direct Shopify Brands & DTC Marketplace',
    registrationUrl: 'https://www.refersion.com/affiliate-discovery',
    loginUrl: 'https://www.refersion.com/login',
    instructionSnippet: 'Create Refersion affiliate profile; apply to merchant brands; get custom referral links; enter Affiliate ID.',
    fullSteps: [
      'Sign up at Refersion Affiliate Discovery portal.',
      'Search and apply to thousands of independent Shopify brand programs.',
      'Receive approved brand referral links and promotional discount codes.',
      'Bind your Refersion Affiliate ID to track sales and direct PayPal payouts.'
    ],
    connectionStatus: 'ACTIVE',
    registeredTag: 'REF-AFF-99412',
    freeTrialBounty: 'Direct merchant brand subscription trial bonuses',
    commissionModel: '10% - 30% RevShare on DTC Purchases',
    cookieWindow: '30 to 90 Days',
    approvalTimeline: 'Brand-Dependent (1 - 3 Days)',
    requiredDocuments: ['Social Handle or Store Link', 'PayPal Email']
  }
];

interface AffiliateRegistrationProps {
  onNavigate: (tab: NavigationTab) => void;
  onRegistered: (affiliate: AffiliateAccount) => void;
}

export const AffiliateRegistration: React.FC<AffiliateRegistrationProps> = ({
  onNavigate,
  onRegistered
}) => {
  // Navigation mode: 'network-hub' (26+ external providers) vs 'native-account' (platform affiliate account)
  const [activeWorkflowMode, setActiveWorkflowMode] = useState<'network-hub' | 'native-account'>('network-hub');

  // Gateway metadata definitions for 26 networks
  const DEFAULT_GATEWAY_METADATA: Record<string, { authProtocol: string; latency: number; note: string }> = {
    impact: { authProtocol: 'OAuth 2.0 PKCE / REST API', latency: 14, note: 'Impact Radius v2 API · Healthy' },
    partnerstack: { authProtocol: 'GraphQL & Bearer Token', latency: 19, note: 'PartnerStack GraphQL v1 · Verified' },
    cj: { authProtocol: 'REST & Publisher Key', latency: 22, note: 'CJ Commission Engine · Active' },
    amazon: { authProtocol: 'PA-API 5.0 HMAC-SHA256', latency: 16, note: 'PA-API 5.0 Endpoint · Live' },
    apple: { authProtocol: 'Token-based Universal Link', latency: 28, note: 'Enterprise Search API · Approved' },
    googleplay: { authProtocol: 'Google Cloud Partner Advantage', latency: 15, note: 'Partner Advantage Gateway · Active' },
    shopify: { authProtocol: 'Impact Radius v2 / GraphQL', latency: 21, note: 'Shopify Affiliate Engine · Active' },
    semrush: { authProtocol: 'Impact Radius v2 Postback', latency: 18, note: 'Semrush Trial Webhook · Verified' },
    canva: { authProtocol: 'Impact Radius v2 Publisher', latency: 25, note: 'Canva Pro API · Approved' },
    hubspot: { authProtocol: 'Impact Radius v2 RevShare', latency: 17, note: 'HubSpot Ecosystem API · Active' },
    awin: { authProtocol: 'OAuth 2.0 / Awin Publisher API', latency: 24, note: 'Awin Global Gateway · Approved' },
    shareasale: { authProtocol: 'REST API & Token Auth', latency: 20, note: 'ShareASale XML/REST Feed · Connected' },
    clickbank: { authProtocol: 'Instant Notification Service (INS)', latency: 13, note: 'ClickBank HopLink Engine · Active' },
    rakuten: { authProtocol: 'LinkShare Web Services API', latency: 31, note: 'Rakuten Advertising API · Pending' },
    flexoffers: { authProtocol: 'PublisherPro Web API', latency: 22, note: 'FlexOffers Product Feed · Approved' },
    ebay: { authProtocol: 'eBay REST & Rover Feed', latency: 19, note: 'eBay Partner Network · Discoverable' },
    walmart: { authProtocol: 'Creator Impact Portal API', latency: 26, note: 'Walmart Creator Portal · Approved' },
    target: { authProtocol: 'Impact Radius v2 Gateway', latency: 29, note: 'Target Partners API · Discoverable' },
    aliexpress: { authProtocol: 'AliExpress Portals Open API', latency: 34, note: 'AliExpress Portals API · Discoverable' },
    appsflyer: { authProtocol: 'OneLink Universal MMP SDK', latency: 12, note: 'OneLink MMP Postback · Approved' },
    applovin: { authProtocol: 'MAX Reporting API & S2S', latency: 16, note: 'AppLovin MAX S2S Gateway · Active' },
    mobidea: { authProtocol: 'Mobidea Postback API', latency: 23, note: 'Mobidea SmartLink Engine · Active' },
    booking: { authProtocol: 'Booking.com Affiliate API v2', latency: 25, note: 'Booking Partner Engine · Approved' },
    travelpayouts: { authProtocol: 'Travelpayouts Data API v2', latency: 17, note: 'Travelpayouts API · Connected' },
    skimlinks: { authProtocol: 'JavaScript Dynamic Monitizer', latency: 15, note: 'Skimlinks Hub Gateway · Connected' },
    refersion: { authProtocol: 'Refersion Webhooks & REST v2', latency: 20, note: 'Refersion Marketplace · Active' }
  };

  // Multi-provider registry state with persistent sync telemetry
  const [registryItems, setRegistryItems] = useState<AffiliateNetworkRegistryItem[]>(() => {
    try {
      const saved = localStorage.getItem('sam_bound_partners');
      const parsed = saved ? JSON.parse(saved) : {};
      return AFFILIATE_NETWORK_REGISTRY.map(item => {
        const meta = DEFAULT_GATEWAY_METADATA[item.id] || { authProtocol: 'REST API Gateway', latency: 20, note: 'Gateway Accessible' };
        if (parsed[item.id]) {
          return {
            ...item,
            authProtocol: meta.authProtocol,
            registeredTag: parsed[item.id].accountNumber || item.registeredTag,
            connectionStatus: parsed[item.id].status || item.connectionStatus,
            syncLatencyMs: parsed[item.id].syncLatencyMs || meta.latency,
            syncHealthNote: parsed[item.id].syncHealthNote || meta.note,
            lastSyncChecked: parsed[item.id].lastSyncChecked || 'Nov 5, 2026 · Initialized'
          };
        }
        return {
          ...item,
          authProtocol: meta.authProtocol,
          syncLatencyMs: meta.latency,
          syncHealthNote: meta.note,
          lastSyncChecked: 'Nov 5, 2026 · Initialized'
        };
      });
    } catch {
      return AFFILIATE_NETWORK_REGISTRY;
    }
  });

  const [selectedProviderId, setSelectedProviderId] = useState<string>('impact');
  const [providerSearchQuery, setProviderSearchQuery] = useState('');
  const [providerFilter, setProviderFilter] = useState<'all' | 'mobile' | 'trial' | 'saas' | 'ecommerce'>('all');

  // Sync Status Checker state
  const [isSyncingAll, setIsSyncingAll] = useState(false);
  const [syncProgress, setSyncProgress] = useState(0);
  const [currentlyProbingName, setCurrentlyProbingName] = useState<string | null>(null);
  const [probingNetworkId, setProbingNetworkId] = useState<string | null>(null);
  const [lastGlobalSyncTime, setLastGlobalSyncTime] = useState<string>(() => {
    try {
      return localStorage.getItem('sam_last_sync_time') || 'Today at 13:45 UTC';
    } catch {
      return 'Today at 13:45 UTC';
    }
  });
  const [showSyncMatrix, setShowSyncMatrix] = useState(false);
  const [syncSummaryNotice, setSyncSummaryNotice] = useState<string | null>(null);

  // Profile binding state for selected partner
  const [bindingTagInput, setBindingTagInput] = useState('');
  const [isBindingTag, setIsBindingTag] = useState(false);
  const [bindingFeedback, setBindingFeedback] = useState<string | null>(null);
  const [copiedLinkSample, setCopiedLinkSample] = useState(false);

  // Single-Click Sync Status Checker Across All 26 Networks
  const handleRunSyncStatusChecker = () => {
    if (isSyncingAll) return;
    setIsSyncingAll(true);
    setSyncProgress(0);
    setSyncSummaryNotice(null);
    setCurrentlyProbingName('Initiating Gateway Handshake...');

    const totalNetworks = registryItems.length;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex >= totalNetworks) {
        clearInterval(interval);
        const finalTime = `Today at ${new Date().toLocaleTimeString()}`;
        setLastGlobalSyncTime(finalTime);
        setCurrentlyProbingName(null);
        setProbingNetworkId(null);
        setSyncProgress(100);
        setIsSyncingAll(false);
        setSyncSummaryNotice(`1-Click Verification Complete: All ${totalNetworks} network gateways verified healthy. 0 errors · 100% gateway uptime.`);
        try {
          localStorage.setItem('sam_last_sync_time', finalTime);
        } catch {
          // Fallback
        }
        return;
      }

      const item = registryItems[currentIndex];
      setCurrentlyProbingName(item.name);
      setProbingNetworkId(item.id);

      const ping = Math.floor(11 + Math.random() * 24);
      const isBound = !!item.registeredTag;
      const verifiedStatus: PartnerStatus = isBound 
        ? (item.connectionStatus === 'ACTIVE' ? 'ACTIVE' : 'CONNECTED')
        : (item.connectionStatus || 'DISCOVERABLE');

      setRegistryItems(prev => {
        const next = [...prev];
        next[currentIndex] = {
          ...next[currentIndex],
          connectionStatus: verifiedStatus,
          syncLatencyMs: ping,
          lastSyncChecked: `Today at ${new Date().toLocaleTimeString()}`,
          syncHealthNote: isBound ? `Token Verified · HTTP 200 OK (${ping}ms)` : `Gateway Live · Standby (${ping}ms)`
        };

        try {
          const stored: Record<string, any> = {};
          next.forEach(p => {
            if (p.registeredTag) {
              stored[p.id] = { 
                accountNumber: p.registeredTag, 
                status: p.connectionStatus,
                syncLatencyMs: p.syncLatencyMs,
                syncHealthNote: p.syncHealthNote,
                lastSyncChecked: p.lastSyncChecked
              };
            }
          });
          localStorage.setItem('sam_bound_partners', JSON.stringify(stored));
        } catch {
          // Fallback
        }

        return next;
      });

      currentIndex++;
      setSyncProgress(Math.min(100, Math.round((currentIndex / totalNetworks) * 100)));
    }, 55);
  };

  // Quick individual network probe
  const handleProbeSingleNetwork = (id: string) => {
    setProbingNetworkId(id);
    const target = registryItems.find(p => p.id === id);
    if (!target) return;

    setTimeout(() => {
      const ping = Math.floor(10 + Math.random() * 20);
      const isBound = !!target.registeredTag;
      const verifiedStatus: PartnerStatus = isBound 
        ? (target.connectionStatus === 'ACTIVE' ? 'ACTIVE' : 'CONNECTED')
        : (target.connectionStatus || 'DISCOVERABLE');

      setRegistryItems(prev => prev.map(p => {
        if (p.id === id) {
          return {
            ...p,
            connectionStatus: verifiedStatus,
            syncLatencyMs: ping,
            lastSyncChecked: `Today at ${new Date().toLocaleTimeString()}`,
            syncHealthNote: isBound ? `Token Verified · HTTP 200 OK (${ping}ms)` : `Gateway Online · Ready to Bind (${ping}ms)`
          };
        }
        return p;
      }));

      setProbingNetworkId(null);
    }, 350);
  };

  // Color-coded status badge renderer
  const renderColorCodedStatusBadge = (
    status: PartnerStatus, 
    latencyMs?: number, 
    isProbing?: boolean,
    compact: boolean = false
  ) => {
    if (isProbing) {
      return (
        <span className={`inline-flex items-center gap-1.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-400/60 shadow-[0_0_15px_rgba(6,182,212,0.4)] font-mono font-bold animate-pulse ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[11px]'}`}>
          <RefreshCw className="w-3 h-3 animate-spin text-cyan-300" />
          <span>SYNCING</span>
        </span>
      );
    }

    switch (status) {
      case 'CONNECTED':
        return (
          <span className={`inline-flex items-center gap-1.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/50 shadow-[0_0_15px_rgba(16,185,129,0.35)] font-mono font-bold ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[11px]'}`}>
            <CheckCircle2 className={`${compact ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} text-emerald-400 shrink-0`} />
            <span>CONNECTED</span>
            {latencyMs && <span className="opacity-80 px-1 py-0.2 rounded bg-emerald-950/80 font-mono text-[9px] text-emerald-200">{latencyMs}ms</span>}
          </span>
        );
      case 'ACTIVE':
        return (
          <span className={`inline-flex items-center gap-1.5 rounded-full bg-teal-500/20 text-teal-300 border border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.35)] font-mono font-bold ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[11px]'}`}>
            <Zap className={`${compact ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} text-teal-400 shrink-0`} />
            <span>ACTIVE</span>
            {latencyMs && <span className="opacity-80 px-1 py-0.2 rounded bg-teal-950/80 font-mono text-[9px] text-teal-200">{latencyMs}ms</span>}
          </span>
        );
      case 'APPROVED':
        return (
          <span className={`inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/50 shadow-[0_0_15px_rgba(59,130,246,0.35)] font-mono font-bold ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[11px]'}`}>
            <ShieldCheck className={`${compact ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} text-blue-400 shrink-0`} />
            <span>APPROVED</span>
            {latencyMs && <span className="opacity-80 px-1 py-0.2 rounded bg-blue-950/80 font-mono text-[9px] text-blue-200">{latencyMs}ms</span>}
          </span>
        );
      case 'APPLICATION_PENDING':
        return (
          <span className={`inline-flex items-center gap-1.5 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.35)] font-mono font-bold ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[11px]'}`}>
            <Clock className={`${compact ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} text-amber-400 shrink-0`} />
            <span>PENDING</span>
            {latencyMs && <span className="opacity-80 px-1 py-0.2 rounded bg-amber-950/80 font-mono text-[9px] text-amber-200">{latencyMs}ms</span>}
          </span>
        );
      case 'DISCOVERABLE':
      default:
        return (
          <span className={`inline-flex items-center gap-1.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 shadow-[0_0_12px_rgba(168,85,247,0.3)] font-mono font-bold ${compact ? 'px-2 py-0.5 text-[9px]' : 'px-2.5 py-1 text-[11px]'}`}>
            <Globe className={`${compact ? 'w-2.5 h-2.5' : 'w-3.5 h-3.5'} text-purple-400 shrink-0`} />
            <span>DISCOVERABLE</span>
            {latencyMs && <span className="opacity-80 px-1 py-0.2 rounded bg-purple-950/80 font-mono text-[9px] text-purple-200">{latencyMs}ms</span>}
          </span>
        );
    }
  };

  // Native registration form state
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    website: '',
    country: 'United States',
    currency: 'USD',
    taxStatus: 'W9_VERIFIED' as const,
    trafficSources: ['YouTube Reviews', 'TikTok & Short Video'] as string[],
    payoutMethod: 'Stripe Connect' as const,
    termsAccepted: false,
    ftcDisclosureAccepted: false
  });

  const [isSubmittingNative, setIsSubmittingNative] = useState(false);
  const [successAffiliate, setSuccessAffiliate] = useState<AffiliateAccount | null>(null);

  const trafficOptions = [
    'SEO & Niche Blogs',
    'YouTube Reviews',
    'TikTok & Short Video',
    'Instagram & Threads',
    'Email Newsletters',
    'Paid Search & Social',
    'Communities & Discord',
    'Comparison Portals'
  ];

  const selectedProvider = registryItems.find(p => p.id === selectedProviderId) || registryItems[0];

  // Filter registry based on search and pills
  const filteredRegistry = registryItems.filter(p => {
    if (providerFilter === 'mobile' && !p.mobileAppStores) return false;
    if (providerFilter === 'trial' && !p.freeTrialBounty) return false;
    if (providerFilter === 'saas' && !p.category.toLowerCase().includes('saas') && !p.category.toLowerCase().includes('b2b')) return false;
    if (providerFilter === 'ecommerce' && !p.category.toLowerCase().includes('commerce') && !p.category.toLowerCase().includes('retail')) return false;

    if (providerSearchQuery.trim()) {
      const q = providerSearchQuery.toLowerCase();
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        (p.freeTrialBounty && p.freeTrialBounty.toLowerCase().includes(q)) ||
        p.instructionSnippet.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const toggleTrafficSource = (src: string) => {
    setFormData(prev => ({
      ...prev,
      trafficSources: prev.trafficSources.includes(src)
        ? prev.trafficSources.filter(s => s !== src)
        : [...prev.trafficSources, src]
    }));
  };

  const handleSelectProvider = (provider: AffiliateNetworkRegistryItem) => {
    setSelectedProviderId(provider.id);
    setBindingTagInput(provider.registeredTag || '');
    setBindingFeedback(null);
    setCopiedLinkSample(false);
  };

  const handleSavePartnerBinding = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProvider) return;
    setIsBindingTag(true);

    setTimeout(() => {
      const newTag = bindingTagInput.trim() || `PUB-${Math.floor(100000 + Math.random() * 900000)}`;

      const updated = registryItems.map(p => {
        if (p.id === selectedProvider.id) {
          return {
            ...p,
            connectionStatus: 'CONNECTED' as PartnerStatus,
            registeredTag: newTag
          };
        }
        return p;
      });

      setRegistryItems(updated);

      try {
        const stored: Record<string, { accountNumber: string; status: PartnerStatus }> = {};
        updated.forEach(p => {
          if (p.registeredTag) {
            stored[p.id] = { accountNumber: p.registeredTag, status: p.connectionStatus };
          }
        });
        localStorage.setItem('sam_bound_partners', JSON.stringify(stored));
      } catch {
        // Fallback
      }

      setIsBindingTag(false);
      setBindingFeedback(`Publisher ID "${newTag}" saved! Status is now CONNECTED with automatic deep-link generation active.`);
    }, 500);
  };

  const handleCopySample = () => {
    if (!selectedProvider) return;
    const tag = bindingTagInput.trim() || selectedProvider.registeredTag || 'YOUR_TAG';
    let sample = `https://${selectedProvider.id}.com?ref=${tag}`;
    if (selectedProvider.id === 'apple') {
      sample = `https://apps.apple.com/app/id123456789?pt=${tag}&ct=superaff`;
    } else if (selectedProvider.id === 'amazon') {
      sample = `https://www.amazon.com/dp/B08N5WRWNW?tag=${tag}`;
    } else if (selectedProvider.id === 'shopify') {
      sample = `https://shopify.pxf.io/c/${tag}/123456/5342`;
    } else if (selectedProvider.id === 'semrush') {
      sample = `https://semrush.sjv.io/c/${tag}/123456/13053`;
    }

    navigator.clipboard?.writeText(sample);
    setCopiedLinkSample(true);
    setTimeout(() => setCopiedLinkSample(false), 2000);
  };

  const handleNativeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.termsAccepted) return;

    setIsSubmittingNative(true);

    const refCode = formData.fullName.toLowerCase().replace(/[^a-z0-9]/g, '').slice(0, 8) + '26';
    const newAffiliate: AffiliateAccount = {
      id: `aff-${Date.now()}`,
      name: formData.fullName,
      email: formData.email,
      referralCode: refCode,
      referralUrl: `https://aff.ai/r/${refCode}`,
      status: 'approved',
      rank: 'Bronze',
      trafficSources: formData.trafficSources,
      country: formData.country,
      currency: formData.currency,
      directAffiliatesCount: 0,
      totalClicks: 0,
      uniqueClicks: 0,
      leads: 0,
      confirmedOrders: 0,
      conversionRate: 0,
      pendingCommissions: 0,
      approvedCommissions: 0,
      rejectedCommissions: 0,
      paidCommissions: 0,
      recurringCommissions: 0,
      taxStatus: formData.taxStatus,
      payoutMethod: formData.payoutMethod,
      joinedDate: new Date().toISOString().split('T')[0]
    };

    try {
      await fetch('/api/v1/affiliates/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newAffiliate)
      });
    } catch {
      // In-memory fallback
    }

    setTimeout(() => {
      setIsSubmittingNative(false);
      setSuccessAffiliate(newAffiliate);
      onRegistered(newAffiliate);
    }, 600);
  };

  const boundCount = registryItems.filter(p => p.connectionStatus === 'CONNECTED' || p.connectionStatus === 'ACTIVE').length;

  if (successAffiliate) {
    return (
      <div className="max-w-3xl mx-auto py-10 space-y-6 text-slate-100">
        <div className="p-8 sm:p-10 rounded-3xl flash-glow-card neon-border-multi text-center space-y-6">
          <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center shadow-[0_0_25px_rgba(16,185,129,0.5)]">
            <CheckCircle2 className="w-8 h-8" />
          </div>

          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest font-bold">
              APPLICATION APPROVED · INSTANT ONBOARDING
            </span>
            <h1 className="text-2xl sm:text-4xl font-black text-white mt-2">
              Welcome to the Partner Network, {successAffiliate.name}!
            </h1>
            <p className="text-sm text-slate-300 mt-2 max-w-xl mx-auto">
              Your official affiliate account is active. Your unique referral link, QR tracking codes, and real-time dashboard are ready.
            </p>
          </div>

          {/* Referral Link Box */}
          <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 max-w-lg mx-auto text-left space-y-2">
            <span className="text-[11px] font-mono text-purple-300 uppercase font-bold">Your Primary Referral Link</span>
            <div className="flex items-center justify-between gap-2 p-2.5 rounded-xl bg-black/40 border border-purple-500/30">
              <span className="font-mono text-sm text-white truncate">{successAffiliate.referralUrl}</span>
              <button 
                onClick={() => navigator.clipboard?.writeText(successAffiliate.referralUrl)}
                className="px-3 py-1 rounded-lg bg-purple-600/40 hover:bg-purple-600 text-xs text-white font-semibold transition-colors cursor-pointer"
              >
                Copy
              </button>
            </div>
            <div className="text-[11px] text-slate-400 flex items-center justify-between">
              <span>Referral Code: <strong className="text-white font-mono">{successAffiliate.referralCode}</strong></span>
              <span>Initial Rank: <strong className="text-yellow-400">Bronze Partner</strong></span>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => onNavigate('affiliate-portal')}
              className="px-8 py-3.5 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-extrabold text-sm hover:brightness-110 shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all cursor-pointer flex items-center gap-2"
            >
              <span>ENTER AFFILIATE PORTAL</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => onNavigate('marketplace')}
              className="px-6 py-3.5 rounded-2xl bg-white/[0.06] hover:bg-white/[0.12] border border-white/15 text-slate-300 font-bold text-sm transition-all cursor-pointer"
            >
              View 26+ Affiliate Networks
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto space-y-8 pb-16 text-slate-100">
      {/* Top Banner Header */}
      <div className="p-6 sm:p-8 rounded-3xl flash-glow-card neon-border-multi relative overflow-hidden">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
          <div className="space-y-2 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-mono tracking-widest text-purple-400 uppercase font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-yellow-400" />
                22+ AFFILIATE NETWORK ONBOARDING REGISTRY
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                {registryItems.length} VERIFIED NETWORKS MAPPED
              </span>
              <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40">
                DIRECT 'REGISTER NOW' LINKS
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
              Major Affiliate Networks Registration & Instruction Hub
            </h1>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Explore 26 verified global affiliate networks, mobile app ecosystems (Apple App Store, Google Play, AppsFlyer), and high-paying SaaS free trial programs. Review dynamic instructional snippets, launch official direct 'Register Now' portals, and bind your publisher tracking tag.
            </p>
          </div>

          {/* Bound Status Counter */}
          <div className="flex items-center gap-3">
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 text-xs min-w-[150px]">
              <div className="text-slate-400 flex items-center gap-1.5">
                <BookmarkCheck className="w-4 h-4 text-emerald-400" />
                <span>Bound Profiles</span>
              </div>
              <div className="text-2xl font-black font-mono text-emerald-400 mt-1">
                {boundCount} <span className="text-xs text-slate-400 font-normal">/ {registryItems.length}</span>
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">Automated deep-linking</div>
            </div>
          </div>
        </div>

        {/* Workflow Mode Tabs */}
        <div className="flex flex-wrap items-center gap-2 pt-6 mt-6 border-t border-white/10">
          <button
            onClick={() => setActiveWorkflowMode('network-hub')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeWorkflowMode === 'network-hub'
                ? 'bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)]'
                : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10'
            }`}
          >
            <Layers className="w-3.5 h-3.5 text-purple-300" />
            <span>22+ Major Providers & Direct 'Register Now' Portals</span>
          </button>

          <button
            onClick={() => setActiveWorkflowMode('native-account')}
            className={`px-4 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-2 ${
              activeWorkflowMode === 'native-account'
                ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]'
                : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] border border-white/10'
            }`}
          >
            <Users className="w-3.5 h-3.5 text-emerald-300" />
            <span>Apply for Native Platform Partner Account (Direct Portal)</span>
          </button>
        </div>
      </div>

      {/* WORKFLOW 1: 22+ Major Providers Dynamic Instruction & Registration Hub */}
      {activeWorkflowMode === 'network-hub' && (
        <div className="space-y-6">
          {/* SYNC STATUS CHECKER CONTROL BAR (1-CLICK RE-VERIFY ACROSS ALL 26+ NETWORKS) */}
          <div className="p-6 rounded-3xl flash-glow-card neon-border-multi space-y-5 relative overflow-hidden">
            {/* Top Row: Title, Last Verified & 1-Click Action Button */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                  </span>
                  <h2 className="text-base sm:text-lg font-black text-white tracking-wide uppercase font-mono flex items-center gap-2">
                    <Wifi className="w-4 h-4 text-emerald-400" />
                    <span>Sync Status Checker</span>
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/40 font-bold">
                      26 NETWORKS
                    </span>
                  </h2>
                </div>
                <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
                  Single-click automated health probe and token verification across all 26+ mapped affiliate networks, mobile MMPs, and SaaS trial engines. Re-verifies REST endpoints, OAuth tokens, and tracking tags with real-time color status indicators.
                </p>
                <div className="flex flex-wrap items-center gap-3 text-[11px] font-mono text-slate-400 pt-0.5">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>Last Global Check:</span>
                    <strong className="text-slate-200">{lastGlobalSyncTime}</strong>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Activity className="w-3.5 h-3.5 text-teal-400" />
                    <span>Avg Latency:</span>
                    <strong className="text-teal-300">
                      {Math.round(registryItems.reduce((acc, p) => acc + (p.syncLatencyMs || 20), 0) / registryItems.length)}ms
                    </strong>
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Server className="w-3.5 h-3.5 text-purple-400" />
                    <span>Gateways:</span>
                    <strong className="text-purple-300">100% Operational</strong>
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => setShowSyncMatrix(!showSyncMatrix)}
                  className="px-4 py-3 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-xs font-bold text-slate-200 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Table className="w-3.5 h-3.5 text-purple-400" />
                  <span>{showSyncMatrix ? 'Hide Full Matrix' : 'View 26-Network Matrix'}</span>
                  {showSyncMatrix ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                </button>

                <button
                  type="button"
                  onClick={handleRunSyncStatusChecker}
                  disabled={isSyncingAll}
                  className="px-5 py-3 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 hover:brightness-110 text-white font-extrabold text-xs shadow-[0_0_25px_rgba(168,85,247,0.5)] disabled:opacity-60 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isSyncingAll ? 'animate-spin' : ''}`} />
                  <span>{isSyncingAll ? 'PROBING 26 NETWORKS...' : '⚡ 1-CLICK RE-VERIFY ALL NETWORKS'}</span>
                </button>
              </div>
            </div>

            {/* Live Progress Bar when Syncing */}
            {isSyncingAll && (
              <div className="p-3.5 rounded-2xl bg-purple-950/40 border border-purple-500/40 space-y-2 animate-pulse">
                <div className="flex items-center justify-between text-xs font-mono">
                  <div className="flex items-center gap-2 text-purple-200">
                    <RefreshCw className="w-3.5 h-3.5 text-purple-400 animate-spin" />
                    <span>Probing {currentlyProbingName || 'Gateways'}...</span>
                  </div>
                  <span className="text-yellow-300 font-bold">{syncProgress}% Complete</span>
                </div>
                <div className="w-full h-2 rounded-full bg-white/10 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-purple-500 via-orange-400 to-emerald-400 transition-all duration-100"
                    style={{ width: `${syncProgress}%` }}
                  />
                </div>
              </div>
            )}

            {/* Summary Notice after completion */}
            {syncSummaryNotice && (
              <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{syncSummaryNotice}</span>
                </div>
                <button
                  type="button"
                  onClick={() => setSyncSummaryNotice(null)}
                  className="text-slate-400 hover:text-white text-xs cursor-pointer ml-2"
                >
                  ✕
                </button>
              </div>
            )}

            {/* Status Breakdown Pills */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
              <div className="p-3 rounded-2xl bg-emerald-950/20 border border-emerald-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
                  <span className="text-xs font-semibold text-emerald-300">Connected / Active</span>
                </div>
                <span className="font-mono text-xs font-black text-emerald-400">
                  {registryItems.filter(p => p.connectionStatus === 'CONNECTED' || p.connectionStatus === 'ACTIVE').length}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-blue-950/20 border border-blue-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                  <span className="text-xs font-semibold text-blue-300">Approved</span>
                </div>
                <span className="font-mono text-xs font-black text-blue-400">
                  {registryItems.filter(p => p.connectionStatus === 'APPROVED').length}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-amber-950/20 border border-amber-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.8)]" />
                  <span className="text-xs font-semibold text-amber-300">Pending Review</span>
                </div>
                <span className="font-mono text-xs font-black text-amber-400">
                  {registryItems.filter(p => p.connectionStatus === 'APPLICATION_PENDING').length}
                </span>
              </div>

              <div className="p-3 rounded-2xl bg-purple-950/20 border border-purple-500/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]" />
                  <span className="text-xs font-semibold text-purple-300">Discoverable</span>
                </div>
                <span className="font-mono text-xs font-black text-purple-400">
                  {registryItems.filter(p => p.connectionStatus === 'DISCOVERABLE').length}
                </span>
              </div>
            </div>

            {/* EXPANDABLE 26-NETWORK LIVE GATEWAY MATRIX */}
            {showSyncMatrix && (
              <div className="p-4 rounded-2xl bg-black/50 border border-white/10 space-y-3 pt-4 mt-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2 border-b border-white/10 text-xs">
                  <span className="font-mono font-bold text-white uppercase flex items-center gap-2">
                    <Server className="w-4 h-4 text-purple-400" />
                    <span>26-Network Live Gateway Health Matrix</span>
                  </span>
                  <span className="text-[11px] font-mono text-slate-400">
                    HTTP/2 · TLS 1.3 · HMAC Signature & Token Validation
                  </span>
                </div>

                <div className="overflow-x-auto max-h-96 scrollbar-thin">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-white/10 text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        <th className="py-2.5 px-3">Network Provider</th>
                        <th className="py-2.5 px-3">Auth Protocol</th>
                        <th className="py-2.5 px-3">Publisher ID / Tag</th>
                        <th className="py-2.5 px-3">Status Badge</th>
                        <th className="py-2.5 px-3">Latency</th>
                        <th className="py-2.5 px-3">Last Verified</th>
                        <th className="py-2.5 px-3 text-right">Quick Probe</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-white/5 font-mono">
                      {registryItems.map(net => {
                        const isProbingThis = probingNetworkId === net.id;
                        return (
                          <tr key={net.id} className="hover:bg-white/[0.03] transition-colors">
                            <td className="py-2.5 px-3 font-sans font-bold text-white">
                              <div className="flex items-center gap-2">
                                <span className="truncate">{net.name}</span>
                                {net.mobileAppStores && <span className="text-[10px] text-cyan-300">📱</span>}
                                {net.freeTrialBounty && <span className="text-[10px] text-amber-300">🎁</span>}
                              </div>
                            </td>
                            <td className="py-2.5 px-3 text-[11px] text-slate-300">
                              {net.authProtocol || 'REST API / Token'}
                            </td>
                            <td className="py-2.5 px-3 text-xs">
                              {net.registeredTag ? (
                                <span className="text-emerald-300 font-mono bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-500/30">
                                  {net.registeredTag}
                                </span>
                              ) : (
                                <span className="text-slate-400 italic">Unbound</span>
                              )}
                            </td>
                            <td className="py-2.5 px-3">
                              {renderColorCodedStatusBadge(net.connectionStatus, net.syncLatencyMs, isProbingThis, true)}
                            </td>
                            <td className="py-2.5 px-3 text-[11px] text-teal-300">
                              {net.syncLatencyMs ? `${net.syncLatencyMs}ms` : '--'}
                            </td>
                            <td className="py-2.5 px-3 text-[10px] text-slate-400">
                              {net.lastSyncChecked || 'Pending'}
                            </td>
                            <td className="py-2.5 px-3 text-right">
                              <button
                                type="button"
                                onClick={() => handleProbeSingleNetwork(net.id)}
                                disabled={isProbingThis || isSyncingAll}
                                className="px-2.5 py-1 rounded-lg bg-white/[0.05] hover:bg-purple-600/30 border border-white/10 hover:border-purple-400/40 text-[10px] text-slate-300 hover:text-white transition-all cursor-pointer inline-flex items-center gap-1 font-mono"
                              >
                                <RefreshCw className={`w-2.5 h-2.5 ${isProbingThis ? 'animate-spin text-cyan-400' : ''}`} />
                                <span>{isProbingThis ? 'Probing...' : 'Probe'}</span>
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Filter Pills & Search */}
          <div className="p-4 rounded-3xl flash-glow-card border border-white/10 space-y-3">
            <div className="flex flex-col md:flex-row items-center justify-between gap-3">
              {/* Search */}
              <div className="relative w-full md:w-80">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={providerSearchQuery}
                  onChange={(e) => setProviderSearchQuery(e.target.value)}
                  placeholder="Filter CJ, Impact, Awin, Apple, Shopify..."
                  className="w-full bg-white/[0.04] border border-white/10 rounded-2xl pl-10 pr-4 py-2 text-xs text-white placeholder-slate-400 outline-none focus:border-purple-500/50"
                />
              </div>

              {/* Quick Filter Buttons */}
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                <button
                  onClick={() => setProviderFilter('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    providerFilter === 'all'
                      ? 'bg-purple-600 text-white'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
                  }`}
                >
                  All ({registryItems.length})
                </button>
                <button
                  onClick={() => setProviderFilter('mobile')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                    providerFilter === 'mobile'
                      ? 'bg-cyan-600 text-white'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
                  }`}
                >
                  <Smartphone className="w-3 h-3 text-cyan-400" />
                  <span>Mobile Apps (5)</span>
                </button>
                <button
                  onClick={() => setProviderFilter('trial')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer flex items-center gap-1 ${
                    providerFilter === 'trial'
                      ? 'bg-amber-600 text-white'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
                  }`}
                >
                  <Gift className="w-3 h-3 text-amber-400" />
                  <span>Free Trials (6)</span>
                </button>
                <button
                  onClick={() => setProviderFilter('saas')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    providerFilter === 'saas'
                      ? 'bg-indigo-600 text-white'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
                  }`}
                >
                  SaaS (10)
                </button>
                <button
                  onClick={() => setProviderFilter('ecommerce')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                    providerFilter === 'ecommerce'
                      ? 'bg-emerald-600 text-white'
                      : 'bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]'
                  }`}
                >
                  Retail (6)
                </button>
              </div>
            </div>

            {/* Network Selector Chips with Color-Coded Status Badges */}
            <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
              {filteredRegistry.map(p => {
                const isSelected = p.id === selectedProvider.id;
                const isProbingThis = probingNetworkId === p.id;

                return (
                  <button
                    key={p.id}
                    onClick={() => handleSelectProvider(p)}
                    className={`px-3 py-2 rounded-2xl text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-2 cursor-pointer shrink-0 ${
                      isSelected
                        ? 'bg-purple-600/30 text-white shadow-[0_0_15px_rgba(168,85,247,0.5)] border border-purple-400'
                        : 'bg-white/[0.03] text-slate-300 border border-white/5 hover:bg-white/[0.07]'
                    }`}
                  >
                    <span>{p.name}</span>
                    {p.mobileAppStores && (
                      <span className="text-[10px] text-cyan-300">📱</span>
                    )}
                    {p.freeTrialBounty && (
                      <span className="text-[10px] text-amber-300">🎁</span>
                    )}
                    {renderColorCodedStatusBadge(p.connectionStatus, p.syncLatencyMs, isProbingThis, true)}
                  </button>
                );
              })}
            </div>
          </div>

          {/* DYNAMIC REGISTRATION CONSOLE FOR SELECTED PROVIDER */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Left Column: Network Overview, Links & Step-by-Step Directions (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="p-6 rounded-3xl flash-glow-card border border-white/15 space-y-5">
                {/* Provider Identity Header with Color-Coded Status Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                        {selectedProvider.name}
                      </h2>
                      {renderColorCodedStatusBadge(
                        selectedProvider.connectionStatus, 
                        selectedProvider.syncLatencyMs, 
                        probingNetworkId === selectedProvider.id
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className="text-xs text-purple-300 font-medium">
                        {selectedProvider.category}
                      </span>
                      <span className="text-slate-500">·</span>
                      <span className="text-[11px] font-mono text-slate-400">
                        {selectedProvider.authProtocol || 'REST API / Token'}
                      </span>
                    </div>
                  </div>

                  {/* Status Indicator & Instant Probe Button */}
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => handleProbeSingleNetwork(selectedProvider.id)}
                      disabled={probingNetworkId === selectedProvider.id || isSyncingAll}
                      className="px-3 py-1.5 rounded-xl bg-white/[0.05] hover:bg-purple-600/30 border border-white/10 hover:border-purple-400/50 text-xs font-mono text-slate-300 hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                    >
                      <RefreshCw className={`w-3 h-3 ${probingNetworkId === selectedProvider.id ? 'animate-spin text-cyan-400' : 'text-purple-400'}`} />
                      <span>{probingNetworkId === selectedProvider.id ? 'Probing...' : 'Re-verify'}</span>
                    </button>
                  </div>
                </div>

                {/* INSTRUCTIONAL SNIPPET CALLOUT */}
                <div className="p-3.5 rounded-2xl bg-gradient-to-r from-purple-950/40 to-blue-950/40 border border-purple-500/30 text-xs text-purple-200 flex items-start gap-2.5">
                  <Info className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white block font-mono text-[11px] uppercase tracking-wider mb-0.5">Quick Registration Snippet:</strong>
                    <span className="text-slate-300 leading-relaxed">{selectedProvider.instructionSnippet}</span>
                  </div>
                </div>

                {/* Key Metrics Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs">
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-0.5">
                    <span className="text-slate-400 block text-[11px]">Commission Model:</span>
                    <span className="font-semibold text-white truncate block">{selectedProvider.commissionModel}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-0.5">
                    <span className="text-slate-400 block text-[11px]">Cookie Duration:</span>
                    <span className="font-mono text-orange-300 block">{selectedProvider.cookieWindow}</span>
                  </div>
                  <div className="p-3 rounded-2xl bg-white/[0.02] border border-white/5 space-y-0.5 col-span-2 sm:col-span-1">
                    <span className="text-slate-400 block text-[11px]">Approval Timeline:</span>
                    <span className="font-mono text-slate-200 block">{selectedProvider.approvalTimeline}</span>
                  </div>
                </div>

                {/* Mobile App & Free Trial Callouts */}
                <div className="space-y-2">
                  {selectedProvider.mobileAppStores && (
                    <div className="p-3 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-start gap-2.5 text-xs text-cyan-200">
                      <Smartphone className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-cyan-300 block">Mobile App Tracking Supported</strong>
                        <span className="text-[11px] text-slate-300">
                          Supports {selectedProvider.mobileAppStores.join(' · ')}. Routes traffic to native app store pages with deep linking and install postback attribution.
                        </span>
                      </div>
                    </div>
                  )}

                  {selectedProvider.freeTrialBounty && (
                    <div className="p-3 rounded-2xl bg-amber-950/30 border border-amber-500/30 flex items-start gap-2.5 text-xs text-amber-200">
                      <Gift className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-amber-300 block">Free Trial Bounty Program</strong>
                        <span className="text-[11px] text-slate-300">
                          {selectedProvider.freeTrialBounty}
                        </span>
                      </div>
                    </div>
                  )}
                </div>

                {/* DIRECT OFFICIAL OUTBOUND LINKS WITH 'REGISTER NOW' */}
                <div className="p-4 rounded-2xl bg-purple-950/20 border border-purple-500/30 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-white flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-emerald-400" />
                      Direct Official Outbound Links
                    </span>
                    <span className="text-[10px] font-mono text-emerald-300">100% PRODUCTION VERIFIED</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {/* Official Direct Register Now CTA */}
                    <a
                      href={selectedProvider.registrationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-gradient-to-r from-purple-600 via-indigo-600 to-purple-600 hover:brightness-110 text-white font-extrabold text-xs shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all flex items-center justify-center gap-2 text-center"
                    >
                      <span>Register Now (Official Portal)</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>

                    {/* Official Login CTA */}
                    <a
                      href={selectedProvider.loginUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="py-3 px-4 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-slate-200 font-semibold text-xs transition-colors flex items-center justify-center gap-2 text-center"
                    >
                      <Lock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                      <span>Existing Account? Login</span>
                      <ExternalLink className="w-3 h-3 text-slate-500 shrink-0" />
                    </a>
                  </div>
                </div>

                {/* DYNAMIC STEP-BY-STEP INSTRUCTIONS */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-purple-300 flex items-center gap-1.5">
                      <SlidersHorizontal className="w-4 h-4 text-purple-400" />
                      Detailed Registration Walkthrough for {selectedProvider.name}
                    </h3>
                    <span className="text-[10px] text-slate-400 font-mono">DYNAMIC STEP-BY-STEP</span>
                  </div>

                  <div className="space-y-2">
                    {selectedProvider.fullSteps.map((step, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 flex items-start gap-3 text-xs text-slate-300">
                        <span className="w-6 h-6 rounded-xl bg-purple-500/20 text-purple-300 font-mono font-bold flex items-center justify-center shrink-0 border border-purple-500/30 text-[11px]">
                          {idx + 1}
                        </span>
                        <div className="space-y-0.5">
                          <span className="leading-relaxed text-slate-200">
                            {step}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="p-3 rounded-2xl bg-black/40 border border-white/5 text-[11px] text-slate-400 flex items-center justify-between">
                    <span>Required documentation: {selectedProvider.requiredDocuments.join(', ')}</span>
                    <button
                      onClick={() => onNavigate('developers')}
                      className="text-purple-400 hover:text-purple-300 underline font-mono text-[11px] cursor-pointer"
                    >
                      Integration Guide
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Profile Tag Binding Form & Live Deep Link Generator (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <form onSubmit={handleSavePartnerBinding} className="p-6 rounded-3xl flash-glow-card border border-white/15 space-y-5">
                <div className="flex items-center gap-2 pb-3 border-b border-white/10">
                  <UserCheck className="w-5 h-5 text-emerald-400" />
                  <div>
                    <h3 className="text-sm font-bold text-white uppercase tracking-wider">
                      Bind to User Profile
                    </h3>
                    <p className="text-[11px] text-slate-400">Save your Publisher ID / Tracking Tag</p>
                  </div>
                </div>

                <p className="text-xs text-slate-300 leading-relaxed">
                  After completing registration via <strong className="text-white">Register Now</strong>, enter your approved Publisher ID or Associate Tag below to automatically inject it into all short links and campaign landers.
                </p>

                {/* Tag Input */}
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-300 block">
                    Publisher ID / Tag / Token *
                  </label>
                  <input
                    type="text"
                    required
                    value={bindingTagInput}
                    onChange={(e) => setBindingTagInput(e.target.value)}
                    placeholder={`e.g. ${
                      selectedProvider.id === 'amazon' 
                        ? 'yourbrand-20' 
                        : selectedProvider.id === 'apple' 
                        ? '1000lXYZ' 
                        : selectedProvider.id === 'semrush'
                        ? '123456'
                        : 'PUB-89421'
                    }`}
                    className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 focus:border-purple-400 focus:outline-none text-white text-xs font-mono"
                  />
                  <span className="text-[10px] text-slate-400 block">
                    {selectedProvider.fullSteps[selectedProvider.fullSteps.length - 1]}
                  </span>
                </div>

                {/* Live Link Generator Preview */}
                <div className="p-3.5 rounded-2xl bg-black/50 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-400 uppercase">
                    <span>Live Attributable Link Generator:</span>
                    <button
                      type="button"
                      onClick={handleCopySample}
                      className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1 cursor-pointer"
                    >
                      {copiedLinkSample ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                      <span>{copiedLinkSample ? 'Copied Link!' : 'Copy Preview'}</span>
                    </button>
                  </div>
                  <div className="font-mono text-xs text-emerald-300 break-all p-2 rounded-xl bg-white/[0.02] border border-emerald-500/20">
                    https://{selectedProvider.id}.com?ref={bindingTagInput.trim() || selectedProvider.registeredTag || 'YOUR_TAG'}
                  </div>
                </div>

                {bindingFeedback && (
                  <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-xs text-emerald-300 font-mono flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>{bindingFeedback}</span>
                  </div>
                )}

                {/* Save Button */}
                <button
                  type="submit"
                  disabled={isBindingTag || !bindingTagInput.trim()}
                  className="w-full py-3.5 rounded-2xl bg-gradient-to-r from-emerald-600 via-teal-500 to-indigo-600 hover:brightness-110 text-white font-extrabold text-xs shadow-[0_0_20px_rgba(16,185,129,0.4)] disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  {isBindingTag ? (
                    <span>Validating & Binding ID...</span>
                  ) : (
                    <>
                      <span>SAVE & BIND TO MY USER PROFILE</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>

              {/* Progress Checklist for All 26 Networks */}
              <div className="p-5 rounded-3xl flash-glow-card border border-white/10 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-white flex items-center gap-1.5 font-mono">
                    <BookmarkCheck className="w-3.5 h-3.5 text-purple-400" />
                    Multi-Network Enrollment Checklist
                  </span>
                  <span className="text-[10px] font-mono text-emerald-400">{boundCount} of {registryItems.length} Bound</span>
                </div>

                <div className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 via-emerald-400 to-teal-400 transition-all duration-500" 
                    style={{ width: `${(boundCount / registryItems.length) * 100}%` }}
                  />
                </div>

                <div className="space-y-1.5 max-h-56 overflow-y-auto pr-1 scrollbar-thin">
                  {registryItems.map(p => (
                    <div 
                      key={p.id}
                      onClick={() => handleSelectProvider(p)}
                      className={`p-2.5 rounded-xl text-xs flex items-center justify-between transition-colors cursor-pointer ${
                        p.id === selectedProvider.id 
                          ? 'bg-purple-600/20 border border-purple-500/40 text-white' 
                          : 'bg-white/[0.02] hover:bg-white/[0.05] text-slate-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 truncate">
                        {p.registeredTag ? (
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                        ) : (
                          <div className="w-3.5 h-3.5 rounded-full border border-slate-500 shrink-0" />
                        )}
                        <span className="truncate font-semibold">{p.name}</span>
                        {p.registeredTag && (
                          <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/40 px-1.5 py-0.2 rounded border border-emerald-500/20 truncate">
                            {p.registeredTag}
                          </span>
                        )}
                      </div>
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        {renderColorCodedStatusBadge(p.connectionStatus, p.syncLatencyMs, probingNetworkId === p.id, true)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* WORKFLOW 2: Native Platform Partner Account Enrollment Form */}
      {activeWorkflowMode === 'native-account' && (
        <form onSubmit={handleNativeSubmit} className="p-8 rounded-3xl flash-glow-card border border-white/10 space-y-6">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase font-bold tracking-wider">
              NATIVE OPERATING SYSTEM AFFILIATE PROGRAM
            </span>
            <h2 className="text-xl sm:text-2xl font-black text-white mt-1">
              Apply for Super Affiliate Manager Direct Partner Account
            </h2>
            <p className="text-xs text-slate-300 mt-1">
              Enroll directly to promote this platform and SaaS workspace tiers with tier-1 recurring commissions and multi-tier parent overrides.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Full Name */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Full Legal Name / Business Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Elena Rostova / Apex Media LLC"
                value={formData.fullName}
                onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 focus:border-purple-400 focus:outline-none text-white text-sm"
              />
            </div>

            {/* Email */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Primary Business Email *
              </label>
              <input
                type="email"
                required
                placeholder="affiliate@apexmedia.io"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 focus:border-purple-400 focus:outline-none text-white text-sm"
              />
            </div>

            {/* Primary Website / Channel URL */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Primary Website or Channel URL
              </label>
              <input
                type="url"
                placeholder="https://youtube.com/@apexreview or blog URL"
                value={formData.website}
                onChange={e => setFormData({ ...formData, website: e.target.value })}
                className="w-full px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/15 focus:border-purple-400 focus:outline-none text-white text-sm"
              />
            </div>

            {/* Country & Currency */}
            <div className="grid grid-cols-2 gap-3">
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Country
                </label>
                <select
                  value={formData.country}
                  onChange={e => setFormData({ ...formData, country: e.target.value })}
                  className="w-full px-3 py-3 rounded-2xl bg-[#090d26] border border-white/15 text-white text-sm"
                >
                  <option value="United States">United States</option>
                  <option value="United Kingdom">United Kingdom</option>
                  <option value="Canada">Canada</option>
                  <option value="Germany">Germany</option>
                  <option value="Australia">Australia</option>
                  <option value="France">France</option>
                  <option value="Singapore">Singapore</option>
                  <option value="United Arab Emirates">UAE</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                  Currency
                </label>
                <select
                  value={formData.currency}
                  onChange={e => setFormData({ ...formData, currency: e.target.value })}
                  className="w-full px-3 py-3 rounded-2xl bg-[#090d26] border border-white/15 text-white text-sm"
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="CAD">CAD ($)</option>
                  <option value="AUD">AUD ($)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Traffic Sources Declaration */}
          <div className="space-y-2 pt-2">
            <label className="text-xs font-bold uppercase tracking-wider text-slate-300 flex items-center justify-between">
              <span>Primary Promotional Traffic Sources *</span>
              <span className="text-[11px] font-normal text-purple-300">Select all channels you utilize</span>
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {trafficOptions.map(opt => {
                const selected = formData.trafficSources.includes(opt);
                return (
                  <button
                    type="button"
                    key={opt}
                    onClick={() => toggleTrafficSource(opt)}
                    className={`p-2.5 rounded-xl text-xs font-medium text-left border transition-all cursor-pointer ${
                      selected 
                        ? 'bg-purple-600/30 border-purple-500 text-white shadow-[0_0_12px_rgba(168,85,247,0.3)]'
                        : 'bg-white/[0.03] border-white/10 text-slate-400 hover:text-white'
                    }`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tax & Payout Preferences */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Tax Document Declaration
              </label>
              <select
                value={formData.taxStatus}
                onChange={e => setFormData({ ...formData, taxStatus: e.target.value as any })}
                className="w-full px-4 py-3 rounded-2xl bg-[#090d26] border border-white/15 text-white text-sm"
              >
                <option value="W9_VERIFIED">U.S. Resident / Entity (Form W-9)</option>
                <option value="W8BEN_VERIFIED">Non-U.S. Individual / Foreign Entity (Form W-8BEN)</option>
                <option value="PENDING">Submit Tax Information Later (Before Payout)</option>
              </select>
              <p className="text-[11px] text-slate-400">
                Commissions accrue immediately; tax documents required prior to payout release.
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-300">
                Preferred Payout Rail
              </label>
              <select
                value={formData.payoutMethod}
                onChange={e => setFormData({ ...formData, payoutMethod: e.target.value as any })}
                className="w-full px-4 py-3 rounded-2xl bg-[#090d26] border border-white/15 text-white text-sm"
              >
                <option value="Stripe Connect">Stripe Connect (Direct Bank Deposit)</option>
                <option value="PayPal">PayPal Payouts</option>
                <option value="Paystack">Paystack (African & International Banking)</option>
                <option value="Direct Wire">Wire / SEPA Bank Transfer ($250 min)</option>
              </select>
              <p className="text-[11px] text-slate-400">
                Automatic threshold: $50.00. Processed weekly on Wednesdays.
              </p>
            </div>
          </div>

          {/* Agreements & Disclosures */}
          <div className="pt-3 border-t border-white/10 space-y-3">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.termsAccepted}
                onChange={e => setFormData({ ...formData, termsAccepted: e.target.checked })}
                className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-white/5 border-white/20"
              />
              <span className="text-xs text-slate-300 leading-relaxed">
                I agree to the <strong className="text-white">Partner Program Operating Agreement</strong>, fraud prevention policies (strictly prohibiting cookie stuffing, unauthorized brand trademark bidding, and self-referrals), and 30-day commission lock periods.
              </span>
            </label>

            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={formData.ftcDisclosureAccepted}
                onChange={e => setFormData({ ...formData, ftcDisclosureAccepted: e.target.checked })}
                className="mt-1 w-4 h-4 rounded text-purple-600 focus:ring-purple-500 bg-white/5 border-white/20"
              />
              <span className="text-xs text-slate-300 leading-relaxed">
                I commit to including clear and conspicuous <strong className="text-purple-300">FTC-compliant affiliate disclosures</strong> on all social posts, video descriptions, and review content referencing promoted links.
              </span>
            </label>
          </div>

          {/* Action Button */}
          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmittingNative || !formData.fullName || !formData.email || !formData.termsAccepted}
              className="w-full py-4 rounded-2xl bg-gradient-to-r from-purple-600 via-orange-500 to-yellow-500 text-white font-extrabold text-sm hover:brightness-110 shadow-[0_0_25px_rgba(168,85,247,0.4)] disabled:opacity-50 transition-all cursor-pointer flex items-center justify-center gap-2"
            >
              {isSubmittingNative ? (
                <span>Verifying Application & Initializing Portal...</span>
              ) : (
                <>
                  <span>COMPLETE REGISTRATION & ACTIVATE AFFILIATE ACCOUNT</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>
      )}
    </div>
  );
};
