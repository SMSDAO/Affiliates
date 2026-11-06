# SUPER AFFILIATE MANAGER AI — AFFILIATE NETWORK INTEGRATIONS SPECIFICATION
**Version:** V1.3.0 Enterprise Elite Production Release  
**Status:** Single Source of Truth (SSOT) Architecture  
**Scope:** 26+ Major Affiliate Networks, Mobile MMPs, SaaS Bounties & Retail Marketplaces

---

## 1. Architectural Integration Overview

Super Affiliate Manager AI provides a unified abstraction layer over external affiliate networks, direct merchant partner programs, and mobile attribution platforms (MMPs). 

### Integration Modes:
1. **Direct REST / GraphQL API:** Automated real-time synchronization of clicks, conversions, commission approvals, and product feeds via provider API keys or OAuth2 client credentials.
2. **Server-to-Server (S2S) Webhook / Postback:** Real-time event attribution pushed directly to Super Affiliate Manager AI endpoints (`/api/v1/ecommerce/webhook` and `/api/v1/track/:slug`).
3. **Automated Product Catalog Feed:** Scheduled XML/JSON/CSV ingestion of merchant SKUs, inventory, price changes, and commission terms.
4. **Manual Link Import & Tag Binding:** Universal fallback for networks without public APIs; enables publishers to bind their Publisher ID/Tag for automatic deep link parameter injection.

---

## 2. Master Affiliate Network Integration Matrix (26 Verified Networks)

| Network / Platform | Primary Category | Official Registration URL | Developer & API Documentation | Integration Status | Auth Protocol | Data Capabilities |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Impact.com** | SaaS & Enterprise Global Brands | [Register at Impact](https://app.impact.com/login.user) | [Impact API Docs](https://integrations.impact.com/impact-platform/reference/getstarted-rest-api) | **API + Webhook + Manual** | HTTP Basic / API Key | Clicks, Conversions, Actions, Product Feeds |
| **PartnerStack** | B2B SaaS & Developer Platforms | [Join PartnerStack](https://dash.partnerstack.com/join) | [PartnerStack API Docs](https://docs.partnerstack.com/) | **API + Webhook** | Bearer Token / Webhooks | Recurring Subscriptions, Tiered Rewards |
| **CJ Affiliate (Commission Junction)** | Enterprise Multi-Vertical | [Register on CJ](https://members.cj.com/member/signup/publisher.do) | [CJ Developer Portal](https://developers.cj.com/) | **API (GraphQL & REST)** | Bearer Token (Personal Access Key) | Real-time Commission Feeds, Deep Links |
| **Amazon Associates** | Global E-Commerce & Retail | [Join Amazon Associates](https://affiliate-program.amazon.com/signup) | [Amazon PA-API 5.0 Docs](https://webservices.amazon.com/paapi5/documentation/) | **PA-API + Tag Binding** | AWS Signature v4 (PA-API) | Product Search, Pricing, Automatic Tag Injection |
| **Apple Services Performance Partners** | iOS Apps, Music & TV+ | [Apple Partners Apply](https://performance-partners.apple.com/apply) | [Apple Search API & Docs](https://performance-partners.apple.com/resources) | **API + Universal Links** | Partner Token / Deep Link Tag | iOS App Store Universal Links, In-App Subscriptions |
| **Google Play & Workspace Partner Advantage** | Android Apps & Cloud Tools | [Google Partner Portal](https://partneradvantage.goog.com/) | [Google Play Install Referrer](https://developer.android.com/google/play/installreferrer) | **SDK Postback + Referral** | OAuth2 / Install Referrer API | Android Install Referrers, Cloud License Bounties |
| **Shopify Affiliate Program** | E-Commerce Software Platform | [Shopify Affiliates](https://www.shopify.com/affiliates/signup) | [Shopify Partner API](https://shopify.dev/docs/apps/tools/cli) | **Impact API + Manual** | Impact Partner Token | Trial-to-Paid Bounties ($150 - $2,000) |
| **Semrush Affiliate Program** | SEO & Digital Marketing SaaS | [Semrush Impact Portal](https://app.impact.com/campaign-promo-signup/Semrush.brand) | [Semrush Impact Docs](https://integrations.impact.com/) | **Impact API + Postback** | Media Partner Token | CPL Lead ($10 Trial) + CPA ($200 Sale) |
| **Canva Affiliate Program** | Graphic Design & AI Studio | [Canva Affiliates](https://www.canva.com/affiliates/join/) | [Canva Developers](https://www.canva.dev/) | **Impact API + Deep Link** | Impact Partner Token | Canva Pro Trial Bounties (Up to $36) |
| **HubSpot Affiliate Program** | CRM, Marketing & Sales SaaS | [HubSpot Partner Portal](https://www.hubspot.com/partners/affiliates) | [HubSpot API Docs](https://developers.hubspot.com/) | **Impact API + Webhook** | Impact Partner Token | 30% Recurring Tiered RevShare |
| **Awin (Zanox)** | Global Affiliate Network | [Awin Publisher Sign-up](https://ui.awin.com/publisher-signup/en/awin/step1) | [Awin API Documentation](https://developer.awin.com/) | **REST API + Webhook** | API Key / OAuth2 | Transactions, Program Search, Click Tracking |
| **ShareASale** | Mid-Market & DTC Retail | [ShareASale Publisher Signup](https://account.shareasale.com/newsignup.cfm) | [ShareASale API Specs](https://account.shareasale.com/m-api.cfm) | **REST API + Postback** | Token Authentication | Activity Reports, Product Feeds, Postback |
| **ClickBank** | Digital Info & Direct SaaS | [ClickBank Registration](https://accounts.clickbank.com/master/makeBank.html) | [ClickBank APIs & INS](https://support.clickbank.com/hc/en-us/articles/220364027-ClickBank-APIs) | **REST API + Instant Notification (INS)** | Dev Key / Clerk Key / INS Secret | Order Notifications, Upsells, 50-75% RevShare |
| **Rakuten Advertising (LinkShare)** | Global & Luxury Brands | [Rakuten Sign-up](https://rakutenadvertising.com/affiliate-sign-up/) | [Rakuten Developer Portal](https://developers.rakutenadvertising.com/) | **REST API + FTP/Feed** | OAuth2 Bearer Token | Merchant Feeds, Signature Tracking Links |
| **FlexOffers** | Global Multi-Category Aggregator | [FlexOffers Registration](https://publisherpro.flexoffers.com/registration) | [FlexOffers Publisher API](https://publisherpro.flexoffers.com/api) | **REST API + Deep Links** | API Key / Domain Token | 12,000+ Merchant Deep Links, Daily Commission Feeds |
| **eBay Partner Network (EPN)** | Global Marketplaces & Auctions | [eBay Partner Portal](https://partnernetwork.ebay.com/) | [EPN REST API & Feeds](https://partnerhelp.ebay.com/) | **REST API + Smart Links** | OAuth2 Token / Campaign ID | 24-hr Cookie, Final Value Fee RevShare |
| **Walmart Creator** | US Retail, Grocery & DTC | [Walmart Creator Portal](https://creator.walmart.com/apply) | [Walmart Developer Portal](https://developer.walmart.com/) | **Impact API + Deep Link** | Creator ID / Impact Token | Category RevShare (Up to 18%), Walmart+ Bounties |
| **Target Partners** | Omni-Channel Retail & Lifestyle | [Target Impact Portal](https://target.impact.com/) | [Target Partner Resources](https://target.impact.com/) | **Impact API + Manual** | Impact Partner Token | Category RevShare (Up to 8%), Circle 360 Bounties |
| **AliExpress Portals** | Cross-Border E-Commerce | [AliExpress Portals Apply](https://portals.aliexpress.com/affi-register.htm) | [AliExpress Open Platform](https://open.aliexpress.com/) | **Open API + Deep Link** | App Key / Secret / Tracking ID | Product Promotion Links, Order Status API |
| **AppsFlyer Marketplace** | Mobile Attribution Platform (MMP) | [AppsFlyer Partner Network](https://www.appsflyer.com/partners/become-a-partner/) | [AppsFlyer Push API](https://support.appsflyer.com/hc/en-us/articles/207034346-Push-API-real-time-postbacks) | **Server-to-Server Postback** | S2S Postback Signature | Real-time App Installs, In-App Events, Uninstalls |
| **AppLovin & MAX** | Mobile App User Acquisition | [AppLovin Sign-up](https://dash.applovin.com/signup) | [AppLovin API Documentation](https://dash.applovin.com/docs) | **Reporting API + Postback** | API Key / Postback URL | CPI Campaigns, Impression/Install Tracking |
| **Mobidea** | Mobile CPA & CPI Affiliate Network | [Mobidea Join](https://www.mobidea.com/signup) | [Mobidea Postback API](https://www.mobidea.com/) | **SmartLink + S2S Postback** | Postback Parameter Tagging | Global Daily Mobile Cashouts, SmartLinks |
| **Booking.com Affiliate Network** | Global Travel, Hotels & Flights | [Booking.com Partners](https://www.booking.com/affiliate-program/v2/index.html) | [Booking.com Demand API](https://distribution-xml.booking.com/) | **REST API + Deep Links** | Affiliate ID / API Key | Real-time Hotel Availability, RevShare (25%-40%) |
| **Travelpayouts** | Travel, Flights, Rail & Activities | [Travelpayouts Join](https://www.travelpayouts.com/en/join) | [Travelpayouts API Docs](https://support.travelpayouts.com/hc/en-us/categories/200358578-API) | **REST API + White-label SDK** | API Token / Marker ID | Deep Flight/Hotel Search, Mobile SDK |
| **Skimlinks (Taboola Company)** | Automated Commerce Content | [Skimlinks Publisher Signup](https://hub.skimlinks.com/signup) | [Skimlinks API & JS SDK](https://developers.skimlinks.com/) | **JavaScript SDK + API** | Publisher Domain Token | Auto-link Monetization, Real-time Merchant Lookup |
| **Refersion** | Direct Brand Affiliate Marketplace | [Refersion Discovery](https://www.refersion.com/affiliate-discovery) | [Refersion Developer API](https://developer.refersion.com/) | **REST API + Webhook** | Public/Secret API Keys | Direct Merchant Commission Attribution |

---

## 3. Network Integration Profiles & Authentication Workflows

### 3.1 Impact.com
- **Authentication:** HTTP Basic Auth with Account SID and Auth Token.
- **Base Endpoint:** `https://api.impact.com/Mediapartners/{AccountSID}/`
- **Supported Operations:**
  - Retrieve approved brand campaigns (`GET /Campaigns`)
  - Generate tracking deep links (`POST /Campaigns/{CampaignId}/TrackingLinks`)
  - Query actions and payouts (`GET /Actions`)
- **Webhooks:** Instant notification on lead, sale, or reversal with SHA-256 HMAC signature verification.

### 3.2 PartnerStack
- **Authentication:** Bearer token authentication via `Authorization: Bearer {apiKey}`.
- **Base Endpoint:** `https://api.partnerstack.com/api/v1/`
- **Supported Operations:**
  - Retrieve customer referrals (`GET /customers`)
  - Create referral attribution link (`POST /links`)
  - Read commission rewards (`GET /rewards`)

### 3.3 CJ Affiliate (Commission Junction)
- **Authentication:** Personal Access Token sent in `Authorization: Bearer {token}`.
- **Base Endpoint:** `https://commissions.api.cj.com/query` (GraphQL)
- **Supported Operations:**
  - Query real-time commission item details (publisherCommissions)
  - Search advertiser products (`GET https://product-search.api.cj.com/v2/product-search`)
  - Generate promotional click links

### 3.4 Amazon Associates
- **Authentication:** AWS Signature Version 4 HMAC signing.
- **Integration Mode:** Product Advertising API (PA-API 5.0) for catalog retrieval + Store Tag Parameter Injection (`tag={AssociateTag}`) for outbound clicks.
- **Rate Limits:** 1 request per second (RPS) base tier; increments with attributable sales volume.

### 3.5 AppsFlyer MMP
- **Authentication:** Push API S2S postbacks with server IP whitelisting.
- **Attribution Types:** Click-through attribution, View-through attribution, Deferred deep linking.
- **Super Affiliate Manager AI Postback Endpoint:**
  ```http
  POST /api/v1/track/mmp-postback
  Content-Type: application/json
  X-MMP-Provider: AppsFlyer
  ```

---

## 4. Universal Link Parameter Mapping

When a user registers their affiliate account or binds their publisher tag, Super Affiliate Manager AI automatically appends the network's required query parameters during link creation and 302/307 redirection:

| Network | Primary Tag Parameter | SubID / ClickID Parameter | Deep Link Destination Parameter |
| :--- | :--- | :--- | :--- |
| **Impact.com** | Sub-domain routing (`brand.sjv.io/c/{AccountID}`) | `subId1={clickId}&subId2={campaign}` | `u={destinationUrl}` |
| **PartnerStack** | Sub-domain (`company.grsm.io/{slug}`) | `sid={clickId}` | `destination={url}` |
| **CJ Affiliate** | `SID={clickId}` | `PID={publisherId}` | `url={destinationUrl}` |
| **Amazon Associates** | `tag={storeTag}` | `ascsubtag={clickId}` | Raw URL path |
| **Apple Services** | `pt={partnerToken}` | `ct={campaignToken}` | Raw App Store URL |
| **Awin** | `awinaffid={publisherId}` | `clickref={clickId}` | `p={destinationUrl}` |
| **ShareASale** | `afftrack={clickId}` | `userId={publisherId}` | `urllink={destinationUrl}` |
| **ClickBank** | `tid={clickId}` | Hoplink format (`http://{affiliate}.{vendor}.pay.clickbank.net`) | N/A |
| **Rakuten** | `ranMID={merchantId}` | `ranSiteID={siteId}` | `murl={destinationUrl}` |
| **FlexOffers** | `fobs={clickId}` | `pid={publisherId}` | `url={destinationUrl}` |
| **eBay EPN** | `campid={campaignId}` | `customid={clickId}` | `mkevt=1&mkcid=1` |

---

## 5. Security & Verification Policy

1. **Deterministic Attribution:** Every click event generates an immutable, SHA-256 hashed click ID (`clk-${timestamp}-${hash}`) logged to the SSOT ledger.
2. **Bot & Crawler Suppression:** Requests identified as search engines, social media preview spiders, or uptime monitors are filtered out to prevent false commission estimations.
3. **Open Redirect Defense:** Outbound URLs must validate against strict HTTP/HTTPS protocol parsers with localhost/RFC-1918 private IP blocking to avoid SSRF vulnerabilities.
4. **Idempotent Payouts:** Direct API disbarments check idempotency sets before invoking Stripe Connect, PayPal Payouts, or Paystack gateways.
