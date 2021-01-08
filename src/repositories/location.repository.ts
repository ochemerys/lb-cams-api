import {DefaultCrudRepository} from '@loopback/repository';
import {Location, LocationRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class LocationRepository extends DefaultCrudRepository<
  Location,
  typeof Location.prototype.locationId,
  LocationRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(Location, dataSource);
  }
}
