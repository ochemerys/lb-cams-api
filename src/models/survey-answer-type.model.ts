import {Entity, model, property} from '@loopback/repository';

@model({
  settings: {idInjection: false, mysql: {schema: 'cams', table: 'survey_answer_type'}}
})
export class SurveyAnswerType extends Entity {
  @property({
    type: 'number',
    required: true,
    precision: 10,
    scale: 0,
    id: 1,
    mysql: {columnName: 'survey_answer_type_id', dataType: 'int', dataLength: null, dataPrecision: 10, dataScale: 0, nullable: 'N'},
  })
  surveyAnswerTypeId: number;

  @property({
    type: 'string',
    required: true,
    length: 50,
    mysql: {columnName: 'survey_answer_type_text', dataType: 'varchar', dataLength: 50, dataPrecision: null, dataScale: null, nullable: 'N'},
  })
  surveyAnswerTypeText: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<SurveyAnswerType>) {
    super(data);
  }
}

export interface SurveyAnswerTypeRelations {
  // describe navigational properties here
}

export type SurveyAnswerTypeWithRelations = SurveyAnswerType & SurveyAnswerTypeRelations;
