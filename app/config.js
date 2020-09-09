module.exports = {
  API_BASE: () => `//${window.location.hostname}/api`,
  TIMEOUT: 1200000,
};

// Local Endpoint with nginx setting in index.html
// location.protocol+'//'+location.hostname+"/api/getBrokerConfig?source=mintproFrontendConfig", gtmConfigCallBack

// Endpoint with localhost setting
// location.protocol+"//dev.agentpro.com/api/getBrokerConfig?source=mintproFrontendConfig", gtmConfigCallBack
