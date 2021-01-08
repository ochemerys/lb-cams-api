import {DefaultCrudRepository} from '@loopback/repository';
import {Survey, SurveyRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SurveyRepository extends DefaultCrudRepository<
  Survey,
  typeof Survey.prototype.surveyId,
  SurveyRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(Survey, dataSource);
  }
}
