import {DefaultCrudRepository} from '@loopback/repository';
import {SurveyCompanyLocation, SurveyCompanyLocationRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SurveyCompanyLocationRepository extends DefaultCrudRepository<
  SurveyCompanyLocation,
  typeof SurveyCompanyLocation.prototype.surveyCompanyLocationId,
  SurveyCompanyLocationRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(SurveyCompanyLocation, dataSource);
  }
}
