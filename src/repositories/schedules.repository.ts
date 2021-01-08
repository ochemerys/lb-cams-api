import {DefaultCrudRepository} from '@loopback/repository';
import {Schedules, SchedulesRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SchedulesRepository extends DefaultCrudRepository<
  Schedules,
  typeof Schedules.prototype.schedulesId,
  SchedulesRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(Schedules, dataSource);
  }
}
