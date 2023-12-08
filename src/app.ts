import { StarterFunction, CMDArgs } from "./Abstract/@type.starter.js";
import Module, { StorableModule } from "./modules/index.js";

class Processor {
  private static instance_count: number = 0;

  constructor() {
    if (Processor.instance_count === 0) Processor.instance_count += 1;
    else throw new Error("Only single instance allowed.");
  }
}

export const start: StarterFunction = (args = CMDArgs.NONE): number => {
  // A module with nice quotation stored in
  const myStorableModule = new StorableModule("container");

  // Create another module to get contents of first module
  const module_b = new Module("consumer");

  const proc: Processor = new Processor();

  return 0;
};

start();
