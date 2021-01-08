import {DefaultCrudRepository} from '@loopback/repository';
import {Holiday, HolidayRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HolidayRepository extends DefaultCrudRepository<
  Holiday,
  typeof Holiday.prototype.holidayId,
  HolidayRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(Holiday, dataSource);
  }
}
