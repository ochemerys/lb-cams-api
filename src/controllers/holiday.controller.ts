import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Holiday} from '../models';
import {HolidayRepository} from '../repositories';

export class HolidayController {
  constructor(
    @repository(HolidayRepository)
    public holidayRepository : HolidayRepository,
  ) {}

  @post('/holidays', {
    responses: {
      '200': {
        description: 'Holiday model instance',
        content: {'application/json': {schema: getModelSchemaRef(Holiday)}},
      },
    },
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holiday, {
            title: 'NewHoliday',
            exclude: ['holidayId'],
          }),
        },
      },
    })
    holiday: Omit<Holiday, 'holidayId'>,
  ): Promise<Holiday> {
    return this.holidayRepository.create(holiday);
  }

  @get('/holidays/count', {
    responses: {
      '200': {
        description: 'Holiday model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.where(Holiday) where?: Where<Holiday>,
  ): Promise<Count> {
    return this.holidayRepository.count(where);
  }

  @get('/holidays', {
    responses: {
      '200': {
        description: 'Array of Holiday model instances',
        content: {
          'application/json': {
            schema: {
              type: 'array',
              items: getModelSchemaRef(Holiday, {includeRelations: true}),
            },
          },
        },
      },
    },
  })
  async find(
    @param.filter(Holiday) filter?: Filter<Holiday>,
  ): Promise<Holiday[]> {
    return this.holidayRepository.find(filter);
  }

  @patch('/holidays', {
    responses: {
      '200': {
        description: 'Holiday PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holiday, {partial: true}),
        },
      },
    })
    holiday: Holiday,
    @param.where(Holiday) where?: Where<Holiday>,
  ): Promise<Count> {
    return this.holidayRepository.updateAll(holiday, where);
  }

  @get('/holidays/{id}', {
    responses: {
      '200': {
        description: 'Holiday model instance',
        content: {
          'application/json': {
            schema: getModelSchemaRef(Holiday, {includeRelations: true}),
          },
        },
      },
    },
  })
  async findById(
    @param.path.number('id') id: number,
    @param.filter(Holiday, {exclude: 'where'}) filter?: FilterExcludingWhere<Holiday>
  ): Promise<Holiday> {
    return this.holidayRepository.findById(id, filter);
  }

  @patch('/holidays/{id}', {
    responses: {
      '204': {
        description: 'Holiday PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Holiday, {partial: true}),
        },
      },
    })
    holiday: Holiday,
  ): Promise<void> {
    await this.holidayRepository.updateById(id, holiday);
  }

  @put('/holidays/{id}', {
    responses: {
      '204': {
        description: 'Holiday PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() holiday: Holiday,
  ): Promise<void> {
    await this.holidayRepository.replaceById(id, holiday);
  }

  @del('/holidays/{id}', {
    responses: {
      '204': {
        description: 'Holiday DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.holidayRepository.deleteById(id);
  }
}
