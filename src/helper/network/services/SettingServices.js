import requests from './httpServices';

const SettingServices = {
  // Fetch global site settings (the only active settings endpoint)
  getGlobalSetting: async (website = "e-commerce") => {
    const response = await requests.get(`/settings/${website}`, {}, {}, {}, 0);
    return response?.data || response;
  },
};

export default SettingServices;
