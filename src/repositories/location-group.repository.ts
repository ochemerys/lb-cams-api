import {DefaultCrudRepository} from '@loopback/repository';
import {LocationGroup, LocationGroupRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LocationGroupRepository extends DefaultCrudRepository<
  LocationGroup,
  typeof LocationGroup.prototype.locationGroupId,
  LocationGroupRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(LocationGroup, dataSource);
  }
}
