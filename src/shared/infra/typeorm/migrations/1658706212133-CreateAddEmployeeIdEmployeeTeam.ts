import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class CreateAddEmployeeIdEmployeeTeam1658706212133 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'employee_teams',
      new TableColumn({
        name: 'employee_id',
        type: 'uuid',
        isNullable: true,
      }),
    );

    await queryRunner.createForeignKey(
      'employee_teams',
      new TableForeignKey({
        name: 'fk_employee_teams_employees',
        columnNames: ['employee_id'],
        referencedTableName: 'employees',
        referencedColumnNames: ['id'],
        onDelete: 'SET NULL',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('employee_teams', 'fk_employee_teams_employees');
    await queryRunner.dropColumn('employees_teams', 'employee_id');
  }
}
