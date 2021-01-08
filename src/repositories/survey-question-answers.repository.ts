import {DefaultCrudRepository} from '@loopback/repository';
import {SurveyQuestionAnswers, SurveyQuestionAnswersRelations} from '../models';
import {CamsDsDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class SurveyQuestionAnswersRepository extends DefaultCrudRepository<
  SurveyQuestionAnswers,
  typeof SurveyQuestionAnswers.prototype.surveyQuestionAnswerId,
  SurveyQuestionAnswersRelations
> {
  constructor(
    @inject('datasources.camsDS') dataSource: CamsDsDataSource,
  ) {
    super(SurveyQuestionAnswers, dataSource);
  }
}
