import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddEmployeeIdToTeamEmployees1659224605505 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'team_employees',
      new TableColumn({
        name: 'employee_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'team_employees',
      new TableForeignKey({
        name: 'fk_employee_team_employees',
        columnNames: ['employee_id'],
        referencedTableName: 'employees',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('team_employees', 'fk_employee_team_employees');
    await queryRunner.dropColumn('team_employees', 'employee_id');
  }
}
