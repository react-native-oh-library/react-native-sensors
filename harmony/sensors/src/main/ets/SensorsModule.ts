import { TurboModule, RNOHLogger, TurboModuleContext } from '@rnoh/react-native-openharmony/ts';
import { TM } from "@rnoh/react-native-openharmony/generated/ts"
import sensor from "@ohos.sensor";
import BusinessError from "@ohos.base";


export class SensorsModule extends TurboModule implements TM.RTNSensors.Spec {
  private logger: RNOHLogger;
  private sensorsInterval = new Map<string, number>([
    ["accelerometer", 0],
    ["gyroscope", 0],
    ["magnetometer", 0],
    ["barometer", 0],
    ["orientation", 0],
    ["gravity", 0],
  ])
  private sensorsId = new Map<string, sensor.SensorId>([
    ["accelerometer", sensor.SensorId.ACCELEROMETER],
    ["gyroscope", sensor.SensorId.GYROSCOPE],
    ["magnetometer", sensor.SensorId.MAGNETIC_FIELD],
    ["barometer", sensor.SensorId.BAROMETER],
    ["orientation", sensor.SensorId.ORIENTATION],
    ["gravity", sensor.SensorId.GRAVITY],
  ])
  private sensorsLogLevel = new Map<string, number>([
    ["accelerometer", 0],
    ["gyroscope", 0],
    ["magnetometer", 0],
    ["barometer", 0],
    ["orientation", 0],
    ["gravity", 0],
  ])

  constructor(ctx: TurboModuleContext) {
    super(ctx);
    this.logger = ctx.logger.clone("Sensors");
  }

  setLogLevel(sensorsType: string, level: number) {
    this.sensorsLogLevel.set(
      sensorsType,
      level
    )
  }

  accelerometer(interval: number): void {
    try {
      interval = this.sensorsInterval.get('accelerometer')!;
      const logLevel: number = this.sensorsLogLevel.get('accelerometer')!;
      sensor.on(sensor.SensorId.ACCELEROMETER, (data: sensor.AccelerometerResponse) => {
        if (logLevel > 0) {
          this.logger.clone('accelerometer').info(`accelerometer onCreate`)
        }
        if (logLevel > 1) {
          this.logger.clone('accelerometer').info(`accelerometer onCreate ${JSON.stringify({
            x: data?.x,
            y: data?.y,
            z: data?.z,
            timestamp: data?.timestamp
          })}`)
        }
        this.ctx.rnInstance.emitDeviceEvent('accelerometerClick', {
          x: data?.x,
          y: data?.y,
          z: data?.z,
          timestamp: data?.timestamp
        });
      }, { interval: interval });
    } catch (error) {
      let e: BusinessError.BusinessError = error as BusinessError.BusinessError;
      this.logger.clone('accelerometer').error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
    }
  }

  gyroscope(interval: number): void {
    try {
      interval = this.sensorsInterval.get('gyroscope')!;
      const logLevel: number = this.sensorsLogLevel.get('gyroscope')!;
      sensor.on(sensor.SensorId.GYROSCOPE, (data: sensor.GyroscopeResponse) => {
        if (logLevel > 0) {
          this.logger.clone('gyroscope').info(`gyroscope onCreate`)
        }
        if (logLevel > 1) {
          this.logger.clone('gyroscope').info(`gyroscope onCreate ${JSON.stringify({
            x: data?.x,
            y: data?.y,
            z: data?.z,
            timestamp: data?.timestamp
          })}`)
        }
        this.ctx.rnInstance.emitDeviceEvent('gyroscopeClick', {
          x: data?.x,
          y: data?.y,
          z: data?.z,
          timestamp: data?.timestamp
        });
      }, { interval: interval });
    } catch (error) {
      let e: BusinessError.BusinessError = error as BusinessError.BusinessError;
      this.logger.clone('gyroscope').error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
    }
  }

  magnetometer(interval: number): void {
    try {
      interval = this.sensorsInterval.get('magnetometer')!;
      const logLevel: number = this.sensorsLogLevel.get('magnetometer')!;
      sensor.on(sensor.SensorId.MAGNETIC_FIELD, (data: sensor.MagneticFieldResponse) => {
        if (logLevel > 0) {
          this.logger.clone('magnetometer').info(`magnetometer onCreate`)
        }
        if (logLevel > 1) {
          this.logger.clone('magnetometer').info(`magnetometer onCreate ${JSON.stringify({
            x: data?.x,
            y: data?.y,
            z: data?.z,
            timestamp: data?.timestamp
          })}`)
        }
        this.ctx.rnInstance.emitDeviceEvent('magnetometerClick', {
          x: data?.x,
          y: data?.y,
          z: data?.z,
          timestamp: data?.timestamp
        });
      }, { interval: interval });
    } catch (error) {
      let e: BusinessError.BusinessError = error as BusinessError.BusinessError;
      this.logger.clone('magnetometer').error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
    }
  }

  barometer(interval: number): void {
    try {
      interval = this.sensorsInterval.get('barometer')!;
      const logLevel: number = this.sensorsLogLevel.get('barometer')!;
      sensor.on(sensor.SensorId.BAROMETER, (data: sensor.BarometerResponse) => {
        if (logLevel > 0) {
          this.logger.clone('barometer').info(`barometer onCreate`)
        }
        if (logLevel > 1) {
          this.logger.clone('barometer').info(`barometer onCreate ${JSON.stringify({
            pressure: data?.pressure
          })}`)
        }
        this.ctx.rnInstance.emitDeviceEvent('barometerClick', {
          pressure: data?.pressure
        });
      }, { interval: interval });
    } catch (error) {
      let e: BusinessError.BusinessError = error as BusinessError.BusinessError;
      this.logger.clone('barometer').error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
    }
  }

  orientation(interval: number): void {
    try {
      interval = this.sensorsInterval.get('orientation')!;
      const logLevel: number = this.sensorsLogLevel.get('orientation')!;
      sensor.on(sensor.SensorId.ORIENTATION, (data: sensor.OrientationResponse) => {
        if (logLevel > 0) {
          this.logger.clone('orientation').info(`orientation onCreate`)
        }
        if (logLevel > 1) {
          this.logger.clone('orientation').info(`orientation onCreate ${JSON.stringify({
            x: data?.beta,
            y: data?.gamma,
            z: data?.alpha,
            timestamp: data?.timestamp
          })}`)
        }
        this.ctx.rnInstance.emitDeviceEvent('orientationClick', {
          x: data?.beta,
          y: data?.gamma,
          z: data?.alpha,
          timestamp: data?.timestamp
        });
      }, { interval: interval });
    } catch (error) {
      let e: BusinessError.BusinessError = error as BusinessError.BusinessError;
      this.logger.clone('orientation').error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
    }
  }

  gravity(interval: number): void {
    try {
      interval = this.sensorsInterval.get('gravity')!;
      const logLevel: number = this.sensorsLogLevel.get('gravity')!;
      sensor.on(sensor.SensorId.GRAVITY, (data: sensor.GravityResponse) => {
        if (logLevel > 0) {
          this.logger.clone('gravity').info(`gravity onCreate`)
        }
        if (logLevel > 1) {
          this.logger.clone('gravity').info(`gravity onCreate ${JSON.stringify({
            x: data?.x,
            y: data?.y,
            z: data?.z,
            timestamp: data?.timestamp
          })}`)
        }
        this.ctx.rnInstance.emitDeviceEvent('gravityClick', {
          x: data?.x,
          y: data?.y,
          z: data?.z,
          timestamp: data?.timestamp
        });
      }, { interval: interval });
    } catch (error) {
      let e: BusinessError.BusinessError = error as BusinessError.BusinessError;
      this.logger.clone('gravity').error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
    }
  }

  off(SensorsType: string): void {
    try {
      // const sensorsId: number = this.sensorsId.get(SensorsType);
      // sensor.off(sensorsId);
      switch (SensorsType) {
        case 'accelerometer':
          sensor.off(sensor.SensorId.ACCELEROMETER);
          break;
        case 'gyroscope':
          sensor.off(sensor.SensorId.GYROSCOPE);
          break;
        case 'magnetometer':
          sensor.off(sensor.SensorId.MAGNETIC_FIELD);
          break;
        case 'barometer':
          sensor.off(sensor.SensorId.BAROMETER);
          break;
        case 'orientation':
          sensor.off(sensor.SensorId.ORIENTATION);
          break;
        case 'gravity':
          sensor.off(sensor.SensorId.GRAVITY);
          break;
        default:
      }
    } catch (error) {
      let e: BusinessError.BusinessError = error as BusinessError.BusinessError;
      this.logger.clone(`${SensorsType} off}`).error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
    }
  }

  setUpdateInterval(type: string, updateInterval: number): void {
    updateInterval = updateInterval * 1000000;
    this.sensorsInterval.set(
      type,
      updateInterval
    )
  }

  async isAvailable(SensorType: string): Promise<boolean> {
    try {
      const sensorsTypeId: sensor.SensorId = this.sensorsId.get(SensorType);
      const sensorsTypeDetails: sensor.Sensor = await sensor.getSingleSensor(sensorsTypeId);
      return new Promise((resolve) => resolve(!!sensorsTypeDetails?.sensorId))
    } catch (error) {
      let e: BusinessError.BusinessError = error as BusinessError.BusinessError;
      this.logger.clone(`${SensorType} isAvailable}`)
        .error(`Failed to invoke on. Code: ${e.code}, message: ${e.message}`);
      return new Promise((resolve) => resolve(false))
    }
  }
}
