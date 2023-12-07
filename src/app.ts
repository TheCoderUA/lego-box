import { StarterFunction, CMDArgs } from "./Abstract/starter.js";
import Module, { StorableModule } from "./modules/index.js";

const start: StarterFunction = (args = CMDArgs.NONE): number => {
  // A module with nice quotation stored in
  const myStorableModule = new StorableModule("container");

  // Create another module to get contents of first module
  const module_b = new Module("consumer");

  return 0;
};

start();
