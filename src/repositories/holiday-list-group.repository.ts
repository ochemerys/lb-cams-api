import {DefaultCrudRepository} from '@loopback/repository';
import {HolidayListGroup, HolidayListGroupRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class HolidayListGroupRepository extends DefaultCrudRepository<
  HolidayListGroup,
  typeof HolidayListGroup.prototype.holidayListGroupId,
  HolidayListGroupRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(HolidayListGroup, dataSource);
  }
}
