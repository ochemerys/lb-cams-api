import {DefaultCrudRepository} from '@loopback/repository';
import {SurveyQuestion, SurveyQuestionRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SurveyQuestionRepository extends DefaultCrudRepository<
  SurveyQuestion,
  typeof SurveyQuestion.prototype.surveyQuestionId,
  SurveyQuestionRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(SurveyQuestion, dataSource);
  }
}
