import {DefaultCrudRepository} from '@loopback/repository';
import {SurveyAnswerType, SurveyAnswerTypeRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SurveyAnswerTypeRepository extends DefaultCrudRepository<
  SurveyAnswerType,
  typeof SurveyAnswerType.prototype.surveyAnswerTypeId,
  SurveyAnswerTypeRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(SurveyAnswerType, dataSource);
  }
}
