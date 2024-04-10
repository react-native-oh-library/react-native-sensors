# pragma once
# include "RNOH/ArkTSTurboModule.h"

namespace rnoh {
  class JSI_EXPORT RTNSensorsTurboModule : public ArkTSTurboModule {
    public:
      RTNSensorsTurboModule(const ArkTSTurboModule::Context ctx, const std::string name);
  };
} // namespace rnoh
