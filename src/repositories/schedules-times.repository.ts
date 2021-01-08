import {DefaultCrudRepository} from '@loopback/repository';
import {SchedulesTimes, SchedulesTimesRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SchedulesTimesRepository extends DefaultCrudRepository<
  SchedulesTimes,
  typeof SchedulesTimes.prototype.schedulesTimeId,
  SchedulesTimesRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(SchedulesTimes, dataSource);
  }
}
