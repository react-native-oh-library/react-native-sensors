import React from "react";
import RTNSensors from "./NativeSensors";
import { DeviceEventEmitter } from "react-native";
import { Observable } from "rxjs";
import { publish, refCount } from "rxjs/operators";
import RTNSensors from "./NativeSensors";

const listenerKeys = new Map([
  ["accelerometer", "accelerometerClick"],
  ["gyroscope", "gyroscopeClick"],
  ["magnetometer", "magnetometerClick"],
  ["barometer", "barometerClick"],
  ["orientation", "orientationClick"],
  ["gravity", "gravityClick"],
]);
const SensorType = {
  accelerometer: "accelerometer",
  gyroscope: "accelerometer",
  magnetometer: "accelerometer",
  barometer: "accelerometer",
  orientation: "accelerometer",
  gravity: "accelerometer",
};

const eventEmitterSubscription = new Map([
  ["accelerometer", null],
  ["gyroscope", null],
  ["magnetometer", null],
  ["barometer", null],
  ["orientation", null],
  ["gravity", null],
]);

function createSensorObservable(sensorType) {
  return Observable.create(function subscribe(observer) {
    this.isSensorAvailable = false;
    if (eventEmitterSubscription.get(sensorType)) {
      eventEmitterSubscription.get(sensorType).remove();
      RTNSensors.off(sensorType);
    }
    this.unsubscribeCallback = () => {
      if (!this.isSensorAvailable) return;
      if (eventEmitterSubscription.get(sensorType)) eventEmitterSubscription.get(sensorType).remove();
      RTNSensors.off(sensorType);
      RTNSensors.setUpdateInterval(sensorType, 0);
      RTNSensors.setLogLevel(sensorType, 0);
    };
    RTNSensors.isAvailable(SensorType).then((res) => {
      this.isSensorAvailable = true;
      if (!res) {
        observer.error(`Sensors${sensorType} is not available`);
        return;
      } else {
        switch (sensorType) {
          case "accelerometer":
            RTNSensors.accelerometer();
            break;
          case "gyroscope":
            RTNSensors.gyroscope();
            break;
          case "magnetometer":
            RTNSensors.magnetometer();
            break;
          case "barometer":
            RTNSensors.barometer();
            break;
          case "orientation":
            RTNSensors.orientation();
            break;
          case "gravity":
            RTNSensors.gravity();
            break;
          default:
        }
        eventEmitterSubscription.set(
          sensorType,
          DeviceEventEmitter.addListener(listenerKeys.get(sensorType), (date) => {
            observer.next(date);
          })
        );
      }
    });
    return this.unsubscribeCallback;
  }).pipe(makeSingleton);
}
function makeSingleton() {
  return (source) => source.pipe(publish(), refCount());
}
export const accelerometer = createSensorObservable("accelerometer");
export const gyroscope = createSensorObservable("gyroscope");
export const magnetometer = createSensorObservable("magnetometer");
export const barometer = createSensorObservable("barometer");
export const orientation = createSensorObservable("orientation");
export const gravity = createSensorObservable("gravity");
export function setUpdateIntervalForType(type, updateInterval) {
  RTNSensors.setUpdateInterval(type, updateInterval);
}
export function setLogLevelForType(sensorType, logLevel) {
  RTNSensors.setLogLevel(sensorType, logLevel);
}
