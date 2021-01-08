import {DefaultCrudRepository} from '@loopback/repository';
import {GroupIden, GroupIdenRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class GroupIdenRepository extends DefaultCrudRepository<
  GroupIden,
  typeof GroupIden.prototype.groupId,
  GroupIdenRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(GroupIden, dataSource);
  }
}
