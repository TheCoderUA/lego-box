import { v4 as uuidv4 } from "uuid";

import * as types from "./module.js";

export default class PlainModule extends types.Module {
  // Just initializes ports
  constructor(name: string) {
    super(name);

    const port_one = new Port(this, "#4ef56", true);
    const port_two = new Port(this, "#7ef92", true);

    this.ports = {
      port_1: port_one,
      port_2: port_two,
    };
  }
}

class Port extends types.Port {
  constructor(module: types.Module, code: string, history_on: boolean = true) {
    super(module, code);
  }
}

class ModuleStorage extends types.ModuleStorage {
  constructor(content: any, access: types.StorageAccessType) {
    super(content, access);
  }
}

export class StorableModule extends PlainModule {
  public store: ModuleStorage;

  constructor(name: string) {
    super(name);
    this.store = new ModuleStorage("A warm greeting from module!", "public");
  }
}
