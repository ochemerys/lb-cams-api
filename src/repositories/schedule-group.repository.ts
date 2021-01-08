import {DefaultCrudRepository} from '@loopback/repository';
import {ScheduleGroup, ScheduleGroupRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ScheduleGroupRepository extends DefaultCrudRepository<
  ScheduleGroup,
  typeof ScheduleGroup.prototype.scheduleGroupId,
  ScheduleGroupRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(ScheduleGroup, dataSource);
  }
}
