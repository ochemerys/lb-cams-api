import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'camsDS',
  connector: 'mysql',
  url: '', // mysql://dbuser:Vtech123@localhost/cams
  host: 'localhost',
  port: 3306,
  user: 'dbuser',
  password: 'Vtech123',
  database: 'cams'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class CamsDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'camsDS';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.camsDS', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
