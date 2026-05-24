import requests from './httpServices';

const SettingServices = {
  // Fetch global site settings (the only active settings endpoint)
  getGlobalSetting: async (website) => {
    return requests.get(`/global/${website}/fetch`, {}, {}, {});
  },
};

export default SettingServices;
