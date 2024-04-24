import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  accelerometer(interval?: number): void;
  gyroscope(interval?: number): void;
  magnetometer(interval?: number): void;
  barometer(interval?: number): void;
  orientation(interval?: number): void;
  gravity(interval?: number): void;
  off(sensorType: string): void;
  setUpdateInterval(sensorType: string, updateInterval: number): void;
  isAvailable(sensorType: string): Promise<boolean>;
  setLogLevel(sensorType: string, logLevel: number): void;
}
export default TurboModuleRegistry.get<Spec>("RTNSensors") as Spec | null;
