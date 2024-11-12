import { Command, ConsoleIO, Storage } from '@intentjs/core';

@Command('test:storage')
export class TestStorageConsoleCommand {
  async handle(_cli: ConsoleIO): Promise<boolean> {
    _cli.info('Testing the storage');
    const strValue = 'Sample Text!';

    const disks = ['local', 's3'];
    for (const disk of disks) {
      _cli.info(`Testing integration for ${disk} storage`);
      /**
       * Set different values
       */
      await Storage.disk(disk).put('sample.txt', Buffer.from(strValue));

      /**
       * Get values
       */
      const valueFromDiskBuffer = await Storage.disk(disk).get('sample.txt');
      const valueFromDiskStr = valueFromDiskBuffer.toString();

      console.log(valueFromDiskStr);
    }

    return true;
  }
}
