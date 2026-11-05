export type NavigationTab = 
  | 'command-center'
  | 'ai-assistant'
  | 'marketplace'
  | 'link-intelligence'
  | 'product-discovery'
  | 'website-factory'
  | 'asset-generator'
  | 'social-studio'
  | 'campaigns'
  | 'agent-registry'
  | 'attachments'
  | 'admin-console'
  | 'public-home'
  | 'public-pricing'
  | 'onboarding'
  | 'user-guides'
  | 'developers'
  | 'funnel-analytics'
  | 'legal-trust'
  | 'affiliate-portal'
  | 'affiliate-register'
  | 'mlm-commissions'
  | 'ecommerce-hub'
  | 'wordpress-embeds'
  | 'payout-center'
  | 'fraud-detection'
  | 'casino-affiliates'
  | 'dashboard-marketing'
  | 'dashboard-affiliate'
  | 'dashboard-dev'
  | 'dashboard-admin';

export type UserRole = 'admin' | 'marketing' | 'affiliate' | 'developer';

export interface GoogleUserProfile {
  id: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: UserRole;
  chosenDashboard: 'marketing' | 'affiliate' | 'developer' | 'admin';
  isAdmin: boolean;
  googleVerified: boolean;
  joinedDate: string;
}

export type WorkspaceMode = 'beginner' | 'affiliate' | 'merchant';
export type LocaleCode = 'en' | 'fr' | 'ar' | 'vi' | 'es' | 'pt' | 'de' | 'nl' | 'fil';

export interface AffiliateAccount {
  id: string;
  name: string;
  email: string;
  referralCode: string;
  referralUrl: string;
  status: 'pending' | 'approved' | 'rejected' | 'suspended' | 'terminated';
  rank: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  trafficSources: string[];
  country: string;
  currency: string;
  directAffiliatesCount: number;
  totalClicks: number;
  uniqueClicks: number;
  leads: number;
  confirmedOrders: number;
  conversionRate: number;
  pendingCommissions: number;
  approvedCommissions: number;
  rejectedCommissions: number;
  paidCommissions: number;
  recurringCommissions: number;
  taxStatus: 'W9_VERIFIED' | 'W8BEN_VERIFIED' | 'PENDING';
  payoutMethod: 'PayPal' | 'Stripe Connect' | 'Paystack' | 'Direct Wire';
  joinedDate: string;
}

export interface MlmTierConfig {
  level: number;
  name: string;
  percentage: number;
  description: string;
  active: boolean;
}

export interface AffiliateRankDef {
  name: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'Diamond';
  minSales: number;
  minRevenue: number;
  commissionMultiplier: number;
  bonusAmount: number;
  badgeColor: string;
}

export interface CommissionRule {
  id: string;
  name: string;
  priority: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  scope: 'affiliate_override' | 'product' | 'category' | 'campaign' | 'store' | 'rank' | 'default';
  rateType: 'percentage' | 'flat';
  rateValue: number;
  targetId?: string;
  targetName?: string;
  active: boolean;
  effectiveDate: string;
}

export interface EcommerceAdapter {
  id: string;
  name: string;
  category: 'ecommerce' | 'forms' | 'subscriptions';
  logoText: string;
  status: 'OPERATIONAL' | 'CONNECTED' | 'AVAILABLE' | 'REQUIRES_CREDENTIALS';
  version: string;
  syncedOrders: number;
  lastWebhookPing: string;
  webhookSecret: string;
}

export interface PayoutRecord {
  id: string;
  affiliateId: string;
  affiliateName: string;
  amount: number;
  currency: string;
  provider: 'PayPal Payouts' | 'Stripe Connect' | 'Paystack' | 'Bank Wire' | 'Manual CSV';
  status: 'requested' | 'pending_review' | 'approved' | 'processing' | 'paid' | 'failed' | 'reversed';
  requestedAt: string;
  processedAt?: string;
  transactionRef?: string;
}

export interface FraudAlert {
  id: string;
  type: 'click_flooding' | 'bot_traffic' | 'self_referral' | 'duplicate_conversion' | 'coupon_abuse';
  severity: 'CRITICAL' | 'HIGH' | 'MEDIUM' | 'LOW';
  riskScore: number;
  affiliateId: string;
  ipAddress: string;
  description: string;
  evidence: string;
  status: 'PENDING_REVIEW' | 'CONFIRMED_FRAUD' | 'DISMISSED';
  timestamp: string;
}

export interface CasinoOperator {
  id: string;
  name: string;
  jurisdiction: string;
  licenseNumber: string;
  commissionModel: 'REV_SHARE' | 'CPA' | 'HYBRID';
  rate: string;
  minAge: 18 | 21;
  status: 'APPROVED' | 'COMPLIANCE_REVIEW' | 'RESTRICTED';
  landingPageUrl: string;
  responsibleGamblingMessage: string;
}

export type TimeRange = 'today' | 'yesterday' | '7d' | '30d' | '90d' | 'custom';

export interface FinancialSummary {
  estimatedEarnings: number;
  reportedConversions: number;
  pendingCommissions: number;
  approvedCommissions: number;
  reversedCommissions: number;
  paidCommissions: number;
  totalClicks: number;
  uniqueClicks: number;
  conversionRate: number;
  earningsPerClick: number;
  activePrograms: number;
  connectedNetworks: number;
  activeCampaigns: number;
  publishedContent: number;
  generatedAssets: number;
  activeAiAgents: number;
  accountHealth: number;
  storageUsageGb: number;
  storageQuotaGb: number;
  subscriptionPlan: 'FREE' | 'PRO' | 'ELITE' | 'ENTERPRISE';
  trialActive?: boolean;
  trialDaysRemaining?: number;
}

export interface TrialState {
  active: boolean;
  plan: 'PRO' | 'ELITE' | 'ENTERPRISE';
  daysRemaining: number;
  startDate: string;
  expiresDate: string;
}

export interface FunnelStageMetric {
  stage: string;
  count: number;
  conversionRatePct: number;
  dropoffPct: number;
}

export type PartnerStatus = 
  | 'DISCOVERABLE' 
  | 'REGISTRATION' 
  | 'APPLICATION_PENDING' 
  | 'APPROVED' 
  | 'CONNECTED' 
  | 'SYNCING' 
  | 'ACTIVE' 
  | 'REJECTED' 
  | 'EXPIRED' 
  | 'SUSPENDED' 
  | 'DISCONNECTED' 
  | 'MANUAL_ONLY';

export interface AffiliatePartner {
  id: string;
  name: string;
  logoUrl?: string;
  category: string;
  officialWebsite: string;
  registrationUrl: string;
  loginUrl?: string;
  supportedCountries: string[];
  productCategories: string[];
  commissionModel: string;
  cookieDuration: string;
  apiSupport: boolean;
  oauthSupport: boolean;
  webhookSupport: boolean;
  productFeedSupport: boolean;
  manualImportOnly: boolean;
  mobileAppTracking?: boolean;
  mobileAppStores?: ('iOS App Store' | 'Google Play' | 'Universal Links')[];
  freeTrialSupport?: boolean;
  freeTrialBounty?: string;
  quickInstructions?: string[];
  userConnectedId?: string;
  averageApprovalTime?: string;
  status: PartnerStatus;
  lastVerified: string;
  verificationSource: string;
  accountNumber?: string;
  syncedProgramsCount?: number;
}

export interface AffiliateLink {
  id: string;
  title: string;
  productName: string;
  network: string;
  originalUrl: string;
  shortUrl: string;
  slug: string;
  clicks: number;
  uniqueClicks: number;
  conversions: number;
  conversionValue: number;
  epc: number;
  status: 'active' | 'paused' | 'flagged' | 'broken';
  redirectCode: 302 | 307;
  lastChecked: string;
  campaign: string;
  utmSource: string;
  utmMedium: string;
  utmCampaign: string;
  category: string;
}

export interface ProductItem {
  id: string;
  name: string;
  brand: string;
  category: string;
  network: string;
  commissionRate: string;
  averagePayout: number;
  epc: number;
  cookieDuration: string;
  rating: number;
  conversionPotential: 'Ultra High' | 'High' | 'Medium';
  targetAudience: string;
  affiliateProgramUrl: string;
  officialMerchantUrl: string;
  verifiedTimestamp: string;
  description: string;
}

export interface Campaign {
  id: string;
  name: string;
  targetProduct: string;
  network: string;
  budget: number;
  status: 'active' | 'draft' | 'optimizing' | 'paused' | 'completed';
  channels: string[];
  clicks: number;
  conversions: number;
  revenue: number;
  complianceStatus: 'VERIFIED' | 'UNDER_REVIEW' | 'FLAGGED';
  createdDate: string;
  targetGeos: string[];
  roas: number;
}

export interface AiAgentDef {
  id: number;
  name: string;
  role: string;
  category: 'Strategic' | 'Marketing' | 'Creative' | 'Engineering' | 'Compliance';
  status: 'ACTIVE' | 'IDLE' | 'EXECUTING' | 'WAITING_APPROVAL';
  allowedTools: string[];
  provider: 'Gemini 2.5 Pro' | 'Gemini 2.5 Flash' | 'Claude 3.7 Sonnet' | 'GPT-4o' | 'DeepSeek V3';
  systemScope: string;
  lastRun: string;
  successRate: number;
}

export interface AttachmentFile {
  id: string;
  filename: string;
  extension: string;
  sizeBytes: number;
  mimeType: string;
  version: number;
  sha256: string;
  uploadedBy: string;
  uploadedAt: string;
  scanStatus: 'CLEAN' | 'SCANNING' | 'QUARANTINED';
  permissionRole: 'SUPER_ADMIN' | 'EDITOR' | 'VIEWER';
  campaignAssociation?: string;
  tags: string[];
}

export interface SocialPost {
  id: string;
  channel: 'TikTok' | 'YouTube' | 'Instagram' | 'Facebook' | 'Pinterest' | 'LinkedIn';
  title: string;
  content: string;
  status: 'scheduled' | 'published' | 'draft' | 'needs_approval';
  scheduledTime?: string;
  publishedUrl?: string;
  likes: number;
  clicks: number;
  disclosuresIncluded: boolean;
}
