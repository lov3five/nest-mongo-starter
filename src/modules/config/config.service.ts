import * as fs from 'node:fs';

import * as dotenv from 'dotenv';

export class ConfigService {
  // Define a property to hold the parsed .env file data
  private readonly envConfig: Record<string, string>;

  // Constructor to read and parse the .env file
  constructor(filePath: string) {
    // Read the .env file
    this.envConfig = dotenv.parse(fs.readFileSync(filePath));
  }

  // Get a value from the .env file
  get(key: string): string {
    return this.envConfig[key];
  }

  // Check if the current environment is the same as the provided environment. Exp: isEnv('dev') || isEnv('prod')
  isEnv(env: string): boolean {
    return this.envConfig.APP_ENV === env;
  }
}
