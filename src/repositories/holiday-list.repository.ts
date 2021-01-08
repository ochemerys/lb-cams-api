import {DefaultCrudRepository} from '@loopback/repository';
import {HolidayList, HolidayListRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HolidayListRepository extends DefaultCrudRepository<
  HolidayList,
  typeof HolidayList.prototype.holidayListId,
  HolidayListRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(HolidayList, dataSource);
  }
}
