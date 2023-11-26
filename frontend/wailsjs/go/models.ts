export namespace main {
  export class Distro {
    id: string;
    name: string;
    state: string;

    static createFrom(source: any = {}) {
      return new Distro(source);
    }

    constructor(source: any = {}) {
      if ("string" === typeof source) source = JSON.parse(source);
      this.id = source["id"];
      this.name = source["name"];
      this.state = source["state"];
    }
  }
}
