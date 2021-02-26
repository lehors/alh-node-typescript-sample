import {Container} from 'typescript-ioc';

import {HelloWorldService} from '../../src/services';
import {ApiServer} from '../../src/server';
import {buildApiServer} from '../helper';

describe('Hello World service', () =>{

  let app: ApiServer;
  let service: HelloWorldService;
  beforeAll(() => {
    app = buildApiServer();

    service = Container.get(HelloWorldService);
  });

  test('canary test verifies test infrastructure', () => {
    expect(service).not.toBeUndefined();
  });

  describe('Given greeting()', () => {
    context('when "Juan" provided', () => {
      const name = 'Juan';
      test('then return "Hello there, Juan!!"', async () => {
        expect(await service.greeting(name)).toEqual(`Hello there, ${name}!!`);
      });
    });

    context('when no name provided', () => {
      test('then return "Hello there, World!!"', async () => {
        expect(await service.greeting()).toEqual('Hello there, World!!');
      });
    })
  });
});
