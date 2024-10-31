import credentialedProxyHandler from "utils/proxy/handlers/credentialed";

const widget = {
  api: "{url}/api/endpoints/{env}/{endpoint}",
  proxyHandler: credentialedProxyHandler,

  mappings: {
    "docker/containers/json": {
      endpoint: "docker/containers/json",
      params: ["all"],
    },
  },
};

export default widget;
