type PluginAPI = {
  addUtilities: (utils: Record<string, any>, options?: any) => void;
  addBase: (base: Record<string, any>) => void;
  // Add more methods if needed
};

type TailwindPlugin = (api: PluginAPI) => void;

export function customHeroui(): (tailwindConfig: unknown) => TailwindPlugin {
  const heroPlugin = require("@heroui/theme").heroui();

  return (_tailwindConfig: unknown): TailwindPlugin => {
    return (api: PluginAPI) => {
      const originalAddUtilities = api.addUtilities;

      api.addUtilities = (utilities: Record<string, any>, options?: any) => {
        const rootStuff: Record<string, any> = {};
        const normalStuff: Record<string, any> = {};

        for (const [key, value] of Object.entries(utilities)) {
          if (key === ":root" || key.startsWith(":root")) {
            rootStuff[key] = value;
          } else {
            normalStuff[key] = value;
          }
        }

        if (Object.keys(rootStuff).length > 0) {
          api.addBase(rootStuff);
        }

        if (Object.keys(normalStuff).length > 0) {
          originalAddUtilities(normalStuff, options);
        }
      };

      return heroPlugin(api);
    };
  };
}
