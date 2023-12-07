// First without any code-names
export abstract class Module {
  // User provided name
  public readonly name: string;
  public readonly ports_number: number;
  public ports: { port_1: Port; port_2: Port };

  constructor(name: string) {
    this.name = name;
    this.ports_number = 2;
  }

  public connectTo(module: Module): boolean {
    // Just aliases for short
    const p1: Port = module.ports.port_1;
    const p2: Port = module.ports.port_2;

    if (!p1.in_use) {
      return p1.confirmConnection(this);
    }

    if (!p2.in_use) {
      return p2.confirmConnection(this);
    }

    // UP_1. Replace log to something more real
    console.log("All ports are used.");

    return false;
  }

  public disconnectFrom(module: Module): void {}
}

// NOTE: Private members are not included
export abstract class Port {
  // Port's name. Provided only by owner mobule
  public readonly code: string;
  public in_use: boolean;
  // Reference to owner module
  public owner: Module;
  // Reference to user module
  public client: Module;

  public confirmConnection(client_module: Module): boolean {
    this.in_use = true;
    this.client = client_module;

    // Cheat!
    return true;
  }

  constructor(owner: Module, code: string) {
    this.code = code;
    this.in_use = false;
    this.owner = owner;
  }
}

export type StorageAccessType = "public" | "private";

export abstract class ModuleStorage {
  public content: any;
  public readonly content_access: StorageAccessType;

  constructor(content: any, access: StorageAccessType) {
    this.content = content;
    this.content_access = access;
  }

  public getContent(): any {
    if (this.content_access === "public") {
      return this.content;
    } else {
      throw new Error(
        "Trying to access private contents of a module is forbidden."
      );
    }
  }
}

export class StorableModule extends Module {
  public store: ModuleStorage;

  constructor(name: string) {
    super(name);
  }
}
