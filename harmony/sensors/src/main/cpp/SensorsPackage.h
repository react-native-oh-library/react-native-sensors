#include "RNOH/Package.h"
#include "SensorsTurboModule.h"

using namespace rnoh;
using namespace facebook;
class NativeRTNSensorsFactoryDelegate : public TurboModuleFactoryDelegate {
  public:
    SharedTurboModule createTurboModule(Context ctx, const std::string &name) const override {
      if (name == "RTNSensors") {
        return std::make_shared<RTNSensorsTurboModule>(ctx, name);
      }
      return nullptr;
    }
};

namespace rnoh {
  class SensorsPackage : public Package {
    public:
      SensorsPackage(Package::Context ctx) : Package(ctx) {}
      std::unique_ptr<TurboModuleFactoryDelegate> createTurboModuleFactoryDelegate() override {
        return std::make_unique<NativeRTNSensorsFactoryDelegate>();
      }
  };
} // namespace rnoh
