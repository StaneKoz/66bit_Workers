import { makeAutoObservable } from "mobx";

export class NestingPath {
  path: Map<number, string> = new Map();

  constructor() {
    makeAutoObservable(this)
  }

  set(key: number, value: string) {
    this.path.set(key, value);
  }

  filter(predicate: (key: number, value: string) => boolean) {
    for (let [key, value] of this.path) {
      if (!predicate(key, value)) {
        this.path.delete(key)
      }
    }
  }

  length() {
    return this.path.size;
  }
}
