export enum CMDArgs {
  NONE = 0,
  LOOP = 8,
}

export type StarterFunction = (cmd?: CMDArgs) => number;
