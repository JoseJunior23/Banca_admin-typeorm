import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm';

export class CreateTeamsEmployees1661818387913 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'teams_employees',
        columns: [
          { name: 'team_id', type: 'uuid' },
          { name: 'employee_id', type: 'uuid' },
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'teams_employees',
      new TableForeignKey({
        columnNames: ['team_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'teams',
        name: 'fk_teams_employees',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
      }),
    );
    await queryRunner.createForeignKey(
      'teams_employees',
      new TableForeignKey({
        columnNames: ['employee_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'employees',
        name: 'fk_employees_teams',
        onDelete: 'CASCADE',
        onUpdate: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('teams_employees', 'fk_teams_employees');
    await queryRunner.dropForeignKey('teams_employees', 'fk_employees_teams');
    await queryRunner.dropTable('teams_employees');
  }
}
