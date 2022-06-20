import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateEmployeeTeams1647303210741 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'employee_teams',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
            generationStrategy: 'uuid',
            default: 'uuid_generate_v4()',
          },
          {
            name: 'employee_id',
            type: 'uuid',
          },
          {
            name: 'team_id',
            type: 'uuid',
          },
          {
            name: 'created_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
          {
            name: 'updated_at',
            type: 'timestamp with time zone',
            default: 'now()',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_employee_team',
            referencedTableName: 'employees',
            referencedColumnNames: ['id'],
            columnNames: ['employee_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
          {
            name: 'fk_team_employee',
            referencedTableName: 'teams',
            referencedColumnNames: ['id'],
            columnNames: ['team_id'],
            onDelete: 'CASCADE',
            onUpdate: 'CASCADE',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('employee_teams');
  }
}
