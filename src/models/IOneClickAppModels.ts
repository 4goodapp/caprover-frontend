import { IHashMapGeneric } from "./IHashMapGeneric";

export interface IOneClickAppIdentifier {
  name: string;
  url: string;
}

export interface IOneClickVariable {
  id: string;
  label: string;
  defaultValue?: string;
  validRegex?: string;
  description?: string;
}

export interface IDockerComposeService {
  image?: string;
  volumes?: string[];
  ports?: string[];
  environment?: IHashMapGeneric<string>;
  depends_on?: string[];

  // These are CapRover property, not DockerCompose. We use this instead of image if we need to extend the image.
  dockerfileLines?: string[];
  containerHttpPort: number;
  notExposeAsWebApp: boolean; // This is actually a string "true", make sure to double negate!
}

export interface IOneClickTemplate {
  captainVersion: number;
  documentation: string,
  displayName: string,
  logo: string,
  dockerCompose: {
    version: string;
    services: IHashMapGeneric<IDockerComposeService>;
  };
  instructions: {
    start: string;
    end: string;
  };
  variables: IOneClickVariable[];
}
