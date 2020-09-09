module.exports = {
  // API_BASE: () => `//${window.location.hostname}/api`,
  API_BASE: () => 'https://app.thanos.stage.mintpro.in/api',
  DOCUMENT_MASTER_API: 'https://www.planturtle.com/api/platform/v0',
  TIMEOUT: 1200000,
  MINTPRO_URL: 'localhost',
  GA_TRACKING_ID: 'UA-61873031-6',
  PERMISSION_TTL: 86400000, // time in ms ==> 24h
  MQTT_URL: 'wss://vernemq.mintpro.in:8080/mqtt',
  MOTOR: '//motor.pt.com/api',
  CHAT_API: 'https://chat.mintpro.in/api',
  HELP_CENTER_BASE_URL: 'https://help.tesla.stage.mintpro.in',
  ADVERTISING_ID: '&advertising_id=845f9a5a-05ac-4309-b79c-4dec7b00d400',
};

// Local Endpoint with nginx setting in index.html
// location.protocol+'//'+location.hostname+"/api/getBrokerConfig?source=mintproFrontendConfig", gtmConfigCallBack

// Endpoint with localhost setting
// location.protocol+"//dev.agentpro.com/api/getBrokerConfig?source=mintproFrontendConfig", gtmConfigCallBack
