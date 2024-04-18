import type { TurboModule } from "react-native/Libraries/TurboModule/RCTExport";
import { TurboModuleRegistry } from "react-native";

export interface Spec extends TurboModule {
  accelerometer(): void;
  gyroscope(): void;
  magnetometer(): void;
  barometer(): void;
  orientation(): void;
  gravity(): void;
  off(sensorType): void;
  setUpdateInterval(sensorType, updateInterval): void;
  isAvailable(sensorType): Promise<boolean>;
  setLogLevel(sensorType, logLevel): void;
}
export default TurboModuleRegistry.get<Spec>("RTNSensors") as Spec | null;
