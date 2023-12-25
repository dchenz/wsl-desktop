export namespace app {
  export class Container {
    id: string;
    name: string;

    static createFrom(source: any = {}) {
      return new Container(source);
    }

    constructor(source: any = {}) {
      if ("string" === typeof source) source = JSON.parse(source);
      this.id = source["id"];
      this.name = source["name"];
    }
  }
  export class CreateDistroFromContainerRequest {
    distroName: string;
    distroPath: string;
    containerId: string;

    static createFrom(source: any = {}) {
      return new CreateDistroFromContainerRequest(source);
    }

    constructor(source: any = {}) {
      if ("string" === typeof source) source = JSON.parse(source);
      this.distroName = source["distroName"];
      this.distroPath = source["distroPath"];
      this.containerId = source["containerId"];
    }
  }
  export class CreateDistroFromImageRequest {
    distroName: string;
    repository: string;
    tag: string;

    static createFrom(source: any = {}) {
      return new CreateDistroFromImageRequest(source);
    }

    constructor(source: any = {}) {
      if ("string" === typeof source) source = JSON.parse(source);
      this.distroName = source["distroName"];
      this.repository = source["repository"];
      this.tag = source["tag"];
    }
  }
  export class CreateDistroFromTarFileRequest {
    distroName: string;
    distroPath: string;
    path: string;

    static createFrom(source: any = {}) {
      return new CreateDistroFromTarFileRequest(source);
    }

    constructor(source: any = {}) {
      if ("string" === typeof source) source = JSON.parse(source);
      this.distroName = source["distroName"];
      this.distroPath = source["distroPath"];
      this.path = source["path"];
    }
  }
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
