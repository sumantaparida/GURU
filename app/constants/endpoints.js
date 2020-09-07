import globalConfig from 'Config';
import { browserHistory } from 'react-router';
// Using of cause for no circular dependency
export const getFromSession = key => window.sessionStorage.getItem(key);
export const getFromLocal = key => window.localStorage.getItem(key);
export const EARNING = '/getearnings';
const getAuthTokenBasedURI = () => '';
export const API_VERSION = '/v2';
export const PARTNERS = '/partner';
const FILE_URL = () => {
  const hostName = getFromSession('hostName');
  if (hostName !== 'undefined') {
    const host_name = `//${hostName}/api/platform/v0`;
    return host_name;
  }
  return browserHistory.push('/dashboard');
};
const BLOG_URL = () => {
  const blogCookie = getFromSession('cmsUrl'); // URL 'https://cms.mgolem.stage.mintpro.in';
  return blogCookie;
};
export const turtlemintWordpress = () => `${BLOG_URL()}/v0/mintpro/contents/promotion`;
// export const turtlemintWordpress = () => `http://13.232.107.77:9009/v0/mintpro/contents/promotion?tenant=turtlemint`;
const CMS_URL = () => getFromSession('cmsUrl');
const COMMENT_URL = () => globalConfig.CHAT_API || 'https://chat.amar.stage.mintpro.in/api';
const HELP_CENTER_BASE_URL = () => globalConfig.HELP_CENTER_BASE_URL;
export const PartnerAPI = id => `${API_VERSION}/partners/${id}`;
// ANCHOR: Remove Later
export const getEarnings = () => `${getAuthTokenBasedURI()}${EARNING}`;
export const getEarningStats = () => `${getAuthTokenBasedURI()}/earnings/count`;

export const CREATE_QIS = () => '/lead/createqis';
export const GET_CUSTOMERS = () => `${getAuthTokenBasedURI()}/mf/customers`;
export const CUSTOMER_DETAIL = () => `${getAuthTokenBasedURI()}/getcustomerportfolio`;
export const GET_POLICY_BY_CUSTOMER_ID = id => `${getAuthTokenBasedURI()}/getcustomerportfolio?customerId=${id}`;
// export const GET_CUSTOMER_BY_ID = (id) => `${getAuthTokenBasedURI()}/getcustomerbyid?customerId=${id}`; // Old API
export const GET_CUSTOMER_BY_ID = id => `${getAuthTokenBasedURI()}/customer/${id}`; // New API
export const CONFIG = `${API_VERSION}/config`;
// export const ROOT_CONFIG = 'http://app.bajajcapital.stage.mintpro.in/api/getBrokerConfig?broker=turtlemint';
export const ROOT_CONFIG = `${getAuthTokenBasedURI()}/getBrokerConfig?source=mintproFrontendConfig`;
export const partnerDocuments = (partnerId, docId) => `${PartnerAPI(partnerId)}/document/${docId}`;
export const UPDATE_LEAD_STATUS = () => `${getAuthTokenBasedURI()}/leads/updateleadstatus`;
export const SAVE_LEAD_FROM_PARTNER = () => `${getAuthTokenBasedURI()}/saveLeadFromPartner`;
export const DELETE_LEAD = leadId => `${getAuthTokenBasedURI()}/leads/${leadId}`;
export const GET_LEAD_ID = leadId => `${getAuthTokenBasedURI()}/leads/${leadId}`;
export const MARK_SEEN_TRUE = chatId => `/partner/recentChats/${chatId}/markRead`;
export const MARK_RENEWAL_SEEN = leadId => `${getAuthTokenBasedURI()}/leads/markRenewalSeen/${leadId}`;
export const SALES = () => `${getAuthTokenBasedURI()}/sales`;
export const getDealerleads = () => `${getAuthTokenBasedURI()}/leads`;
export const postRating = () => `${getAuthTokenBasedURI()}/v0/feedback`;
export const getRatingDialogStatus = () => `${getAuthTokenBasedURI()}/v0/feedback/showFeedback`;
// export const getDealerleads = () => `${getAuthTokenBasedURI()}/lead/getdealerleads`;
export const uploadImages = () => `${getAuthTokenBasedURI()}/uploadImages`;
// export const lmsLogin = () => '/lms/login';
export const helpcenterSupport = () => '/support';
export const getPartnerProfile = () => '/getPartnerProfileData';
export const createLead = () => `${getAuthTokenBasedURI()}/leads/createlead`;
export const sendPolicyURL = () => `${getAuthTokenBasedURI()}/sendPolicy`;
export const getPolicyID = leadId => `/v1/lead/${leadId}/policy`;
export const getPolicySearch = () => '/policies/search';
export const getDocUploadURl = (id, organisation) => `${globalConfig.API_BASE()}/partners/${id}/document?tenant=${organisation}`;

export const getFiles = () => `${FILE_URL()}/file`;
// export const getFile = id => {
//   const pppSharableHost = getFromSession('pppSharableHost');
//   if (pppSharableHost !== 'undefined' && pppSharableHost === window.location.hostname) {
//     return `${globalConfig.API_BASE()}/v2/download/${id}?Authorization=${getFromLocal('AUTH_KEY')}`;
//   }
//   return `${globalConfig.API_BASE()}/v2/download/${id}?token=1RbQAPrKJnc1e7jFzKQB3X4e9wzxNIgYSOTGC7SZRm35g`;
// };
export const getFile = id => {
  if (getFromLocal('AUTH_KEY') && getFromLocal('AUTH_KEY') !== 'null') {
    return `${globalConfig.API_BASE()}/v2/download/${id}?Authorization=${getFromLocal('AUTH_KEY')}`;
  }
  return `${globalConfig.API_BASE()}/profile/customer/image/${id}`;
};
export const uploadFile = () => `${globalConfig.API_BASE()}/v2/uploadQisRCDocument`;
export const deleteFileUrl = id => `${FILE_URL()}/file/${id}`;

export const qisleadid = () => '/chat';
// export const requestid = () => '/chat';
export const comments = `${COMMENT_URL()}/comments`;
// export const qisleadid = (id) => `/requestid/${id}/comments`;
export const requestid = id => `/requestid/${id}/comments`;
// export const comments = '/comments';
export const search = () => '/lead/search';

// mutualfund apis
export const mfCreate = () => '/v1/mf/create';
export const mfVerifyPhone = (externalCustomerId, otp) => `/v1/mf/verify/mobile?externalCustomerId=${externalCustomerId}&otp=${otp}`;
export const mfVerifyEmail = (externalCustomerId, otp) => `/v1/mf/verify/email?externalCustomerId=${externalCustomerId}&otp=${otp}`;
export const mfResendOTPEmail = (externalCustomerId, otp) => `v1/mf/otp/resend/email?externalCustomerId=${externalCustomerId}&otp=${otp}`;
export const mfResendOTPPhone = (externalCustomerId, otp) => `v1/mf/otp/resend/mobile?externalCustomerId=${externalCustomerId}&otp=${otp}`;
export const mfGenerateOTP = externalCustomerId => `/v1/mf/otp?externalCustomerId=${externalCustomerId}`;
export const mfResendOTP = externalCustomerId => `/v1/mf/resendotp?externalCustomerId=${externalCustomerId}`;
export const mfUserLogin = (externalCustomerId, type) => `/v1/mf/login?externalCustomerId=${externalCustomerId}&type=${type}`;
export const mfSearchUser = query => `/v1/mf/search?query=${query}`;
export const mfSendUserLink = customerId => `v1/mf/paymentlink/${customerId}`;
export const mfLeads = () => 'v1/mf/leads';
export const createAgent = () => '/mf/create/agent';
export const mfAutoLogin = () => '/mf/auto-login';
export const mfBaseUrl = () => (window.location.host !== 'app.mintpro.in' ? 'https://pro.mf.stage.mintpro.in' : 'https://pro.turtlemintmoney.com');

// Add Carousel
export const adCarousel = () => `${CMS_URL()}/v0/mintpro/contents/adCarousel`;
export const sellCarousel = () => `${CMS_URL()}/v0/mintpro/contents/promotionCarousel`;

// refferApi
export const refferApi = () => `${CMS_URL()}/v0/mintpro/contents/referral`;

// Logout
export const logoutAPI = () => '/login/signout';

// Partner Details
export const partnerDetails = id => `/partner/${id}/data`;
export const getPolicyCount = () => {
  const id = getFromLocal('id') || null;
  return `/profile/partner/policy-sold-count/${id}`;
};

// export const downloadCertificatePDF = (id) => `amar.planturtle.com/api/platform/v0/file/download/${id}`;

// Partner Public Profile
export const partnerGetDetails = () => {
  const id = getFromLocal('id') || null;
  return `/profile/partner/detail/${id}`;
};
export const businessProfileUpdateDetails = () => 'profile/partner/detail';

export const businessProfileGetBadges = () => {
  const id = getFromLocal('id') || null;
  return `/profile/partner/badges/${id}`;
};
export const genericDocumentUpload = () => {
  const id = getFromLocal('id') || null;
  return `${globalConfig.API_BASE()}/v2/partners/${id}/generic-document-upload`;
};
export const pppAddImages = () => '/profile/partner/add-images';
export const pppProfileImages = () => '/profile/partner/profile-pic';
export const removePPPImages = () => '/profile/partner/remove-images';

// export const businessProfileGetBadges = (maskId) => `/profile/badges/${maskId}`;
export const businessProfileGetPolicyCount = maskId => `/profile/customer/policy-sold-count/${maskId}`;
export const customerGetDetails = maskId => `/profile/customer/detail/${maskId}`;
// Share PPP
export const sharePPPUrl = () => '/profile/partner/sendEmailAndSMS';
export const callMeApi = () => '/profile/customer/call-me';
export const specialPlan = type => `/special-plans/${type}`; // sms - email
export const GetSpecialPlan = () => '/special-plans'; // sms - email

// Device Protected
export const deviceListUrl = () => '/api/device/v1/devices/get';

// Reminder Contract
export const getDealerReminders = () => `${getAuthTokenBasedURI()}/reminder`;
export const deleteDealerReminders = id => `${getAuthTokenBasedURI()}/reminder/${id}`;

// InsuranceSales End Point Letter i read MintproServices
export const getPolicies = () => '/policies';
export const getPoliciesCount = () => '/policies-count';
export const shareByEmail = () => '/policy/shareByEmail';

export const shareReferralApi = () => 'v2/partners/shareReferralCode';
// Helpcenter
export const conversation = () => '/partner/recentChats';
export const supportQueryEmail = () => '/helpCenter/supportQueryEmail';

export const langSelected = () => 'v2/partners/saveLanguageSelected';

// ANCHOR: Payouts API Contract
export const payoutAPI = () => '/ledger/partner-activities';
export const statementAPI = () => '/ledger/partner-transaction-statement';

// ANCHOR: Certification API Contract
export const certificationStatusAPI = () => {
  const id = getFromLocal('id');
  return `/lms/certificationStatus/${id}`;
};

export const lmsLoginAPI = () => '/lms/login/';
export const lmsRedirectAPI = () => '/lms/redirect';
export const certificaitonItemAPI = () => `${CMS_URL()}/v0/mintpro/contents/certification`;
export const partnerAgreementAPI = () => `${CMS_URL()}/v0/mintpro/contents/partnerAgreement`;
export const licenseAgreementDataAPI = () => {
  const id = getFromLocal('id') || null;
  return `v2/partners/${id}/licenseAgreementData`;
};
export const helpCentreRedirectionAPI = () => `${HELP_CENTER_BASE_URL()}/api/helpcentre/v1/`;
export const helpCentreFetchLatestChat = () => `${HELP_CENTER_BASE_URL()}/api/helpcentre/v1/chat/fetch`;
// Profile
export const updateProfile = id => `/partner/${id}`;

// Renewal Download

export const renewalDownload = () => '/v1/renewal/partners/getPartnerReport/';
// NOTE: Vertical redirect End point`;
export const verticalRedirectURL = () => {
  const id = getFromLocal('id') || null;
  return `/v2/partners/${id}/redirect`;
};

// NOTE: Gold
export const GOLD_API = () => 'v1/mf/gold/user';
