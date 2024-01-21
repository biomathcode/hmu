// featureFlagContext.js
import React, { PropsWithChildren, createContext, useContext } from "react";

const FeatureFlagContext = createContext(null);





export const FeatureFlagProvider = ({ children }: PropsWithChildren) => {
  // Define feature flags for different environments
  const featureFlags =
    process.env.NODE_ENV === "production"
      ? {
          enableNewFeature: true,
          enableExperimentalFeature: false,
        }
      : {
          enableNewFeature: false,
          enableExperimentalFeature: true,
        };

  return (
    <FeatureFlagContext.Provider value={featureFlags}>
      {children}
    </FeatureFlagContext.Provider>
  );
};

const FeatureFlag = ({ feature, children }) => {
  const { [feature]: isFeatureEnabled } = useFeatureFlags();

  return isFeatureEnabled ? <>{children(true)}</> : null;
};

export const useFeatureFlags = () => {
  return useContext(FeatureFlagContext);
};
