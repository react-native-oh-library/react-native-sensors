import { RNPackage, TurboModulesFactory, } from "@rnoh/react-native-openharmony/ts";
import type { TurboModule, TurboModuleContext, } from "@rnoh/react-native-openharmony/ts";
import { TM } from "@rnoh/react-native-openharmony/generated/ts";
import { SensorsModule } from './SensorsModule';

class SensorsModulesFactory extends TurboModulesFactory {
  createTurboModule(name: string): TurboModule | null {
    if (name === TM.RTNSensors.NAME) {
      return new SensorsModule(this.ctx)
    }
    return null;
  }

  hasTurboModule(name: string): boolean {
    return name === TM.RTNSensors.NAME;
  }
}

export class SensorsPackage extends RNPackage {
  createTurboModulesFactory(ctx: TurboModuleContext): TurboModulesFactory {
    return new SensorsModulesFactory(ctx);
  }
}
