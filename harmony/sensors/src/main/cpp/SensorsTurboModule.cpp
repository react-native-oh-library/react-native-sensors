/*
 * MIT License
 *
 * Copyright (C) 2023 Huawei Device Co., Ltd.2023-2024.All rights reserved.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
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
