#include "SensorsTurboModule.h"
#include "RNOH/ArkTSTurboModule.h"

using namespace rnoh;
using namespace facebook;

static jsi::Value __hostFunction_RTNSensorsTurboModule_accelerometer(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).call(rt, "accelerometer", args, count);
}
static jsi::Value __hostFunction_RTNSensorsTurboModule_gyroscope(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).call(rt, "gyroscope", args, count);
}
static jsi::Value __hostFunction_RTNSensorsTurboModule_magnetometer(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).call(rt, "magnetometer", args, count);
}
static jsi::Value __hostFunction_RTNSensorsTurboModule_barometer(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).call(rt, "barometer", args, count);
}
static jsi::Value __hostFunction_RTNSensorsTurboModule_orientation(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).call(rt, "orientation", args, count);
}
static jsi::Value __hostFunction_RTNSensorsTurboModule_gravity(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).call(rt, "gravity", args, count);
}
static jsi::Value __hostFunction_RTNSensorsTurboModule_off(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).call(rt, "off", args, count);
}
static jsi::Value __hostFunction_RTNSensorsTurboModule_setUpdateInterval(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).call(rt, "setUpdateInterval", args, count);
}
static jsi::Value __hostFunction_RTNSensorsTurboModule_isAvailable(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).callAsync(rt, "isAvailable", args, count);
}
static jsi::Value __hostFunction_RTNSensorsTurboModule_setLogLevel(jsi::Runtime &rt,react::TurboModule &turboModule, const jsi::Value *args, size_t count) {
  return static_cast<ArkTSTurboModule &>(turboModule).call(rt, "setLogLevel", args, count);
}

RTNSensorsTurboModule::RTNSensorsTurboModule(const ArkTSTurboModule::Context ctx, const std::string name) : ArkTSTurboModule(ctx, name) {
  methodMap_["accelerometer"] = MethodMetadata{0, __hostFunction_RTNSensorsTurboModule_accelerometer};
  methodMap_["gyroscope"] = MethodMetadata{0, __hostFunction_RTNSensorsTurboModule_gyroscope};
  methodMap_["magnetometer"] = MethodMetadata{0, __hostFunction_RTNSensorsTurboModule_magnetometer};
  methodMap_["barometer"] = MethodMetadata{0, __hostFunction_RTNSensorsTurboModule_barometer};
  methodMap_["orientation"] = MethodMetadata{0, __hostFunction_RTNSensorsTurboModule_orientation};
  methodMap_["gravity"] = MethodMetadata{0, __hostFunction_RTNSensorsTurboModule_gravity};
  methodMap_["off"] = MethodMetadata{1, __hostFunction_RTNSensorsTurboModule_off};
  methodMap_["setUpdateInterval"] = MethodMetadata{2, __hostFunction_RTNSensorsTurboModule_setUpdateInterval};
  methodMap_["isAvailable"] = MethodMetadata{1, __hostFunction_RTNSensorsTurboModule_isAvailable};
  methodMap_["setLogLevel"] = MethodMetadata{1, __hostFunction_RTNSensorsTurboModule_setLogLevel};
}
